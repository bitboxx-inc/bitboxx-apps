<script lang="ts">

  import {apps} from "$lib/apps";

  const appList = apps
</script>

<div>
    <span class="text-2xl">現在リリース済みのアプリ: {apps.length} 件</span>

    <ul class="mt-4">
        {#each appList as app}
            <li><a href="/{app.id}">{app.name}</a></li>
        {/each}
    </ul>
</div>
