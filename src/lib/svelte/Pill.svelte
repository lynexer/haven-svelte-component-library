<script lang="ts">
    import type { PillColour, PillSize } from '$lib/types/pill.js';
    import { match } from 'ts-pattern';

    export let colour: PillColour = 'grey';
    export let size: PillSize = 'base';

    let getCssColours = (): string => {
        return match(colour)
            .returnType<string>()
            .with('blue', 'primary', () => 'bg-blue-500')
            .with('red', 'danger', () => 'bg-red-500')
            .with('green', 'success', () => 'bg-green-500')
            .with('amber', 'yellow', 'warning', () => 'bg-amber-500')
            .with('pink', () => 'bg-pink-500')
            .with('indigo', () => 'bg-indigo-500')
            .with('purple', () => 'bg-purple-500')
            .with('teal', () => 'bg-teal-500')
            .with('cyan', () => 'bg-cyan-500')
            .otherwise(() => 'bg-gray-900');
    };

    let getCssPadding = (): string => {
        return match(size)
            .returnType<string>()
            .with('sm', () => 'px-2 py-1')
            .with('lg', () => 'px-4 py-2')
            .otherwise(() => 'py-1.5 px-3');
    };
</script>

<div
    class="relative grid select-none items-center whitespace-nowrap rounded-full font-sans text-xs font-bold uppercase text-white {getCssPadding()} {getCssColours()}"
>
    <span>
        <slot />
    </span>
</div>
