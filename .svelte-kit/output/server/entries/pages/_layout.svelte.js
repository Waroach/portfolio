import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="contact" class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-1ouug8c"><p class="px-4 py-2 bg-violet-500 text-white font-medium">Connect with me →</p> <div class="flex flex-col gap-4 items-center justify-cneter"><p><b class="pr-2">Phone Number</b> <a class="text-violet-400" target="_blank" href="tel:8012308888">801-230-8888<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-phone pt-4 pl-0.5 scale-[150%]"></i></span></sup></a></p>  <p><b class="pr-2">E-mail</b> <a class="text-violet-400" target="_blank" href="mailto:brent.rankin@gmail.com">brent.rankin@gmail.com <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-envelope pt-4 pl-0.5 scale-[150%]"></i></span></sup></a></p>  <p><b class="pr-2">Github</b> <a class="text-violet-400" target="_blank" href="https://github.com/waroach">Waroach <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-brands fa-square-github pt-4 pl-0.5 scale-[150%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a class="text-violet-400" target="_blank" href="https://www.linkedin.com/in/brentrankin1979/">Brent Rankin<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-brands fa-linkedin pt-4 pl-0.5 scale-[150%]"></i></span></sup></a></p></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "#blog" },
    { name: "About me", link: "#about" },
    { name: "Contact Me", link: "#contact" }
  ];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : " py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-iq01co"><b class="font-bold poppins">Brent</b> Rankin</h1> <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a href="https://www.linkedin.com/in/brentrankin1979/" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-lprl3h"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in Touch</h4></a></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" data-svelte-h="svelte-1uypyov"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
