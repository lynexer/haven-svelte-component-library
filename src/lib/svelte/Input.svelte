<script lang="ts">
    import type { IconProp } from '$lib/types/icon.js';
    import Icon from './Icon.svelte';

    let className: string = '';

    export let label: string = '';
    export let placeholder: string = '';
    export let type: string = 'text';
    export let icon: IconProp | undefined = undefined;
    export { className as class };
</script>

<div class="space-y-2 w-full">
    {#if label}
        <label
            for="email"
            class="block text-sm font-medium leading-6 text-white"
        >
            {label}
        </label>
    {/if}
    <div class="relative rounded-md shadow-sm">
        {#if icon}
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <Icon {icon} class="h-5 w-5 text-gray-400" />
            </div>
        {/if}

        <input
            {type}
            class="block w-full rounded-md border-0 py-1.5 {icon ? 'pl-10' : (
                ''
            )} text-white ring-1 ring-inset ring-neutral-700 focus:outline-none focus:ring-emerald-900 placeholder:text-gray-400 bg-neutral-950/40 sm:text-sm sm:leading-6 {className}"
            {placeholder}
        />
    </div>
</div>
