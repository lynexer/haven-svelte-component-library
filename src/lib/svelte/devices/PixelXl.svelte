<script lang="ts">
    import { transformDeviceSize } from '$lib/modules/device.js';
    import type { DeviceSize } from '$lib/types/device.js';

    export let size: DeviceSize = 'base';
    export let landscape: boolean = false;
    export { className as class };

    let className: string = '';
    let width: number;
    let height: number;

    const createClassList = (): string => {
        let defaultClasses: string =
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
        let transforms: string = `${landscape ? '-rotate-90' : ''} ${transformDeviceSize(size)}`;

        return `${defaultClasses} ${transforms} ${className}`;
    };
</script>

<div class={createClassList()}>
    <div class="device device-google-pixel-2-xl">
        <div class="device-frame">
            <div
                class="device-screen overflow-hidden"
                bind:clientWidth={width}
                bind:clientHeight={height}
            >
                <div
                    class="{landscape ? 'rotate-90' : (
                        ''
                    )} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style="
                        width: {landscape ? height : width}px;
                        height: {landscape ? width : height}px;
                    "
                >
                    <slot />
                </div>
            </div>
        </div>
        <div class="device-stripe"></div>
        <div class="device-header"></div>
        <div class="device-sensors"></div>
        <div class="device-btns"></div>
        <div class="device-power"></div>
    </div>
</div>

<style>
    @import '../../css/devices.css';

    .device-google-pixel-2-xl {
        height: 832px;
        width: 404px;
    }

    .device-google-pixel-2-xl .device-frame {
        background: #121212;
        border-radius: 36px;
        box-shadow:
            inset 0 0 0 2px #cfcfcf,
            inset 0 0 0 7px #9c9c9c;
        height: 832px;
        padding: 56px 22px;
        width: 404px;
    }

    .device-google-pixel-2-xl .device-screen {
        border-radius: 27px;
        height: 720px;
        width: 360px;
    }

    .device-google-pixel-2-xl .device-header {
        height: 832px;
        left: 50%;
        margin-left: -150px;
        position: absolute;
        top: 0;
        width: 300px;
    }

    .device-google-pixel-2-xl .device-header::after,
    .device-google-pixel-2-xl .device-header::before {
        background: #333;
        border-radius: 3px;
        content: '';
        height: 6px;
        left: 50%;
        margin-left: -73px;
        margin-top: -3px;
        position: absolute;
        width: 146px;
    }

    .device-google-pixel-2-xl .device-header::after {
        top: 24px;
    }

    .device-google-pixel-2-xl .device-header::before {
        bottom: 28px;
    }

    .device-google-pixel-2-xl .device-sensors {
        background: #333;
        border-radius: 7px;
        height: 14px;
        left: 54px;
        margin-top: -7px;
        position: absolute;
        top: 36px;
        width: 14px;
    }

    .device-google-pixel-2-xl .device-btns {
        background: #cfcfcf;
        height: 102px;
        position: absolute;
        right: -3px;
        top: 306px;
        width: 3px;
    }

    .device-google-pixel-2-xl .device-power {
        background: #cfcfcf;
        height: 58px;
        position: absolute;
        right: -3px;
        top: 194px;
        width: 3px;
    }
</style>
