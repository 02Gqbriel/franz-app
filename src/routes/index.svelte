<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit';

	export async function load({
		fetch,
	}: import('@sveltejs/kit').LoadEvent): Promise<
		LoadOutput<Record<string, any>>
	> {
		return {
			status: 200,
			props: {
				article: '',
			},
		};
	}
</script>

<script lang="ts">
	export let article: string | null;
</script>

<div class="p-5 relative h-fit">
	<h1 class="text-center text-lg p-2 mb-4">einstellungen:</h1>

	<form action="/exercise">
		<div class="p-2">
			<p>schwierigkeitsgrad</p>
			<div class="ml-3">
				<input type="radio" name="difficulty" id="easy" value="easy" />
				<label for="easy">einfach</label>
			</div>

			<div class="ml-3">
				<input
					type="radio"
					name="difficulty"
					id="normal"
					value="normal"
					checked
				/>
				<label for="normal">normal</label>
			</div>

			<div class="ml-3">
				<input type="radio" name="difficulty" id="hard" value="hard" />
				<label for="hard">schwer</label>
			</div>
		</div>

		<div class="p-2">
			<p>zeitformen</p>
			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="present"
					value="present"
					checked
				/>
				<label for="present">présent</label>
			</div>

			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="passe_compose"
					value="passe_compose"
					checked
				/>
				<label for="passe_compose">passé composé</label>
			</div>

			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="imparfait"
					value="imparfait"
					checked
				/>
				<label for="imparfait">imparfait</label>
			</div>

			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="futur_compose"
					value="futur_compose"
					checked
				/>
				<label for="futur_compose">futur composé</label>
			</div>

			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="futur_simple"
					value="futur_simple"
					checked
				/>
				<label for="futur_simple">futur simple</label>
			</div>

			<div class="ml-3">
				<input
					type="checkbox"
					name="temps"
					id="conditionnel_present"
					value="conditionnel_present"
					checked
				/>
				<label for="conditionnel_present">conditionnel présent</label>
			</div>
		</div>

		<button
			class="float-right font-light bg-purple-600 text-soft-white  p-0.5 focus:ring-2 ring-purple-600 ring-offset-2 rounded mt-5"
			>beginnen</button
		>
	</form>
</div>

<button
	class="hidden"
	on:click={async () => {
		await fetch('http://localhost:3000/api/vocabular', {
			method: 'POST',
			body: JSON.stringify({
				grundform: 'avoir',
				uebersetzung: ['haben'],
				present: ['ai'],
				imparfait: ['avait'],
				future_simple: ['aura'],
				conditionnel_present: ['aurais'],
				passe_compose: ['eu'],
				plus_que_parfait: ['eu'],
			}),
		});
	}}
>
	post
</button>
