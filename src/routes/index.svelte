<script lang="ts">
	import { enhanceForm } from '$lib/actions/form'
	import type { Error } from '$lib/types'

	let errors: Error = {}
</script>

<h1>Prove Yourself</h1>

<img src="tim.webp" alt="Tim The Enchanter" />

<form
	method="POST"
	use:enhanceForm={{
		error: async ({ response }) => {
			errors = (await await response?.json()).errors
		}
	}}
>
	{#if errors.name}
		<span class="error">{errors.name}</span>
	{/if}
	<input type="text" name="name" />

	{#if errors.password}
		<span class="error">{errors.password}</span>
	{/if}
	<input type="password" name="password" />

	{#if errors.credentials}
		<span class="error">{errors.credentials}</span>
	{/if}

	<button type="submit">Log in</button>
</form>

<style>
	form {
		max-width: 260px;
		display: grid;
		gap: 1rem;
	}

	.error {
		color: tomato;
	}
</style>
