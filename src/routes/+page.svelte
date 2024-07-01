<script>
    import BadgeComponent from '$lib/svelte/BadgeComponent.svelte';
import Input from '$lib/svelte/Input.svelte';
    import Pill from '$lib/svelte/Pill.svelte';
    import PixelXl from '$lib/svelte/devices/PixelXl.svelte';
</script>

<PixelXl>
    <div class="w-full h-full bg-neutral-800">
        <div class="pt-10 px-2">
            <Pill size="lg" colour="blue">Test</Pill>

            <Input placeholder="Search Persons..." />

            <BadgeComponent size="sm">Test</BadgeComponent>
            <BadgeComponent>Test</BadgeComponent>
            <BadgeComponent size="lg">Test</BadgeComponent>
        </div>
    </div>
</PixelXl>
