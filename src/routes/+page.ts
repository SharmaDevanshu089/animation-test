export const ssr = false;
//because i intend to use tauri
import { onMount } from "svelte";
import { gsap } from "gsap";

let referece_to_text;

onMount( ()=> gsap.from(referece_to_text, {x: 1000, duration: 2}) );