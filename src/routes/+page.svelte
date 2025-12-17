<script lang="ts">

  const apps = [
    {id: '6740538794', name: '奇数偶数どっち', link: '/odd-or-even'},
    {id: '6749750301', name: '住所で郵便番号検索', link: '/postalcode-address'}
  ]
</script>

<div>
    <span class="text-2xl">現在リリース済みのアプリ: {apps.length} 件</span>

    <ul class="mt-4">
        {#each apps as app}
            <li><a href={app.link}>{app.name}</a></li>
        {/each}
    </ul>
</div>
