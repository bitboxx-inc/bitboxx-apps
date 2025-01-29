<script lang="ts">
	import '../app.css';
	export let title = "bitboxx Apps";
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<div class="min-h-screen flex flex-col bg-gray-100">
	<!-- Header -->
	<header class="bg-white shadow-sm">
		<div class="container mx-auto px-4 py-4 flex justify-between items-center">
			<!-- Hamburger Icon -->
			<button class="md:hidden text-gray-600 focus:outline-none" on:click={toggleMenu}>
				<span class="material-icons text-3xl">menu</span>
			</button>

			<h1 class="text-2xl font-semibold">{title}</h1>

			<!-- Navigation for larger screens -->
			<nav class="md:flex space-x-4">
				<a href="https://github.com/bitboxx-inc/bitboxx-apps" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
			</nav>

		</div>
	</header>

	<!-- Mobile Menu (Overlay) -->
	{#if isMenuOpen}
		<div class="fixed inset-0 bg-black/50 z-40" on:click={closeMenu}></div>
		<div class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
			<div class="p-6 flex justify-between items-center border-b">
				<h2 class="text-xl font-semibold">メニュー</h2>
				<button class="text-gray-600 focus:outline-none" on:click={closeMenu}>
					<span class="material-icons text-3xl">close</span>
				</button>
			</div>
			<nav class="p-4 space-y-4">
				<a href="/" class="block text-gray-700 hover:text-blue-600" on:click={closeMenu}>リリース済みのアプリ</a>
				<a href="/terms-of-service" class="block text-gray-700 hover:text-blue-600" on:click={closeMenu}>利用規約</a>
				<a href="/privacy-policy" class="block text-gray-700 hover:text-blue-600" on:click={closeMenu}>プライバシーポリシー</a>
				<a href="https://github.com/bitboxx-inc/bitboxx-apps" target="_blank" class="block text-gray-700 hover:text-blue-600" on:click={closeMenu}>GitHub</a>
			</nav>
		</div>
	{/if}

	<!-- Main Content -->
	<main class="flex-grow container mx-auto px-4 py-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<!-- Sidebar -->
			<aside class="hidden md:block col-span-1 bg-white shadow-sm rounded p-4">
				<b>コンテンツ</b>
				<nav class="space-y-2 ml-4 mt-2">
					<a href="/" class="block text-gray-700 hover:text-blue-600">リリース済みのアプリ</a>
				</nav>
				<b>情報</b>
				<nav class="space-y-2 ml-4 mt-2">
					<a href="/terms-of-service" class="block text-gray-700 hover:text-blue-600">利用規約</a>
				</nav>
				<nav class="space-y-2 ml-4 mt-2">
					<a href="/privacy-policy" class="block text-gray-700 hover:text-blue-600">プライバシーポリシー</a>
				</nav>
			</aside>

			<!-- Content Area -->
			<section class="col-span-1 md:col-span-2 bg-white shadow-sm rounded p-6">
				<slot />
			</section>
		</div>
	</main>

	<!-- Footer -->
	<footer class="bg-gray-50 border-t border-gray-200 py-4">
		<div class="container mx-auto px-4 text-center text-sm text-gray-600">
			2025 &copy; bitboxx Inc.
		</div>
	</footer>
</div>

<svelte:head>
	<!-- Fonts & Icons -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />

	<!-- Material Typography -->
	<link rel="stylesheet" href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css" />

	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<style>
	/* オーバーレイ時にコンテンツがスクロールしないようにする */
	body.menu-open {
		overflow: hidden;
	}
</style>
