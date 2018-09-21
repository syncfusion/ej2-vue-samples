System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/"
    },
    map: {
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        vue: "https://unpkg.com/vue/dist/vue.min.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-splitbuttons":
        "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-vue-base": "syncfusion:ej2-vue-base/dist/ej2-vue-base.umd.min.js",
        "@syncfusion/ej2-vue-buttons": "syncfusion:ej2-vue-buttons/dist/ej2-vue-buttons.umd.min.js",
        "@syncfusion/ej2-vue-dropdowns": "syncfusion:ej2-vue-dropdowns/dist/ej2-vue-dropdowns.umd.min.js",
        "@syncfusion/ej2-vue-navigations": "syncfusion:ej2-vue-navigations/dist/ej2-vue-navigations.umd.min.js",
        
    }
});

System.import('index.js');