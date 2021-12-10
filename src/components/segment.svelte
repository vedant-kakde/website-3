<script lang="ts" context="module">
  declare global {
    interface Window {
      analytics: any;
      doNotTrack: any;
      referrer?: string;
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  interface TrackWebsiteClick {
    path: string;
    url: string;
    context?: string;
    position?: string;
    variant?: string;
    label?: string;
    destination?: string;
  }

  const implicitPositions = ["nav", "footer", "main"];

  const handleButtonOrAnchorTracking = (props: MouseEvent) => {
    var curr = props.target as HTMLElement;
    //check if current target or any ancestor up to document is button or anchor
    while (
      curr.parentNode != undefined &&
      !(curr.parentNode instanceof Document)
    ) {
      if (
        curr instanceof HTMLButtonElement ||
        curr instanceof HTMLAnchorElement ||
        (curr instanceof HTMLDivElement && curr.onclick) ||
        (curr instanceof HTMLDetailsElement && !curr.open)
      ) {
        trackButtonOrAnchor(curr);
        break; //finding first ancestor is sufficient
      }
      curr = curr.parentNode as HTMLElement;
    }
  };

  const trackButtonOrAnchor = (
    target:
      | HTMLAnchorElement
      | HTMLButtonElement
      | HTMLDivElement
      | HTMLDetailsElement
  ) => {
    //read manually passed analytics props from 'data-analytics' attribute of event target
    let passedProps: TrackWebsiteClick | undefined;
    if (target.dataset.analytics) {
      try {
        passedProps = JSON.parse(target.dataset.analytics) as TrackWebsiteClick;
      } catch (error) {
        console.error(error);
      }
    }

    let trackingMsg: TrackWebsiteClick = {
      path: window.location.pathname,
      url: window.location.href,
      label: target.innerText || target.ariaLabel,
    };

    //assign style of button to variant (e.g. if class contains "btn-primary", "btn-primary" will be passed)
    for (var i = 0; i < target.classList.length; i++) {
      const item = target.classList[i];
      if (/btn-.*/.test(item)) {
        trackingMsg.variant = item;
        break;
      }
    }

    if (target instanceof HTMLDetailsElement) {
      trackingMsg.variant = "open_details";
    }

    if (target instanceof HTMLAnchorElement) {
      const anchor = target as HTMLAnchorElement;
      trackingMsg.destination = anchor.href;
      //an anchor tag that is not styled as button will be classified as "link" variant
      trackingMsg.variant = trackingMsg.variant || "link";
    }

    const getAncestorProps = (
      curr: HTMLElement | null
    ): TrackWebsiteClick | undefined => {
      const curr_tag = curr.tagName?.toLowerCase();
      if (!curr || curr_tag == "body") {
        return;
      }
      const ancestorProps: TrackWebsiteClick | undefined = getAncestorProps(
        curr.parentElement
      );
      const currProps = JSON.parse(
        curr.dataset.analytics || "{}"
      ) as TrackWebsiteClick;
      //set position in trackingMsg if it can be read from ancestor prop
      if (implicitPositions.includes(curr_tag)) {
        trackingMsg.position = curr_tag;
      }
      return { ...ancestorProps, ...currProps };
    };

    const ancestorProps = getAncestorProps(target);

    //props that were passed directly to the event target take precedence over those passed to ancestor elements, which take precedence over those implicitly determined.
    trackingMsg = { ...trackingMsg, ...ancestorProps, ...passedProps };

    window.analytics.track("website_clicked", trackingMsg);
  };

  const writeKey =
    typeof window !== "undefined" &&
    window.location.hostname === "www.gitpod.io"
      ? "5aJzy2ASNbqx8I0kwppRflDZpL7pS1GO" // Website Production
      : "Xe5zR3MbnyxHsveZr4HvrY35PL9iT0EH"; // Website Staging

  const isDoNotTrack = () =>
    typeof navigator !== "undefined" &&
    (parseInt(navigator.doNotTrack) === 1 ||
      parseInt(window.doNotTrack) === 1 ||
      // @ts-ignore
      parseInt(navigator.msDoNotTrack) === 1 ||
      navigator.doNotTrack === "yes");

  onMount(async () => {
    // Create a queue, but don't obliterate an existing one!
    var analytics = (window.analytics = window.analytics || []);
    // If the real analytics.js is already on the page return.
    if (analytics.initialize) return;
    // If the snippet was invoked already show an error.
    if (analytics.invoked) {
      if (window.console && console.error) {
        console.error("Segment snippet included twice.");
      }
      return;
    }
    // Invoked flag, to make sure the snippet
    // is never invoked twice.
    analytics.invoked = true;
    // A list of the methods in Analytics.js to stub.
    analytics.methods = [
      "trackSubmit",
      "trackClick",
      "trackLink",
      "trackForm",
      "pageview",
      "identify",
      "reset",
      "group",
      "track",
      "ready",
      "alias",
      "debug",
      "page",
      "once",
      "off",
      "on",
      "addSourceMiddleware",
      "addIntegrationMiddleware",
      "setAnonymousId",
      "addDestinationMiddleware",
    ];
    // Define a factory to create stubs. These are placeholders
    // for methods in Analytics.js so that you never have to wait
    // for it to load to actually record data. The `method` is
    // stored as the first argument, so we can replay the data.
    analytics.factory = function (method: any) {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        analytics.push(args);
        return analytics;
      };
    };
    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < analytics.methods.length; i++) {
      var key = analytics.methods[i];
      analytics[key] = analytics.factory(key);
    }
    // Define a method to load Analytics.js from our CDN,
    // and that will be sure to only ever load it once.
    analytics.load = function (key: string, options: any) {
      // Create an async script element based on your key.
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
      // Insert our script next to the first script element.
      var first = document.getElementsByTagName("script")[0];
      first.parentNode.insertBefore(script, first);
      analytics._loadOptions = options;
    };
    analytics._writeKey = writeKey;
    // Add a version to keep track of what's in the wild.
    analytics.SNIPPET_VERSION = "4.13.2";

    if (isDoNotTrack()) {
      analytics.initialize = true;
      // All tracking calls will only trigger a stub.
    } else {
      // Load Analytics.js with your key, which will automatically
      // load the tools you've enabled for your account. Boosh!
      analytics.load(writeKey);
    }

    // Track first page
    analytics.page();
    window.referrer = window.location.href;
    window.addEventListener("click", handleButtonOrAnchorTracking, true);
  });

  $: if ($page.path) {
    // We need to depend on $page.path to trigger
    // a recompute on each new page.
    if (typeof window !== "undefined") {
      // Track subsequent pages
      const page = {
        path: window.location.pathname,
        referrer: window.referrer,
        search: window.location.search,
        title: document.title,
        url: window.location.href,
      };
      window.analytics?.page({
        context: { page: page },
        ...page,
      });
      window.referrer = window.location.href;
    }
  }
</script>
