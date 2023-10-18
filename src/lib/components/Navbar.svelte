<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Bar -->
<AppBar>
	<svelte:fragment slot="lead">
		<a href="/"><strong class="text-xl uppercase">RESIDUOS PELIGROSOS</strong></a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- <a
			class="btn btn-sm variant-ghost-surface"
			href="https://discord.gg/EXqV7W8MtY"
			target="_blank"
			rel="noreferrer"
		>
			Discord
		</a> -->
		<a class="btn btn-sm variant-ghost-surface" href="/diagramas"> Diagramas </a>
	</svelte:fragment>
</AppBar>
