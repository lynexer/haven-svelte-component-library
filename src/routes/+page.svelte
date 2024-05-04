<script>
    import Badge from '$lib/svelte/Badge.svelte';
import Ipad from '$lib/svelte/devices/Ipad.svelte';
</script>

<Ipad landscape size="xl" colour="silver" year="2018">
    <div class="text-white bg-gray-300 h-full">
        <Badge colour="warning">Test</Badge>
    </div>
</Ipad>
