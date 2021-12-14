---
section: troubleshooting
title: Troubleshooting
---

<script context="module">
  export const prerender = true;
</script>

# Troubleshooting

Please review this page to see if your issue is listed below. If not, contact us via our [Support page](/support) and we will gladly assist you.

## Incompatible Browser Extensions

### ClearURLs

The ClearURLs browser extension for [Google Chrome](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk?hl=en) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) inhibits Gitpod workspaces from initialising and the problem manifests with the following symptoms:

- dark theme does not load
- the bottom left gitpod button is missing
- the vscode market place does not load

This issue can be resolved by disabling "ETag filtering" in ClearURLs’ settings. A [issue has been created](https://gitlab.com/KevinRoebert/ClearUrls/-/issues/977) that requests to whitelist Gitpod by default and we would apprciate your upvotes on the issue.
