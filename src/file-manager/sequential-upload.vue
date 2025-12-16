<template>
  <div>
    <div class="control-section file-sequential">
      <div class="sample-container">
        <ejs-filemanager id="filemanager-sequential" :ajaxSettings="ajaxSettings" :uploadSettings="uploadSettings" :toolbarSettings="toolbarSettings" :contextMenuSettings="contextMenuSettings">
        </ejs-filemanager>
      </div>
    </div>

    <div id="action-description">
        <p>This sample showcases the File Manager's sequential upload feature. When enabled, files are uploaded one at a time in the order they were added, ensures sequencing and better control over network usage.</p>
    </div>

    <div id="description">
        <p>In this demo, a sequential upload is enabled by setting <a href="https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadsettingsmodel/#sequentialUpload" target="_blank">sequentialUpload</a> to <code>true</code> in the File Manager's upload settings. When enabled, files are uploaded one after another in the order they were added, helping preserve the intended sequence and manage bandwidth more effectively.</p>
    </div>
  </div>
</template>

<style>
.file-sequential .sample-container {
  margin: 10px 10px 10px 10px;
}
</style>

<script>
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

/**
 * File Manager Sequential Upload feature sample
 */
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
  components: {
    'ejs-filemanager': FileManagerComponent
  },
  data: function () {
    return {
      ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
      },
      uploadSettings: { sequentialUpload: true, directoryUpload: true },
      toolbarSettings: { items: [ 'NewFolder', 'Upload', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details' ]},
    };
  },
  provide: {
    filemanager: [NavigationPane, DetailsView, Toolbar]
  }
};
</script>