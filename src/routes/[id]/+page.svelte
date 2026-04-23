<script lang="ts">
	import { findApp } from '$lib/apps';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import AppInfoCard from '../../infras/AppInfoCard.svelte';

	$: appId = $page.params.id;
	$: app = findApp(appId);
</script>

<svelte:head>
	<title>{app ? `${app.name} | bitboxx Apps` : 'アプリが見つかりません | bitboxx Apps'}</title>
	{#if app}
		<meta name="description" content={app.description || `${app.name} の紹介ページ。`} />
	{/if}
</svelte:head>

<section class="relative pt-4 pb-8 md:pt-8 md:pb-12 paper-grain">
	<div class="max-w-[1400px] mx-auto px-6 md:px-10">
		{#if app}
			<AppInfoCard {...app} />
		{:else}
			<div class="grid md:grid-cols-12 gap-3 md:gap-10 py-16 md:py-24 border-y border-ink/15">
				<p class="md:col-span-3 font-mincho text-sm tracking-[0.2em] text-ink/55">該当なし</p>
				<div class="md:col-span-9 max-w-2xl">
					<h1 class="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-hyper">
						このアプリは見つかりませんでした<span class="text-sakura">.</span>
					</h1>
					<p class="mt-6 font-mincho text-[14px] md:text-[15px] leading-[2] text-ink/75">
						URLが正しいかご確認ください。リリース済みのアプリは
						<a href="{base}/" class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">一覧ページ</a>
						からご覧いただけます。
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>
