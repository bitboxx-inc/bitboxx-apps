<script lang="ts">
    import Card, {Content as CardContent} from '@smui/card';

    const appId = '6740538794'
    const appName = '奇数偶数どっち'

    function openAppPage(appId: string) {
        window.open(`https://itunes.apple.com/jp/app/id${appId}`, "_blank"); // 新しいタブで開く
    }
</script>

<span class="text-3xl">{appName}</span>

<p>
    カンタン入力で、奇数か偶数かすぐわかる！
</p>
<a href="https://github.com/bitboxx-inc/bitboxx-apps/blob/main/privacy-policy/%E5%A5%87%E6%95%B0%E5%81%B6%E6%95%B0%E3%81%A9%E3%81%A3%E3%81%A1.md" target="_blank">プライバシーポリシー</a>

<img class="mt-4 pointer"
     src="/JP/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
     on:click={() => openAppPage(appId)}
     alt="App Icon">