<script lang="ts">
  export let id: string;
  export let name: string;
  export let images: string[] = [];
  export let description: string = "このアプリについて";

  export let targetAge: string = "ALL";
  export let collectingData: string = "サードパーティによるデータ収集";

  export let supportEmail: string = "support-apps@bitboxx.co.jp";
  export let privacyPolicy: string = "/privacy-policy";
  export let termOfService: string = "/terms-of-service";

  const appId = id;
  const appName = name;
  const appImages = images;
  const appDescription = description;

  function openAppPage(id: string) {
    window.open(`https://itunes.apple.com/jp/app/id${id}`, "_blank");
  }
</script>

<div class="max-w-lg mx-auto bg-white text-center">
    <span class="text-3xl font-bold text-gray-900">{appName}</span>

    <p class="mt-3 text-lg text-gray-700">
        {appDescription}
    </p>

    <!-- スクリーンショット -->
    <div class="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div class="flex space-x-4">
            {#each appImages as image}
                <img
                        class="w-48 h-auto rounded-lg shadow-md"
                        src={image}
                        alt="App Screenshot"
                />
            {/each}
        </div>
    </div>

    <!-- 対象年齢とデータ収集情報 -->
    <div class="mt-4 p-4 border-l-4 border-blue-500 bg-gray-50 text-left">
        <p><strong>対象年齢:</strong> {targetAge}</p>
        <p><strong>データ収集:</strong> {collectingData}</p>
    </div>

    <!-- プライバシーポリシー -->
    <div class="mt-4">
        ※アプリのダウンロードおよび使用は、
        <a href={termOfService} class="text-blue-600 hover:underline">
            利用規約
        </a>
        、および、
        <a href={privacyPolicy} class="text-blue-600 hover:underline">
            プライバシーポリシー
        </a>
        に同意したものとみなします。
    </div>

    <!-- App Store ダウンロードボタン -->
    <img
            class="mt-6 cursor-pointer mx-auto w-48"
            src="/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
            on:click={() => openAppPage(appId)}
            alt="App Store Badge"
    />

    <!-- サポートメール -->
    <div class="mt-4">
        <p class="text-gray-700">
            <strong>サポート:</strong>
            <a href={"mailto:" + supportEmail} class="text-blue-600 hover:underline">
                {supportEmail}
            </a>
        </p>
    </div>
</div>
