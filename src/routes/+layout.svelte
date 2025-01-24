<script lang="ts">
	import '../app.css';
	export let title = "bitboxx Apps";
</script>



<div class="min-h-screen flex flex-col bg-gray-100">
	<!-- Header -->
	<header class="bg-white shadow-sm">
		<div class="container mx-auto px-4 py-4 flex justify-between items-center">
			<h1 class="text-2xl font-semibold">{title}</h1>
			<nav class="space-x-4">
				<a href="https://github.com/bitboxx-inc/bitboxx-apps" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
			</nav>
		</div>
	</header>

	<!-- Main Content -->
	<main class="flex-grow container mx-auto px-4 py-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<!-- Sidebar -->
			<aside class="col-span-1 bg-white shadow-sm rounded p-4">
				<b>コンテンツ</b>
				<nav class="space-y-2 ml-4 mt-2">
					<a href="/" class="block text-gray-700 hover:text-blue-600">リリース済みのアプリ</a>
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

	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>

	<!-- Material Typography -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
	/>

	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>


<style>
	/* コンテンツ部分の設定 */
	.content {
		flex: 1; /* 残りのスペースを埋める */
		padding: 16px; /* 必要なら余白を追加 */
	}

	/* フッターのデザイン */
	.footer {
		background-color: #f9f9f9;
		padding: 16px;
		text-align: center;
	}
</style>
