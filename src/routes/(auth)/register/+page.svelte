<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let companyName: string;
	let password: string;
	let confirmPassword: string;

	let passwordError: string = "";
</script>

<h1 class="flex justify-center text-4xl my-6">Register</h1>
<div class="flex justify-center">
	<div class="card w-fit p-3 border-2">
		<form method="post" action="?/register" class="grid grid-rows-3 gap-3 justify-center">
			<label class="label">
				<span>Company name</span>
				<input class="input" type="text" name="name" placeholder="Example S.A" />
			</label>

			<label class="label">
				<span>Password</span>
				<input class="input" type="password" placeholder="******" bind:value={password} />
			</label>

			<label class="label">
				<span>Confirm your password</span>
				<input
					class="input"
					type="password"
					name="password"
					placeholder="******"
					bind:value={confirmPassword}
				/>
			</label>
			{#if passwordError !== '' && passwordError !== undefined}
				<span class="text-red-500">
					{passwordError}
				</span>
			{/if}
			<button type="submit" class="btn variant-filled-primary h-12">Register</button>
		</form>
	</div>
</div>
