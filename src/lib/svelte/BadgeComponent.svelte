<script lang="ts">
    import type { BadgeColour, BadgeSize } from '$lib/types/badge.js';
    import { match } from 'ts-pattern';

    let className: string = '';

    export let colour: BadgeColour = 'grey';
    export let size: BadgeSize = 'base';
    export { className as class };

    let getCssColours = (): string => {
        return match(colour)
            .returnType<string>()
            .with(
                'red',
                'danger',
                () => 'bg-red-400/10 text-red-500 ring-red-400/20'
            )
            .with(
                'yellow',
                'warning',
                () => 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/20'
            )
            .with(
                'blue',
                'primary',
                () => 'bg-blue-400/10 text-blue-500 ring-blue-400/20'
            )
            .with(
                'green',
                'success',
                () => 'bg-green-400/10 text-green-500 ring-green-400/20'
            )
            .otherwise(
                () => 'bg-gray-200/10 text-gray-300/80 ring-gray-200/20'
            );
    };

    let getCssPadding = (): string => {
        return match(size)
            .returnType<string>()
            .with('sm', () => 'px-1.5 py-0.5 text-[0.7rem]')
            .with('lg', () => 'px-2.5 py-0.5 text-base')
            .otherwise(() => 'px-2 py-0.5 text-sm');
    };
</script>

<span
    class="inline-flex items-center rounded-md font-medium ring-1 ring-inset {className} {getCssPadding()} {getCssColours()}"
>
    <slot />
</span>
