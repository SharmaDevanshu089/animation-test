<script lang="ts">
    
//because i intend to use tauri
import { onMount } from "svelte";
import { gsap } from "gsap";

let referece_to_text;

onMount( ()=> gsap.from(referece_to_text, {x: 1000, duration: 2}) );
</script>
<svelte:head>
    <title>My SvelteKit App</title>
</svelte:head>
<h1 bind:this={referece_to_text}>This is my test app</h1>