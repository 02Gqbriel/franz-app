<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';
	import type { Vocabular } from '@prisma/client';

	export async function load({
		params,
		fetch,
		session,
		stuff,
		props,
		url,
	}: import('@sveltejs/kit').LoadEvent): Promise<
		LoadOutput<Record<string, any>>
	> {
		const temps = url.searchParams.getAll('temps');
		const difficulty = url.searchParams.get('difficulty');

		const res = await fetch('/api/vocabular');
		const data: Vocabular[] = await res.json();

		return {
			status: 200,
			props: {
				temps,
				difficulty,
				data,
			},
		};
	}
</script>

<script lang="ts">
	export let temps: string[];
	export let difficulty: string;
	export let data: Vocabular[];

	let todoPool = data;
	let donePool: Vocabular[] = [];
	let personalP: String[] = ["Je", "Tu", "Il/Elle", "Nous", "Vous", "Ils/Elles"];

	function getRandomTemp() {
		return temps[Math.random() * temps.length];
	}

	const current = {
		pronome: null,
		verb: null,
		trans: null,
		solution: null,
	}

	function setupKonjugation(){
		current.pronome = personalP[Math.random() * 6];
		current.solution = 
	}

</script>

<div>
	<div>
		<span>{}</span>
	</div>


	<input type="text" />
</div>
