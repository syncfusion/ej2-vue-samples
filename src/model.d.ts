export interface Controls {
    directory: string;
    category?: string;
    name: string;
    uid: string;
    type: string;
    hideOnDevice: boolean;
    samples: Samples[];
}
export interface MyWindow extends Window {
    default: () => void;
    navigateSample: () => void;
    apiList: any;
    hashString: string;
}

export interface DestroyMethod extends HTMLElement {
    destroy: Function;
    ej2_instances: Object[];
    enableRtl: Boolean;
}

export interface Samples {
    url: string;
    uid: string;
    type: string;
    name: string;
    category: string;
}