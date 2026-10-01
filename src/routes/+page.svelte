<script lang="ts">
	import Signature from '$lib/components/Signature.svelte';
	import Background from '$lib/assets/coming-soon.webp?url';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="text-white w-full min-h-screen bg-fixed bg-center bg-cover h-full bg-blend-multiply bg-black/75"
	style="background-image: url({Background});"
>
	<div
		class="absolute top-1/2 left-1/2 z-20 w-5/6 lg:w-1/3 flex flex-col items-center justify-center gap-0 lg:gap-8 transition-all duration-1500 ease-in-out transform-[translate(-50%,-50%)_scale(1.05)]"
	>
		<Signature animate={false} />
		<h3 class="lg:m-auto mt-8 text-3xl lg:text-4xl">Köszönjük, hogy eljöttetek!</h3>
		<div class="flex flex-col lg:flex-row lg:gap-2 gap-0 mt-8 lg:mt-0 items-center">
			<Button class="p-0" variant="link" href={resolve('/photos')}>Képek</Button>
			•
			<Button class="p-0" variant="link" href={resolve('/invitation')}>Eredeti meghívó</Button>
		</div>
	</div>
	<footer
		class="absolute h-max p-6 bottom-0 bg-transparent w-full flex justify-center items-center text-background dark:text-foreground flex-col lg:flex-row lg:items-baseline"
	>
		<p class="text-xs! lg:text-sm!">
			<span class="material-symbols-rounded text-lg! align-middle!">photo_camera</span> by <Button
				target="_blank"
				variant="link"
				class="p-0! text-foreground"
				href="https://subafoto.hu">SubaFoto</Button
			>
		</p>
		<p class="text-sm! mx-2 hidden lg:block">·</p>
		<p class="text-xs! lg:text-sm!">
			Made with <span class="material-symbols-rounded text-lg! align-middle!">favorite</span> by <Button
				target="_blank"
				variant="link"
				class="p-0! text-foreground"
				href="https://github.com/brown-bas">brown-bas</Button
			>
		</p>
	</footer>
</div>
