<script>
  import FooterLink from "./link.svelte";
  import Section from "./section.svelte";

  const socialLinks = [
    {
      href: "https://twitter.com/gitpod",
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
      trackingName: "twitter",
    },
    {
      href: "https://github.com/gitpod-io",
      alt: "GitHub",
      icon: "/svg/brands/github.svg",
      trackingName: "github",
    },
    {
      href: "https://www.gitpod.io/chat",
      alt: "Discord",
      icon: "/svg/brands/discord.svg",
      trackingName: "discord",
    },
  ];
</script>

<div class="pb-8 bg-gray-100 text-p-footer" data-id="footer">
  <footer
    class="py-large m-auto px-xx-small md:max-w-4xl md:py-small md:px-xx-small"
  >
    <div class="flex justify-between flex-wrap pb-micro md:pb-small">
      <Section title="Gitpod">
        <li><FooterLink href="/">Home</FooterLink></li>
        <li><FooterLink href="/pricing">Pricing</FooterLink></li>
        <li><FooterLink href="/changelog">Changelog</FooterLink></li>
        <li><FooterLink href="/self-hosted">Self-Hosted</FooterLink></li>
        <li>
          <FooterLink href="/for/startups" class="flex items-center"
            >Gitpod for Startups</FooterLink
          >
        </li>
        <li>
          <FooterLink href="/gitpod-vs-github-codespaces"
            >Gitpod vs GitHub <br />Codespaces
          </FooterLink>
        </li>
        <li>
          <FooterLink href="/vs/local-development"
            >Gitpod vs Local <br />Development
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://www.gitpodstatus.com/"
            target="_blank"
            on:click={() =>
              window.analytics.track("external_resource_clicked", {
                context: "footer",
                name: "status",
                url: "https://www.gitpodstatus.com/",
              })}
            rel="noopener">Status</FooterLink
          >
        </li>
      </Section>
      <Section title="Developer">
        <li><FooterLink href="/#get-started">Getting started</FooterLink></li>
        <li><FooterLink href="/screencasts">Screencasts</FooterLink></li>
        <li><FooterLink href="/blog">Blog</FooterLink></li>
        <li><FooterLink href="/docs">Documentation</FooterLink></li>
        <li><FooterLink href="/support">Support</FooterLink></li>
        <!-- <li><FooterLink href="/guides">Guides</FooterLink></li> -->
        <li>
          <FooterLink
            href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md"
            target="_blank"
            rel="noopener"
            on:click={() =>
              window.analytics.track("external_resource_clicked", {
                context: "footer",
                name: "bug-report",
                url: "https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md",
              })}>Report a bug</FooterLink
          >
        </li>
        <li><FooterLink href="/community">Community</FooterLink></li>
      </Section>
      <Section title="Company">
        <li><FooterLink href="/about">About</FooterLink></li>
        <li>
          <FooterLink
            href="https://www.gitpod.io/careers"
            target="_blank"
            class="highlighted">Careers</FooterLink
          >
        </li>
        <li><FooterLink href="/contact">Contact</FooterLink></li>
        <li><FooterLink href="/media-kit">Media Kit</FooterLink></li>
        <li><FooterLink href="/security">Security</FooterLink></li>
      </Section>
      <Section title="Legal">
        <li><FooterLink href="/imprint">Imprint</FooterLink></li>
        <li>
          <FooterLink href="/terms">Terms of Service</FooterLink>
        </li>
        <li>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </li>
      </Section>
    </div>

    <div
      class="flex flex-col-reverse items-center justify-between border-t border-solid border-sand-dark pt-xx-small md:flex-row md:pt-x-small"
    >
      <div class="mt-micro flex items-center md:mt-0">
        <FooterLink href="/"
          ><div class="relative -top-px z-0">
            <img
              src="/svg/logo-textless.svg"
              alt="Gitpod"
              height="24"
              width="24"
            />
          </div></FooterLink
        ><span class="ml-macro"
          >Copyright &copy; {new Date().getFullYear()} Gitpod</span
        >
      </div>
      <div class="flex space-x-micro">
        {#each socialLinks as link}
          <FooterLink
            href={link.href}
            target="_blank"
            on:click={() =>
              window.analytics.track("social_opened", {
                context: "footer-logo",
                platform: link.trackingName,
              })}
            class="hover:opacity-80"
          >
            <img src={link.icon} alt={link.alt} height="24" width="24" />
          </FooterLink>
        {/each}
      </div>
    </div>
  </footer>
</div>
