<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Form } from "../../types/form.type";
  import type { Email } from "../../functions/submit-form";
  import OpenGraph from "../../components/open-graph.svelte";
  import SubmissionSuccess from "../../components/submission-success.svelte";
  import Section from "../../components/section.svelte";

  const selfHostingSubject = "Self-hosting";
  const subjects = [
    selfHostingSubject,
    "Educational Discount",
    "Reselling",
    "Other",
  ];
  const cloudPlatforms = [
    "Amazon Elastic Kubernetes Service (EKS)",
    "Google Kubernetes Engine (GKE)",
    "Kubernetes",
    "Microsoft Azure Kubernetes Service (AKS)",
  ];
  const noOfEngineers = ["2-5", "6-20", "21-50", "51-250", "+250"];

  let sectionStart: HTMLElement;
  let isCloudPlatformsSelectShown = false;
  let cloudInfrastructure = {
    el: null,
    valid: false,
    value: "",
  };

  const formData: Form = {
    selectedSubject: {
      el: null,
      valid: false,
      value: "",
    },
    name: {
      el: null,
      valid: false,
      value: "",
    },
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
    workEmail: {
      el: null,
      valid: false,
      value: "",
    },
    companyWebsite: {
      el: null,
      valid: false,
      value: "",
    },
    noOfEngineers: {
      el: null,
      valid: false,
      value: "",
    },
    message: {
      el: null,
      valid: false,
      value: "",
    },
  };

  $: if (formData.selectedSubject.value == selfHostingSubject) {
    isCloudPlatformsSelectShown = true;
    formData.cloudInfrastructure = cloudInfrastructure;
  } else {
    isCloudPlatformsSelectShown = false;
    delete formData.cloudInfrastructure;
  }

  let isFormDirty = false;
  let isEmailSent = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    window.analytics.identify({
      name_untrusted: formData.name.value,
      email_untrusted: formData.workEmail.value,
    });

    window.analytics.track("message_submitted", {
      subject: formData.selectedSubject.value,
    });

    const email: Email = {
      from: {
        email: formData.workEmail.value,
        name: formData.name.value,
      },
      subject:
        formData.selectedSubject.value +
        "  (from " +
        formData.workEmail.value +
        ")",
      message: `
        ${
          formData.cloudInfrastructure && formData.cloudInfrastructure.value
            ? `Cloud Infrastructure: ${formData.cloudInfrastructure.value}`
            : ""
        }
        Company website: ${formData.companyWebsite.value}
        ${
          formData.noOfEngineers.value
            ? `Total number of engineers: ${formData.noOfEngineers.value}`
            : ""
        }
        Message: ${formData.message.value}
      `,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isEmailSent = true;
        setTimeout(() => {
          sectionStart.scrollIntoView();
        });
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style lang="postcss">
  .h3 {
    @apply mb-small;
  }

  p {
    color: var(--dark-grey);
  }
  form {
    max-width: 45rem;
    margin: auto;
  }
  fieldset ul {
    display: flex;
    flex-flow: wrap;
  }
  fieldset li {
    margin: 0 1rem 0 0;
  }
</style>

<OpenGraph
  data={{
    description: "We’d love to talk about how we can work together.",
    title: "Contact Sales",
  }}
/>

<header class="tight">
  <h1>Contact Sales</h1>
  <p class="max-w-2xl mx-auto">
    We’d love to talk about how we can work together.
  </p>
</header>

<Section class="card shadow-xl mb-32 sm:mx-8" id="form">
  <div bind:this={sectionStart}>
    {#if isEmailSent}
      <SubmissionSuccess
        title="Thank you for your message"
        text="We received your message. Our team will take a look and get back to you as
      soon as possible."
      />
    {:else}
      <form on:submit|preventDefault={handleSubmit} novalidate>
        <h2 class="h3 text-center">Send us a message</h2>
        <ul>
          <li class:error={isFormDirty && !formData.selectedSubject.valid}>
            <fieldset>
              <legend>Please choose a subject</legend>
              <ul>
                {#each subjects as subject, index}
                  <li>
                    <input
                      id="subject-{index}"
                      type="radio"
                      bind:group={formData.selectedSubject.value}
                      bind:this={formData.selectedSubject.el}
                      on:change={() => {
                        formData.selectedSubject.valid =
                          formData.selectedSubject.value &&
                          formData.selectedSubject.el.validity.valid;
                      }}
                      value={subject}
                      name="subject"
                    />
                    <label for="subject-{index}" class="font-medium"
                      >{subject}</label
                    >
                  </li>
                {/each}
              </ul>
            </fieldset>
          </li>
          {#if isCloudPlatformsSelectShown && formData.cloudInfrastructure}
            <li
              class:error={isFormDirty && !formData.cloudInfrastructure.valid}
            >
              <label class="max-w-md">
                <!-- svelte-ignore a11y-no-onchange -->
                <select
                  name="cloudInfrastructure"
                  bind:value={formData.cloudInfrastructure.value}
                  on:change={(e) => {
                    formData.cloudInfrastructure.valid =
                      formData.cloudInfrastructure.value &&
                      // @ts-ignore
                      e.target.validity.valid;
                  }}
                >
                  <option class="option" value=""
                    >Which cloud infrastructure do you use?</option
                  >
                  {#each cloudPlatforms as n}
                    <option class="option" value={n}>
                      {n}
                    </option>
                  {/each}
                </select>
              </label>
            </li>
          {/if}
          <li class:error={isFormDirty && !formData.name.valid}>
            <label for="name">Full Name*</label>
            <input
              id="name"
              bind:value={formData.name.value}
              bind:this={formData.name.el}
              on:change={() => {
                formData.name.valid =
                  formData.name.value && formData.name.el.checkValidity();
              }}
              type="text"
              autocomplete="name"
            />
          </li>
          <li class:error={isFormDirty && !formData.workEmail.valid}>
            <label for="email">Work e-mail* </label>
            <input
              id="email"
              bind:value={formData.workEmail.value}
              bind:this={formData.workEmail.el}
              on:change={() => {
                formData.workEmail.valid =
                  formData.workEmail.value &&
                  formData.workEmail.el.checkValidity();
              }}
              type="email"
              autocomplete="email"
            />
          </li>
          <li class:error={isFormDirty && !formData.companyWebsite.valid}>
            <label for="company-website">Company website* </label>
            <input
              id="compnay-website"
              bind:value={formData.companyWebsite.value}
              bind:this={formData.companyWebsite.el}
              on:change={() => {
                formData.companyWebsite.valid =
                  formData.companyWebsite.value &&
                  formData.companyWebsite.el.checkValidity();
              }}
              type="text"
              autocomplete="organization"
            />
          </li>
          <li class:error={isFormDirty && !formData.noOfEngineers.valid}>
            <label class="max-w-sm">
              <!-- svelte-ignore a11y-no-onchange -->
              <select
                name="noOfEngineers"
                bind:value={formData.noOfEngineers.value}
                bind:this={formData.noOfEngineers.el}
                on:change={() => {
                  formData.noOfEngineers.valid =
                    formData.noOfEngineers.value &&
                    formData.noOfEngineers.el.checkValidity();
                }}
              >
                <option class="option" value=""
                  >Total number of engineers</option
                >
                {#each noOfEngineers as n}
                  <option class="option" value={n}>
                    {n}
                  </option>
                {/each}
              </select>
            </label>
          </li>
          <li class:error={isFormDirty && !formData.message.valid}>
            <label for="message">Your message*</label>
            <textarea
              id="message"
              bind:value={formData.message.value}
              bind:this={formData.message.el}
              on:change={() => {
                formData.message.valid =
                  formData.message.value && formData.message.el.validity.valid;
              }}
              cols="30"
              rows="10"
            />
          </li>
          <li class:error={isFormDirty && !formData.consent.valid}>
            <input
              id="consent"
              bind:checked={formData.consent.checked}
              bind:this={formData.consent.el}
              on:change={() => {
                formData.consent.valid =
                  formData.consent.checked &&
                  formData.consent.el.validity.valid;
              }}
              type="checkbox"
            />
            <label for="consent"
              >I consent to having this website store my submitted information
              so that the sales team can respond to my inquiry.</label
            >
          </li>
          <li>
            <button
              type="submit"
              class="btn"
              disabled={isFormDirty && !isFormValid}>Send message</button
            >
          </li>
        </ul>
        {#if isEmailSent}
          <p>Thank you! We'll get back to you soon.</p>
        {/if}
      </form>
    {/if}
  </div>
</Section>
