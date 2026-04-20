<script lang="ts">
	import { apps } from '$lib/apps';
	import { base } from '$app/paths';

	const appList = [...apps].sort((a, b) => a.id.localeCompare(b.id));

	function appHref(app: { id: string; path?: string }) {
		return `${base}/${app.path ?? app.id}`;
	}

	function ageChipClass(age: string) {
		if (age === 'R18') return 'bg-sakura/10 text-sakura border-sakura/30';
		if (age === 'R13') return 'bg-sun/15 text-ink border-sun/40';
		return 'bg-mint/20 text-ink border-mint/40';
	}
</script>

<svelte:head>
	<title>リリース済みのアプリ | bitboxx Apps</title>
	<meta name="description" content="株式会社bitboxx がリリースしているアプリの一覧。共通の利用規約とプライバシーポリシーもこちらから。" />
</svelte:head>

<section class="relative pt-8 pb-16 md:pt-12 md:pb-20 paper-grain">
	<div class="max-w-[1400px] mx-auto px-6 md:px-10">
		<p class="font-mincho text-sm tracking-[0.2em] text-ink/55">リリース済みのアプリ</p>

		<h1 class="mt-8 md:mt-10 font-display leading-[0.92] tracking-hyper">
			<span class="block text-[12vw] md:text-[8vw] lg:text-[7rem] italic">
				<span class="underline-handwritten">bitboxx</span>
			</span>
			<span class="block text-[12vw] md:text-[8vw] lg:text-[7rem] pl-[4vw] md:pl-[8vw]">
				Apps<span class="text-sakura">.</span>
			</span>
		</h1>

		<div class="mt-12 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-12 items-end">
			<p class="md:col-span-7 font-mincho text-[16px] md:text-[19px] leading-[2.1] text-ink/80 max-w-2xl">
				bitboxx が制作したアプリの紹介ページです。<br class="hidden md:block" />
				各アプリの詳細と、共通の利用規約・プライバシーポリシーをまとめています。
			</p>
			<p class="md:col-span-5 md:text-right font-mono text-[12px] tracking-[0.28em] text-ink/55">
				CURRENTLY <span class="text-ink text-base align-middle">{apps.length.toString().padStart(2, '0')}</span> RELEASED
			</p>
		</div>
	</div>
</section>

<section class="relative pb-24 md:pb-28 paper-grain">
	<div class="max-w-[1400px] mx-auto px-6 md:px-10">
		<ul class="border-t border-ink/15">
			{#each appList as app}
				<li>
					<a
						href={appHref(app)}
						class="group relative grid md:grid-cols-12 gap-3 md:gap-10 py-10 md:py-12 border-b border-ink/15 transition-colors hover:bg-cream-100/60"
					>
						<div class="md:col-span-7 md:col-start-1">
							<h2 class="font-display text-[28px] md:text-[34px] leading-[1.1] tracking-hyper text-ink group-hover:text-sakura transition-colors">
								{app.name}
							</h2>
							<div class="mt-4 flex flex-wrap items-center gap-2">
								<span class={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[10px] tracking-[0.18em] ${ageChipClass(app.targetAge)}`}>
									対象年齢 {app.targetAge}
								</span>
								<span class="inline-flex items-center px-2.5 py-1 rounded-full border border-ink/15 font-mincho text-[11px] text-ink/70">
									{app.collectingData}
								</span>
							</div>
						</div>

						<div class="md:col-span-5 flex flex-col justify-between gap-6 md:items-end md:text-right">
							<p class="font-mincho text-[14px] md:text-[15px] leading-[2] text-ink/75 max-w-md">
								{#if app.description}
									{app.description}
								{:else}
									<span class="text-ink/40">説明文は準備中。</span>
								{/if}
							</p>
							<span class="inline-flex items-center gap-2 font-mincho text-[13px] text-ink/85 group-hover:text-sakura transition-colors">
								詳細を見る
								<svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M5 12h14M13 5l7 7-7 7" />
								</svg>
							</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>

		<div class="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
			<p class="md:col-span-3 font-mincho text-sm tracking-[0.2em] text-ink/55">利用にあたって</p>
			<div class="md:col-span-9 font-mincho text-[14px] md:text-[15px] leading-[2] text-ink/80 max-w-3xl">
				<p>
					いずれのアプリも、ダウンロードと使用をもって
					<a href="{base}/terms-of-service" class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">利用規約</a>
					および
					<a href="{base}/privacy-policy" class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">プライバシーポリシー</a>
					に同意したものとみなします。アプリ個別の対象年齢・データ収集方針は、各アプリのページに記載しています。
				</p>
				<p class="mt-4 text-ink/60">
					お問い合わせ：
					<a href="mailto:support-apps@bitboxx.co.jp" class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">
						support-apps@bitboxx.co.jp
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
