<template>
    <div>
      <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :documentPath="data.filePath" :resourceUrl="resourceUrl" height="775px"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>
    </div>
  </template>
  <script>
    import { onMounted } from 'vue';
    import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
  
    export default {
      mounted: function () {
        this.setServiceUrl();
      },
  
      components: {
        'ejs-pdfviewer': PdfViewerComponent
      },
  
      data: function () {
        return {
          resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
        }
      },
  
      provide: {
        PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
      },
  
      methods: {
  
        setServiceUrl: function () {
          var viewer = this.$refs.pdfviewer.ej2Instances;
          if (this.data.isStandalone) {
            viewer.serviceUrl = "";
          } else {
            viewer.serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
          }
        },
  
        documentLoad: function (args) {
  
          var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  
          if (this.data.isReadOnlyMode) {
            viewer.textFieldSettings = {
              isReadOnly: true,
            };
  
            viewer.radioButtonFieldSettings = {
              isReadOnly: true,
            };
  
            viewer.DropdownFieldSettings = {
              isReadOnly: true,
            };
            viewer.checkBoxFieldSettings = {
              isReadOnly: true,
            };
            viewer.signatureFieldSettings = {
              isReadOnly: true,
            };
            viewer.initialFieldSettings = {
              isReadOnly: true,
            };
            viewer.listBoxFieldSettings = {
              isReadOnly: true,
            };
            viewer.passwordFieldSettings = {
              isReadOnly: true,
            };            
  
            viewer.contextMenuOption="None";
  
            viewer.annotationSettings = { isLock: true , author: 'Guest' };
            viewer.enableStickyNotesAnnotation = false;         
            viewer.enablePageOrganizer = false;
            viewer.toolbarSettings = {
              showTooltip: true,
              toolbarItems: ['OpenOption','PageNavigationTool', 'MagnificationTool', 'PanTool', 'PrintOption']
            };
          }
          else {
            viewer.textFieldSettings = {
              isReadOnly: false,
            };
  
            viewer.radioButtonFieldSettings = {
              isReadOnly: false,
            };
  
            viewer.DropdownFieldSettings = {
              isReadOnly: false,
            };
            viewer.checkBoxFieldSettings = {
              isReadOnly: false,
            };
            viewer.signatureFieldSettings = {
              isReadOnly: false,
  
            };
            viewer.initialFieldSettings = {
              isReadOnly: false,
            };
            viewer.listBoxFieldSettings = {
              isReadOnly: false,
            };
            viewer.passwordFieldSettings = {
              isReadOnly: false,
            }; 
            viewer.contextMenuOption="RightClick";
  
            viewer.annotationSettings = { isLock: false , author: 'Guest' };
            viewer.enableStickyNotesAnnotation = true;
            viewer.toolbarSettings = {
              showTooltip: true, toolbarItems: ['OpenOption', 'UndoRedoTool', 'PageNavigationTool',
                'MagnificationTool',
                'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool',
                'FormDesignerEditTool', 'FreeTextAnnotationOption', 'InkAnnotationOption',
                'ShapeAnnotationOption', 'StampAnnotation', 'SignatureOption', 'SearchOption',
                'PrintOption', 'DownloadOption'],
              annotationToolbarItems: ['HighlightTool', 'UnderlineTool', 'StrikethroughTool',
  
                'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'StampAnnotationTool',
  
                'HandWrittenSignatureTool', 'InkAnnotationTool', 'ShapeTool', 'CalibrateTool',
                'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool', 'FontFamilyAnnotationTool',
                'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool',
                'FontColorAnnotationTool', 'CommentPanelTool'],
              formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', 'CheckBoxTool',
                'RadioButtonTool', 'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool']
            };
          }
        },
  
      }
    };
  </script>