<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <ejs-filemanager
            id="filemanager"
            ref="fileManager"
            :ajaxSettings="ajaxSettings"
            :cssClass="cssClass"
            :height="height"
            :largeIconsTemplate="'largeTpl'"
            :navigationPaneTemplate="navigationPaneTemplate"
            :detailsViewSettings="detailsViewSettings"
            :menuOpen="onMenuOpen"
            >

          <!-- Large Icons Template -->
          <template v-slot:largeTpl="{ data }">
            <div class="custom-icon-card">
              <div class="file-header">
                <div class="left-info">
                  <div v-if="data.isFile" :class="['e-list-icon', getFileIconCssClass(data)]"></div>
                  <div class="file-name" :title="data.name">{{ data.name }}</div>
                </div>

                <ejs-dropdownbutton
                  class="e-caret-hide filemanager-dropdown-button"
                  iconCss="e-icons e-more-vertical-1"
                  :items="actionMenuItems(data)"
                  @select="(args) => onActionSelectVue(args, data)"
                />
              </div>

              <div :class="getBackgroundCss(data)" :title="data.name"></div>

              <div class="file-formattedDate">
                <template v-if="data.dateCreated">
                  Created on {{
                    new Date(data.dateCreated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  }}
                </template>
              </div>
            </div>
          </template>
        </ejs-filemanager>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample showcases how to customize the Syncfusion File Manager's control with template support in the Navigation pane, Large icons and Details view.
      </p>
    </div>

    <div id="description">
      <p>
        The navigationPaneTemplate renders the nodes with icons based on folder names, while the largeIconsTemplate displays files with styled backgrounds and an action menu on each file/folder.
        The detailsViewSettings template shows file information like name, size, and modified date in columns.
        File operations such as Open, Delete, Download, and Refresh are handled through a dropdown menu on each item. Selecting a menu option invokes the corresponding File Manager methods (openFile, downloadFiles, deleteFiles, and refreshFiles).
      </p>
    </div>
  </div>
</template>

<script>
import {
  FileManagerComponent,
  NavigationPane,
  Toolbar,
  DetailsView
} from '@syncfusion/ej2-vue-filemanager';
import { DropDownButtonComponent as EjsDropDownButton } from '@syncfusion/ej2-vue-splitbuttons';
import { createApp, ref, onMounted } from 'vue';

const hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

const app = createApp();
const demoNavigationPaneTemplate = app.component('navigationPaneTemplate', {
  template: `
    <div class="e-nav-pane-node" style="display:inline-flex;align-items:center;">
      <span class="e-icons" :class="getIconsForFolders"></span>
      <span class="folder-name" style="margin-left:8px;">{{ data?.name }}</span>
    </div>
  `,
  data() {
    return { data: {} };
  },
  computed: {
    getIconsForFolders(item) {
      const iconMap = {
        Files: 'e-folder',
        Documents: 'e-file-document',
        Downloads: 'e-download',
        Pictures: 'e-thumbnail',
        Music: 'e-file-format',
        Videos: 'e-video',
        Employees: 'e-export-png',
        Food: 'e-export-png',
        Nature: 'e-export-png'
      };
      return iconMap[item.data.name] || 'e-folder';
    }
  }
});
const fileManagerInstance = ref(null);
let lastOpenedDropdown = null;
const buttontemplateVue = createApp().component('demo', {
  components: {
    'ejs-dropdownbutton': EjsDropDownButton,
  },
  template: `
    <ejs-dropdownbutton
      ref="dropdownbutton"
      :items="actionMenuItems(data)"
      iconCss="e-icons e-more-vertical-1"
      class="e-caret-hide filemanager-dropdown-button"
      @beforeOpen="handleBeforeOpen"
      @beforeClose="handleBeforeClose"
      @select="(args) => onActionSelectVue(args, data)">
    </ejs-dropdownbutton>
  `,
  data() {
    return {
      dropdownInstance: null,
      actionItems: [
        { text: 'Open', iconCss: 'e-icons e-folder-open' },
        { text: 'Download', iconCss: 'e-icons e-download' },
        { text: 'Refresh', iconCss: 'e-icons e-refresh' },
        { text: 'Delete', iconCss: 'e-icons e-trash' },
      ],
    };
  },
  methods: {
    actionMenuItems(item) {
      return item?.isFile
        ? this.actionItems.filter((i) => i.text !== 'Open')
        : this.actionItems;
    },
    handleBeforeOpen(args) {
      if (lastOpenedDropdown && lastOpenedDropdown !== this.$refs.dropdownbutton.ej2Instances) 
      {
        lastOpenedDropdown.closePopup();
      }
      lastOpenedDropdown = this.$refs.dropdownbutton.ej2Instances;
    },
    onActionSelectVue(args, item) {
      const action = args?.item?.text || '';
      const fm = fileManagerInstance.value;
      if (!fm) return;

      switch (action) {
        case 'Open':
          fm.openFile(item.name);
          break;
        case 'Download':
          fm.downloadFiles([item.name]);
          break;
        case 'Refresh':
          fm.refreshFiles();
          break;
        case 'Delete':
          fm.deleteFiles([item.name]);
          break;
      }
      if (lastOpenedDropdown) {
        lastOpenedDropdown.closePopup();
      }
    },
  },
});

const buttonTemplate = function () {
  return {
    template: buttontemplateVue,
  };
};
const formatSize = (bytes) => {
  if (!bytes) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;
  let value = bytes;

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index++;
  }

  return `${value.toFixed(1)} ${units[index]}`;
};

