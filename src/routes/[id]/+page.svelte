<script lang="ts">
  import { findApp } from "$lib/apps";
  import { page } from "$app/stores";
  import AppInfoCard from "../../infras/AppInfoCard.svelte";

  // URL の /app/XXXX から XXXX を取る
  $: appId = $page.params.id;

  // データベース apps から検索
  $: app = findApp(appId);
</script>

{#if app}
    <AppInfoCard {...app} />
{:else}
    <p>アプリ情報が見つかりません</p>
{/if}
