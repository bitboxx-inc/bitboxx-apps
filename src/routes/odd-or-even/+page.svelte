<script lang="ts">
    const appId = '6740538794';
    const appName = '奇数偶数どっち';
    const privacyPolicy = '/privacy-policy';
    const supportEmail = 'support-apps@bitboxx.co.jp';

    // 画像のパスを配列に格納
    const appImages = [
        "/app/odd-or-even/1_0.png",
        "/app/odd-or-even/2_0.png",
        "/app/odd-or-even/3_0.png",
    ];

    function openAppPage(appId: string) {
        window.open(`https://itunes.apple.com/jp/app/id${appId}`, "_blank");
    }
</script>

<div class="max-w-lg mx-auto bg-white text-center">
    <span class="text-3xl font-bold text-gray-900">{appName}</span>

    <p class="mt-3 text-lg text-gray-700">
        カンタン入力で、奇数か偶数かすぐわかる！
    </p>

    <!-- アプリ画像の横スクロールビュー -->
    <div class="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div class="flex space-x-4">
            {#each appImages as image}
                <img class="w-48 h-auto rounded-lg shadow-md" src="{image}" alt="App Screenshot">
            {/each}
        </div>
    </div>

    <!-- 対象年齢とデータ収集情報 -->
    <div class="mt-4 p-4 border-l-4 border-blue-500 bg-gray-50 text-left">
        <p><strong>対象年齢:</strong> ALL</p>
        <p><strong>データ収集:</strong> なし</p>
    </div>

    <!-- プライバシーポリシー -->
    <div class="mt-4">
        ※アプリのダウンロードおよび使用は、<a href={privacyPolicy} class="text-blue-600 hover:underline">プライバシーポリシー</a>に同意したものとみなします。
    </div>

    <!-- App Store ダウンロードボタン -->
    <img class="mt-6 cursor-pointer mx-auto w-48"
         src="/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
         on:click={() => openAppPage(appId)}
         alt="App Icon">

    <!-- サポートメールアドレス -->
    <div class="mt-4">
        <p class="text-gray-700"><strong>サポート:</strong>
            <a href="mailto:{supportEmail}" class="text-blue-600 hover:underline">
                {supportEmail}
            </a>
        </p>
    </div>
</div>