const SizeColTpl = createApp().component('SizeColTpl', {
  template: `<div>{{ data?.isFile ? readableSize : '-' }}</div>`,
  data() {
    return {
      data: {},
    };
  },
  computed: {
    readableSize() {
      return formatSize(this.data?.size || 0);
    },
  },
});
const sizeTemplate = function () {
  return {
    template: SizeColTpl,
  };
};

export default {
  name: 'FileManagerTemplates',
  components: {
    'ejs-filemanager': FileManagerComponent,
    'ejs-dropdownbutton': EjsDropDownButton
  },
  data() {
    return {
      navigationPaneTemplate: function () {
        return { template: demoNavigationPaneTemplate };
      },
      ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + 'api/FileManager/GetImage'
      },
      detailsViewSettings: {
        columns: [
          {
            field: 'name',
            headerText: 'File Name',
            minWidth: 120,
            width: 'auto',
            customAttributes: { class: 'e-fe-grid-name' },
            template: '${name}',
          },
          {
            field: 'size',
            headerText: 'Size',
            width: 120,
            template: sizeTemplate,
          },
          {
            field: '_fm_modified',
            headerText: 'Date Modified',
            minWidth: 50,
            width: '190',
            format: 'MM/dd/yyyy hh:mm a',
          },
          {
            headerText: 'Actions',
            template: buttonTemplate,
          },
        ],
      },
      cssClass: 'e-fm-template-sample',
      height: '600px',
      actionItems: [
        { text: 'Open', iconCss: 'e-icons e-folder-open' },
        { text: 'Download', iconCss: 'e-icons e-download' },
        { text: 'Refresh', iconCss: 'e-icons e-refresh' },
        { text: 'Delete', iconCss: 'e-icons e-trash' }
      ]
    };
  },
  methods: {
    onMenuOpen(args) {
      args.cancel = true;
    },

    onActionSelect(action, item) {
      const fm = this.$refs.fileManager?.ej2Instances;
      if (!fm) return;
      switch (action) {
        case 'Open':     fm.openFile(item.name); break;
        case 'Download': fm.downloadFiles([item.name]); break;
        case 'Refresh':  fm.refreshFiles(); break;
        case 'Delete':   fm.deleteFiles([item.name]); break;
      }
    },

    onActionSelectVue(args, item) {
      this.onActionSelect(args?.item?.text || '', item);
    },

    actionMenuItems(item) {
      return item?.isFile ? this.actionItems.filter(i => i.text !== 'Open') : this.actionItems;
    },

    formatSize(bytes) {
      if (!bytes) return '0 B';
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
      let i = 0;
      let num = bytes;
      while (num >= 1024 && i < sizes.length - 1) {
        num /= 1024;
        i++;
      }
      return `${num.toFixed(1)} ${sizes[i]}`;
    },

    getBackgroundCss(item) {
      const NamedFileBackgrounds = {
        'Adam.png': 'background-Adam',
        'Andrew.png': 'background-Andrew',
        'Ellie.png': 'background-Ellie',
        'Jameson.png': 'background-Jameson',
        'John.png': 'background-John',
        'Josie.png': 'background-Josie',
        'Apple pie.png': 'background-Applepie',
        'Bread.png': 'background-Bread',
        'Doughnut.png': 'background-Doughnut',
        'Nuggets.png': 'background-Nuggets',
        'Sugar cookie.png': 'background-Sugarcookie',
        'bird.jpg': 'background-bird',
        'sea.jpg': 'background-sea',
        'seaview.jpg': 'background-seaview',
        'snow.jpg': 'background-snow',
        'snowfall.jpg': 'background-snowfall'
      };

      const ExtensionBackgrounds = {
        jpg: 'background-jpg',
        jpeg: 'background-jpg',
        png: 'background-png',
        pptx: 'background-pptx',
        pdf: 'background-pdf',
        mp4: 'background-video',
        mp3: 'background-audio',
        docx: 'background-doc',
        txt: 'background-txt',
        xlsx: 'background-xlsx'
      };

      if (!item.isFile) return 'file-icon background-folder';
      if (NamedFileBackgrounds[item.name]) return `file-icon ${NamedFileBackgrounds[item.name]}`;
      const ext = (item.name.split('.').pop() || '').toLowerCase();
      return `file-icon ${ExtensionBackgrounds[ext] || 'background-default'}`;
    },

    // Icon for file types (used in large icon header)
    getFileIconCssClass(item) {
      if (!item.isFile) return '';
      const extensionMap = {
        jpg: 'image',
        jpeg: 'image',
        png: 'image',
        gif: 'image',
        mp3: 'music',
        wav: 'music',
        mp4: 'video',
        avi: 'video',
        doc: 'doc',
        docx: 'docx',
        ppt: 'pptx',
        pptx: 'pptx',
        xls: 'xlsx',
        xlsx: 'xlsx',
        txt: 'txt',
        js: 'js',
        css: 'css',
        html: 'html',
        exe: 'exe',
        msi: 'msi',
        php: 'php',
        xml: 'xml',
        zip: 'zip',
        rar: 'rar',
        pdf: 'pdf'
      };
      const extension = (item.name.split('.').pop() || '').toLowerCase();
      const iconType = extensionMap[extension] || 'unknown';
      return `e-fe-${iconType}`;
    },

    // Icon for navigation pane folders
    getIconsForFolders(item) {
      const iconMap = {
        Files: 'e-folder',
        Documents: 'e-file-document',
        Downloads: 'e-download',
        Pictures: 'e-thumbnail',
        Music: 'e-file-format',
        Videos: 'e-video',
        Employees: 'e-export-png',
        Food: 'e-export-png',
        Nature: 'e-export-png'
      };
      return iconMap[item.name] || 'e-folder';
    }
  },
  mounted() {
    fileManagerInstance.value = this.$refs.fileManager?.ej2Instances;
  },
  provide: {
    filemanager: [NavigationPane, DetailsView, Toolbar]
  }
};
</script>

