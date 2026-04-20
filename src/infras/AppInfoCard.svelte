<script lang="ts">
	import { base } from '$app/paths';

	export let id: string;
	export let name: string;
	export let images: string[] = [];
	export let description: string = 'このアプリについて';

	export let targetAge: string = 'ALL';
	export let collectingData: string = 'サードパーティによるデータ収集';

	export let supportEmail: string = 'support-apps@bitboxx.co.jp';
	export let privacyPolicy: string = '/privacy-policy';
	export let termOfService: string = '/terms-of-service';

	$: appStoreUrl = `https://itunes.apple.com/jp/app/id${id}`;

	function ageChipClass(age: string) {
		if (age === 'R18') return 'bg-sakura/10 text-sakura border-sakura/30';
		if (age === 'R13') return 'bg-sun/15 text-ink border-sun/40';
		return 'bg-mint/20 text-ink border-mint/40';
	}
</script>

<article class="relative">
	<header class="relative pb-12 md:pb-16">
		<div class="grid md:grid-cols-12 gap-3 md:gap-10 items-end">
			<div class="md:col-span-2">
				<p class="font-mono text-[11px] tracking-[0.3em] text-ink/55">App.{id}</p>
			</div>
			<div class="md:col-span-7">
				<h1 class="font-display text-[40px] md:text-[64px] leading-[1.02] tracking-hyper text-ink">
					{name}<span class="text-sakura">.</span>
				</h1>
			</div>
			<div class="md:col-span-3 md:text-right flex md:justify-end flex-wrap gap-2">
				<span class={`inline-flex items-center px-2.5 py-1 rounded-full border font-mono text-[10px] tracking-[0.18em] ${ageChipClass(targetAge)}`}>
					対象年齢 {targetAge}
				</span>
			</div>
		</div>

		<p class="mt-10 md:mt-14 font-mincho text-[16px] md:text-[19px] leading-[2.1] text-ink/85 max-w-3xl">
			{description || 'このアプリの詳細は順次追記します。'}
		</p>
	</header>

	{#if images.length > 0}
		<section class="relative -mx-6 md:-mx-10 mb-16 md:mb-20">
			<div class="overflow-x-auto scrollbar-soft">
				<div class="flex gap-5 md:gap-7 px-6 md:px-10 pb-3">
					{#each images as image, i}
						<figure class="shrink-0 w-44 md:w-56">
							<img
								class="w-full h-auto rounded-[20px] border border-ink/10"
								style="box-shadow: 0 24px 48px -28px rgba(17,16,20,0.35);"
								src={image}
								alt="{name} スクリーンショット {i + 1}"
							/>
							<figcaption class="mt-3 font-mono text-[10px] tracking-[0.22em] text-ink/45">
								SHOT {(i + 1).toString().padStart(2, '0')}
							</figcaption>
						</figure>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<section class="grid md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-10 border-t border-ink/15">
		<p class="md:col-span-3 font-mincho text-sm tracking-[0.2em] text-ink/55">入手</p>
		<div class="md:col-span-9">
			<a
				href={appStoreUrl}
				target="_blank"
				rel="noreferrer"
				class="inline-block transition-transform duration-300 hover:-translate-y-0.5"
				aria-label="App Store で入手"
			>
				<img
					class="h-12 md:h-14 w-auto"
					src="{base}/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
					alt="App Store からダウンロード"
				/>
			</a>
			<p class="mt-5 font-mincho text-[13px] leading-[2] text-ink/65 max-w-xl">
				ダウンロードと使用をもって、
				<a href={termOfService} class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">利用規約</a>
				および
				<a href={privacyPolicy} class="underline underline-offset-4 decoration-ink/30 hover:text-sakura transition-colors">プライバシーポリシー</a>
				に同意したものとみなします。
			</p>
		</div>
	</section>

	<dl class="border-t border-ink/15">
		<div class="grid grid-cols-12 gap-3 md:gap-10 py-6 md:py-7 border-b border-ink/15">
			<dt class="col-span-12 md:col-span-3 font-mincho text-sm md:text-base text-ink">対象年齢</dt>
			<dd class="col-span-12 md:col-span-9 font-mincho text-[14px] md:text-[15px] leading-[2] text-ink/85">{targetAge}</dd>
		</div>
		<div class="grid grid-cols-12 gap-3 md:gap-10 py-6 md:py-7 border-b border-ink/15">
			<dt class="col-span-12 md:col-span-3 font-mincho text-sm md:text-base text-ink">データ収集</dt>
			<dd class="col-span-12 md:col-span-9 font-mincho text-[14px] md:text-[15px] leading-[2] text-ink/85">{collectingData}</dd>
		</div>
		<div class="grid grid-cols-12 gap-3 md:gap-10 py-6 md:py-7 border-b border-ink/15">
			<dt class="col-span-12 md:col-span-3 font-mincho text-sm md:text-base text-ink">サポート</dt>
			<dd class="col-span-12 md:col-span-9">
				<a href={'mailto:' + supportEmail} class="font-mincho text-[14px] md:text-[15px] text-ink hover:text-sakura transition-colors break-all">
					{supportEmail}
				</a>
			</dd>
		</div>
	</dl>

	<nav class="mt-12 md:mt-16">
		<a href="{base}/" class="group inline-flex items-center gap-2 font-mincho text-[13px] text-ink/70 hover:text-sakura transition-colors">
			<svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M19 12H5M11 19l-7-7 7-7" />
			</svg>
			アプリ一覧へ戻る
		</a>
	</nav>
</article>
