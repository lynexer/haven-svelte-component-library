<script>
    import Pill from '$lib/svelte/Pill.svelte';
    import PixelXl from '$lib/svelte/devices/PixelXl.svelte';
</script>

<PixelXl>
    <div class="w-full h-full bg-red-50">
        <div class="pt-10 px-2">
            <Pill size="lg" colour="blue">Test</Pill>
        </div>
    </div>
</PixelXl>