<style>

/* Styles ported and adjusted for Vue template usage */

.e-filemanager.e-fm-template-sample .e-list-icon {
  height: 20px !important;
  margin: 0 !important;
  width: 20px !important;
}

.e-dropdown-btn.filemanager-dropdown-button {
  border: none;
  margin-right: -6px;
  box-shadow: none;
  background: transparent;
}
.e-dropdown-btn.filemanager-dropdown-button:hover,
.e-dropdown-btn.filemanager-dropdown-button.e-btn:hover {
  background: #d4d4d4;
}

.fluent2-dark .e-dropdown-btn.filemanager-dropdown-button:hover,
.fluent2-dark .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.fluent-dark .e-dropdown-btn.filemanager-dropdown-button:hover,
.fluent-dark .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.material3-dark .e-dropdown-btn.filemanager-dropdown-button:hover,
.material3-dark .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.tailwind3-dark .e-dropdown-btn.filemanager-dropdown-button:hover,
.tailwind3-dark .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.fluent2-highcontrast .e-dropdown-btn.filemanager-dropdown-button:hover,
.fluent2-highcontrast .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.highcontrast .e-dropdown-btn.filemanager-dropdown-button:hover,
.highcontrast .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover,
.bootstrap5\.3-dark .e-dropdown-btn.filemanager-dropdown-button:hover,
.bootstrap5\.3-dark .e-dropdown-btn.filemanager-dropdown-button.e-btn:hover {
  background: #3d3d3d;
}

