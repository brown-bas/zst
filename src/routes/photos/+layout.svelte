<script lang="ts">
	let { children } = $props();
</script>

<div class="photos">
	<main class="mx-auto flex min-h-dvh max-w-350 flex-col p-4">
		{@render children()}
	</main>
</div>
