---
section: configure
title: Prebuilds
---

<script context="module">
  export const prerender = true;
</script>

# Prebuilds

Prebuilds allow workspaces start quickly.

Gitpod watches repositories configured with an init script.
The init script is triggered whenever there is a commit.
After running the init script, the resulting prebuilt workspace directory is saved for future workspaces.

Users opening a new workspace will not have to wait for the init script to run during startup.
Instead, they will see a message in the terminal like this:

```txt
🤙 This task ran as a workspace prebuild
```

Prebuilds are typically used to install dependencies and run builds. For example, the init task shown below
installs npm packages into the `node_modules` directory _before_ users open a new workspace.

```yaml
tasks:
  - init: |
    npm install
    echo 'Gitpod prebuilds save time for developers.'
```

#### Note ⚠️

Prebuilds only include the workspace directory. Other directories like the home directory are not currently saved in a prebuild.
Commands like `npm install -g` which save files outside the workspace directory, are not suitable for prebuild

`youtube: ZtlJ0PakUHQ`

## Enable Prebuilt Workspaces

### On GitHub

To enable prebuilt workspaces for a GitHub repository, follow these steps:

1. Go to the [Gitpod GitHub app](https://github.com/apps/gitpod-io) and click `Configure`
2. Choose the organization or account you wish to install the Gitpod app for, then click `Install`
3. You will be forwarded to Gitpod where you can confirm the installation

### On GitLab

To enable prebuilt workspaces for a GitLab repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `api` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://gitlab.com/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

If you want to trigger new Gitpod prebuilds for specific branches only, you can configure this in your Gitlab [project settings](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#branch-filtering).

### On Bitbucket

To enable prebuilt workspaces for a Bitbucket repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `webhook` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://bitbucket.org/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

## Manual execution of prebuild

Alternatively, it is also possible to manually trigger a new prebuild for any repository & commit by using the `gitpod.io/#prebuild/` URL prefix:

```
https://gitpod.io/#prebuild/https://github.com/ORG/REPO
```

## Configure prebuilds

By default, Gitpod prepares prebuilt workspaces for all changes on the default branch and for pull/merge requests coming from the same repository.

> **Note**: Prebuilds are executed as the user who enabled them. This means that if you want to use
> prebuilds on a private repository, you must give Gitpod access to private repositories.

Prebuilds are configured in your repository's [`.gitpod.yml`](/docs/config-gitpod-file) file with the following start tasks:

- `before`
- `init`

Note the absence of the `command` task. Since this task may potentially run indefinitely, e.g. if you start a dev server, Gitpod does not execute the `command` task during prebuilds.

Prebuilds have a timeout of 1 hour. If your `before` and `init` tasks combined exceed 1 hour, your prebuild will fail. Subscribe to [this issue](https://github.com/gitpod-io/gitpod/issues/6283) for updates when this limit will be lifted.

Each prebuild starts with a clean environment. In other words, Gitpod does not cache artifacts between prebuilds. We do have _incremental prebuilds_ available in Beta though and if you have a use case where this would be benefitial, please let us know.

## Configure the GitHub app

Once you have installed the [Gitpod GitHub app](https://github.com/apps/gitpod-io), you can configure its behavior in the `github` section of your repository's [`.gitpod.yml`](/docs/config-gitpod-file).

> **Note:** The Gitpod GitHub app has no equivalent for GitLab or Bitbucket yet, so this entire section is GitHub-specific for now.

See below for an example:

```yaml
github:
  prebuilds:
    # enable for the default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: true
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: true
    # add a check to pull requests (defaults to true)
    addCheck: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
    addComment: true
    # add a "Review in Gitpod" button to the pull request's description (defaults to false)
    addBadge: false
```

### When a prebuild is run

The `prebuilds` section in the `.gitpod.yml` file configures when prebuilds are run.
By default, prebuilds are run on push to the default branch and for each pull request coming from the same repository.
Additionally, you can enable prebuilds for all branches (`branches`) and for pull requests from forks (`pullRequestsFromForks`).

### GitHub integration

Once the GitHub app is installed, Gitpod can add helpful annotations to your pull requests.

#### Checks

By default, Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.
You can disable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addCheck: false
```

#### Comment

Gitpod can add a comment with an "Open in Gitpod" button to your pull requests.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addComment: true
```

#### Badge

Instead of adding a comment, Gitpod can also modify the description of a pull request to add the "Open in Gitpod" button.
This approach produces fewer GitHub notifications, but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addBadge: true
```

The `addComment` and `addBadge` behaviours are not mutually exclusive (i.e. enabling one does not disable the other).
If you don't want the comments to be added, disable them using `addComment: false`.