.bootstrap5\.3 .e-dropdown-btn.filemanager-dropdown-button {
  color: #242424;
}

.e-filemanager.e-fm-template-sample .e-grid .e-gridheader .e-fe-grid-icon + .e-rowcell,
.e-filemanager .e-grid .e-gridheader .e-fe-grid-icon + .e-headercell,
.e-filemanager .e-grid .e-gridcontent .e-fe-grid-icon + .e-rowcell,
.e-filemanager .e-grid .e-gridcontent .e-fe-grid-icon + .e-headercell {
  padding-left: 6px;
}

.e-fm-template-sample .e-nav-pane-node .e-icons {
  font-size: larger;
}

.e-fm-template-sample .custom-icon-card {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.e-fm-template-sample .file-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.e-fm-template-sample .left-info {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
}

.e-fm-template-sample .file-name {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.e-fm-template-sample .file-formattedDate {
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
  font-weight: 600;
}

.e-filemanager.e-fm-template-sample.e-fe-mobile .e-large-icons .e-list-parent .e-list-item {
  height: 185px;
  width: 100px;
  margin: 8px 4px;
}
.e-filemanager.e-fm-template-sample.e-fe-mobile .e-large-icons .e-list-parent .e-list-item .file-icon {
  width: 150px;
  height: 90px;
}
.e-filemanager.e-fm-template-sample.e-fe-mobile .e-large-icons .e-list-parent .e-list-item .file-name {
  max-width: 100px;
}

.e-filemanager.e-fm-template-sample .e-large-icons .e-list-item {
  height: 240px;
  width: 210px;
}
.e-filemanager.e-fm-template-sample .e-large-icons .e-list-parent .e-list-item .file-icon {
  width: 190px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin-bottom: 10px;
}

[id^="templateDiv_"] {
  display: contents;
}

/* Background images: adjust paths to your project if needed */
.background-folder { background-image: url('../../styles/images/folders.svg'); }
.background-png { background-image: url('../../styles/images/image-png.svg'); }
.background-pptx { background-image: url('../../styles/images/pptx.png'); }
.background-jpg { background-image: url('../../styles/images/image-jpg.svg'); }
.background-doc { background-image: url('../../styles/images/docx.png'); }
.background-pdf { background-image: url('../../styles/images/pdfphoto.png'); }
.background-txt { background-image: url('../../styles/images/text.png'); }
.background-video { background-image: url('../../styles/images/video.png'); }
.background-audio { background-image: url('../../styles/images/music.png'); }
.background-xlsx { background-image: url('../../styles/images/xlsx.png'); }

/* People */
.background-Adam { background-image: url('../../styles/images/Adam.png'); }
.background-Andrew { background-image: url('../../styles/images/Andrew.png'); }
.background-Ellie { background-image: url('../../styles/images/Ellie.png'); }
.background-Jameson { background-image: url('../../styles/images/Jameson.png'); }
.background-John { background-image: url('../../styles/images/John.png'); }
.background-Josie { background-image: url('../../styles/images/Josie.png'); }

/* Food */
.background-Applepie { background-image: url('../../styles/images/Apple pie.png'); }
.background-Bread { background-image: url('../../styles/images/Bread.png'); }
.background-Doughnut { background-image: url('../../styles/images/Doughnut.png'); }
.background-Nuggets { background-image: url('../../styles/images/Nuggets.png'); }
.background-Sugarcookie { background-image: url('../../styles/images/Sugar cookie.png'); }

/* Nature */
.background-bird { background-image: url('../../styles/images/bird.jpg'); }
.background-sea { background-image: url('../../styles/images/sea.jpg'); }
.background-seaview { background-image: url('../../styles/images/seaview.jpg'); }
.background-snow { background-image: url('../../styles/images/snow.jpg'); }
.background-snowfall { background-image: url('../../styles/images/snowfall.jpg'); }
</style>