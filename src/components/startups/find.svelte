<script>
  import { organisationsLists } from "../../contents/startups";
  import Section from "../section.svelte";
  import NotFound from "./not-found.svelte";
  import OrganisationsEntry from "./organisations-entry.svelte";
  import OrganisationsList from "./organisations-list.svelte";
  import SideNav from "./side-nav.svelte";
  let searchTerm = "";
  const allOrgs = [].concat(...organisationsLists.map((o) => o.organisations));
  let filteredOrgs;

  $: {
    filteredOrgs = allOrgs.filter((o) =>
      o.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const froms = [];
  organisationsLists.forEach((o) => froms.push(o.from));
</script>

<style lang="postcss">
  .wrapper {
    margin-top: -445px;
    min-height: 600px;

    @media (max-width: 1140px) {
      margin-top: -370px;
      min-height: 300px;
    }

    @media (max-width: 340px) {
      margin-top: 0;
    }
  }

  h2 {
    @apply mb-small;
  }

  input {
    @apply border-none;
  }
</style>

<Section class="relative">
  <h2 class="h3 text-center">Find your VC or accelerator</h2>
  <div
    class="relative bg-white rounded-xl max-w-lg mx-auto shadow-normal mb-12 pl-6 sm:pl-7"
  >
    <label for="search" class="sr-only">Search</label>
    <img
      class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small"
      src="/svg/mag-glass.svg"
      alt="Search"
      aria-hidden="true"
    />
    <input
      type="text"
      placeholder="Search"
      bind:value={searchTerm}
      id="search"
      class="box-border block w-full text-p-medium h-small pl-12 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900"
    />
  </div>
  <div>
    <SideNav {froms} />
    <div class="wrapper {!searchTerm ? 'space-y-32 sm:space-y-40' : ''}">
      {#if searchTerm}
        <OrganisationsList organisations={filteredOrgs} />
        {#if filteredOrgs.length === 0}
          <NotFound />
        {/if}
      {:else}
        {#each organisationsLists as orgs}
          <OrganisationsEntry
            from={orgs.from}
            organisations={orgs.organisations}
          />
        {/each}
      {/if}
    </div>
  </div>
</Section>
