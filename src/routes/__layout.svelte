<script>
	import '../app.css';
</script>

<header class="flex justify-between">
	<a href="/">
		<h1
			class="font-semibold select-none hover:after:content-['ඞ'] after:pl-2 after:text-xs after:leading-relaxed after:text-purple-600"
		>
			französisch konjugieren
		</h1>
	</a>
	<nav />
</header>
<main
	class="my-10 p-2 rounded-2xl border-purple-50 border-2 overflow-hidden flex-grow bg-true-white"
>
	<slot />
</main>
<footer class="text-center">footer</footer>
