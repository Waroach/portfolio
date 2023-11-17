<script>
  import Step from "./Step.svelte";

  let steps = [
    // icons can be found and named
    // fa-cart-shopping
    // find them here https://fontawesome.com/search?o=r&m=free
    { name: "Smoljames Store", icon: "fa-solid fa-cart-shopping" },
    { name: "Ultimate Todos", icon: "fa-solid fa-list-check" },
    { name: "Pokédex", icon: "fa-solid fa-diagram-project" },
  ];

  let benefits = [
    {
      name: "A self/community taught developer",
      description:
        "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
    },
    {
      name: "Excellent communicator",
      description:
        "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
    },
    {
      name: "Amazing team player and motivator",
      description:
        "As an amazing team player and motivator, I am always eager to be the driving force behind inspiration. Through my involvement in the 100 Devs community, I have served as both a mentor and a friend, guiding individuals to hone their development skills. In this collaborative space, I not only impart knowledge but actively engage in the exchange of ideas, fostering an environment where learning and growth flourish. My commitment to empowering others extends beyond teaching; I thrive in challenging situations, employing effective problem-solving skills to adapt and overcome obstacles. I am dedicated to creating a positive and dynamic team atmosphere where motivation is not just a goal but a shared journey towards excellence.",
    },
    {
      name: "Husband and father",
      description:
        "Hey there! I'm rocking the title of Husband for a solid 23 years, and I've got two little sidekicks— a 4-year-old princess and a 1-year-old troublemaker (aka my girls). When I'm not crushing it at work, you'll find me knee-deep in dad jokes and bedtime stories. Life's all about navigating the chaos with a smile, and I've mastered the art of parenting with love, laughter, and the occasional coffee IV drip. It's a wild ride, but I wouldn't trade it for anything. After all, who needs a superhero when you've got a dad with jokes cheesy enough to make even the toughest toddler giggle? 🌟 #DadLife",
    },
    // { name: "", description: "" },
    // { name: "", description: "" },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <!-- Intro -->
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
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in Touch &rarr;</h4>
      </a>
    </div>
    <div class="flex justify-center items-center">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={"images/BrentFace.png"}
        class="object-cover z-[2] max-h-[70vh]"
        alt="brent's Profile picture"
      />
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">Look what I can do</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
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

  <!-- About Me -->
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am ...
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto maz-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-violet-400 text-2xl sm:text-3xl lg:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2x sm:text-3xl font-semibold text-center poppins">
      The <span class="poppins text-violet-400">complete</span> package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class={"border-b border-solid border-slate-200  "}>
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Dedication</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr>
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-t border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Progamming Ability</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">So why not invest?</p>
  </section>

  <!-- BLOG -->
  <section id="blog">
    <div class="flex flex-col gap-2 text-center">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
        ><i class="fa-solid fa-blog" />Read my blog</a
      >
    </div>
  </section>
</main>
