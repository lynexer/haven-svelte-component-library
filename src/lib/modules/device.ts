import type { DeviceSize } from '$lib/types/device.js';

const sizeMapping = {
    xs: 'scale-50',
    sm: 'scale-75',
    base: 'scale-100',
    lg: 'scale-125',
    xl: 'scale-150'
};

export const transformDeviceSize = (size: DeviceSize) => {
    return sizeMapping[size] ?? sizeMapping.base;
};
