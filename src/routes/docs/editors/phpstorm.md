---
section: editors
title: PhpStorm
---

<script context="module">
  export const prerender = true;
  import { faqs } from "../../../contents/editors";
</script>

# {title}

## Desktop

JetBrains PhpStorm is currently in Beta. We have a [JetBrains channel on our Discord (#jetbrains-beta)](https://www.gitpod.io/chat). Feel free to discuss any issues / leave feedback there. If you prefer, you can also leave feedback on the dedicated [GitHub Issue](https://github.com/gitpod-io/gitpod/issues/6576).

> **Warning:** Currently, our JetBrains implementation uses [Code With Me](https://www.jetbrains.com/code-with-me/) links and a shared password to facilitate early Beta testing. This means that for now, anyone who might discover the workspace URL could potentially get full access to your workspace. This solution is temporary and will be resolved before the final release.

### Starting all workspaces in PhpStorm by default

1. Go to [your preferences page](https://gitpod.io/preferences)
2. Select "Open In Desktop IDE" and choose <kbd>PhpStorm</kbd>
3. Start a _new workspace_ and you will be prompted to use JetBrains when the workspace starts

<img class="screenshot" alt="Selecting PhpStorm in the preferences" src="/images/editors/phpstorm.gif">

### FAQs

<div>
	{#each faqs as faq}
		<li>
      <strong>
        {@html faq.question}</strong>
      {@html faq.answer}
      </li>
	{/each}
</div>

## Browser (via Jetbrains Projector)

Did you know you can run JetBrains IDEs in a browser? Thanks to [JetBrains Projector](https://lp.jetbrains.com/projector/) IntelliJ-based and Swing-based IDEs can run on servers, allowing you to access them from anywhere using your browser. Here's an example template: [gitpod-io/template-jetbrains-phpstorm](https://github.com/gitpod-io/template-jetbrains-phpstorm).

Simply click "Open in Gitpod" button to launch the PhpStorm IDE in your browser.

### Additional reading

To learn more about JetBrains Projector, head to:

- https://blog.jetbrains.com/blog/2021/03/11/projector-is-out
- https://jetbrains.github.io/projector-client/mkdocs/latest
