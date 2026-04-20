<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isMenuOpen = false;
	let scrolled = false;

	function toggleMenu() { isMenuOpen = !isMenuOpen; }
	function closeMenu() { isMenuOpen = false; }

	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 24; };
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
	}

	const navItems: Array<[string, string]> = [
		[`${base}/`, 'リリース済みのアプリ'],
		[`${base}/terms-of-service`, '利用規約'],
		[`${base}/privacy-policy`, 'プライバシーポリシー']
	];

	$: currentPath = $page.url.pathname.replace(/\/$/, '') || '/';
</script>

<div class="relative min-h-screen bg-cream-50 text-ink font-sans flex flex-col overflow-x-hidden">
	<header
		class={`fixed top-0 left-0 w-full z-[70] transition-all duration-500
			${isMenuOpen ? 'bg-cream-50 border-b border-ink/10' : scrolled ? 'bg-cream-50/85 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'}`}
	>
		<div class="max-w-[1400px] mx-auto h-20 px-6 md:px-10 flex items-center justify-between">
			<a href="{base}/" class="flex items-center gap-3" aria-label="bitboxx Apps">
				<img src="{base}/black.svg" alt="bitboxx" class="h-6 md:h-7 w-auto" />
				<span class="font-mincho text-[11px] md:text-[12px] tracking-[0.22em] text-ink/55 border-l border-ink/15 pl-3">
					Apps
				</span>
			</a>

			<nav class="hidden lg:flex items-center gap-7 text-sm">
				{#each navItems as [href, label]}
					{@const active = href.replace(/\/$/, '') === currentPath || (href === `${base}/` && currentPath === '/')}
					<a
						{href}
						class={`font-mincho transition-colors ${active ? 'text-ink' : 'text-ink/55 hover:text-ink'}`}
					>
						{label}
					</a>
				{/each}
				<a
					href="https://github.com/bitboxx-inc/bitboxx-apps"
					target="_blank"
					rel="noreferrer"
					class="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55 hover:text-ink transition-colors"
				>
					GitHub ↗
				</a>
			</nav>

			<button
				class="menu-btn lg:hidden relative z-[61] w-12 h-12 flex items-center justify-center rounded-2xl transition-colors duration-300"
				on:click={toggleMenu}
				aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
						<path d="M6 6l12 12M18 6L6 18"/>
					</svg>
				{:else}
					<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
						<path d="M4 8h16M4 16h16"/>
					</svg>
				{/if}
			</button>
		</div>
	</header>

	{#if isMenuOpen}
		<div
			transition:fade={{ duration: 180 }}
			class="mobile-menu fixed inset-0 z-[60] lg:hidden flex flex-col pt-28 px-8 overflow-y-auto"
			on:click={closeMenu}
			on:keydown
			role="presentation"
		>
			<nav
				transition:slide={{ duration: 260, easing: quintOut }}
				class="relative flex flex-col gap-5 font-mincho text-2xl"
				on:click|stopPropagation
				on:keydown
				role="presentation"
			>
				{#each navItems as [href, label]}
					<a {href} class="text-ink/85 hover:text-ink transition-colors" on:click={closeMenu}>
						{label}
					</a>
				{/each}
				<a
					href="https://github.com/bitboxx-inc/bitboxx-apps"
					target="_blank"
					rel="noreferrer"
					class="text-ink/55 font-mono text-base tracking-[0.2em] uppercase mt-4"
					on:click={closeMenu}
				>
					GitHub ↗
				</a>
			</nav>
		</div>
	{/if}

	<main class="flex-1 pt-28 md:pt-32">
		<slot />
	</main>

	<footer class="relative mt-24 md:mt-32 py-14 md:py-16 border-t border-ink/10">
		<div class="relative max-w-[1400px] mx-auto px-6 md:px-10">
			<div class="grid md:grid-cols-12 gap-10 md:gap-12">
				<div class="md:col-span-5">
					<img src="{base}/black.svg" alt="bitboxx" class="h-5 w-auto" />
					<p class="mt-5 font-mincho text-[13px] leading-[2] text-ink/70 max-w-sm">
						このサイトは、bitboxx がリリースしているアプリの紹介と、共通の利用規約・プライバシーポリシーをまとめた窓口です。会社の活動全体については
						<a href="https://www.bitboxx.co.jp" class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">本サイト</a>
						をご覧ください。
					</p>
				</div>

				<div class="md:col-span-3">
					<p class="font-mincho text-[12px] tracking-[0.18em] text-ink/55">アプリ</p>
					<ul class="mt-4 space-y-2 font-mincho text-[13px] text-ink/85">
						<li><a href="{base}/" class="hover:text-sakura transition-colors">リリース済みのアプリ</a></li>
					</ul>
				</div>

				<div class="md:col-span-2">
					<p class="font-mincho text-[12px] tracking-[0.18em] text-ink/55">規約</p>
					<ul class="mt-4 space-y-2 font-mincho text-[13px] text-ink/85">
						<li><a href="{base}/terms-of-service" class="hover:text-sakura transition-colors">利用規約</a></li>
						<li><a href="{base}/privacy-policy" class="hover:text-sakura transition-colors">プライバシーポリシー</a></li>
					</ul>
				</div>

				<div class="md:col-span-2">
					<p class="font-mincho text-[12px] tracking-[0.18em] text-ink/55">お問い合わせ</p>
					<ul class="mt-4 space-y-2 font-mincho text-[13px] text-ink/85">
						<li><a href="mailto:support-apps@bitboxx.co.jp" class="hover:text-sakura transition-colors break-all">support-apps@bitboxx.co.jp</a></li>
					</ul>
				</div>
			</div>

			<div class="mt-12 pt-6 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
				<p class="font-mincho text-[12px] text-ink/60">株式会社bitboxx</p>
				<p class="font-mincho text-[12px] text-ink/50">© {new Date().getFullYear()} bitboxx Inc. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	.menu-btn {
		background-color: #ffffff;
		color: #111014;
		border: 1px solid #111014;
	}
	.menu-btn:hover {
		background-color: #FF2630;
		color: #ffffff;
		border-color: #FF2630;
	}
	.mobile-menu {
		background-color: #FFFFFF;
	}
</style>
