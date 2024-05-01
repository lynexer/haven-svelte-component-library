<script lang="ts">
    import type { IconProp } from '$lib/types/icon.js';

    let iconResult = '';
    let classList = '';
    export { classList as class };
    export let icon: IconProp;

    const parseIcon = () => {
        if (Array.isArray(icon) && icon.length === 2) {
            return { prefix: icon[0], iconName: icon[1] };
        }

        if (typeof icon === 'string') {
            return { prefix: 'fas', iconName: icon };
        }

        return { prefix: 'fas', iconName: 'fa-question' };
    };

    const normalize = ({
        prefix,
        iconName
    }: {
        prefix: string;
        iconName: string;
    }) => {
        return `${prefix} fa-${iconName}`;
    };

    iconResult = normalize(parseIcon());
</script>

<i class="{iconResult} {classList}"></i>
