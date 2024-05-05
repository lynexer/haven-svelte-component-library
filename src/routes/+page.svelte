<script>
    import Badge from '$lib/svelte/BadgeComponent.svelte';
    import Spinner from '$lib/svelte/Spinner.svelte';
    import Ipad from '$lib/svelte/devices/Ipad.svelte';
</script>

<Ipad landscape size="xl" colour="silver" year="2018">
    <div class="text-white bg-gray-300 h-full">
        <Badge colour="warning">Test</Badge>
        <Spinner size="base" colour="pink" />
    </div>
</Ipad>
