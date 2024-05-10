<script lang="ts">
    import { transformDeviceSize } from '$lib/modules/device.js';
    import type {
        DeviceSize,
        IpadColour,
        IpadYear
    } from '$lib/types/device.js';

    export let year: IpadYear = '2018';
    export let size: DeviceSize = 'base';
    export let landscape: boolean = false;
    export let colour: IpadColour | undefined = undefined;
    export { className as class };

    let className: string = '';
    let width: number;
    let height: number;

    const createClassList = () => {
        let defaultClasses: string =
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
        let transforms: string = `${landscape ? '-rotate-90' : ''} ${transformDeviceSize(size)}`;

        return `${defaultClasses} ${transforms} ${className}`;
    };

    const createDeviceClassList = () => {
        const device: string =
            year === '2017' ? 'device-ipad-pro-2017' : 'device-ipad-pro';
        const deviceColour: string =
            year === '2017' ? `device-${colour}`
            : colour === 'spacegray' ? 'device-spacegray'
            : 'device-silver';

        return `device ${device} ${deviceColour}`;
    };
</script>

<div class={createClassList()}>
    <div class={createDeviceClassList()}>
        <div class="device-frame">
            <div
                class="device-screen overflow-hidden"
                bind:clientWidth={width}
                bind:clientHeight={height}
            >
                <div
                    class="
                    {landscape ? 'rotate-90' : ''}
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style="width: {landscape ? height : width}px; height: {(
                        landscape
                    ) ?
                        width
                    :   height}px"
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
        <div class="device-home"></div>
    </div>
</div>

<style>
    @import '../../css/devices.css';

    .device-ipad-pro {
        height: 778px;
        width: 560px;
    }

    .device-ipad-pro .device-frame {
        background: #0d0d0d;
        border-radius: 36px;
        box-shadow:
            inset 0 0 0 1px #babdbf,
            inset 0 0 1px 3px #e2e3e4;
        height: 778px;
        padding: 27px;
        width: 560px;
    }

    .device-ipad-pro .device-screen {
        border: 2px solid #121212;
        border-radius: 11px;
        height: 724px;
        width: 506px;
    }

    .device-ipad-pro .device-btns::after,
    .device-ipad-pro .device-btns::before {
        background: #babdbf;
        content: '';
        position: absolute;
    }

    .device-ipad-pro .device-btns::after {
        height: 2px;
        right: 40px;
        top: -2px;
        width: 36px;
    }

    .device-ipad-pro .device-btns::before {
        box-shadow: 0 37px #babdbf;
        height: 32px;
        right: -2px;
        top: 63px;
        width: 2px;
    }

    .device-ipad-pro .device-sensors::after,
    .device-ipad-pro .device-sensors::before {
        content: '';
        position: absolute;
    }

    .device-ipad-pro .device-sensors::after {
        background: #1a1a1a;
        border-radius: 17px;
        box-shadow:
            -20px 0 #1a1a1a,
            70px 0 #1a1a1a;
        height: 10px;
        left: 50%;
        margin-left: -30px;
        top: 12px;
        width: 10px;
    }

    .device-ipad-pro .device-sensors::before {
        background: radial-gradient(
                farthest-corner at 20% 20%,
                #6074bf 0,
                transparent 40%
            ),
            radial-gradient(
                farthest-corner at 80% 80%,
                #513785 0,
                #24555e 20%,
                transparent 50%
            );
        border-radius: 50%;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.05);
        height: 6px;
        left: 50%;
        margin-left: -3px;
        top: 14px;
        width: 6px;
    }

    .device-ipad-pro.device-spacegray .device-frame {
        box-shadow:
            inset 0 0 0 1px #6a6d70,
            inset 0 0 1px 3px #83878a;
    }

    .device-ipad-pro.device-spacegray .device-btns::after,
    .device-ipad-pro.device-spacegray .device-btns::before {
        background: #6a6d70;
    }

    .device-ipad-pro.device-spacegray .device-btns::before {
        box-shadow: 0 37px #6a6d70;
    }

    .device-ipad-pro-2017 {
        height: 804px;
        width: 560px;
    }

    .device-ipad-pro-2017 .device-frame {
        background: #fff;
        border-radius: 38px;
        box-shadow:
            inset 0 0 0 2px #c8cacb,
            inset 0 0 0 6px #e2e3e4;
        height: 804px;
        padding: 62px 25px;
        width: 560px;
    }

    .device-ipad-pro-2017 .device-screen {
        border: 2px solid #222;
        border-radius: 2px;
        height: 680px;
        width: 510px;
    }

    .device-ipad-pro-2017 .device-home {
        border: 2px solid #c8cacb;
        border-radius: 50%;
        bottom: 17px;
        height: 34px;
        left: 50%;
        margin-left: -17px;
        position: absolute;
        width: 34px;
    }

    .device-ipad-pro-2017 .device-sensors {
        background: #666;
        border-radius: 50%;
        height: 10px;
        left: 50%;
        margin-left: -5px;
        margin-top: -5px;
        position: absolute;
        top: 34px;
        width: 10px;
    }

    .device-ipad-pro-2017.device-gold .device-frame {
        box-shadow:
            inset 0 0 0 2px #e4b08a,
            inset 0 0 0 6px #f7e8dd;
    }

    .device-ipad-pro-2017.device-gold .device-header {
        border-color: #e4b08a;
    }

    .device-ipad-pro-2017.device-rosegold .device-frame {
        box-shadow:
            inset 0 0 0 2px #f6a69a,
            inset 0 0 0 6px #facfc9;
    }

    .device-ipad-pro-2017.device-rosegold .device-home {
        border-color: #f6a69a;
    }

    .device-ipad-pro-2017.device-spacegray .device-frame {
        background: #222;
        box-shadow:
            inset 0 0 0 2px #818187,
            inset 0 0 0 6px #9b9ba0;
    }

    .device-ipad-pro-2017.device-spacegray .device-home {
        border-color: #818187;
    }
</style>
