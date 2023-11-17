<script>
  import Step from "./Step.svelte";

  let steps = [
    { name: "Smoljames Store", icon: "fa-solid fa-cart-shopping" },
    { name: "Ultimate Todos", icon: "fa-solid fa-list-check" },
    { name: "Pokédex", icon: "fa-solid fa-diagram-project" },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Brent</span> Rankin <br />
        Full Stack <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I specialize in web development with a strong focus on JavaScript,
        utilizing frameworks such as React, SvelteKit, and <span
          class="text-violet-400">Elm</span
        >
        for front-end architecture. My styling expertise extends to TailwindCSS and
        Sass, ensuring clean and efficient designs.
      </p>
      <p class="text-base sm:text-lg md:text-xl">
        On the server side, I am proficient in <span class="text-violet-400"
          >Elixir</span
        >, a powerful and concurrent programming language, and I leverage
        GraphQL for efficient data querying and manipulation. Database
        management is a core competency, with proficiency in SQL for structured
        data storage.
      </p>
      <p class="text-base sm:text-lg md:text-xl">
        In terms of cloud infrastructure, I have hands-on experience with the
        <span class="text-violet-400">Google Cloud Platform</span>, allowing me
        to deploy scalable and robust applications seamlessly. Additionally, I
        am currently exploring the integration of Elm on the backend,
        anticipating further enhancements to my skill set.
      </p>
      <p class="text-base sm:text-lg md:text-xl">
        My tech stack reflects a comprehensive approach to building modern and
        efficient web applications, combining front-end and back-end
        technologies seamlessly for optimal performance and user experience.
      </p>
      <a
        href="https://www.linkedin.com/in/brentrankin1979/"
        target="_blank"
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in Touch &rarr;</h4>
      </a>
    </div>
    <div>
      <img
        src={"images/BrentFace.png"}
        alt="brent's Profile picture"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">Look what I can do</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Smoljames Store is a a merchanising store created with <strong
            class="text-violet-400"
            >Next.js, Commerce.js, Stripe & Node.js + Express.js!</strong
          > Commerce.js is a product CMS and Stripe is used for all transaction handling.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Ultimate Todos is a Full Stack <strong class="text-violet-400"
            >Next.js</strong
          >,
          <strong class="text-violet-400">Node.js + Express.js</strong>
          & <strong class="text-violet-400">Firebase</strong> CRUD application that
          allows a user to login, manage a tidy and efficacious todo list, and persist
          this information across devices.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The Pokédex is a <strong class="text-violet-400"
            >SvelteKit & TailwindCSS</strong
          >
          web application, hosted on
          <strong class="text-violet-400">Netlify</strong>, that consumes and
          caches the
          <strong class="text-violet-400">Pokémon API</strong>
          to display all Pokémon information. Gotta catch them all!
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:relative before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:relative after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
    </div>
  </section>
</main>
