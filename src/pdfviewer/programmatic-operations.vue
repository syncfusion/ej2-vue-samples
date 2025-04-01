<template>
  <div>
    <div class="col-lg-9 control-section pdfviewer-control-section">
      <div class="flex-container">
        <label class="switchLabel" for="checked">Standalone PDF Viewer</label>
        <div class="e-message render-mode-info">
          <span class="e-msg-icon render-mode-info-icon"
            title="Turn OFF to render the PDF Viewer as server-backed"></span>
        </div>
        <div>
          <ejs-switch cssClass="buttonSwitch" id="checked" :checked="true" :change="change"></ejs-switch>
        </div>
      </div>
      <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
        :documentLoad="documentLoad" :annotationSelect="AnnotationSelectedEvent"
        :annotationUnSelect="AnnotationUnSelectedEvent" :annotationRemove="ResetAnnotationProperties"
        :toolbarSettings="toolbarSettings" :annotationMove="annotationMoved" :annotationResize="annotationResized"
        :enableAnnotationToolbar="false" style="height: 640px; display: block">
      </ejs-pdfviewer>
    </div>
    <div class="col-lg-3 pdfviewer-property-section main-panel">
      <div class="property-panel-header header-panel sb-content-tab-header" id="pv-property-header">
        Properties
        <!--Refresh button -->
        <button class="e-btn e-lib e-flat e-icon-btn" @click="ResetAnnotationProperties(this.selectedAnnotation)">
          <span class="e-icons e-refresh e-btn-icon"></span>
        </button>
      </div>
      <!--Select Annotation-->
      <div class="pv-property-panel-content">
        <div class="pdfviewer-text-content"><span>Annotation Type</span></div>
      </div>
      <!--Drop down values -->
      <div class="e-pv-input-item">
        <ejs-dropdownlist id="annotation-List" :dataSource="annotationsList" @change="onAnnotationChange"
          :value="selectedAnnotation.AnnotationType" :fields="annotationListFields"
          :enabled="isAnnotationUnselected"></ejs-dropdownlist>
      </div>
      <div class="e-pv-annot-inner-container" :hidden="StampClickedIStrue">
        <div class="pdfviewer-input-title" style="margin-top: 0%">
          <span>Stamp Type</span>
        </div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist id="" :dataSource="stampTypeDataList" :fields="stampTypeDatafields"
            :value="selectedAnnotation.stampType" @change="onStampTypeChange"></ejs-dropdownlist>
        </div>
        <div class="input-title">
          <div class="pdfviewer-input-title"><span>Comments</span></div>
          <div class="e-pv-input-item" :hidden="isDynamicStamp">
            <ejs-dropdownlist id="" :dataSource="dynamicstampCommentsList" :fields="stampCommentsTypeDatafields"
              :value="selectedAnnotation.dynamicStamp"
              @change="onpropertiesvaluechanges('dynamicStamp', $event)"></ejs-dropdownlist>
          </div>
          <div class="e-pv-input-item" :hidden="isSignHereStamp">
            <ejs-dropdownlist id="" :dataSource="signhereCommentsList" :fields="stampCommentsTypeDatafields"
              :value="selectedAnnotation.signHereStamp"
              @change="onpropertiesvaluechanges('signHereStamp', $event)"></ejs-dropdownlist>
          </div>
          <div class="e-pv-input-item" :hidden="isStandardBusinessStamp">
            <ejs-dropdownlist id="" :dataSource="StandardBusinessStampsList" :fields="stampCommentsTypeDatafields"
              :value="selectedAnnotation.standardBusinessStamp"
              @change="onpropertiesvaluechanges('standardBusinessStamp', $event)"></ejs-dropdownlist>
          </div>
        </div>
      </div>
      <div class="pdfviewer-input-title" :hidden="fileUploaderIsTrue">
        <ejs-uploader id="defaultfileupload" class="pdfViewer-ejs-upoader" :asyncSettings="pdfviewerApiPath"
          :beforeUpload='onBeforeUpload' :uploading='onUpload' :dropArea="dropImageElement"
          :sequentialUpload="isSequential" :allowedExtensions='extensions' :template="template"
          :success="onFileSuccess"></ejs-uploader>
      </div>
      <!--Page number -->
      <div class="pdfviewer-input-title"><span>Page Number</span></div>
      <div class="e-pv-input-item">
        <ejs-numerictextbox id="page-number" format="n0" :value="selectedAnnotation.pageNumber"
          @change="onpropertiesvaluechanges('pageNumber', $event)" :min="1" :max="pageCount"
          :enabled="isAnnotationUnselected"></ejs-numerictextbox>
      </div>
      <!--Settings -->
      <div class="pdfviewer-input-title"><span>Settings:</span></div>
      <div class="e-pv-annot-inner-container" style="padding: 0 0 12px 0px">
        <table class="e-pv-annot-inner-table">
          <tr :hidden="XYRowIstrue">
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span>X Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-x-position"   :value="selectedAnnotation.x" format="###.##" :decimals=2
                    :showSpinButton="false" :min="0" @change="onpropertiesvaluechanges('x', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item">
              <div class="pdfviewer-text-content">
                <span>Y Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-y-position" :value="selectedAnnotation.y" format="###.##" :decimals=2
                    :showSpinButton="false" :min="0" @change="onpropertiesvaluechanges('y', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
          </tr>
          <!-- 2 and table row below -->
          <tr :hidden="HeightwidthrowIstrue">
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span>Width</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-width" :value="selectedAnnotation.width" format="###.##" :decimals=2
                    :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('width', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item">
              <div class="pdfviewer-text-content">
                <span>Height</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-height" :value="selectedAnnotation.height" format="###.##"
                    :decimals=2 :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('height', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
          </tr>
          <!-- This is for Converting X Y positions X1 and X2  and Y1 Y2 changes   this changes wiilll remove 1 and 2 line and replace for LIne-->
          <tr :hidden="X1Y1RowIstrue">
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span>X1 Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-vertexx1" :value="selectedAnnotation.vertexX1" format="###.##"
                    :decimals=2 :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('vertexX1', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item">
              <div class="pdfviewer-text-content">
                <span>Y1 Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-vertexy1" :value="selectedAnnotation.vertexY1" format="###.##"
                    :decimals=2 :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('vertexY1', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
          </tr>
          <tr :hidden="X2Y2RowIstrue">
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span>X2 Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-vertexx2" :value="selectedAnnotation.vertexX2" format="###.##"
                    :decimals=2 :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('vertexX2', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item">
              <div class="pdfviewer-text-content">
                <span>Y2 Position</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-vertexy2" :value="selectedAnnotation.vertexY2" format="###.##"
                    :decimals=2 :showSpinButton="false" :min="0"
                    @change="onpropertiesvaluechanges('vertexY2', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span>Shape Opacity</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-opacity" :value="selectedAnnotation.opacity" format="###.##"
                    :max="100" :min="1" :showSpinButton="false"
                    @change="onpropertiesvaluechanges('opacity', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item" :hidden="ColorFillerIstrue">
              <div class="pdfviewer-text-content">
                <span>Fill Color</span>
                <div class="e-pv-input-item">
                  <ejs-colorpicker id="annotationfillcolor" mode="Palette" :value="selectedAnnotation.fillColor"
                    @change="onpropertiesvaluechanges('fillColor', $event)"></ejs-colorpicker>
                </div>
              </div>
            </td>
          </tr>
          <!-- 4rt row starting here -->
          <tr :hidden="strokethickenssIstrue">
            <td class="left-item">
              <div class="pdfviewer-text-content">
                <span id="stroke">Stroke Thickness</span>
                <div class="e-pv-input-item">
                  <ejs-numerictextbox id="annotation-thickness" :value="selectedAnnotation.thickness" format="###.##"
                    :max="12" :min="1" :showSpinButton="false"
                    @change="onpropertiesvaluechanges('thickness', $event)"></ejs-numerictextbox>
                </div>
              </div>
            </td>
  
            <td class="right-item">
              <div class="pdfviewer-text-content">
                <span>Stroke Color</span>
                <div class="e-pv-input-item">
                  <ejs-colorpicker id="annotationstrokecolor" mode="Palette" :value="selectedAnnotation.strokeColor"
                    @change="onpropertiesvaluechanges('strokeColor', $event)"></ejs-colorpicker>
                </div>
              </div>
            </td>
          </tr>
        </table>
  
        <!---->
        <div style="padding: 12px 12px 0 12px">
          <table class="e-pv-annot-inner-table pdfViewer-coordinate-table e-pv-annot-bounds-list"
            style="border-collapse: collapse"></table>
        </div>
        <!---->
  
        <div :hidden="deladdboundsButtonsIstrue">
          <div class="e-pv-annot-button-section" style="padding: 12px 12px 0px 0; border: 0px">
            <ejs-button style="text-transform: capitalize" cssClass="e-outline" :isPrimary="true" @click="onBoundsDelete"
              :disabled="disableDeleteButton">
              Delete
            </ejs-button>
            <ejs-button style="text-transform: capitalize" @click="addBounds" :isPrimary="true">
              Add Bounds
            </ejs-button>
          </div>
        </div>
  
        <!---->
        <div style="padding: 0px 12px 12px 12px" :hidden="LineIstrue">
          <div class="pdfviewer-input-title"><span>Line Head Start</span></div>
          <div class="e-pv-input-item">
            <ejs-dropdownlist id="annotation-lineheadstart" :dataSource="lineHeadstatusList" :fields="lineHeadstatusfield"
              :value="selectedAnnotation.lineHeadStartStyle"
              @change="onpropertiesvaluechanges('lineHeadStartStyle', $event)"></ejs-dropdownlist>
          </div>
  
          <div class="pdfviewer-input-title"><span>Line Head End</span></div>
          <div class="e-pv-input-item">
            <ejs-dropdownlist id="annotation-lineheadend" :dataSource="lineHeadstatusList" :fields="lineHeadstatusfield"
              :value="selectedAnnotation.lineHeadEndStyle"
              @change="onpropertiesvaluechanges('lineHeadEndStyle', $event)"></ejs-dropdownlist>
          </div>
  
          <div class="pdfviewer-input-title" :hidden="distanceIstrue">
            <span>Leader Length</span>
            <div class="e-pv-input-item">
              <ejs-numerictextbox :value="selectedAnnotation.leaderLength"
                @change="onpropertiesvaluechanges('leaderLength', $event)" format="###.##" :min="0"
                :showSpinButton="false"></ejs-numerictextbox>
            </div>
          </div>
        </div>
  
        <!---->
        <div style="padding: 12px 12px 0 12px">
          <table class="e-pv-annot-inner-table pdfViewer-coordinate-table e-pv-annot-bounds-list"
            style="border-collapse: collapse"></table>
        </div>
  
        <!---->
        <div :hidden="polygonIstrue">
          <div class="e-pv-annot-button-section" style="padding: 12px 12px 0px 0; border: 0px">
            <ejs-button style="text-transform: capitalize" cssClass="e-outline" :isPrimary="true" @click="onDeleteVertex"
              :disabled="disableDeleteButton">
              Delete
            </ejs-button>
            <ejs-button style="text-transform: capitalize" :isPrimary="true" @click="addVertex">
              Add Vertex
            </ejs-button>
          </div>
        </div>
      </div>
  
      <!-- this is Ink Annotation Adding one dropdown -->
      <div style="padding: 0 0 0px 0px" :hidden="InkAnnoatationIstrue">
        <div class="pdfviewer-input-title"><span>Ink Annotation</span></div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist id="" :dataSource="inkAnnotationDataList" :fields="inkAnnotationfield"
            :value="selectedAnnotation.inkAnnotationType" :enabled="isAnnotationUnselected"
            @change="onpropertiesvaluechanges('inkAnnotationType', $event)"></ejs-dropdownlist>
        </div>
      </div>
  
      <!---->
      <!-- this is For free text whole table will be present here -->
      <div class="pdfviewer-input-title" :hidden="FreeTextIstrue">
        <span>Text Properties:</span>
      </div>
  
      <div class="e-pv-annot-inner-container" :hidden="FreeTextIstrue">
        <div class="pdfviewer-text-content" style="margin-top: 0%">
          <span>Default Text</span>
        </div>
        <div class="e-pv-input-item">
          <!-- <input ejs-textbox  type="text" value="Free Text"  /> -->
          <ejs-textbox id="annotation-freetext-content" :value="selectedAnnotation.defaultText"
            @change="onpropertiesvaluechanges('defaultText', $event)"></ejs-textbox>
        </div>
        <!-- 2line -->
        <div class="pdfviewer-input-title"><span>Font Family</span></div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist id="annotation-freetextfontfamily" :dataSource="freeTextFontFamilyList"
            :fields="freetextFontFamilyFields" :value="selectedAnnotation.fontFamily"
            @change="onpropertiesvaluechanges('fontFamily', $event)"></ejs-dropdownlist>
        </div>
        <!-- 3 line -->
        <div class="pdfviewer-input-title"><span>Alignment</span></div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist id="" :dataSource="freeTextAlignmentList" :fields="freeTextAlignmentField"
            :value="selectedAnnotation.alignment"
            @change="onpropertiesvaluechanges('alignment', $event)"></ejs-dropdownlist>
        </div>
        <!-- 4 line -->
        <div class="pdfviewer-input-title"><span>Font Style</span></div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist id="annotation-freetextfontStyle" :dataSource="freeTextFontStyleList"
            :fields="freeTextFontStyleFields" :value="selectedAnnotation.fontStyle"
            @change="onpropertiesvaluechanges('fontStyle', $event)"></ejs-dropdownlist>
        </div>
        <!-- 5 line Table -->
        <div class="pdfviewer-input-title">
          <table class="e-pv-annot-inner-table">
            <tr>
              <td style="width: 50%; padding: 0">
                <span>Font Size</span>
                <div class="e-pv-input-item">
                  <!-- <input  type="text" value="16" /> -->
                  <ejs-numerictextbox id="annotation-freetextfontSize" :showSpinButton="false" format="###.##"
                    :value="selectedAnnotation.fontSize"
                    @change="onpropertiesvaluechanges('fontSize', $event)"></ejs-numerictextbox>
                </div>
              </td>
  
              <td style="padding: 0">
                <div style="margin-left: 12px" class="text-content">
                  <span>Font Color</span>
                  <div class="e-pv-input-item">
                    <ejs-colorpicker id="annotatiion-freetextfontColor" mode="Palette"
                      @change="onpropertiesvaluechanges('fontColor', $event)"
                      :value="selectedAnnotation.fontColor"></ejs-colorpicker>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
  
      <!---->
      <div class="pdfviewer-input-title">
        <table>
          <tr>
            <td class="e-pv-check-box-row">
              <ejs-checkbox :checked="selectedAnnotation.isPrint"
                @change="onCheckboxChangeIntractionBox('isPrint',$event)"></ejs-checkbox>
            </td>
            <td class="e-pv-check-box-row"><span>Print Annotation</span></td>
          </tr>
          <tr>
            <td class="e-pv-check-box-row">
              <ejs-checkbox :checked="selectedAnnotation.isLocked"
                @change="onCheckboxChangeIntractionBox('isLocked',$event)"></ejs-checkbox>
            </td>
            <td class="e-pv-check-box-row"><span>Lock Annotation</span></td>
          </tr>
        </table>
      </div>
  
      <div :hidden="!allowinstractionsIstrue">
        <div class="pdfviewer-input-title pdfviewer-text-content">
          <span>Allow Interactions</span>
        </div>
        <div class="e-pv-input-item">
          <ejs-multiselect id="multiselect-checkbox" cssClass="e-specific" :dataSource="this.intractionsList"
            :fields="intractionsListfield" :mode="multiMode" :popupHeight="popHeight" :showDropDownIcon="showDropDownIcon"
            :showSelectAll="showSelectAll" :enableSelectionOrder="enableSelectionOrder"
            :filterBarPlaceholder="filterPlaceholder" :allowFiltering="allowFiltering"
            :value="selectedAnnotation.allowIntractions" @change="onAllowInteractionsChange"></ejs-multiselect>
        </div>
      </div>
      <!---->
      <!-- im iron man -->
  
      <div class="pdfviewer-input-title"><span>Add Comments</span></div>
      <div class="pdfviewer-input-title"><span>Author</span></div>
      <div class="e-pv-input-item">
        <ejs-textbox placeholder="Enter text" id="annotation-author" :value="selectedAnnotation.author"
          @change="onpropertiesvaluechanges('author', $event)"></ejs-textbox>
      </div>
  
      <div class="pdfviewer-input-title"><span>Content</span></div>
      <div class="e-pv-input-item">
        <ejs-textbox id="annotation-Comment" :value="selectedAnnotation.comment" :placeholder="commentPlaceholder"
          :focus="onCommentFocus" :blur="onCommentBlur"
          @change="onpropertiesvaluechanges('comment', $event)"></ejs-textbox>
      </div>
  
      <div class="pdfviewer-input-title"><span>Status</span></div>
      <div class="e-pv-input-item">
        <ejs-dropdownlist id="annotation-Status" :dataSource="commentStatusList" :fields="commentStatusListfields"
          :value="selectedAnnotation.setState" @change="onpropertiesvaluechanges('setState', $event)"></ejs-dropdownlist>
      </div>
  
      <div class="pdfviewer-input-title">
        <table>
          <tr>
            <td class="e-pv-check-box-row">
              <ejs-checkbox :checked="selectedAnnotation.isReply" @change="onCheckboxChangeReplyBox"></ejs-checkbox>
            </td>
            <td class="e-pv-check-box-row"><span>Reply</span></td>
          </tr>
        </table>
      </div>
  
      <!-- this is for Checked box Coments Table -->
      <div :hidden="!isReplyCommentsContainer">
        <div class="pdfviewer-input-title" :hidden="!selectedAnnotation?.replyComments?.length">
          Replies:
        </div>
        <div class="e-pv-annot-inner-container replies" id="repliesContainer"></div>
        <div id='contextmenutarget' style="display:none"></div>
        <ejs-contextmenu id="contextMenu" :items='menuItems' :select="contextMenuItemSelected" target="#contextmenutarget"
          ref="contextMenuElement"></ejs-contextmenu>
      </div>
      <div class="e-pv-annot-inner-container pdfViewer-checked-Content" style="padding: 10px"
        :hidden="!ischeckedReplybox">
        <div class="pdfviewer-input-title"><span>Author</span></div>
        <div class="e-pv-input-item">
          <ejs-textbox placeholder="Enter text" :value="selectedAnnotation.replyAuthor"
            @change="onpropertiesvaluechanges('replyAuthor', $event)"></ejs-textbox>
        </div>
        <div class="pdfviewer-input-title"><span>Content</span></div>
        <div class="e-pv-input-item">
          <ejs-textbox :value="selectedAnnotation.replyComment" @change="onpropertiesvaluechanges('replyComment', $event)"
            :placeholder="replyPlaceholder"></ejs-textbox>
        </div>
        <div class="pdfviewer-input-title"><span>Status</span></div>
        <div class="e-pv-input-item">
          <ejs-dropdownlist :dataSource="commentStatusList" :fields="commentStatusListfields"
            :value="selectedAnnotation.replyState"
            @change="onpropertiesvaluechanges('replyState', $event)"></ejs-dropdownlist>
        </div>
        <div class="e-pv-annot-button-section">
          <div :hidden="isEditing">
            <ejs-button :isPrimary="true" style="text-transform: capitalize" @click="updateReply()">Add Reply</ejs-button>
          </div>
  
          <div :hidden="!isEditing">
            <ejs-button :isPrimary="true" style="text-transform: capitalize" @click="updateEditReply()">Update
              Reply</ejs-button>
          </div>
        </div>
      </div>
      <div class="property-panel-footer sb-content-tab-header" style="border-bottom: none" id="pv-property-footer">
        <div class="e-pv-annot-button-section">
          <ejs-button style="text-transform: capitalize" :disabled="!this.enableUpdateButton" :isPrimary="true"
            @click="updateChangesAnnotation">
            Update
          </ejs-button>
          <ejs-button :isPrimary="true" style="text-transfrom: capitalize" @click="addNewAnnotation"
            :disabled="selectedAnnotation.annotationUnSelect">Add Annotation</ejs-button>
        </div>
      </div>
    </div>
  
    <div id="action-description">
      <p>
        This sample demonstrates the creation of various types of annotations in the PDF viewer, including text markup,
        shapes, measurements, free text, stamps, handwritten signatures, ink, and sticky notes. Additionally, we can
        customize existing annotations or add new annotations programmatically in the PDF viewer using the provided
        options.
      </p>
    </div>
  
    <div id="description">
      <p>
        The PDF Viewer component allows the process of programmatically adding
        or modifying annotations within a PDF document. With the ability to
        programmatically add any type of annotation using the <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#addannotation">addAnnotation</a> API
        and edit existing annotations using the editAnnotationA API, users can
        seamlessly enhance their PDF viewing experience.
      </p>
      <br />
      <p>
        The creation of an annotation when clicking the ‘Add annotation’
        button is depending upon the selected properties from the Property
        panel. To update an existing annotation, users can select the desired
        annotation, modify its properties, and then click the ‘Update’ button.
      </p>
      <ul>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/text-markup-annotation">Text markup
            annotations</a>
        </li>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/shape-annotation">Shape
            annotations</a>
        </li>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/measurement-annotation">Measurements
            annotations</a>
        </li>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/free-text-annotation">Free text
            annotations</a>
        </li>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/stamp-annotation">Stamp
            annotations</a>
        </li>
        <li>
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/ink-annotation">Ink
            annotations</a>
        </li>
        <li>
          <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/sticky-notes-annotation">Sticky notes
            annotations</a>
        </li>
      </ul>
      <p>
        More information on the PDF Viewer instantiation can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
          documentation section</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-panel {
  border-left: 1px solid #d7d7d7;
  height: 700px;
  overflow-y: scroll;
  padding-bottom: 0px;
}

.header-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: white;
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 5px;
  margin-bottom: 16px;
}

.e-pv-annot-inner-table td {
  padding: 12px 12px 0 12px;
  width: 50%;
}

.e-pv-input-item {
  margin-top: 0px;
}

.e-file-select-wrap {
  border-bottom: 1px dashed #ccc;
}

.e-pv-annot-inner-container {
  margin-top: 15px;
  border: 1px solid rgba(196, 199, 197, 1);
  padding: 12px;
}

.e-pv-annot-inner-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.property-panel-footer {
  padding: 10px 0px 16px 0px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 1;
  border-top: 1px solid #d7d7d7;
  margin-top: 16px;
}

.e-pv-annot-button-section {
  text-align: center;
  display: flex;
  justify-content: end;
  gap: 12px;
  margin-top: 5px;
}

.e-pv-annot-button-section button {
  font-size: 12px;
  padding: 8.2px 16px;
}

.pdfviewer-input-title .e-pv-check-box-row {
  padding: 5px;
}

.fileuploader {
  margin-top: 5px;
}

.header-pdfviewer {
  font-weight: 600;
  padding: 20px 2px;
}

.pdfviewer-input-title {
  margin-top: 12px;
  font-size: 12px;
}

.pdfviewer-text-content {
  /* margin-top: 6px; */
  font-size: 12px;
}

.pdfviewer-table-input-title {
  margin-top: 6px;
  font-size: 11px;
}

.table-items {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2px;
  font-size: 10px;
}

.replies {
  overflow-y: scroll;
  max-height: 180px;
  padding: 0px !important;
  overflow: auto;
  overflow-x: hidden;
}

.inner-container {
  margin-top: 15px;
  border: 1px solid rgba(196, 199, 197, 1);
  padding: 12px;
}

.reply-text {
  width: 100%;
  font-size: 12px;
  word-break: break-word;
  white-space: nowrap;
}

.reply-main-container {
  width: max-content;
  flex-grow: 1;
}

.more-container {
  width: fit-content;
}

#contextmenutarget {
  padding: 10px;
  position: relative;
  text-align: justify;
  color: gray;
  user-select: none;
}
</style>
<style>
.reply-container {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 12px;
  font-size: 12px;
}

.pdfViewer-coordinate-table {
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
}

.pdfViewer-coordinate-table td {
  border-top: 1px solid rgba(196, 199, 197, 1);
  border-left: 1px solid rgba(196, 199, 197, 1);
  border-right: 1px solid rgba(196, 199, 197, 1);
  border-bottom: 1px solid rgba(196, 199, 197, 1);
  padding: 5px;
  font-size: 10px;
  text-align: center;
  width: 200px;
}

.upload-image {
  width: 80px;
  height: 80px;
  margin: 12px;
  border-radius: 5px;
  padding: 4px;
}

.file-name {
  font-size: 14px;
  padding: 0px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 90px;
  white-space: nowrap;
}

.wrapper {
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
}

.container {
  margin: 0px;
}

body.tailwind3-dark #pv-property-header,
body.tailwind3-dark #pv-property-footer {
  background-color: #111827;
}

body.tailwind3 #stroke {
  white-space: nowrap;
}
</style>
<script>
const DynamicStampItem = {
  Approved: "Approved",
  Confidential: "Confidential",
  Not_Approved: "Not Approved",
  Received: "Received",
  Reviewed: "Reviewed",
  Revised: "Revised",
};
const SignStampItem = {
  Revised: "Revised",
  Reviewed: "Reviewed",
  Received: "Received",
  Approved: "Approved",
  Confidential: "Confidential",
  NotApproved: "Not Approved",
};
const StandardBusinessStampItem = {
  Approved: "Approved",
  Completed: "Completed",
  Confidential: "Confidential",
  Draft: "Draft",
  Final: "Final",
  ForComment: "ForComment",
  ForPublicRelease: "ForPublicRelease",
  InformationOnly: "InformationOnly",
  NotApproved: "NotApproved",
  NotForPublicRelease: "NotForPublicRelease",
  PreliminaryResults: "PreliminaryResults",
  Void: "Void",
};
export class AnnotationBase {
  AnnotationType = "Rectangle";
  annotationSelect = true;
  annotationUnSelect = false;
  replyComments = [];
  pageNumber = 1;
  x = 100;
  y = 100;
  width = 100;
  height = 100;
  opacity = 100;
  thickness = 1;
  fillColor = "rgba(0, 0, 0, 0)";
  strokeColor = "#FF0000";
  isPrint = true;
  isLocked = false;
  isReply = false;
  isAllowedInterActionsNone = false;
  isAllowedInterActionsSelect = false;
  isAllowedInterActionsMove = false;
  isAllowedInterActionsDelete = false;
  isAllowedInterActionsPropertyChange = false;
  isAllowedInterActionsResize = false;
  author = "Guest";
  setState = "None";
  comment = "New Comment";
  replyAuthor = "Guest";
  replyState = "None";
  replyComment = "Reply Comment";
  modifiedDate = new Date().toString();
  replyModifiedDate = new Date().toString();
  bounds = [];
  vertexPoints = [];
  allowIntractions = ["None"];
  signHereStampList = ["Accepted", "InitialHere", "Rejected", "SignHere", "Witness"];
  lineHeadStartStyle = "None";
  lineHeadEndStyle = "None";
  leaderLength = 0;
  fontFamily = "Helvetica";
  fontStyle = "None";
  alignment = "Left";
  defaultText = "Free Text";
  fontSize = 16;
  fontColor = "#000000";
  vertexX1 = 100;
  vertexY1 = 100;
  vertexX2 = 200;
  vertexY2 = 100;
  stampType = "Dynamic";
  stampComment = "Approved";
  dynamicStamp = "Approved";
  signHereStamp = "SignHere";
  standardBusinessStamp = "Approved";
  inkAnnotationType = "Syncfusion";
  color = "#ffff00";
  path;
  customStampImageSource;
  customStampName = "Image";
  isAnnotationUnselected = true;
  borderColor;
  addMode;
  replyMenuItems = [
    {
      text: "Edit",
    },
    {
      text: "Delete",
    },
  ];
  dynamicStamps = [
    DynamicStampItem.Approved,
    DynamicStampItem.Confidential,
    DynamicStampItem.Not_Approved,
    DynamicStampItem.Received,
    DynamicStampItem.Reviewed,
    DynamicStampItem.Revised,
  ];

  signStamps = [
    SignStampItem.Revised,
    SignStampItem.Reviewed,
    SignStampItem.Received,
    SignStampItem.Approved,
    SignStampItem.Confidential,
    SignStampItem.NotApproved,
  ];
  standardBusinessStamps = [
    StandardBusinessStampItem.Approved,
    StandardBusinessStampItem.Completed,
    StandardBusinessStampItem.Confidential,
    StandardBusinessStampItem.Draft,
    StandardBusinessStampItem.Final,
    StandardBusinessStampItem.ForComment,
    StandardBusinessStampItem.ForPublicRelease,
    StandardBusinessStampItem.InformationOnly,
    StandardBusinessStampItem.NotApproved,
    StandardBusinessStampItem.NotForPublicRelease,
    StandardBusinessStampItem.PreliminaryResults,
    StandardBusinessStampItem.Void,
  ];
}
export class Comment {
  id;
  author;
  note;
  modifiedDate;
  state;
}
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from "@syncfusion/ej2-vue-pdfviewer";
import { createElement } from "@syncfusion/ej2-base";
import { ref } from "vue";
import {
  MenuComponent,
  ContextMenuComponent,
  ContextMenu,
} from "@syncfusion/ej2-vue-navigations";
import {
  CheckBoxComponent,
  ButtonComponent,
  SwitchComponent,
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListComponent,
  MultiSelectComponent,
  CheckBoxSelection,
} from "@syncfusion/ej2-vue-dropdowns";
import {
  ColorPickerComponent,
  NumericTextBoxComponent,
  TextBoxComponent,
  UploaderComponent,
} from "@syncfusion/ej2-vue-inputs";
import { contextMenuOpen } from "@syncfusion/ej2-vue-grids";
var viewer;
var pdfviewerControl;

export default {
  components: {
    "ejs-pdfviewer": PdfViewerComponent,
    "ejs-switch": SwitchComponent,
    "ejs-menu": MenuComponent,
    "ejs-checkbox": CheckBoxComponent,
    "ejs-dropdownlist": DropDownListComponent,
    "ejs-numerictextbox": NumericTextBoxComponent,
    "ejs-colorpicker": ColorPickerComponent,
    "ejs-button": ButtonComponent,
    "ejs-textbox": TextBoxComponent,
    "ejs-uploader": UploaderComponent,
    "ejs-multiselect": MultiSelectComponent,
    'ejs-contextmenu': ContextMenuComponent
  },
  data: function () {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/annotations.pdf",
      resourceUrl:
        "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib",
      toolbarSettings: { showTooltip: true, toolbarItems: ['OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'FormDesignerEditTool', 'FreeTextAnnotationOption', 'InkAnnotationOption', 'ShapeAnnotationOption', 'StampAnnotation', 'SignatureOption', 'SearchOption', 'PrintOption', 'DownloadOption'], formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'] },
      selectedAnnotation: ref(new AnnotationBase()),
      deladdboundsButtonsIstrue: true,
      isDynamicStamp: true,
      isSignHereStamp: true,
      isStandardBusinessStamp: true,
      strokethickenssIstrue: false,
      XYRowIstrue: false,
      HeightwidthrowIstrue: false,
      X1Y1RowIstrue: true,
      X2Y2RowIstrue: true,
      LineIstrue: true,
      polygonIstrue: true,
      distanceIstrue: true,
      ColorFillerIstrue: false,
      InkAnnoatationIstrue: true,
      StampClickedIStrue: true,
      FreeTextIstrue: true,
      isAnnotationUnselected: true,
      fileUploaderIsTrue: true,
      isShapeOpacityRowTrue: false,
      allowinstractionsIstrue: false,
      ischeckedReplybox: false,
      isReplyCommentsContainer: false,
      showCheckBoxdropdown: true,
      pageCount: 1,
      indexValue: 0,
      isEditing: false,
      currentSelectedAnnotation: "Rectangle",
      isSequential: false,
      changed: (args) => {
        this.isSequential = args.checked;
        this.$refs.uploadObj.clearAll();
      },
      enableUpdateButton: false,
      disableDeleteButton: false,
      commentPlaceholder: "New Comment",
      replyPlaceholder: "Reply Comment",
      annotationsList: [
        { ID: "Highlight", Text: "Highlight" },
        { ID: "Underline", Text: "Underline" },
        { ID: "Strikethrough", Text: "Strikethrough" },
        { ID: "Line", Text: "Line" },
        { ID: "Arrow", Text: "Arrow" },
        { ID: "Rectangle", Text: "Rectangle" },
        { ID: "Circle", Text: "Circle" },
        { ID: "Polygon", Text: "Polygon" },
        { ID: "Distance", Text: "Distance" },
        { ID: "Perimeter", Text: "Perimeter" },
        { ID: "Area", Text: "Area" },
        { ID: "Radius", Text: "Radius" },
        { ID: "Volume", Text: "Volume" },
        { ID: "StickyNotes", Text: "Sticky Notes" },
        { ID: "Ink", Text: "Ink" },
        { ID: "Stamp", Text: "Stamp" },
        { ID: "CustomStamp", Text: "Custom Stamp" },
        { ID: "FreeText", Text: "Free Text" },
      ],
      annotationListFields: { text: "Text", value: "ID" },
      freeTextFontFamilyList: [
        { Type: "Helvetica", Value: "Helvetica" },
        { Type: "Courier", Value: "Courier" },
        { Type: "Symbol", Value: "Symbol" },
        { Type: "Times New Roman", Value: "TimesNewRoman" },
      ],
      freetextFontFamilyFields: { text: "Type", value: "Value" },
      freeTextAlignmentList: [
        { Type: "Center", Value: "Center" },
        { Type: "Right", Value: "Right" },
        { Type: "Left", Value: "Left" },
        { Type: "Justify", Value: "Justify" },
      ],
      freeTextAlignmentField: { text: "Type", value: "Value" },
      freeTextFontStyleList: [
        { Type: "None", Value: "None" },
        { Type: "Bold", Value: "Bold" },
        { Type: "Underline", Value: "Underline" },
        { Type: "Italic", Value: "Italic" },
        { Type: "Strike through", Value: "Strikethrough" },
      ],
      freeTextFontStyleFields: { text: "Type", value: "Value" },
      stampTypeDataList: [
        { Type: "Dynamic", Value: "Dynamic" },
        { Type: "Sign Here", Value: "SignHere" },
        { Type: "Standard Business", Value: "StandardBusiness" },
      ],
      intractionsList: [
        { Type: "None", Value: "None" },
        { Type: "Delete", Value: "Delete" },
        { Type: "Property Change", Value: "PropertyChange" },
        { Type: "Move", Value: "Move" },
        { Type: "Select", Value: "Select" },
        { Type: "Resize", Value: "Resize" },
      ],
      intractionsListfield: { value: "Value", text: "Type" },
      popHeight: "350px",
      multiMode: "CheckBox",
      filterPlaceholder: "Search Interactions",
      showSelectAll: false,
      showDropDownIcon: true,
      enableSelectionOrder: true,
      allowFiltering: false,
      dynamicstampCommentsList: [
        { Type: "Approved", Value: "Approved" },
        { Type: "Confidential", Value: "Confidential" },
        { Type: "Not Approved", Value: "NotApproved" },
        { Type: "Received", Value: "Received" },
        { Type: "Reviewed", Value: "Reviewed" },
        { Type: "Revised", Value: "Revised" },
      ],
      signhereCommentsList: [
        { Type: "Accepted", Value: "Accepted" },
        { Type: "Initial Here", Value: "InitialHere" },
        { Type: "Rejected", Value: "Rejected" },
        { Type: "Sign Here", Value: "SignHere" },
        { Type: "Witness", Value: "Witness" },
      ],
      StandardBusinessStampsList: [
        { Type: "Approved", Value: "Approved" },
        { Type: "Completed", Value: "Completed" },
        { Type: "Confidential", Value: "Confidential" },
        { Type: "Draft", Value: "Draft" },
        { Type: "Final", Value: "Final" },
        { Type: "For Comment", Value: "ForComment" },
        { Type: "For Public Release", Value: "ForPublicRelease" },
        { Type: "Information Only", Value: "InformationOnly" },
        { Type: "Not Approved", Value: "NotApproved" },
        { Type: "Not For Public Release", Value: "NotForPublicRelease" },
        { Type: "Preliminary Results", Value: "PreliminaryResults" },
        { Type: "Void", Value: "Void" },
      ],
      commentStatusList: [
        { Status: "None" },
        { Status: "Accepted" },
        { Status: "Cancelled" },
        { Status: "Completed" },
        { Status: "Rejected" },
      ],
      commentStatusListfields: { text: "Status" },
      lineHeadstatusList: [
        { Type: "None", Value: "None" },
        { Type: "Closed Arrow", Value: "Arrow" },
        { Type: "Open Arrow", Value: "OpenArrow" },
        { Type: "Sqaure", Value: "Square" },
        { Type: "Diamond", Value: "Diamond" },
        { Type: "Round", Value: "Circle" },
      ],
      lineHeadstatusfield: { text: "Type", value: "Value" },
      inkAnnotationDataList: [
        { Type: "Syncfusion" },
        { Type: "PdfViewer" },
        { Type: "Star" },
      ],
      //datasource

      //fields
      stampComment: "Approved",
      height: "200px",
      menuItems: [
        {
          text: "Edit",
        },
        {
          text: "Delete",
        },
      ],
      waterMark: "Select a folder or file",
      extensions: '.jpg, .jpeg, .png',
      stampCommentsTypeDatafields: { text: "Type", value: "Value" },
      currentCommentsList: this.dynamicstampCommentsList,
      stampTypeDatafields: { text: "Type", value: "Value" },
      inkAnnotationfield: { text: "Type" },
      currentstampType: "Dynamic",
      syncfusionLogo: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADJCAMAAABYMS1zAAAAllBMVEX///8rNXz2kh7b3OXQ0d8jLnlMU4wfK3hYXpH5+fvz8/bv7/SRlbYAAGyLj7GMkLBGToqdoLt4fKS1t8vIydoAGHEXJXUMHnP1hAD1jAD9483+9u7707L4sXSDh6s0PoL3oE76xpr4qV/97d/5vov96NYADW/2m0b7zaX2mTv4t3v5uYT83cL4rms+R4YAAGX2kjBubpsmc7m7AAAEKUlEQVR4nO3c6VbiQBAF4Dai7AiikCbIjuyK7/9ykziTCJLuVLUcu5O5938d8x2kUr0chEAQBEEQpBgJbD/A9RLMVnPbz3C1LHw5Gdh+iCtl7Xue3AxtP8ZVMpReGOlNC/DF2Xt/I+U295rlRHoxZ5ZzzXyWWELNZGn7eX6SYHdiidrA3vYT/SBT3zuPXNt+JOOsv1tCzSKnX5y9vLB4nr/N5TQw8NIwnjzksA3MV6mWqKnlrg0EM4UlmgbyNtu8KC2fs43tx2NlobFEnDzNNmst5bMN5EYzzLKEmlVOmtpgo/8n+/fFyUVTW6ob2ZlG5qCpBbpGdhbf/QXbjmoJNTvHZ5sp3ZI521S7oxY93biqwSga3Wr+/ppjyZptaq3XMjm9Rox569Or3p/Ufz51UtZqdPs2tYf+DTl3CaZdplc11Zj5kWnxtAs2q5hANSlr4+9UTc0mRjMp6zWqfRubmK2ZJdRs0lu0RQyrKX/TTBzDEKZLVeQxfWPdGoY0XSosqpnTFka55KdgVK8aSxizpvzPolxEW8LMLvf7qPHVS2hrn4ypRreAttYADF8y2qMBe615aoTRHgxYfGkOjwYfjnbpbHOc2U/YCwD9EYfVqZm4lZHE32ktttczW05T818yNjTsYkRwcVim+R+bZG1nWMakHpcpLJvMPU3rGLGXtC+OzL6CYh8jlqT5mbKf6QDm/PRfFcq5swsYEewyLaRTZycwYVPLOGyiHc+4gYkW0bpzwMym7BZG7DUaSdwvdwYTzjaqN45PvRfoDkbMD+kan3zI5BBGBIs0jU8/N3cJk3rqLDMmZXcxlws21pm5Y5jvCzY54xz8uYYRy8PpzcbsSdlpjAhO9m2OvLN/9zDRbBNzmLcaHcQks41cMOucxIh91NTkjFvmJkYMVlJKdpWjmOi8k3+3xFWMCAxuljiLMUmxMKP3Z3JeWzFm3KRX6a6bXDfVpw4jyWNxihq6i0BX1rBiVPVrFgRBkIKkVmekZlSV9OaAEwNLtfvxSE9ye7bFKPpIXpovjBxMBs1Ws0dOPxln3p7pVV/jjGSEvCd7ivnNQZNzUA4MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwPzvmOcCYVoFwlRLXUZKcRmnqJtcBBoysnb+lxkRBEEQSuq3jNTjKk6RYVUt/Xl1qXbuK/R04qpHRlE7mQAYRZV2SfHEmtQajN+e7T/GmArnt2fjC8TipnedX6xVYxhTc3mUYIxms/GdSRUHwxg0gQEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAaaImELdA3i9I6f3henTq5pfNzTK9CqjGxqdt3ty2g8x5qNNrxonmAq96H5sgBH1EiPJPdhbTlVyq4lTVDK41YQgCIIgCIIgSFr+AKg+KPUzaG6DAAAAAElFTkSuQmCC",
      dropImageElement: document.getElementsByClassName("control-fluid")[0],
      pdfviewerApiPath: {
        saveUrl:
          "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
        removeUrl:
          "https://services.syncfusion.com/vue/production/api/FileUploader/Remove",
      },
      template: `<div class='container'>
                    <span class='wrapper'>
                    <img class='upload-image' id='uploadedImage'></img>
                    <span class='name file-name' id="fileName"></span>
                    <span class='e-icons e-file-delete-btn' title='Remove' id='removeIcon'></span>
                    </span>
                </div>`,
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
    multiselect: [CheckBoxSelection],
  },
  currentEditCommentId: null,
  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      if (viewer) {
        this.pageCount = viewer.pageCount;
      }
      if (args.documentName === "annotations.pdf") {
        viewer.annotation.addAnnotation("Highlight", {
          bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
          pageNumber: 1,
        });
        viewer.annotation.addAnnotation("Underline", {
          bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
          pageNumber: 1,
        });
        viewer.annotation.addAnnotation("Strikethrough", {
          bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
          pageNumber: 1,
        });
        viewer.annotation.addAnnotation("Line", {
          offset: { x: 200, y: 230 },
          pageNumber: 2,
          vertexPoints: [
            { x: 200, y: 230 },
            { x: 350, y: 230 },
          ],
        });
        viewer.annotation.addAnnotation("Arrow", {
          offset: { x: 200, y: 370 },
          pageNumber: 2,
          vertexPoints: [
            { x: 200, y: 370 },
            { x: 350, y: 370 },
          ],
        });
        viewer.annotation.addAnnotation("Rectangle", {
          offset: { x: 200, y: 480 },
          pageNumber: 2,
          width: 150,
          height: 75,
        });
        viewer.annotation.addAnnotation("Circle", {
          offset: { x: 200, y: 620 },
          pageNumber: 2,
          width: 90,
          height: 90,
        });
        viewer.annotation.addAnnotation("Polygon", {
          offset: { x: 200, y: 800 },
          pageNumber: 2,
          vertexPoints: [
            { x: 200, y: 800 },
            { x: 242, y: 771 },
            { x: 289, y: 799 },
            { x: 278, y: 842 },
            { x: 211, y: 842 },
            { x: 200, y: 800 },
          ],
        });
        viewer.annotation.addAnnotation("Distance", {
          offset: { x: 200, y: 230 },
          pageNumber: 3,
          vertexPoints: [
            { x: 200, y: 230 },
            { x: 350, y: 230 },
          ],
        });
        viewer.annotation.addAnnotation("Perimeter", {
          offset: { x: 200, y: 350 },
          pageNumber: 3,
          vertexPoints: [
            { x: 200, y: 350 },
            { x: 285, y: 350 },
            { x: 286, y: 412 },
          ],
        });
        viewer.annotation.addAnnotation("Area", {
          offset: { x: 200, y: 500 },
          pageNumber: 3,
          vertexPoints: [
            { x: 200, y: 500 },
            { x: 288, y: 499 },
            { x: 289, y: 553 },
            { x: 200, y: 500 },
          ],
        });
        viewer.annotation.addAnnotation("Radius", {
          offset: { x: 200, y: 630 },
          pageNumber: 3,
          width: 90,
          height: 90,
        });
        viewer.annotation.addAnnotation("Volume", {
          offset: { x: 200, y: 810 },
          pageNumber: 3,
          vertexPoints: [
            { x: 200, y: 810 },
            { x: 200, y: 919 },
            { x: 320, y: 919 },
            { x: 320, y: 809 },
            { x: 200, y: 810 },
          ],
        });
        viewer.annotation.addAnnotation("FreeText", {
          offset: { x: 250, y: 150 },
          fontSize: 16,
          fontFamily: "Helvetica",
          pageNumber: 4,
          width: 200,
          height: 40,
          isLock: false,
          defaultText: "Syncfusion",
        });
        viewer.annotation.addAnnotation(
          "Stamp",
          {
            offset: { x: 200, y: 240 },
            pageNumber: 4,
          },
          "Approved"
        );
        viewer.annotation.addAnnotation(
          "Stamp",
          {
            offset: { x: 200, y: 350 },
            pageNumber: 4,
          },
          null,
          "SignHere"
        );
        viewer.annotation.addAnnotation(
          "Stamp",
          {
            offset: { x: 200, y: 460 },
            pageNumber: 4,
          },
          null,
          null,
          "Confidential"
        );
        viewer.annotation.addAnnotation("Stamp", {
          offset: { x: 200, y: 530 },
          pageNumber: 4,
          customStamps: [
            {
              customStampName: "Image",
              customStampImageSource:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAqwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAEEQAAEDAwIEAwYDBAYLAAAAAAECAwQABREGIRIxQVETYXEHFCIygZEVQmIjUnKCJCUzU6HRFhc1c5KisbKzwvD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcaUpQKUpQKUpQKUpQKUpQKVzXGdFtsN2ZPfbYjNJ4nHHDgJFfEK5Q5ttbuUaQhcNxvxUPcklPfflQdlYJxURpe/salthuMNpxEYvuNtKc28VKVcPGB2JB577Vyz7pNuUxy26eWlCml8Mu4OI4kR/0oB2Wvp2T17EJK43qDbloakOqL7m6I7TanHVjOMhCQTjzxgVut89i4Mqdj8Y4VlC0OIKFIUOYKTuOn0INRZZtWkrVLuDpIIHHJlPK4nX1dOJR5kk4A5DYDArVoWbHuVgTPjvF5Ul5xx5zhIBc4jkJyBlI+UHqE0FjpSlApSlApSlApSlApSlApSlApSlArClAczgVmqr7QZLptkezxHi1KvD4ihxKsFprBU6v6IB+pFBTdUKf1uUuFa0WpyUIVoYBx706chchXdKEhZSPLNXXVTsOw6NdjNxkvJS0iLEidHnDhLaPME4z5ZzVHk6kTHu1vTpyE1Jf8L3Oww1ZDaGc4XJXjklXDhP6UlWd63ybrL1rq1mNa1hLcAKEeQgcTbbvyuScHnw5KGweZJPIVRYoDT6okfSlnfWhmCwlu43FGAUKxu2j9atyT+UHvirZBixLZBaiQ2kR4zCMIQnZKRWuz2yLZ7czBgo4GWh13KidypR6qJJJPevOvaFqCXqC4HSGmzxlxQbmvJJAPXwwe2M8R9R3FQc1xde9qOqEW+C44jTFuVxPvtnHvCvI+e4HYZPavV4sdmLGajxmktMtJCENpGAkDkBUbpixRNO2dm3Q0/Cj4lrPNazzUf/uWKlkkEZByKDNKUoFKUoFKUoFKUoFKwahZ2p7dFfMZhTs+ZnHu0FHirB/VjZHqogUE3WOIYzUApzUlwBKUxLOwQCFL/bv467DCEn6qr5i6btk5ht+ZOlXlCxlLkiTxtr8whGG8fy0HdK1FZorymHbjH8dPNlC+NY/lTk1XNTe0m12SCXBFnrkOpX7uh6ItkKUBzPGEnhzjcA1bokKLAZS1BjMx20jAQy2EjHoK85i6PuOovaFNv+pWPDt8J/ggMKUCXktq+BX8HNXmT2G9HLF1trSyW2GrUFgbluT3eCIRIS26tS/iSjwgCcDl35Z3qBlSb/edVcN58e4tojKafiW2MfDQpRBXF8X5UnZPGsq5ZAr0TV2j52oL9Anx7wqCxHYWypLbeXAFH4lNqz8KiNs8x0qy2e1QrNbmYFuZDUdkYSkHOT1JPUk7k0HhsG6u3SHPeisLFwnucE95hOPdmc8DUNhR/OrCR5Ak9NvX9F6cRp20IZIR706AX1I5DA2Qn9KRsPvzJqGmXG0N6pfk3KTEhW2ykBsLKUh2Y4nKlY6lKCAOuVmuafry5T5rFs0vaHQ5JSVIm3FBaQhvq7wfNwjurAPnQZ9pms1WtlVmtDqRcnxwrdK+ERknqT0Vj7DftUN7OA1BilywWx65TnU8PjOAtMsJJzlbhBypXMhPFgADbrF6B0sNSagkzrk+5cbTDeUQ5IHwy3T+bHbYE/y9yK9sabQ02lDSAhCRhKUjAAoIaFaZ8gh++zg8vIKYsUFphB+/Ev8AmONuVTYGBgcqzSoFKUoFKUoFKUoFcV4mOW+2yJbEN6Y40gqTHYGVuHsK7awRmg8rd/1gameJn2n8Ptv5YQn+78f+8cSFLI57AJ8/Oy2eyalhxkRo79htEVI2YgQ1uEH+JSgD68NW/FQ2r7yqxWCTNZR4knZqM1/ePLPChP3IoKRc4l91FqJ3TkfUst2Aygfiz7TDTaEA8mkEAnjPXfAH2NohaPehR2Y8bVF9QwygNttJMcJSkDAAAZru0hY02CyMxFK8SWv9rMfPN55W6lE9d9vQCpughmrLNZVxI1Fc19kupYUn/wAYP+NdQVMjD+khEhsfM40nhUPMp3z9D9K76xQRN/uNxjWj3qwW9F0krKfDa8YISUn83F25VVocf2kXdR/EJlrskZQxiM14ryR5ZJA9c/SrHo973m2SFjPhCfKSzn9wPLCceXbyxUpPmRrdDemTHUMx2UFbjizgJAoPGrbpyJBRPvEi53STfhc34MRCVMrckLSvCT8aFEEjBUQdhUlfbHcrcItuYvc+VqbUBDcpf7PgDSfnJPBxBCQcDBGcnlUn7Om4kly+aonhbPBPkeGiRsIqCEqUcHkSMZ9K5bRqqMbjJ1E5FkTrndFe72m2sAF1MVBI4iD8iVKyoqO2w7VRbrJpRdkt7MGDe56GGhgJ8Njn1P8AZ9fPNd5gXNKQEXt0q7uRmz/0AqFja29znGFq2EmxuqaLzDrkhK2XUj5gF7YUNvhqsX+66nvtqlarsrsmDa7aUvQIqQULuCUqHiLdGPk4c8I686g9BMK8/lu7IxyzCB/9q4bpJkWeP7xd9TQojGeHjdipRk9hlW5/yrF21raoEGM/HcM+TMSDEhwyFuv55YA5DfcnYVx2fTD9wm/jeskMS7goYYhY42IKeyQeajtlR68tqCUjtXWVHakQL/FejupC23PcwsLSeoKVgEVsLWomsFMm1yAM5C2HGir6hSsfY1B6ILViuV50utSWkRpHvNvQTgGO6OLCe/CviB7bVMXjVMC2vCG0VTrk4MtQIeHHleZHJCf1KwKDTcNSqskB2XqSCYjTQ3fYcDzSj0SOSgSdhlP1r50FqherbM5cVQVQwmQtkNlfFxBON8/XB8wa4JNsfUzJ1Jq/wXFQWnH4tvbPEzFCUk8RyPjd2+bkOQ7nHs0iSLRY7dBkKUoy4gnYV8yHFEFxPoCtOPU+VBdaUpQKUpQKqF4H4xry027YxrYyq4yB3cPwND/vV9BVvNVTRf8ATrhqC9KIUJU4x2T2aZHAB/xcZ+tBa6UpQKr+r7lIjRWrdaz/AFrcleBF2z4W3xOq8kDf1wOtSV5ukSz216fOc4GGhk4GSo9EpHVROwHU1DaWtst2S9qG+N8Nzlp4WWSc+6R85S0P1dVHqfSgm7Rb2bTbItvjcXhR2g2kqOVKx1J6k8zVbfP+leoSxkGx2h7LxztJlD8h6FCOZ/VjtXdq25ymWY9ptSv61uSi2yr+4Rj43T5JHLzIrRfHIujtCy/dthFiqQyD8zrqhgZ7qUo/40FJsbL2q7W/YYchUdqdMlXC5SEDJQhbq/CbHTKuEEj90edXfRWi4Gk4yvAUqTMdADsp35ikckj91I7Vn2e6bTpnTUaG5hUtweLJcHVw9PQch6VZ6Dhudot12aQ1dIEWa2hXEhEllLgSe4Cga7OBPBwYHDjGMbYr6pQRNp03ZrM669arVChuu/OphkJJ8tunlUt0pSgjLxYLVew2LtAYleEctqcT8SPRXMfevq0WO12VtTdpgRoiVHKy02AVnuo8z9akaUEBr2O9L0beI8dtx1xyMpIQ2kqUodQANycZrk07JVeLyq4R2HmrZCiiJFW62UF9SilS1AHfhHAgA7b8XlVqIzWMb0GaUpQKUpQc9wkCJAkyVcmWlOH6AmoL2bsqZ0LZi4SXHowfcUeZU58ZP3VUpqNlcjT1zYaGVuRHUJA6koIFcuiZDcnR9lea+RcFkgdvgG1BN1omS48GM7JluoZYaSVuOLOEpSOZJrXdLjEtUF2bcJLceM0MrccOAP8AP0qqR4czWk1qfd2HItgZWFxLe6MLlKHJ14dE9kH1NBttDEjVVzYvtxaUza4547ZCdThSz0kLHQ4+UdAc86tcmQzDjOyJLiW2WUFxxxWwSkDJJ+lbQAOVVPU6vx29xdLsqPgBKZdzIG3ghWEtE9CtX/Kk0GzSTDlwekamnNlL08BMNCs5ZijdAweRVniPqB0qsarce1XrezWlghVsiTCp3B/tFtDicPok8CP4lq7VedSzXYFr8OBwpmyVCPEyPhStQPxEfupAKj5JNVz2eW9t2RIvLJWqGlsQbetXN1pCsuPerjmVZ6gCqLyBis0pUClKUClKUClKUClKUClKUClKUGCMjFVNqw36yeOxpmbb/wAPdcU43GntLPuqlHJCFJO6ckkJI2zzq20oKtE0iZE5q46mnKu8to8TLSmwiMwe6G99/wBSiTVoGwrNcV4uUez2yTcJiiGY7ZWrAyT2AHUk7D1oMXq6R7PapNxlk+FHQVkAZKj0SB1JOAPWozRtqfhW5ybcf9qXJz3qZk54FEbNg9kDCfoT1qGi++alvEGJdGwlq2hE+e0FApTKVu0we4Qk8R7nhNXkcqCs6q0zK1DcIWbkqNbW23ESmWk4ceCsZAV+UEAgnngnvViix2okZqPHbS2y0kIbQkYCUjYAVtpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKouv7mwi7W2HJBdZiJNxXHSd5DoUER2gOpU4rI/gq9VxO2i3PXRu6OwmFz2m/DbkKQCtKck4B+p+9BxaTtblqtQEvhM+UtUqatO4U8vdW/YbJHkkVNVgDFZoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoP//Z",
            },
          ],
        });
        //The pathData property holds the value of the signature drawn using the ink annotation
        viewer.annotation.addAnnotation("Ink", {
          offset: { x: 250, y: 860 },
          pageNumber: 4,
          width: 200,
          height: 60,
          path: '[{"command":"M","x":244.83334350585938,"y":982.0000305175781},{"command":"L","x":244.83334350585938,"y":982.0000305175781},{"command":"L","x":250.83334350585938,"y":953.3333435058594},{"command":"L","x":252.83334350585938,"y":946.0000305175781},{"command":"L","x":254.16668701171875,"y":940.6667175292969},{"command":"L","x":256.8333435058594,"y":931.3333435058594},{"command":"L","x":257.5,"y":929.3333435058594},{"command":"L","x":258.8333435058594,"y":926.6667175292969},{"command":"L","x":259.5,"y":924.0000305175781},{"command":"L","x":259.5,"y":922.6667175292969},{"command":"L","x":258.8333435058594,"y":922.0000305175781},{"command":"L","x":258.16668701171875,"y":922.0000305175781},{"command":"L","x":256.8333435058594,"y":922.0000305175781},{"command":"L","x":256.16668701171875,"y":922.6667175292969},{"command":"L","x":254.83334350585938,"y":923.3333435058594},{"command":"L","x":254.16668701171875,"y":923.3333435058594},{"command":"L","x":253.5,"y":923.3333435058594},{"command":"L","x":252.83334350585938,"y":925.3333435058594},{"command":"L","x":252.83334350585938,"y":927.3333435058594},{"command":"L","x":252.83334350585938,"y":936.0000305175781},{"command":"L","x":253.5,"y":940.6667175292969},{"command":"L","x":254.83334350585938,"y":944.6667175292969},{"command":"L","x":260.16668701171875,"y":952.0000305175781},{"command":"L","x":264.16668701171875,"y":954.0000305175781},{"command":"L","x":274.16668701171875,"y":958.6667175292969},{"command":"L","x":278.16668701171875,"y":960.0000305175781},{"command":"L","x":281.5,"y":961.3333435058594},{"command":"L","x":285.5,"y":964.6667175292969},{"command":"L","x":286.8333740234375,"y":967.3333435058594},{"command":"L","x":286.8333740234375,"y":970.0000305175781},{"command":"L","x":282.8333740234375,"y":978.6667175292969},{"command":"L","x":278.16668701171875,"y":983.3333435058594},{"command":"L","x":266.16668701171875,"y":991.3333435058594},{"command":"L","x":259.5,"y":993.3333435058594},{"command":"L","x":252.16668701171875,"y":994.0000305175781},{"command":"L","x":240.83334350585938,"y":991.3333435058594},{"command":"L","x":236.16668701171875,"y":988.6667175292969},{"command":"L","x":230.16668701171875,"y":982.6667175292969},{"command":"L","x":228.83334350585938,"y":980.6667175292969},{"command":"L","x":228.16668701171875,"y":978.6667175292969},{"command":"L","x":228.83334350585938,"y":974.6667175292969},{"command":"L","x":230.16668701171875,"y":973.3333435058594},{"command":"L","x":236.16668701171875,"y":971.3333435058594},{"command":"L","x":240.83334350585938,"y":971.3333435058594},{"command":"L","x":246.16668701171875,"y":972.0000305175781},{"command":"L","x":257.5,"y":974.6667175292969},{"command":"L","x":262.8333435058594,"y":976.0000305175781},{"command":"L","x":269.5,"y":977.3333435058594},{"command":"L","x":276.16668701171875,"y":978.6667175292969},{"command":"L","x":279.5,"y":978.0000305175781},{"command":"L","x":285.5,"y":976.6667175292969},{"command":"L","x":288.16668701171875,"y":974.6667175292969},{"command":"L","x":292.8333740234375,"y":969.3333435058594},{"command":"L","x":293.5,"y":966.6667175292969},{"command":"L","x":294.16668701171875,"y":964.0000305175781},{"command":"L","x":293.5,"y":960.0000305175781},{"command":"L","x":293.5,"y":958.0000305175781},{"command":"L","x":292.8333740234375,"y":956.6667175292969},{"command":"L","x":291.5,"y":954.6667175292969},{"command":"L","x":291.5,"y":954.0000305175781},{"command":"L","x":291.5,"y":953.3333435058594},{"command":"L","x":291.5,"y":954.0000305175781},{"command":"L","x":292.16668701171875,"y":954.6667175292969},{"command":"L","x":292.8333740234375,"y":956.0000305175781},{"command":"L","x":294.16668701171875,"y":961.3333435058594},{"command":"L","x":295.5,"y":964.6667175292969},{"command":"L","x":297.5,"y":969.3333435058594},{"command":"L","x":298.8333740234375,"y":970.6667175292969},{"command":"L","x":301.5,"y":970.0000305175781},{"command":"L","x":304.16668701171875,"y":968.6667175292969},{"command":"L","x":305.5,"y":966.0000305175781},{"command":"L","x":308.8333740234375,"y":960.0000305175781},{"command":"L","x":310.16668701171875,"y":957.3333435058594},{"command":"L","x":310.8333740234375,"y":956.0000305175781},{"command":"L","x":310.8333740234375,"y":954.6667175292969},{"command":"L","x":310.8333740234375,"y":954.0000305175781},{"command":"L","x":311.5,"y":956.0000305175781},{"command":"L","x":312.8333740234375,"y":959.3333435058594},{"command":"L","x":316.16668701171875,"y":968.0000305175781},{"command":"L","x":317.5,"y":972.6667175292969},{"command":"L","x":318.16668701171875,"y":977.3333435058594},{"command":"L","x":319.5,"y":983.3333435058594},{"command":"L","x":319.5,"y":986.0000305175781},{"command":"L","x":319.5,"y":988.0000305175781},{"command":"L","x":318.8333740234375,"y":988.0000305175781},{"command":"L","x":318.16668701171875,"y":988.6667175292969},{"command":"L","x":316.16668701171875,"y":987.3333435058594},{"command":"L","x":314.8333740234375,"y":985.3333435058594},{"command":"L","x":314.16668701171875,"y":980.6667175292969},{"command":"L","x":314.8333740234375,"y":974.6667175292969},{"command":"L","x":316.16668701171875,"y":969.3333435058594},{"command":"L","x":319.5,"y":960.6667175292969},{"command":"L","x":320.16668701171875,"y":957.3333435058594},{"command":"L","x":321.5,"y":955.3333435058594},{"command":"L","x":322.16668701171875,"y":953.3333435058594},{"command":"L","x":322.8333740234375,"y":952.6667175292969},{"command":"L","x":324.16668701171875,"y":952.6667175292969},{"command":"L","x":324.8333740234375,"y":953.3333435058594},{"command":"L","x":326.8333740234375,"y":956.0000305175781},{"command":"L","x":328.16668701171875,"y":958.0000305175781},{"command":"L","x":328.8333740234375,"y":960.0000305175781},{"command":"L","x":329.5,"y":962.0000305175781},{"command":"L","x":330.16668701171875,"y":962.0000305175781},{"command":"L","x":330.16668701171875,"y":962.6667175292969},{"command":"L","x":330.16668701171875,"y":962.0000305175781},{"command":"L","x":330.8333740234375,"y":960.0000305175781},{"command":"L","x":331.5,"y":956.0000305175781},{"command":"L","x":332.8333740234375,"y":952.0000305175781},{"command":"L","x":333.5,"y":950.0000305175781},{"command":"L","x":334.8333740234375,"y":948.6667175292969},{"command":"L","x":335.5,"y":948.6667175292969},{"command":"L","x":336.16668701171875,"y":948.6667175292969},{"command":"L","x":337.5,"y":950.6667175292969},{"command":"L","x":338.8333740234375,"y":952.0000305175781},{"command":"L","x":340.8333740234375,"y":954.0000305175781},{"command":"L","x":341.5,"y":954.0000305175781},{"command":"L","x":342.8333740234375,"y":954.6667175292969},{"command":"L","x":344.8333740234375,"y":954.0000305175781},{"command":"L","x":346.8333740234375,"y":952.6667175292969},{"command":"L","x":349.5,"y":949.3333435058594},{"command":"L","x":350.8333740234375,"y":948.0000305175781},{"command":"L","x":351.5,"y":946.6667175292969},{"command":"L","x":352.8333740234375,"y":944.0000305175781},{"command":"L","x":352.8333740234375,"y":943.3333435058594},{"command":"L","x":354.16668701171875,"y":942.0000305175781},{"command":"L","x":354.8333740234375,"y":942.0000305175781},{"command":"L","x":354.8333740234375,"y":942.6667175292969},{"command":"L","x":354.16668701171875,"y":943.3333435058594},{"command":"L","x":354.16668701171875,"y":946.6667175292969},{"command":"L","x":354.16668701171875,"y":950.0000305175781},{"command":"L","x":355.5,"y":956.0000305175781},{"command":"L","x":356.16668701171875,"y":957.3333435058594},{"command":"L","x":358.16668701171875,"y":959.3333435058594},{"command":"L","x":360.16668701171875,"y":958.0000305175781},{"command":"L","x":364.16668701171875,"y":956.0000305175781},{"command":"L","x":370.8333740234375,"y":948.6667175292969},{"command":"L","x":373.5,"y":943.3333435058594},{"command":"L","x":375.5,"y":937.3333435058594},{"command":"L","x":376.16668701171875,"y":933.3333435058594},{"command":"L","x":376.8333740234375,"y":931.3333435058594},{"command":"L","x":376.8333740234375,"y":930.0000305175781},{"command":"L","x":376.8333740234375,"y":929.3333435058594},{"command":"L","x":376.16668701171875,"y":930.0000305175781},{"command":"L","x":375.5,"y":932.0000305175781},{"command":"L","x":375.5,"y":937.3333435058594},{"command":"L","x":374.8333740234375,"y":953.3333435058594},{"command":"L","x":374.8333740234375,"y":960.6667175292969},{"command":"L","x":375.5,"y":966.0000305175781},{"command":"L","x":377.5,"y":974.6667175292969},{"command":"L","x":378.16668701171875,"y":977.3333435058594},{"command":"L","x":380.8333740234375,"y":981.3333435058594},{"command":"L","x":382.16668701171875,"y":982.6667175292969},{"command":"L","x":383.5,"y":982.6667175292969},{"command":"L","x":387.5,"y":982.6667175292969},{"command":"L","x":389.5,"y":980.6667175292969},{"command":"L","x":392.16668701171875,"y":976.6667175292969},{"command":"L","x":392.8333740234375,"y":973.3333435058594},{"command":"L","x":392.16668701171875,"y":970.0000305175781},{"command":"L","x":388.8333740234375,"y":965.3333435058594},{"command":"L","x":385.5,"y":964.0000305175781},{"command":"L","x":382.8333740234375,"y":964.0000305175781},{"command":"L","x":377.5,"y":964.0000305175781},{"command":"L","x":375.5,"y":964.6667175292969},{"command":"L","x":373.5,"y":965.3333435058594},{"command":"L","x":374.8333740234375,"y":963.3333435058594},{"command":"L","x":376.8333740234375,"y":961.3333435058594},{"command":"L","x":382.16668701171875,"y":956.0000305175781},{"command":"L","x":384.16668701171875,"y":953.3333435058594},{"command":"L","x":387.5,"y":950.6667175292969},{"command":"L","x":388.16668701171875,"y":952.0000305175781},{"command":"L","x":388.16668701171875,"y":952.6667175292969},{"command":"L","x":388.8333740234375,"y":954.0000305175781},{"command":"L","x":388.8333740234375,"y":954.6667175292969},{"command":"L","x":389.5,"y":959.3333435058594},{"command":"L","x":389.5,"y":960.6667175292969},{"command":"L","x":390.16668701171875,"y":961.3333435058594},{"command":"L","x":390.8333740234375,"y":960.6667175292969},{"command":"L","x":393.5,"y":958.0000305175781},{"command":"L","x":396.8333740234375,"y":954.0000305175781},{"command":"L","x":398.16668701171875,"y":952.0000305175781},{"command":"L","x":400.16668701171875,"y":949.3333435058594},{"command":"L","x":400.16668701171875,"y":948.6667175292969},{"command":"L","x":400.8333740234375,"y":948.0000305175781},{"command":"L","x":400.8333740234375,"y":947.3333435058594},{"command":"L","x":401.5,"y":948.0000305175781},{"command":"L","x":402.16668701171875,"y":949.3333435058594},{"command":"L","x":403.5,"y":950.6667175292969},{"command":"L","x":404.8333740234375,"y":953.3333435058594},{"command":"L","x":406.16668701171875,"y":954.0000305175781},{"command":"L","x":407.5,"y":954.0000305175781},{"command":"L","x":410.16668701171875,"y":952.0000305175781},{"command":"L","x":412.16668701171875,"y":949.3333435058594},{"command":"L","x":414.16668701171875,"y":944.6667175292969},{"command":"L","x":414.16668701171875,"y":942.0000305175781},{"command":"L","x":414.16668701171875,"y":940.6667175292969},{"command":"L","x":414.16668701171875,"y":938.6667175292969},{"command":"L","x":414.16668701171875,"y":938.0000305175781},{"command":"L","x":415.5,"y":939.3333435058594},{"command":"L","x":418.8333740234375,"y":942.6667175292969},{"command":"L","x":420.16668701171875,"y":945.3333435058594},{"command":"L","x":421.5,"y":946.6667175292969},{"command":"L","x":422.8333740234375,"y":950.0000305175781},{"command":"L","x":423.5,"y":950.6667175292969},{"command":"L","x":423.5,"y":953.3333435058594},{"command":"L","x":422.8333740234375,"y":954.0000305175781},{"command":"L","x":421.5,"y":955.3333435058594},{"command":"L","x":421.5,"y":956.0000305175781},{"command":"L","x":422.16668701171875,"y":954.6667175292969},{"command":"L","x":422.8333740234375,"y":954.0000305175781},{"command":"L","x":424.8333740234375,"y":950.6667175292969},{"command":"L","x":425.5,"y":948.6667175292969},{"command":"L","x":428.16668701171875,"y":945.3333435058594},{"command":"L","x":428.8333740234375,"y":943.3333435058594},{"command":"L","x":428.8333740234375,"y":942.6667175292969},{"command":"L","x":428.8333740234375,"y":943.3333435058594},{"command":"L","x":428.8333740234375,"y":945.3333435058594},{"command":"L","x":428.8333740234375,"y":948.0000305175781},{"command":"L","x":428.8333740234375,"y":950.0000305175781},{"command":"L","x":429.5,"y":953.3333435058594},{"command":"L","x":430.16668701171875,"y":953.3333435058594},{"command":"L","x":432.8333740234375,"y":952.6667175292969},{"command":"L","x":434.8333740234375,"y":950.6667175292969},{"command":"L","x":437.5,"y":948.6667175292969},{"command":"L","x":440.16668701171875,"y":944.6667175292969},{"command":"L","x":441.5,"y":942.6667175292969},{"command":"L","x":442.16668701171875,"y":942.0000305175781},{"command":"L","x":442.8333740234375,"y":941.3333435058594},{"command":"L","x":442.8333740234375,"y":942.0000305175781},{"command":"L","x":442.8333740234375,"y":943.3333435058594},{"command":"L","x":442.8333740234375,"y":944.6667175292969},{"command":"L","x":442.8333740234375,"y":946.0000305175781},{"command":"L","x":443.5,"y":949.3333435058594},{"command":"L","x":444.16668701171875,"y":950.6667175292969},{"command":"L","x":445.5,"y":950.6667175292969},{"command":"L","x":447.5,"y":950.6667175292969},{"command":"L","x":450.16668701171875,"y":948.6667175292969},{"command":"L","x":452.16668701171875,"y":945.3333435058594},{"command":"L","x":453.5,"y":942.6667175292969},{"command":"L","x":452.8333740234375,"y":938.6667175292969},{"command":"L","x":452.16668701171875,"y":937.3333435058594},{"command":"L","x":450.8333740234375,"y":936.6667175292969},{"command":"L","x":448.8333740234375,"y":936.0000305175781},{"command":"L","x":447.5,"y":936.6667175292969},{"command":"L","x":446.16668701171875,"y":937.3333435058594},{"command":"L","x":445.5,"y":938.6667175292969},{"command":"L","x":445.5,"y":939.3333435058594},{"command":"L","x":446.16668701171875,"y":939.3333435058594},{"command":"L","x":446.8333740234375,"y":939.3333435058594},{"command":"L","x":452.16668701171875,"y":937.3333435058594},{"command":"L","x":454.8333740234375,"y":936.6667175292969},{"command":"L","x":456.8333740234375,"y":936.0000305175781},{"command":"L","x":459.5,"y":936.6667175292969},{"command":"L","x":460.8333740234375,"y":937.3333435058594},{"command":"L","x":461.5,"y":938.6667175292969},{"command":"L","x":462.16668701171875,"y":942.0000305175781},{"command":"L","x":462.16668701171875,"y":942.6667175292969},{"command":"L","x":462.16668701171875,"y":944.0000305175781},{"command":"L","x":462.16668701171875,"y":943.3333435058594},{"command":"L","x":462.16668701171875,"y":942.6667175292969},{"command":"L","x":462.16668701171875,"y":941.3333435058594},{"command":"L","x":462.8333740234375,"y":938.6667175292969},{"command":"L","x":464.16668701171875,"y":935.3333435058594},{"command":"L","x":465.5,"y":933.3333435058594},{"command":"L","x":466.16668701171875,"y":932.6667175292969},{"command":"L","x":467.5,"y":933.3333435058594},{"command":"L","x":469.5,"y":935.3333435058594},{"command":"L","x":470.16668701171875,"y":938.6667175292969},{"command":"L","x":472.8333740234375,"y":943.3333435058594},{"command":"L","x":472.8333740234375,"y":944.6667175292969},{"command":"L","x":474.16668701171875,"y":944.6667175292969},{"command":"L","x":475.5,"y":944.0000305175781},{"command":"L","x":478.16668701171875,"y":941.3333435058594},{"command":"L","x":481.5,"y":937.3333435058594},{"command":"L","x":484.8333740234375,"y":934.0000305175781},{"command":"L","x":488.8333740234375,"y":929.3333435058594},{"command":"L","x":489.5,"y":928.0000305175781}]',
        });

        viewer.annotation.addAnnotation("StickyNotes", {
          offset: { x: 300, y: 980 },
          pageNumber: 4,
          isLock: false,
        });
      }
      this.selectedAnnotation = new AnnotationBase();
      this.ResetAnnotationProperties();
    },
    onFileRemove: function (args) {
      this.selectedAnnotation.customStampImageSource = this.syncfusionLogo;
      // var imageElement = document.getElementById('uploadedImage');
      // imageElement.innerHTML = "<img src='" + this.syncfusionLogo + "' alt='Syncfusion Logo'>";
      //args.postRawFile = false;
      document.getElementById('uploadedImage').src = this.syncfusionLogo;
      document.getElementById('defaultfileupload').ej2_instances[0].remove();
    },
    async onFileSuccess(args) {
      const fileData = args.file.rawFile;
      if (fileData instanceof Blob) {
        if (args.operation === "remove") {
          document.getElementById('uploadedImage').src = this.syncfusionLogo;
          this.selectedAnnotation.customStampImageSource = this.syncfusionLogo;
        }
        else {
          this.selectedAnnotation.customStampImageSource = await this.convertBlobToBase64(fileData);
          // var imageElement = document.getElementById('uploadedImage');
          // imageElement.innerHTML = "<img src='" + this.selectedAnnotation.customStampImageSource
          // + "' alt='Syncfusion Logo'>";
          document.getElementById('uploadedImage').src = this.selectedAnnotation.customStampImageSource;
        }
      } else {
        console.error("Unexpected file data type:", typeof fileData);
      }
    },
    convertBlobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    },
    onAnnotationChange(event) {
      this.currentSelectedAnnotation = event.value.toString();
      this.selectedAnnotation.AnnotationType = this.currentSelectedAnnotation;
      switch (this.selectedAnnotation.AnnotationType) {
        case "Highlight":
        case "Underline":
        case "Strikethrough": {
          this.strokethickenssIstrue = true;
          this.deladdboundsButtonsIstrue = false;
          this.allowinstractionsIstrue = false;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.polygonIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "Line":
        case "Arrow": {
          this.strokethickenssIstrue = false;
          this.deladdboundsButtonsIstrue = true;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = true;
          this.HeightwidthrowIstrue = true;
          this.X1Y1RowIstrue = false;
          this.X2Y2RowIstrue = false;
          this.LineIstrue = false;
          this.distanceIstrue = true;
          this.polygonIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          this.allowinstractionsIstrue = false;
          break;
        }
        case "Rectangle":
        case "Circle":
        case "Radius": {
          this.allowinstractionsIstrue = false;
          this.strokethickenssIstrue = false;
          this.deladdboundsButtonsIstrue = true;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.polygonIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "Polygon":
        case "Perimeter":
        case "Area":
        case "Volume": {
          this.polygonIstrue = false;
          this.allowinstractionsIstrue = false;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = true;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.deladdboundsButtonsIstrue = true;
          this.strokethickenssIstrue = false;
          this.ColorFillerIstrue = false;
          this.InkAnnoatationIstrue = true;
          this.LineIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "Distance": {
          this.strokethickenssIstrue = false;
          this.deladdboundsButtonsIstrue = true;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = true;
          this.allowinstractionsIstrue = false;
          this.HeightwidthrowIstrue = true;
          this.X1Y1RowIstrue = false;
          this.X2Y2RowIstrue = false;
          this.LineIstrue = false;
          this.distanceIstrue = false;
          this.polygonIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "StickyNotes": {
          this.ColorFillerIstrue = true;
          this.allowinstractionsIstrue = false;
          this.strokethickenssIstrue = true;
          this.deladdboundsButtonsIstrue = true;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.distanceIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.polygonIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "Ink": {
          this.allowinstractionsIstrue = false;
          this.strokethickenssIstrue = false;
          this.deladdboundsButtonsIstrue = true;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.polygonIstrue = true;
          this.InkAnnoatationIstrue = false;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "Stamp": {
          this.currentCommentsList = this.dynamicstampCommentsList;
          this.allowinstractionsIstrue = false;
          this.ColorFillerIstrue = true;
          this.strokethickenssIstrue = true;
          this.deladdboundsButtonsIstrue = true;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.distanceIstrue = true;
          this.InkAnnoatationIstrue = true;
          if (this.selectedAnnotation.annotationUnSelect) {
            this.StampClickedIStrue = true;
          }
          else {
            this.StampClickedIStrue = false;
          }
          this.polygonIstrue = true;
          this.FreeTextIstrue = true;
          this.fileUploaderIsTrue = true;
          this.selectedAnnotation.stampType = "Dynamic";
          this.selectedAnnotation.author = "Guest";
          this.selectedAnnotation.comment = "New Comment";
          this.findStampComments(this.selectedAnnotation.stampType);
          break;
        }
        case "FreeText": {
          this.allowinstractionsIstrue = false;
          this.strokethickenssIstrue = false;
          this.deladdboundsButtonsIstrue = true;
          this.ColorFillerIstrue = false;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.polygonIstrue = true;
          this.StampClickedIStrue = true;
          this.FreeTextIstrue = false;
          this.fileUploaderIsTrue = true;
          break;
        }
        case "CustomStamp": {
          this.allowinstractionsIstrue = false;
          this.ColorFillerIstrue = true;
          this.strokethickenssIstrue = true;
          this.deladdboundsButtonsIstrue = true;
          this.XYRowIstrue = false;
          this.HeightwidthrowIstrue = false;
          this.X1Y1RowIstrue = true;
          this.X2Y2RowIstrue = true;
          this.LineIstrue = true;
          this.distanceIstrue = true;
          this.InkAnnoatationIstrue = true;
          this.polygonIstrue = true;
          this.StampClickedIStrue = true;
          if (this.selectedAnnotation.annotationUnSelect) {
            this.fileUploaderIsTrue = true;
          }
          else {
            this.fileUploaderIsTrue = false;
          }
          this.FreeTextIstrue = true;
          break;
        }
      }
      if (this.isAnnotationUnselected) {
        this.ResetAnnotationProperties();
      }
      this.ischeckedReplybox = false;
    },
    addBounds() {
      this.selectedAnnotation.bounds.push({ X: this.selectedAnnotation.x, Y: this.selectedAnnotation.y, Width: this.selectedAnnotation.width, Height: this.selectedAnnotation.height, Left: this.selectedAnnotation.x, Top: this.selectedAnnotation.y });
      this.generateTable();
      if (this.selectedAnnotation.annotationUnSelect) {
        this.enableUpdateButton = true;
      }
    },
    onBoundsDelete() {
      const tableBody = document.querySelector(".e-pv-annot-bounds-list");
      if (tableBody) {
        if (this.selectedAnnotation.bounds.length > 1) {
          this.selectedAnnotation.bounds.splice(this.selectedAnnotation.bounds.length - 1, 1);
        }
      }
      this.generateTable();
      if (!this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
    },
    addVertex() {
      const newVertex = {
        x: this.selectedAnnotation.x,
        y: this.selectedAnnotation.y,
      };
      this.selectedAnnotation.vertexPoints.push(newVertex);
      this.generateTable();
      if (this.selectedAnnotation.annotationUnSelect) {
        this.enableUpdateButton = true;
      }
    },
    onintractionvaluechange(event) {
      this.selectedAnnotation.allowIntractions.push(event.value);
    },
    onDeleteVertex() {
      const tableBody = document.querySelector(".e-pv-annot-bounds-list");
      if (tableBody) {
        if (this.selectedAnnotation.vertexPoints.length > 1) {
          this.selectedAnnotation.vertexPoints.splice(this.selectedAnnotation.vertexPoints.length - 1, 1);
        }
      }
      this.generateTable();
      if (!this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
    },
    annotationMoved(AnnotationMoveEventArgs) {
      this.selectedAnnotation.annotationSelect = false;
      pdfviewerControl = this.$refs.pdfviewer.ej2Instances;
      this.isAnnotationUnselected = false;
      this.selectedAnnotation.annotationUnSelect = true;
      this.CurrentUpdateAnnotationID = AnnotationMoveEventArgs.annotationId;
      if (pdfviewerControl) {
        for (let i = 0; i < pdfviewerControl.annotationCollection.length; i++) {
          if (
            pdfviewerControl.annotationCollection[i].annotationId ===
            AnnotationMoveEventArgs.annotationId
          ) {
            this.updatePropertiesToPanel(
              pdfviewerControl.annotationCollection[i]
            );
            break;
          }
        }
      }
    },
    annotationResized(AnnotationResizeEventArgs) {
      this.selectedAnnotation.annotationSelect = false;
      pdfviewerControl = this.$refs.pdfviewer.ej2Instances;
      this.isAnnotationUnselected = false;
      this.selectedAnnotation.annotationUnSelect = true;
      this.CurrentUpdateAnnotationID = AnnotationResizeEventArgs.annotationId;
      if (pdfviewerControl) {
        for (let i = 0; i < pdfviewerControl.annotationCollection.length; i++) {
          if (
            pdfviewerControl.annotationCollection[i].annotationId ===
            AnnotationResizeEventArgs.annotationId
          ) {
            this.updatePropertiesToPanel(
              pdfviewerControl.annotationCollection[i]
            );
            break;
          }
        }
      }
    },
    updateVertexTable() {
      const tableBody = document.querySelector(".pdfViewer-coordinate-table");
      if (tableBody) {
        tableBody.innerHTML = "";
        this.selectedAnnotation.vertexPoints.forEach((vertex, index, array) => {
          if (index % 2 === 0) {
            const row = createElement("tr");
            const cell1 = createElement("td");
            const divElement1 = createElement("div", {
              className: "table-items",
            });
            const innerdivx = createElement("div");
            innerdivx.textContent = `X${index + 1} = ${Math.trunc(vertex.x)}`;
            divElement1.appendChild(innerdivx);
            const innerdivy = createElement("div");
            innerdivy.textContent = `Y${index + 1} = ${Math.trunc(vertex.y)}`;
            divElement1.appendChild(innerdivy);
            cell1.appendChild(divElement1);
            row.appendChild(cell1);
            const cell2 = createElement("td");
            const divElement2 = createElement("div", {
              className: "table-items",
            });
            if (index + 1 < array.length) {
              const nextVertex = array[index + 1];
              const nextinnerdivx = createElement("div");
              nextinnerdivx.textContent = `X${index + 2} = ${Math.trunc(nextVertex.x)}`;
              divElement2.appendChild(nextinnerdivx);
              const nextinnerdivy = createElement("div");
              nextinnerdivy.textContent = `Y${index + 2} = ${Math.trunc(nextVertex.y)}`;
              divElement2.appendChild(nextinnerdivy);
            } else {
              divElement2.textContent = "";
            }
            cell2.appendChild(divElement2);
            row.appendChild(cell2);
            tableBody.appendChild(row);
          }
        });
      }
    },
    clearTable() {
      const tableBody = document.querySelector(".e-pv-annot-bounds-list");
      this.selectedAnnotation.vertexPoints = [];
      if (tableBody) {
        while (tableBody.firstChild) {
          tableBody.removeChild(tableBody.firstChild);
        }
      }
    },
    onCheckboxChangeReplyBox(event) {
      this.ischeckedReplybox = event.checked;
      this.selectedAnnotation.isReply = event.checked;
    },
    onStampTypeChange(event) {
      const selectedValue = event.value.toString();
      switch (selectedValue) {
        case "Dynamic":
          //this.currentCommentsList = this.dynamicstampCommentsList;
          this.selectedAnnotation.stampType = "Dynamic";
          this.selectedAnnotation.dynamicStamp = "Approved";
          this.selectedAnnotation.width = 140;
          this.selectedAnnotation.height = 55;
          break;
        case "SignHere":
          //this.currentCommentsList = this.signhereCommentsList;
          this.selectedAnnotation.stampType = "SignHere";
          this.selectedAnnotation.signHereStamp = "Accepted";
          this.selectedAnnotation.width = 35;
          this.selectedAnnotation.height = 35;
          break;
        case "StandardBusiness":
          //this.currentCommentsList = this.StandardBusinessStampsList;
          this.selectedAnnotation.stampType = "StandardBusiness";
          this.selectedAnnotation.standardBusinessStamp = "Approved";
          this.selectedAnnotation.width = 130;
          this.selectedAnnotation.height = 30;
          break;
        default:
          this.currentCommentsList = [];
      }
      this.findStampComments(selectedValue);
    },
    onpropertiesvaluechanges(property, event) {
      this.selectedAnnotation[property] = event.value;
      if (event.isInteracted && property === 'pageNumber' && property === 'replyAuthor' && property === 'replyComment' && property === 'replyState' && !this.isAnnotationUnselected) {
        this.enableUpdateButton = false;
      }
      else if ((property === 'fillColor' || property === 'strokeColor' || property === 'fontColor') && !this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
      else if ((property === "x" || property === "y") && (this.selectedAnnotation.AnnotationType === "Polygon" || this.selectedAnnotation.AnnotationType === "Area" || this.selectedAnnotation.AnnotationType === "Volume" || this.selectedAnnotation.AnnotationType === "Perimeter" || this.selectedAnnotation.AnnotationType === "Highlight" || this.selectedAnnotation.AnnotationType === "Underline" || this.selectedAnnotation.AnnotationType === "Strikethrough") && event.isInteracted && !this.isAnnotationUnselected) {
        this.enableUpdateButton = false;
      }
      else if ((property === "width" || property === "height") && (this.selectedAnnotation.AnnotationType === "Highlight" || this.selectedAnnotation.AnnotationType === "Underline" || this.selectedAnnotation.AnnotationType === "Strikethrough") && !this.isAnnotationUnselected && event.isInteracted) {
        this.enableUpdateButton = false;
      }
      else if ((property === "standardBusinessStamp" || property === "signHereStamp" || property === "dynamicStamp") && this.isAnnotationUnselected) {
        this.ResetAnnotationProperties();
      }
      else if (event.isInteracted && !this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
    },
    onCheckboxChangeIntractionBox(property, event) {
      this.selectedAnnotation[property] = event.checked;
      if (property === 'isLocked') {
        this.allowinstractionsIstrue = event.checked;
        if (this.selectedAnnotation.annotationSelect) {
          this.selectedAnnotation.allowIntractions = ["Select", "Resize"];
        }
      }
      if (!this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
    },
    onAllowInteractionsChange(event) {
      this.selectedAnnotation.allowIntractions = event.value;
      if (event.isInteracted && !this.isAnnotationUnselected) {
        this.enableUpdateButton = true;
      }
    },
    annotationSettings() {
      return {
        offset: { x: this.selectedAnnotation.x, y: this.selectedAnnotation.y },
        pageNumber: this.selectedAnnotation.pageNumber,
        width: this.selectedAnnotation.width,
        height: this.selectedAnnotation.height,
        opacity: this.selectedAnnotation.opacity / 100,
        thickness: this.selectedAnnotation.thickness,
        strokeColor: this.selectedAnnotation.strokeColor,
        fillColor: this.selectedAnnotation.fillColor,
        bounds: [
          {
            x: this.selectedAnnotation.x,
            y: this.selectedAnnotation.y,
            width: this.selectedAnnotation.width,
            height: this.selectedAnnotation.height,
          },
        ],
        vertexPoints: this.selectedAnnotation.vertexPoints,
        fontFamily: this.selectedAnnotation.fontFamily,
        fontStyle: this.selectedAnnotation.fontStyle,
        fontSize: this.selectedAnnotation.fontSize,
        defaultText: this.selectedAnnotation.defaultText,
        alignment: this.selectedAnnotation.alignment,
        author: this.selectedAnnotation.author,
        setState: this.selectedAnnotation.setState,
        note: this.selectedAnnotation.comment,
        comments: this.selectedAnnotation.replyComments,
        replyAuthor: this.selectedAnnotation.replyAuthor,
        replyState: this.selectedAnnotation.replyState,
        replyComment: this.selectedAnnotation.replyComment,
        modifiedDate: this.selectedAnnotation.modifiedDate,
        replyModifiedDate: this.selectedAnnotation.replyModifiedDate,
        lineHeadEndStyle: pdfviewerControl.annotation.getArrowString(this.selectedAnnotation.lineHeadEndStyle),
        lineHeadStartStyle: pdfviewerControl.annotation.getArrowString(this.selectedAnnotation.lineHeadStartStyle),
        leaderLength: this.selectedAnnotation.leaderLength,
        inkAnnotationType: this.selectedAnnotation.inkAnnotationType,
        color: this.selectedAnnotation.fillColor,
        allowedInteractions: this.selectedAnnotation.allowIntractions,
        dynamicStamps: this.selectedAnnotation.dynamicStamp,
        signStamps: this.selectedAnnotation.signHereStamp,
        standardBusinessStamps: this.selectedAnnotation.standardBusinessStamp,
        path: this.selectedAnnotation.path,
        fontColor: this.selectedAnnotation.fontColor,
        borderColor: this.selectedAnnotation.strokeColor,
        customStamps: [
          {
            customStampImageSource:
              this.selectedAnnotation.customStampImageSource,
            customStampName: this.selectedAnnotation.customStampName,
          },
        ],
      };
    },
    ResetAnnotationProperties() {
      const selectedAnnotation = this.selectedAnnotation;
      selectedAnnotation.annotationSelect = true;
      selectedAnnotation.annotationUnSelect = false;
      this.enableUpdateButton = false;
      this.clearTable();
      const ShapeAnnotation = selectedAnnotation.AnnotationType;
      this.allowinstractionsIstrue = false;
      if (ShapeAnnotation == "Arrow" || ShapeAnnotation == "Distance") {
        selectedAnnotation.vertexX1 = 100;
        selectedAnnotation.vertexX2 = 200;
        selectedAnnotation.vertexY1 = 100;
        selectedAnnotation.vertexY2 = 100;
        selectedAnnotation.thickness = 1;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#ff0000";
        selectedAnnotation.lineHeadEndStyle = "Arrow";
        selectedAnnotation.lineHeadStartStyle = "Arrow";
        if (ShapeAnnotation == "Distance") {
          selectedAnnotation.leaderLength = 0;
        }
      } else if (ShapeAnnotation == "Line") {
        selectedAnnotation.vertexX1 = 100;
        selectedAnnotation.vertexX2 = 200;
        selectedAnnotation.vertexY1 = 100;
        selectedAnnotation.vertexY2 = 100;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.thickness = 1;
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#ff0000";
        selectedAnnotation.lineHeadStartStyle = "None";
        selectedAnnotation.lineHeadEndStyle = "None";
      } else if (
        ShapeAnnotation == "Perimeter" ||
        ShapeAnnotation == "Polygon" ||
        ShapeAnnotation == "Area" ||
        ShapeAnnotation == "Volume"
      ) {
        selectedAnnotation.x = 10;
        selectedAnnotation.y = 10;
        selectedAnnotation.width = 100;
        selectedAnnotation.height = 100;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.thickness = 1;
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#ff0000";
        selectedAnnotation.lineHeadStartStyle = "Arrow";
        selectedAnnotation.lineHeadEndStyle = "Arrow";
        if (ShapeAnnotation === "Perimeter") {
          selectedAnnotation.lineHeadStartStyle = "OpenArrow";
          selectedAnnotation.lineHeadEndStyle = "OpenArrow";
        }
      }
      else {
        selectedAnnotation.lineHeadEndStyle = "None";
        selectedAnnotation.lineHeadStartStyle = "None";
      }
      if (
        ShapeAnnotation == "Rectangle" ||
        ShapeAnnotation == "Circle" ||
        ShapeAnnotation == "Radius"
      ) {
        selectedAnnotation.x = 100;
        selectedAnnotation.y = 100;
        selectedAnnotation.width = 100;
        selectedAnnotation.height = 100;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.thickness = 1;
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#ff0000";
      } else if (ShapeAnnotation == "Ink") {
        selectedAnnotation.x = 100;
        selectedAnnotation.y = 100;
        selectedAnnotation.width = 150;
        selectedAnnotation.height = 60;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.thickness = 1;
        selectedAnnotation.author = "Guest";
        selectedAnnotation.comment = "New Comment";
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#ff0000";
      } else if (ShapeAnnotation == "FreeText") {
        selectedAnnotation.x = 10;
        selectedAnnotation.y = 10;
        selectedAnnotation.width = 150;
        selectedAnnotation.height = 26.5;
        selectedAnnotation.fontFamily = "Helvetica";
        selectedAnnotation.fontStyle = "None";
        selectedAnnotation.alignment = "Left";
        selectedAnnotation.defaultText = "Free Text";
        selectedAnnotation.fontSize = 16;
        selectedAnnotation.fontColor = "#000000";
        selectedAnnotation.fillColor = "#00000000";
        selectedAnnotation.strokeColor = "#00000000";
      } else if (ShapeAnnotation == "StickyNotes") {
        selectedAnnotation.x = 100;
        selectedAnnotation.y = 100;
        selectedAnnotation.width = 30;
        selectedAnnotation.height = 30;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.author = "Guest";
        selectedAnnotation.comment = "";
        selectedAnnotation.thickness = 1;
      } else if (ShapeAnnotation == "Stamp") {
        this.StampClickedIStrue = false;
        this.stampComment = "";
        if (selectedAnnotation.stampType === "Dynamic") {
          this.findStampComments("Dynamic");
          selectedAnnotation.width = 140;
          selectedAnnotation.height = 55;
        }
        if (selectedAnnotation.stampType === "SignHere") {
          this.findStampComments("SignHere");
          if (selectedAnnotation.signHereStamp === "SignHere") {
            selectedAnnotation.width = 110;
            selectedAnnotation.height = 30;
          }
          if (selectedAnnotation.signHereStamp === "Witness") {
            selectedAnnotation.width = 130;
            selectedAnnotation.height = 30;
          }
          if (selectedAnnotation.signHereStamp === "InitialHere") {
            selectedAnnotation.width = 90;
            selectedAnnotation.height = 30;
          }
          if (selectedAnnotation.signHereStamp === "Accepted" || selectedAnnotation.signHereStamp === "Rejected") {
            selectedAnnotation.width = 35;
            selectedAnnotation.height = 35;
          }
          else {
            selectedAnnotation.height = 30;
          }
        }
        if (selectedAnnotation.stampType === "StandardBusiness") {
          this.findStampComments("StandardBusiness");
          if (selectedAnnotation.standardBusinessStamp === "Final" || selectedAnnotation.standardBusinessStamp === "Draft") {
            selectedAnnotation.width = 110;
          }
          else if (selectedAnnotation.standardBusinessStamp === "Void") {
            selectedAnnotation.width = 100;
          }
          else {
            selectedAnnotation.width = 130;
          }
          selectedAnnotation.height = 30;
        }
        selectedAnnotation.x = 100;
        selectedAnnotation.y = 100;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.author = "Guest";
        selectedAnnotation.comment = "";
      } else if (ShapeAnnotation == "CustomStamp") {
        this.fileUploaderIsTrue = false;
        selectedAnnotation.x = 100;
        selectedAnnotation.y = 100;
        selectedAnnotation.width = 100;
        selectedAnnotation.height = 100;
        selectedAnnotation.opacity = 100;
        selectedAnnotation.author = "Guest";
        selectedAnnotation.comment = "";
        this.fileUploaderIsTrue = false;
      } else if (
        ShapeAnnotation == "Highlight" ||
        ShapeAnnotation == "Underline" ||
        ShapeAnnotation == "Strikethrough"
      ) {
        selectedAnnotation.x = 10;
        selectedAnnotation.y = 10;
        selectedAnnotation.width = 100;
        selectedAnnotation.height = 14;
        selectedAnnotation.fillColor = "";
        selectedAnnotation.strokeColor = "";
        if (selectedAnnotation.AnnotationType === "Highlight") {
          selectedAnnotation.fillColor = "#ffff00";
        } else if (selectedAnnotation.AnnotationType === "Underline") {
          selectedAnnotation.fillColor = "#00ff00";
        } else if (selectedAnnotation.AnnotationType === "Strikethrough") {
          selectedAnnotation.fillColor = "#ff0000";
        }
      } else {
        selectedAnnotation.width = 0;
        selectedAnnotation.height = 0;
      }
      selectedAnnotation.opacity = 100;
      selectedAnnotation.thickness = 1;
      selectedAnnotation.author = "Guest";
      selectedAnnotation.setState = "None";
      selectedAnnotation.comment = "";
      selectedAnnotation.replyAuthor = "Guest";
      selectedAnnotation.replyState = "";
      selectedAnnotation.replyComment = "";
      selectedAnnotation.replyComments = [];
      this.isAnnotationUnselected = true;
      selectedAnnotation.isReply = false;
      this.ischeckedReplybox = false;
      this.isReplyCommentsContainer = false;
      selectedAnnotation.allowIntractions = ["None"];
      selectedAnnotation.isPrint = true;
      selectedAnnotation.isLocked = false;
      this.commentPlaceholder = "New Comment";
      this.replyPlaceholder = "Reply Comment";
    },
    addNewAnnotation() {
      pdfviewerControl = this.$refs.pdfviewer.ej2Instances;
      let currentannotationSettings;
      currentannotationSettings = this.annotationSettings();
      if (
        this.selectedAnnotation.AnnotationType === "Highlight" ||
        this.selectedAnnotation.AnnotationType === "Underline" ||
        this.selectedAnnotation.AnnotationType === "Strikethrough"
      ) {
        if (this.selectedAnnotation.AnnotationType === "Highlight") {
          this.selectedAnnotation.fillColor = "#ffff00";
        } else if (this.selectedAnnotation.AnnotationType === "Underline") {
          this.selectedAnnotation.fillColor = "#00ff00";
        } else if (this.selectedAnnotation.AnnotationType === "Strikethrough") {
          this.selectedAnnotation.fillColor = "#ff0000";
        }
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Line") {
        this.selectedAnnotation.vertexPoints.push(
          {
            x: this.selectedAnnotation.vertexX1,
            y: this.selectedAnnotation.vertexY1,
          },
          {
            x: this.selectedAnnotation.vertexX2,
            y: this.selectedAnnotation.vertexY2,
          }
        );
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (
        this.selectedAnnotation.AnnotationType === "Arrow" ||
        this.selectedAnnotation.AnnotationType === "Distance"
      ) {
        this.selectedAnnotation.lineHeadEndStyle = "Arrow";
        this.selectedAnnotation.lineHeadStartStyle = "Arrow";
        this.selectedAnnotation.vertexPoints.push(
          {
            x: this.selectedAnnotation.vertexX1,
            y: this.selectedAnnotation.vertexY1,
          },
          {
            x: this.selectedAnnotation.vertexX2,
            y: this.selectedAnnotation.vertexY2,
          }
        );
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (this.selectedAnnotation.AnnotationType === "Rectangle") {
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Circle") {
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Polygon") {
        if (this.selectedAnnotation.vertexPoints.length === 0) {
          this.selectedAnnotation.vertexPoints.push(
            { x: 100, y: 39 },
            { x: 142, y: 10 },
            { x: 189, y: 38 },
            { x: 178, y: 81 },
            { x: 111, y: 81 },
            { x: 100, y: 39 }
          );
        }
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Distance") {
        this.selectedAnnotation.vertexPoints.push(
          {
            x: this.selectedAnnotation.vertexX1,
            y: this.selectedAnnotation.vertexY1,
          },
          {
            x: this.selectedAnnotation.vertexX2,
            y: this.selectedAnnotation.vertexY2,
          }
        );
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (this.selectedAnnotation.AnnotationType === "Perimeter") {
        if (this.selectedAnnotation.vertexPoints.length === 0) {
          this.selectedAnnotation.vertexPoints.push(
            { x: 100, y: 100 },
            { x: 185, y: 100 },
            { x: 186, y: 162 }
          );
        }
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (this.selectedAnnotation.AnnotationType === "Area") {
        if (this.selectedAnnotation.vertexPoints.length === 0) {
          this.selectedAnnotation.vertexPoints.push(
            { x: 100, y: 100 },
            { x: 188, y: 99 },
            { x: 189, y: 153 },
            { x: 100, y: 100 }
          );
        }
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (this.selectedAnnotation.AnnotationType === "Radius") {
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Volume") {
        if (this.selectedAnnotation.vertexPoints.length === 0) {
          this.selectedAnnotation.vertexPoints.push(
            { x: 100, y: 100 },
            { x: 100, y: 209 },
            { x: 220, y: 209 },
            { x: 220, y: 99 },
            { x: 100, y: 100 }
          );
        }
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
        this.selectedAnnotation.vertexPoints = [];
      } else if (this.selectedAnnotation.AnnotationType === "FreeText") {
        this.selectedAnnotation.strokeColor = "rgba(0, 0, 0, 0)";
        currentannotationSettings.borderColor = "";
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "Stamp") {
        currentannotationSettings.customStamps = null;
        if (this.selectedAnnotation.stampType === "Dynamic") {
          if (this.selectedAnnotation.dynamicStamp) {
            const selectedStampItem =
              this.selectedAnnotation.dynamicStamps.find(
                (stamp) => stamp === this.selectedAnnotation.stampComment
              );

            if (selectedStampItem) {
              pdfviewerControl.annotation.addAnnotation(
                this.selectedAnnotation.AnnotationType,
                currentannotationSettings,
                this.selectedAnnotation.dynamicStamp
              );
            }
          }
        } else if (this.selectedAnnotation.stampType === "Sign Here" || this.selectedAnnotation.stampType === "SignHere") {
          if (this.selectedAnnotation.signHereStamp) {
            const selectedStampItem = this.selectedAnnotation.signStamps.find(
              (stamp) => stamp === this.selectedAnnotation.stampComment
            );
            console.log(selectedStampItem);
            if (selectedStampItem) {
              pdfviewerControl.annotation.addAnnotation(
                this.selectedAnnotation.AnnotationType,
                currentannotationSettings,
                null,
                this.selectedAnnotation.signHereStamp
              );
            }
          }
        } else if (this.selectedAnnotation.stampType === "Standard Business" || this.selectedAnnotation.stampType === "StandardBusiness") {
          if (this.selectedAnnotation.standardBusinessStamp) {
            const selectedStampItem =
              this.selectedAnnotation.standardBusinessStamps.find(
                (stamp) => stamp === this.selectedAnnotation.stampComment
              );
            if (selectedStampItem) {
              pdfviewerControl.annotation.addAnnotation(
                this.selectedAnnotation.AnnotationType,
                currentannotationSettings,
                null,
                null,
                this.selectedAnnotation.standardBusinessStamp
              );
            }
          }
        }
      } else if (this.selectedAnnotation.AnnotationType === "Ink") {
        if (this.selectedAnnotation.inkAnnotationType === "Syncfusion") {
          this.selectedAnnotation.path =
            '[{"command":"M","x":244.83334350585938,"y":982.0000305175781},{"command":"L","x":244.83334350585938,"y":982.0000305175781},{"command":"L","x":250.83334350585938,"y":953.3333435058594},{"command":"L","x":252.83334350585938,"y":946.0000305175781},{"command":"L","x":254.16668701171875,"y":940.6667175292969},{"command":"L","x":256.8333435058594,"y":931.3333435058594},{"command":"L","x":257.5,"y":929.3333435058594},{"command":"L","x":258.8333435058594,"y":926.6667175292969},{"command":"L","x":259.5,"y":924.0000305175781},{"command":"L","x":259.5,"y":922.6667175292969},{"command":"L","x":258.8333435058594,"y":922.0000305175781},{"command":"L","x":258.16668701171875,"y":922.0000305175781},{"command":"L","x":256.8333435058594,"y":922.0000305175781},{"command":"L","x":256.16668701171875,"y":922.6667175292969},{"command":"L","x":254.83334350585938,"y":923.3333435058594},{"command":"L","x":254.16668701171875,"y":923.3333435058594},{"command":"L","x":253.5,"y":923.3333435058594},{"command":"L","x":252.83334350585938,"y":925.3333435058594},{"command":"L","x":252.83334350585938,"y":927.3333435058594},{"command":"L","x":252.83334350585938,"y":936.0000305175781},{"command":"L","x":253.5,"y":940.6667175292969},{"command":"L","x":254.83334350585938,"y":944.6667175292969},{"command":"L","x":260.16668701171875,"y":952.0000305175781},{"command":"L","x":264.16668701171875,"y":954.0000305175781},{"command":"L","x":274.16668701171875,"y":958.6667175292969},{"command":"L","x":278.16668701171875,"y":960.0000305175781},{"command":"L","x":281.5,"y":961.3333435058594},{"command":"L","x":285.5,"y":964.6667175292969},{"command":"L","x":286.8333740234375,"y":967.3333435058594},{"command":"L","x":286.8333740234375,"y":970.0000305175781},{"command":"L","x":282.8333740234375,"y":978.6667175292969},{"command":"L","x":278.16668701171875,"y":983.3333435058594},{"command":"L","x":266.16668701171875,"y":991.3333435058594},{"command":"L","x":259.5,"y":993.3333435058594},{"command":"L","x":252.16668701171875,"y":994.0000305175781},{"command":"L","x":240.83334350585938,"y":991.3333435058594},{"command":"L","x":236.16668701171875,"y":988.6667175292969},{"command":"L","x":230.16668701171875,"y":982.6667175292969},{"command":"L","x":228.83334350585938,"y":980.6667175292969},{"command":"L","x":228.16668701171875,"y":978.6667175292969},{"command":"L","x":228.83334350585938,"y":974.6667175292969},{"command":"L","x":230.16668701171875,"y":973.3333435058594},{"command":"L","x":236.16668701171875,"y":971.3333435058594},{"command":"L","x":240.83334350585938,"y":971.3333435058594},{"command":"L","x":246.16668701171875,"y":972.0000305175781},{"command":"L","x":257.5,"y":974.6667175292969},{"command":"L","x":262.8333435058594,"y":976.0000305175781},{"command":"L","x":269.5,"y":977.3333435058594},{"command":"L","x":276.16668701171875,"y":978.6667175292969},{"command":"L","x":279.5,"y":978.0000305175781},{"command":"L","x":285.5,"y":976.6667175292969},{"command":"L","x":288.16668701171875,"y":974.6667175292969},{"command":"L","x":292.8333740234375,"y":969.3333435058594},{"command":"L","x":293.5,"y":966.6667175292969},{"command":"L","x":294.16668701171875,"y":964.0000305175781},{"command":"L","x":293.5,"y":960.0000305175781},{"command":"L","x":293.5,"y":958.0000305175781},{"command":"L","x":292.8333740234375,"y":956.6667175292969},{"command":"L","x":291.5,"y":954.6667175292969},{"command":"L","x":291.5,"y":954.0000305175781},{"command":"L","x":291.5,"y":953.3333435058594},{"command":"L","x":291.5,"y":954.0000305175781},{"command":"L","x":292.16668701171875,"y":954.6667175292969},{"command":"L","x":292.8333740234375,"y":956.0000305175781},{"command":"L","x":294.16668701171875,"y":961.3333435058594},{"command":"L","x":295.5,"y":964.6667175292969},{"command":"L","x":297.5,"y":969.3333435058594},{"command":"L","x":298.8333740234375,"y":970.6667175292969},{"command":"L","x":301.5,"y":970.0000305175781},{"command":"L","x":304.16668701171875,"y":968.6667175292969},{"command":"L","x":305.5,"y":966.0000305175781},{"command":"L","x":308.8333740234375,"y":960.0000305175781},{"command":"L","x":310.16668701171875,"y":957.3333435058594},{"command":"L","x":310.8333740234375,"y":956.0000305175781},{"command":"L","x":310.8333740234375,"y":954.6667175292969},{"command":"L","x":310.8333740234375,"y":954.0000305175781},{"command":"L","x":311.5,"y":956.0000305175781},{"command":"L","x":312.8333740234375,"y":959.3333435058594},{"command":"L","x":316.16668701171875,"y":968.0000305175781},{"command":"L","x":317.5,"y":972.6667175292969},{"command":"L","x":318.16668701171875,"y":977.3333435058594},{"command":"L","x":319.5,"y":983.3333435058594},{"command":"L","x":319.5,"y":986.0000305175781},{"command":"L","x":319.5,"y":988.0000305175781},{"command":"L","x":318.8333740234375,"y":988.0000305175781},{"command":"L","x":318.16668701171875,"y":988.6667175292969},{"command":"L","x":316.16668701171875,"y":987.3333435058594},{"command":"L","x":314.8333740234375,"y":985.3333435058594},{"command":"L","x":314.16668701171875,"y":980.6667175292969},{"command":"L","x":314.8333740234375,"y":974.6667175292969},{"command":"L","x":316.16668701171875,"y":969.3333435058594},{"command":"L","x":319.5,"y":960.6667175292969},{"command":"L","x":320.16668701171875,"y":957.3333435058594},{"command":"L","x":321.5,"y":955.3333435058594},{"command":"L","x":322.16668701171875,"y":953.3333435058594},{"command":"L","x":322.8333740234375,"y":952.6667175292969},{"command":"L","x":324.16668701171875,"y":952.6667175292969},{"command":"L","x":324.8333740234375,"y":953.3333435058594},{"command":"L","x":326.8333740234375,"y":956.0000305175781},{"command":"L","x":328.16668701171875,"y":958.0000305175781},{"command":"L","x":328.8333740234375,"y":960.0000305175781},{"command":"L","x":329.5,"y":962.0000305175781},{"command":"L","x":330.16668701171875,"y":962.0000305175781},{"command":"L","x":330.16668701171875,"y":962.6667175292969},{"command":"L","x":330.16668701171875,"y":962.0000305175781},{"command":"L","x":330.8333740234375,"y":960.0000305175781},{"command":"L","x":331.5,"y":956.0000305175781},{"command":"L","x":332.8333740234375,"y":952.0000305175781},{"command":"L","x":333.5,"y":950.0000305175781},{"command":"L","x":334.8333740234375,"y":948.6667175292969},{"command":"L","x":335.5,"y":948.6667175292969},{"command":"L","x":336.16668701171875,"y":948.6667175292969},{"command":"L","x":337.5,"y":950.6667175292969},{"command":"L","x":338.8333740234375,"y":952.0000305175781},{"command":"L","x":340.8333740234375,"y":954.0000305175781},{"command":"L","x":341.5,"y":954.0000305175781},{"command":"L","x":342.8333740234375,"y":954.6667175292969},{"command":"L","x":344.8333740234375,"y":954.0000305175781},{"command":"L","x":346.8333740234375,"y":952.6667175292969},{"command":"L","x":349.5,"y":949.3333435058594},{"command":"L","x":350.8333740234375,"y":948.0000305175781},{"command":"L","x":351.5,"y":946.6667175292969},{"command":"L","x":352.8333740234375,"y":944.0000305175781},{"command":"L","x":352.8333740234375,"y":943.3333435058594},{"command":"L","x":354.16668701171875,"y":942.0000305175781},{"command":"L","x":354.8333740234375,"y":942.0000305175781},{"command":"L","x":354.8333740234375,"y":942.6667175292969},{"command":"L","x":354.16668701171875,"y":943.3333435058594},{"command":"L","x":354.16668701171875,"y":946.6667175292969},{"command":"L","x":354.16668701171875,"y":950.0000305175781},{"command":"L","x":355.5,"y":956.0000305175781},{"command":"L","x":356.16668701171875,"y":957.3333435058594},{"command":"L","x":358.16668701171875,"y":959.3333435058594},{"command":"L","x":360.16668701171875,"y":958.0000305175781},{"command":"L","x":364.16668701171875,"y":956.0000305175781},{"command":"L","x":370.8333740234375,"y":948.6667175292969},{"command":"L","x":373.5,"y":943.3333435058594},{"command":"L","x":375.5,"y":937.3333435058594},{"command":"L","x":376.16668701171875,"y":933.3333435058594},{"command":"L","x":376.8333740234375,"y":931.3333435058594},{"command":"L","x":376.8333740234375,"y":930.0000305175781},{"command":"L","x":376.8333740234375,"y":929.3333435058594},{"command":"L","x":376.16668701171875,"y":930.0000305175781},{"command":"L","x":375.5,"y":932.0000305175781},{"command":"L","x":375.5,"y":937.3333435058594},{"command":"L","x":374.8333740234375,"y":953.3333435058594},{"command":"L","x":374.8333740234375,"y":960.6667175292969},{"command":"L","x":375.5,"y":966.0000305175781},{"command":"L","x":377.5,"y":974.6667175292969},{"command":"L","x":378.16668701171875,"y":977.3333435058594},{"command":"L","x":380.8333740234375,"y":981.3333435058594},{"command":"L","x":382.16668701171875,"y":982.6667175292969},{"command":"L","x":383.5,"y":982.6667175292969},{"command":"L","x":387.5,"y":982.6667175292969},{"command":"L","x":389.5,"y":980.6667175292969},{"command":"L","x":392.16668701171875,"y":976.6667175292969},{"command":"L","x":392.8333740234375,"y":973.3333435058594},{"command":"L","x":392.16668701171875,"y":970.0000305175781},{"command":"L","x":388.8333740234375,"y":965.3333435058594},{"command":"L","x":385.5,"y":964.0000305175781},{"command":"L","x":382.8333740234375,"y":964.0000305175781},{"command":"L","x":377.5,"y":964.0000305175781},{"command":"L","x":375.5,"y":964.6667175292969},{"command":"L","x":373.5,"y":965.3333435058594},{"command":"L","x":374.8333740234375,"y":963.3333435058594},{"command":"L","x":376.8333740234375,"y":961.3333435058594},{"command":"L","x":382.16668701171875,"y":956.0000305175781},{"command":"L","x":384.16668701171875,"y":953.3333435058594},{"command":"L","x":387.5,"y":950.6667175292969},{"command":"L","x":388.16668701171875,"y":952.0000305175781},{"command":"L","x":388.16668701171875,"y":952.6667175292969},{"command":"L","x":388.8333740234375,"y":954.0000305175781},{"command":"L","x":388.8333740234375,"y":954.6667175292969},{"command":"L","x":389.5,"y":959.3333435058594},{"command":"L","x":389.5,"y":960.6667175292969},{"command":"L","x":390.16668701171875,"y":961.3333435058594},{"command":"L","x":390.8333740234375,"y":960.6667175292969},{"command":"L","x":393.5,"y":958.0000305175781},{"command":"L","x":396.8333740234375,"y":954.0000305175781},{"command":"L","x":398.16668701171875,"y":952.0000305175781},{"command":"L","x":400.16668701171875,"y":949.3333435058594},{"command":"L","x":400.16668701171875,"y":948.6667175292969},{"command":"L","x":400.8333740234375,"y":948.0000305175781},{"command":"L","x":400.8333740234375,"y":947.3333435058594},{"command":"L","x":401.5,"y":948.0000305175781},{"command":"L","x":402.16668701171875,"y":949.3333435058594},{"command":"L","x":403.5,"y":950.6667175292969},{"command":"L","x":404.8333740234375,"y":953.3333435058594},{"command":"L","x":406.16668701171875,"y":954.0000305175781},{"command":"L","x":407.5,"y":954.0000305175781},{"command":"L","x":410.16668701171875,"y":952.0000305175781},{"command":"L","x":412.16668701171875,"y":949.3333435058594},{"command":"L","x":414.16668701171875,"y":944.6667175292969},{"command":"L","x":414.16668701171875,"y":942.0000305175781},{"command":"L","x":414.16668701171875,"y":940.6667175292969},{"command":"L","x":414.16668701171875,"y":938.6667175292969},{"command":"L","x":414.16668701171875,"y":938.0000305175781},{"command":"L","x":415.5,"y":939.3333435058594},{"command":"L","x":418.8333740234375,"y":942.6667175292969},{"command":"L","x":420.16668701171875,"y":945.3333435058594},{"command":"L","x":421.5,"y":946.6667175292969},{"command":"L","x":422.8333740234375,"y":950.0000305175781},{"command":"L","x":423.5,"y":950.6667175292969},{"command":"L","x":423.5,"y":953.3333435058594},{"command":"L","x":422.8333740234375,"y":954.0000305175781},{"command":"L","x":421.5,"y":955.3333435058594},{"command":"L","x":421.5,"y":956.0000305175781},{"command":"L","x":422.16668701171875,"y":954.6667175292969},{"command":"L","x":422.8333740234375,"y":954.0000305175781},{"command":"L","x":424.8333740234375,"y":950.6667175292969},{"command":"L","x":425.5,"y":948.6667175292969},{"command":"L","x":428.16668701171875,"y":945.3333435058594},{"command":"L","x":428.8333740234375,"y":943.3333435058594},{"command":"L","x":428.8333740234375,"y":942.6667175292969},{"command":"L","x":428.8333740234375,"y":943.3333435058594},{"command":"L","x":428.8333740234375,"y":945.3333435058594},{"command":"L","x":428.8333740234375,"y":948.0000305175781},{"command":"L","x":428.8333740234375,"y":950.0000305175781},{"command":"L","x":429.5,"y":953.3333435058594},{"command":"L","x":430.16668701171875,"y":953.3333435058594},{"command":"L","x":432.8333740234375,"y":952.6667175292969},{"command":"L","x":434.8333740234375,"y":950.6667175292969},{"command":"L","x":437.5,"y":948.6667175292969},{"command":"L","x":440.16668701171875,"y":944.6667175292969},{"command":"L","x":441.5,"y":942.6667175292969},{"command":"L","x":442.16668701171875,"y":942.0000305175781},{"command":"L","x":442.8333740234375,"y":941.3333435058594},{"command":"L","x":442.8333740234375,"y":942.0000305175781},{"command":"L","x":442.8333740234375,"y":943.3333435058594},{"command":"L","x":442.8333740234375,"y":944.6667175292969},{"command":"L","x":442.8333740234375,"y":946.0000305175781},{"command":"L","x":443.5,"y":949.3333435058594},{"command":"L","x":444.16668701171875,"y":950.6667175292969},{"command":"L","x":445.5,"y":950.6667175292969},{"command":"L","x":447.5,"y":950.6667175292969},{"command":"L","x":450.16668701171875,"y":948.6667175292969},{"command":"L","x":452.16668701171875,"y":945.3333435058594},{"command":"L","x":453.5,"y":942.6667175292969},{"command":"L","x":452.8333740234375,"y":938.6667175292969},{"command":"L","x":452.16668701171875,"y":937.3333435058594},{"command":"L","x":450.8333740234375,"y":936.6667175292969},{"command":"L","x":448.8333740234375,"y":936.0000305175781},{"command":"L","x":447.5,"y":936.6667175292969},{"command":"L","x":446.16668701171875,"y":937.3333435058594},{"command":"L","x":445.5,"y":938.6667175292969},{"command":"L","x":445.5,"y":939.3333435058594},{"command":"L","x":446.16668701171875,"y":939.3333435058594},{"command":"L","x":446.8333740234375,"y":939.3333435058594},{"command":"L","x":452.16668701171875,"y":937.3333435058594},{"command":"L","x":454.8333740234375,"y":936.6667175292969},{"command":"L","x":456.8333740234375,"y":936.0000305175781},{"command":"L","x":459.5,"y":936.6667175292969},{"command":"L","x":460.8333740234375,"y":937.3333435058594},{"command":"L","x":461.5,"y":938.6667175292969},{"command":"L","x":462.16668701171875,"y":942.0000305175781},{"command":"L","x":462.16668701171875,"y":942.6667175292969},{"command":"L","x":462.16668701171875,"y":944.0000305175781},{"command":"L","x":462.16668701171875,"y":943.3333435058594},{"command":"L","x":462.16668701171875,"y":942.6667175292969},{"command":"L","x":462.16668701171875,"y":941.3333435058594},{"command":"L","x":462.8333740234375,"y":938.6667175292969},{"command":"L","x":464.16668701171875,"y":935.3333435058594},{"command":"L","x":465.5,"y":933.3333435058594},{"command":"L","x":466.16668701171875,"y":932.6667175292969},{"command":"L","x":467.5,"y":933.3333435058594},{"command":"L","x":469.5,"y":935.3333435058594},{"command":"L","x":470.16668701171875,"y":938.6667175292969},{"command":"L","x":472.8333740234375,"y":943.3333435058594},{"command":"L","x":472.8333740234375,"y":944.6667175292969},{"command":"L","x":474.16668701171875,"y":944.6667175292969},{"command":"L","x":475.5,"y":944.0000305175781},{"command":"L","x":478.16668701171875,"y":941.3333435058594},{"command":"L","x":481.5,"y":937.3333435058594},{"command":"L","x":484.8333740234375,"y":934.0000305175781},{"command":"L","x":488.8333740234375,"y":929.3333435058594},{"command":"L","x":489.5,"y":928.0000305175781}]';
        } else if (this.selectedAnnotation.inkAnnotationType === "PdfViewer") {
          this.selectedAnnotation.path =
            "M10,50 L10,65 M10,50 L25,50 L25,57.5 L10,57.5 M40, 50 L40, 65 M40, 50 L43, 50 L55, 55 L55, 60 L43, 65 L40, 65 M80, 50 L80, 65 M80, 50 L95, 50 M80, 57.5 L95, 57.5 M110, 50 L125, 65 L140, 50 M160, 50 L160, 65 M155, 50 L165, 50 M155, 65 L165, 65 M182, 50 L192, 65 L202, 50 L212, 65 L222, 50 M230, 50 L230, 65 M230, 50 L240, 50 M230, 57.5 L240, 57.5 M230, 65 L240, 65 M255, 50 L270, 65 L285, 50 M295, 50 L295, 65 M290, 50 L300, 50 M290, 65 L300, 65 M310, 50 L310, 65 M310, 50 L325, 50 M310, 57.5 L325, 57.5 M310, 65 L325, 65 M340, 50 L340, 65 M340, 50 L355, 50 L355, 57.5 L340, 57.5 M340, 57.5 L355, 65";
        } else if (this.selectedAnnotation.inkAnnotationType === "Star") {
          this.selectedAnnotation.path =
            '[{\"command\":\"M\",\"x\":72,\"y\":200},{\"command\":\"L\",\"x\":79,\"y\":65},{\"command\":\"L\",\"x\":92,\"y\":200},{\"command\":\"L\",\"x\":65,\"y\":110},{\"command\":\"L\",\"x\":95,\"y\":110},{\"command\":\"L\",\"x\":72,\"y\":200}]';
        }
        currentannotationSettings = this.annotationSettings();
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "StickyNotes") {
        pdfviewerControl.annotation.addAnnotation(
          this.selectedAnnotation.AnnotationType,
          currentannotationSettings
        );
      } else if (this.selectedAnnotation.AnnotationType === "CustomStamp") {
        pdfviewerControl.annotation.addAnnotation(
          "Stamp",
          currentannotationSettings
        );
        document.getElementById('defaultfileupload').ej2_instances[0].clearAll();
      }
      let newAnnotation = pdfviewerControl.annotationCollection[pdfviewerControl.annotationCollection.length - 1];
      this.updateAnnotationComments(newAnnotation);
      pdfviewerControl.annotation.editAnnotation(newAnnotation);
      this.resetReplies();
    },
    AnnotationSelectedEvent(AnnotationSelectEventArgs) {
      pdfviewerControl = this.$refs.pdfviewer.ej2Instances;
      pdfviewerControl.enableCommentPanel = true;
      this.CurrentUpdateAnnotationID = AnnotationSelectEventArgs.annotationId;
      if (pdfviewerControl) {
        for (let i = 0; i < pdfviewerControl.annotationCollection.length; i++) {
          if (
            pdfviewerControl.annotationCollection[i].annotationId ===
            AnnotationSelectEventArgs.annotationId
          ) {
            this.updatePropertiesToPanel(
              pdfviewerControl.annotationCollection[i]
            );
            break;
          }
        }
      }
      this.selectedAnnotation.annotationSelect = false;
      this.isAnnotationUnselected = false;
      this.selectedAnnotation.annotationUnSelect = true;
    },
    updatePropertiesToPanel(currentannotation) {
      this.selectedAnnotation.AnnotationType = currentannotation.shapeAnnotationType;
      this.selectedAnnotation.pageNumber = currentannotation.pageNumber + 1;
      this.findStampComments("Null");
      if (
        currentannotation.textMarkupAnnotationType === "Highlight" ||
        currentannotation.textMarkupAnnotationType === "Underline" ||
        currentannotation.textMarkupAnnotationType === "Strikethrough"
      ) {
        this.selectedAnnotation.AnnotationType =
          currentannotation.textMarkupAnnotationType;
      } else if (
        currentannotation.shapeAnnotationType === "Square" &&
        currentannotation.subject === "Rectangle"
      ) {
        this.selectedAnnotation.AnnotationType = "Rectangle";
      } else if (
        currentannotation.shapeAnnotationType === "Line" &&
        currentannotation.subject === "Arrow"
      ) {
        this.selectedAnnotation.AnnotationType = "Arrow";
      } else if (currentannotation.shapeAnnotationType === "sticky") {
        this.selectedAnnotation.AnnotationType = "StickyNotes";
      } else if (currentannotation.shapeAnnotationType === "stamp") {
        this.selectedAnnotation.AnnotationType = "Stamp";
        this.StampClickedIStrue = true;
        if (currentannotation.dynamicText != "") {
          this.selectedAnnotation.stampType = "Dynamic";
          this.selectedAnnotation.dynamicStamp = currentannotation.subject;
          this.findStampComments("Dynamic");
        }
        else {
          if (this.selectedAnnotation.signHereStampList.includes(currentannotation.subject)) {
            this.selectedAnnotation.stampType = "SignHere";
            this.selectedAnnotation.signHereStamp = currentannotation.subject.replace(" ", "");
            this.findStampComments("SignHere");
          }
          else {
            this.selectedAnnotation.stampType = "StandardBusiness";
            this.selectedAnnotation.standardBusinessStamp = currentannotation.subject.replace(" ", "");
            this.findStampComments("StandardBusiness");
          }
        }
        if (currentannotation.customStampName == "Image") {
          this.selectedAnnotation.AnnotationType = "CustomStamp";
          this.fileUploaderIsTrue = true;
        }
      } else if (
        currentannotation.shapeAnnotationType === "Line" ||
        currentannotation.shapeAnnotationType === "Polyline" ||
        currentannotation.shapeAnnotationType === "Square" ||
        currentannotation.shapeAnnotationType === "Circle" ||
        (currentannotation.shapeAnnotationType === "Polygon" &&
          currentannotation.indent)
      ) {
        this.selectedAnnotation.vertexPoints = currentannotation.vertexPoints;
        if (currentannotation.indent === "LineDimension") {
          this.selectedAnnotation.AnnotationType = "Distance";
        } else if (currentannotation.indent === "PolyLineDimension") {
          this.selectedAnnotation.AnnotationType = "Perimeter";
          this.selectedAnnotation.vertexPoints = currentannotation.vertexPoints;
        } else if (
          currentannotation.indent === "PolyLineDimension" &&
          currentannotation.subject === "Arrow"
        ) {
          this.selectedAnnotation.AnnotationType = "Arrow";
        } else if (currentannotation.indent === "PolygonDimension") {
          this.selectedAnnotation.AnnotationType = "Area";
        } else if (currentannotation.indent === "PolygonRadius") {
          this.selectedAnnotation.AnnotationType = "Radius";
        } else if (currentannotation.indent === "PolygonVolume") {
          this.selectedAnnotation.AnnotationType = "Volume";
        }
      } else {
        this.selectedAnnotation.AnnotationType = currentannotation.shapeAnnotationType;

        if (currentannotation.shapeAnnotationType === "Polygon") {
          this.selectedAnnotation.vertexPoints = currentannotation.vertexPoints;
        }
      }

      if (
        (this.selectedAnnotation.AnnotationType === "Highlight" || this.selectedAnnotation.AnnotationType === "Underline" ||
          this.selectedAnnotation.AnnotationType === "Strikethrough") &&
        (currentannotation.annotationAddMode === "Imported Annotation" || currentannotation.annotationAddMode === "Existing Annotation")
      ) {
        this.selectedAnnotation.width = currentannotation.bounds[0].Width;
        this.selectedAnnotation.height = currentannotation.bounds[0].Height;
        this.selectedAnnotation.x = currentannotation.bounds[0].X;
        this.selectedAnnotation.y = currentannotation.bounds[0].Y;
        this.selectedAnnotation.fillColor = currentannotation.color ? (currentannotation.color.includes("rgba") ? this.rgbaStringToHex(currentannotation.color) : currentannotation.color) : "";
        this.selectedAnnotation.bounds = currentannotation.bounds;
      } else if (
        (this.selectedAnnotation.AnnotationType === "Highlight" || this.selectedAnnotation.AnnotationType === "Underline" ||
          this.selectedAnnotation.AnnotationType === "Strikethrough") &&
        (currentannotation.annotationAddMode === "UI Drawn Annotation")
      ) {
        this.selectedAnnotation.width = currentannotation.bounds[0].width;
        this.selectedAnnotation.height = currentannotation.bounds[0].height;
        this.selectedAnnotation.x = currentannotation.bounds[0].left;
        this.selectedAnnotation.y = currentannotation.bounds[0].right;
        this.selectedAnnotation.fillColor = currentannotation.color ? (currentannotation.color.includes("rgba") ? this.rgbaStringToHex(currentannotation.color) : currentannotation.color) : "";
        this.selectedAnnotation.bounds = currentannotation.bounds;
      } else if (
        this.selectedAnnotation.AnnotationType === "Line" ||
        this.selectedAnnotation.AnnotationType === "Arrow" ||
        this.selectedAnnotation.AnnotationType === "Distance"
      ) {
        this.selectedAnnotation.vertexX1 = currentannotation.vertexPoints[0].x;
        this.selectedAnnotation.vertexY1 = currentannotation.vertexPoints[0].y;
        this.selectedAnnotation.vertexX2 = currentannotation.vertexPoints[1].x;
        this.selectedAnnotation.vertexY2 = currentannotation.vertexPoints[1].y;
        this.selectedAnnotation.fillColor = currentannotation.fillColor ? (currentannotation.fillColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.fillColor) : currentannotation.fillColor) : "";
        this.selectedAnnotation.lineHeadStartStyle = pdfviewerControl.annotation.getArrowType(currentannotation.lineHeadStart);
        this.selectedAnnotation.lineHeadEndStyle = pdfviewerControl.annotation.getArrowType(currentannotation.lineHeadEnd);
      } else if (this.selectedAnnotation.AnnotationType === "Ink") {
        this.selectedAnnotation.width = currentannotation.bounds.width;
        this.selectedAnnotation.height = currentannotation.bounds.height;
        this.selectedAnnotation.x = currentannotation.bounds.x;
        this.selectedAnnotation.y = currentannotation.bounds.y;
        if (!currentannotation.fillColor) {
          currentannotation.fillColor = "#ffffff00";
        }
        this.selectedAnnotation.fillColor = currentannotation.fillColor ? (currentannotation.fillColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.fillColor) : currentannotation.fillColor) : "";
      } else if (this.selectedAnnotation.AnnotationType === "FreeText") {
        this.selectedAnnotation.width = currentannotation.bounds.width;
        this.selectedAnnotation.height = currentannotation.bounds.height;
        this.selectedAnnotation.x = currentannotation.bounds.left;
        this.selectedAnnotation.y = currentannotation.bounds.top;
        this.selectedAnnotation.fontFamily = currentannotation.fontFamily;
        this.selectedAnnotation.alignment = currentannotation.textAlign;
        this.selectedAnnotation.defaultText = currentannotation.dynamicText;
        this.selectedAnnotation.fontSize = currentannotation.fontSize;
        this.selectedAnnotation.fontColor = currentannotation.fontColor ? (currentannotation.fontColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.fontColor) : currentannotation.fontColor) : "";
        if (currentannotation.font.isBold) {
          this.selectedAnnotation.fontStyle = "Bold";
        } else if (currentannotation.font.isItalic) {
          this.selectedAnnotation.fontStyle = "Italic";
        } else if (currentannotation.font.isStrikeout) {
          this.selectedAnnotation.fontStyle = "Strikethrough";
        } else if (currentannotation.font.isUnderline) {
          this.selectedAnnotation.fontStyle = "Underline";
        }
        if (!currentannotation.fillColor) {
          currentannotation.fillColor = "#ffffff00";
        }
        this.selectedAnnotation.fillColor = currentannotation.fillColor ? (currentannotation.fillColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.fillColor) : currentannotation.fillColor) : "";
      } else {
        this.selectedAnnotation.width = currentannotation.bounds.width;
        this.selectedAnnotation.height = currentannotation.bounds.height;
        this.selectedAnnotation.x = currentannotation.bounds.left;
        this.selectedAnnotation.y = currentannotation.bounds.top;
        this.selectedAnnotation.fillColor = currentannotation.fillColor ? (currentannotation.fillColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.fillColor) : currentannotation.fillColor) : "";
      }
      this.selectedAnnotation.opacity = currentannotation.opacity * 100;
      this.selectedAnnotation.thickness = currentannotation.thickness;
      this.selectedAnnotation.strokeColor = currentannotation.strokeColor ? (currentannotation.strokeColor.includes("rgba") ? this.rgbaStringToHex(currentannotation.strokeColor) : currentannotation.strokeColor) : "";
      if (
        this.selectedAnnotation.AnnotationType === "Polygon" ||
        this.selectedAnnotation.AnnotationType === "Perimeter" ||
        this.selectedAnnotation.AnnotationType === "Area" ||
        this.selectedAnnotation.AnnotationType === "Volume"
      ) {
        this.selectedAnnotation.vertexPoints = currentannotation.vertexPoints;
        this.selectedAnnotation.x = currentannotation.vertexPoints[0].x;
        this.selectedAnnotation.y = currentannotation.vertexPoints[0].y;
        this.generateTable();
      } else if (this.selectedAnnotation.AnnotationType === "Highlight" || this.selectedAnnotation.AnnotationType === "Underline" || this.selectedAnnotation.AnnotationType === "Strikethrough") {
        this.generateTable();
      }
      this.selectedAnnotation.author = currentannotation.author;
      this.selectedAnnotation.setState = currentannotation.state;
      if (currentannotation.note) {
        this.selectedAnnotation.comment = currentannotation.note;
      }
      else {
        this.selectedAnnotation.comment = "";
      }
      this.commentPlaceholder = "";
      //for updating reply comments
      if (currentannotation.comments.length > 0) {
        this.selectedAnnotation.replyComments = [];
        for (let i = 0; i < currentannotation.comments.length; i++) {
          var reply = new Comment();
          reply.id = currentannotation.comments[i].annotName;
          reply.author = currentannotation.comments[i].author;
          reply.modifiedDate = this.formatCurrentDate(new Date(currentannotation.comments[i].modifiedDate));
          reply.note = currentannotation.comments[i].note;
          reply.state = currentannotation.comments[i].state;
          this.selectedAnnotation.replyComments.push(reply);
        }
        this.selectedAnnotation.isReply = true;
        this.ischeckedReplybox = true;
        this.displayReplies();
      }
      else {
        this.selectedAnnotation.isReply = false;
        this.isReplyCommentsContainer = false;
      }
      //for updating lock property
      if (currentannotation.isLocked) {
        this.allowinstractionsIstrue = true;
        this.selectedAnnotation.isLocked = true;
        this.selectedAnnotation.allowIntractions = currentannotation.allowedInteractions;
      }
      else {
        this.allowinstractionsIstrue = false;
        this.selectedAnnotation.isLocked = false;
      }
      //for updating print property
      this.selectedAnnotation.isPrint = currentannotation.isPrint;
    },
    updateChangesAnnotation() {
      let currentannotationSettings;
      //currentannotationSettings = this.annotationSettings();
      if (pdfviewerControl) {
        for (let i = 0; i < pdfviewerControl.annotationCollection.length; i++) {
          if (
            pdfviewerControl.annotationCollection[i].annotationId ===
            this.CurrentUpdateAnnotationID
          ) {
            let updatedValues = this.annotationUpdate(
              pdfviewerControl.annotationCollection[i]
            );
            pdfviewerControl.annotation.editAnnotation(updatedValues);
            //for updating comments
            //this.updateAnnotationComment(updatedValues);
            //for updating reply comments
            //this.updateAnnotationReplyComment(updatedValues);
            //this.ResetAnnotationProperties();
            this.enableUpdateButton = false;
            break;
          }
        }
      }
    },
    annotationUpdate(currentannotation) {
      console.log(currentannotation);
      if (
        (this.selectedAnnotation.AnnotationType === "Highlight" ||
          this.selectedAnnotation.AnnotationType === "Underline" ||
          this.selectedAnnotation.AnnotationType === "Strikethrough")
      ) {
        currentannotation.bounds = [];
        currentannotation.color = this.selectedAnnotation.fillColor ? (this.selectedAnnotation.fillColor.includes("rgba") ? this.rgbaStringToHex(this.selectedAnnotation.fillColor) : this.selectedAnnotation.fillColor) : "";
        if (this.selectedAnnotation.bounds.length <= 1) {
          currentannotation.bounds.push({
            X: this.selectedAnnotation.x,
            Y: this.selectedAnnotation.y,
            Width: this.selectedAnnotation.width,
            Height: this.selectedAnnotation.height,
            Left: this.selectedAnnotation.x,
            Top: this.selectedAnnotation.y
          });
        } else if (this.selectedAnnotation.bounds.length > 1) {
          for (var i = 0; i < this.selectedAnnotation.bounds.length; i++) {
            currentannotation.bounds.push({
              X: this.selectedAnnotation.bounds[i].X,
              Y: this.selectedAnnotation.bounds[i].Y,
              Width: this.selectedAnnotation.bounds[i].Width,
              Height: this.selectedAnnotation.bounds[i].Height,
              Left: this.selectedAnnotation.bounds[i].X,
              Top: this.selectedAnnotation.bounds[i].Y
            });
          }
        } else {
          currentannotation.bounds.X = this.selectedAnnotation.x;
          currentannotation.bounds.Y = this.selectedAnnotation.y;
          currentannotation.bounds.Width = this.selectedAnnotation.width;
          currentannotation.bounds.Height = this.selectedAnnotation.height;
          currentannotation.bounds.Left = this.selectedAnnotation.x,
            currentannotation.bounds.Top = this.selectedAnnotation.y;
        }
      } else if (this.selectedAnnotation.AnnotationType === "Ink") {
        currentannotation.bounds.width = this.selectedAnnotation.width;
        currentannotation.bounds.height = this.selectedAnnotation.height;
        currentannotation.bounds.x = this.selectedAnnotation.x;
        currentannotation.bounds.y = this.selectedAnnotation.y;
      } else if (
        this.selectedAnnotation.AnnotationType === "Arrow" ||
        this.selectedAnnotation.AnnotationType === "Line"
      ) {
        currentannotation.vertexPoints[0].x = this.selectedAnnotation.vertexX1;
        currentannotation.vertexPoints[0].y = this.selectedAnnotation.vertexY1;
        currentannotation.vertexPoints[1].x = this.selectedAnnotation.vertexX2;
        currentannotation.vertexPoints[1].y = this.selectedAnnotation.vertexY2;
        currentannotation.lineHeadStart =
          this.selectedAnnotation.lineHeadStartStyle;
        currentannotation.lineHeadEnd =
          this.selectedAnnotation.lineHeadEndStyle;
        if (this.selectedAnnotation.AnnotationType === "Line") {
          currentannotation.subject = 'Line';
        }
        else {
          currentannotation.subject = 'Arrow';
        }
      } else if (this.selectedAnnotation.AnnotationType === "Distance") {
        currentannotation.vertexPoints[0].x = this.selectedAnnotation.vertexX1;
        currentannotation.vertexPoints[0].y = this.selectedAnnotation.vertexY1;
        currentannotation.vertexPoints[1].x = this.selectedAnnotation.vertexX2;
        currentannotation.vertexPoints[1].y = this.selectedAnnotation.vertexY2;
        currentannotation.fillColor = this.selectedAnnotation.fillColor;
        currentannotation.leaderLength = this.selectedAnnotation.leaderLength;
        currentannotation.subject = "LineDimension";
      } else if (this.selectedAnnotation.AnnotationType === "FreeText") {
        currentannotation.bounds.width = this.selectedAnnotation.width;
        currentannotation.bounds.height = this.selectedAnnotation.height;
        currentannotation.bounds.left = this.selectedAnnotation.x;
        currentannotation.bounds.top = this.selectedAnnotation.y;
        currentannotation.bounds.x = this.selectedAnnotation.x;
        currentannotation.bounds.y = this.selectedAnnotation.y;
        currentannotation.dynamicText = this.selectedAnnotation.defaultText;
        if (this.selectedAnnotation.fontStyle === "Bold") {
          currentannotation.font.isBold = true;
          currentannotation.font.isStrikeout = false;
          currentannotation.font.isUnderline = false;
          currentannotation.font.isItalic = false;
        } else if (this.selectedAnnotation.fontStyle === "Italic") {
          currentannotation.font.isItalic = true;
          currentannotation.font.isStrikeout = false;
          currentannotation.font.isUnderline = false;
          currentannotation.font.isBold = false;
        } else if (this.selectedAnnotation.fontStyle === "Underline") {
          currentannotation.font.isUnderline = true;
          currentannotation.font.isStrikeout = false;
          currentannotation.font.isItalic = false;
          currentannotation.font.isBold = false;
        } else if (this.selectedAnnotation.fontStyle === "Strikethrough") {
          currentannotation.font.isStrikeout = true;
          currentannotation.font.isUnderline = false;
          currentannotation.font.isItalic = false;
          currentannotation.font.isBold = false;
        } else {
          currentannotation.font.isStrikeout = false;
          currentannotation.font.isUnderline = false;
          currentannotation.font.isItalic = false;
          currentannotation.font.isBold = false;
        }
        currentannotation.textAlign = this.selectedAnnotation.alignment;
        currentannotation.fontFamily = this.selectedAnnotation.fontFamily;
        currentannotation.fontSize = this.selectedAnnotation.fontSize;
        currentannotation.fontColor = this.selectedAnnotation.fontColor ? (this.selectedAnnotation.fontColor.includes("rgba") ? this.rgbaStringToHex(this.selectedAnnotation.fontColor) : this.selectedAnnotation.fontColor) : "";
      } else {
        currentannotation.bounds.width = this.selectedAnnotation.width;
        currentannotation.bounds.height = this.selectedAnnotation.height;
        currentannotation.bounds.left = this.selectedAnnotation.x;
        currentannotation.bounds.top = this.selectedAnnotation.y;
      }
      currentannotation.fillColor = this.selectedAnnotation.fillColor ? (this.selectedAnnotation.fillColor.includes("rgba") ? this.rgbaStringToHex(this.selectedAnnotation.fillColor) : this.selectedAnnotation.fillColor) : "";
      currentannotation.pageNumber = this.selectedAnnotation.pageNumber - 1;
      currentannotation.opacity = this.selectedAnnotation.opacity / 100;
      currentannotation.thickness = this.selectedAnnotation.thickness;
      currentannotation.strokeColor = this.selectedAnnotation.strokeColor ? (this.selectedAnnotation.strokeColor.includes("rgba") ? this.rgbaStringToHex(this.selectedAnnotation.strokeColor) : this.selectedAnnotation.strokeColor) : "";;
      currentannotation.lineHeadStartStyle = this.selectedAnnotation.lineHeadStartStyle;
      currentannotation.lineHeadEndStyle = this.selectedAnnotation.lineHeadEndStyle;
      //Condition for updating print property
      if (this.selectedAnnotation.isPrint) {
        currentannotation.isPrint = true;
        currentannotation.annotationSettings.isPrint = true;
      }
      else {
        currentannotation.isPrint = false;
        currentannotation.annotationSettings.isPrint = false;
      }
      //Condition for updating lock property
      if (this.selectedAnnotation.isLocked) {
        currentannotation.isLocked = true;
        currentannotation.annotationSettings.isLock = true;
        currentannotation.allowedInteractions = this.selectedAnnotation.allowIntractions;
      }
      else {
        currentannotation.isLocked = false;
        currentannotation.annotationSettings.isLock = false;
      }
      if (this.selectedAnnotation.AnnotationType === "Line") {
        currentannotation.subType = 'Line';
      }
      else if (this.selectedAnnotation.AnnotationType === "Arrow") {
        currentannotation.subType = 'Arrow';
      }
      else if (this.selectedAnnotation.AnnotationType === "Distance") {
        currentannotation.subType = "Distance";
      }
      this.updateAnnotationComments(currentannotation);
      return currentannotation;
    },
    updateReply() {
      let currentReplyComment = new Comment();
      currentReplyComment.id = this.generateUniqueId();
      (currentReplyComment.author = this.selectedAnnotation.replyAuthor),
        (currentReplyComment.note = this.selectedAnnotation.replyComment),
        (currentReplyComment.modifiedDate = this.formatCurrentDate(new Date())),
        (currentReplyComment.state = this.selectedAnnotation.replyState),
        this.selectedAnnotation.replyComments.push(currentReplyComment);
      this.displayReplies();
      this.selectedAnnotation.replyAuthor = "Guest";
      this.selectedAnnotation.replyComment = "";
      this.replyPlaceholder = "Reply Comment";
      this.selectedAnnotation.replyState = "None";
      if (this.selectedAnnotation.annotationUnSelect) {
        this.enableUpdateButton = true;
      }
    },
    generateUniqueId() {
      return crypto.randomUUID();
    },
    displayReplies() {
      var repliesContainer = document.getElementById("repliesContainer");
      repliesContainer.innerHTML = "";
      var proxy = this;
      this.selectedAnnotation.replyComments.forEach((comment) => {
        const replyContainer = document.createElement("div");
        replyContainer.className = "reply-container";
        replyContainer.id = comment.id;
        replyContainer.innerHTML = `
        <div class="reply-icon e-pv-comment-icon e-pv-icon"></div>
        <div class="reply-main-container" style="flex-grow: 1">
          <div class="reply-text" style="width: 100%; font-size: 12px; word-break: break-word; white-space: nowrap;">${comment.author
          } - ${comment.modifiedDate}</div>
          <div class="reply-text" style="width: 100%; font-size: 12px; word-break: break-word; white-space: nowrap;">${comment.note} &nbsp; ${comment.state !== "None" ? comment.state : ""
          }</div>
        </div>
        <div class="more-container">
        <button class="e-control e-btn e-lib e-flat e-icon-btn context-menu-btn" data-id="${comment.id}" id="contextmenutarget-${comment.id}">
        <span class="e-icons e-more-vertical-1 e-btn-icon" style = "font-size:12px;"></span>
        </button>
        </div>
      `;
        repliesContainer.appendChild(replyContainer);
        var contextMenuButton = replyContainer.querySelector('#contextmenutarget-' + comment.id);
        if (contextMenuButton) {
          contextMenuButton.onmousedown = function () {
            proxy.getCommentID(comment.id);
          };
          contextMenuButton.onclick = function (event) {
            proxy.openContextMenu(event);
          };
        }

      });
      this.isReplyCommentsContainer = true;
    },

    bindContextMenuEventListener(button, commentId) {
      button.addEventListener('click', () => this.getCommentID(commentId))
    },
    openContextMenu(event) {
      // Assuming contextMenu is an element in your DOM
      var menu = this.$refs.contextMenuElement.ej2Instances;
      menu.open(event.clientY, event.clientX);
    },
    getCommentID(commentId) {
      this.currentEditCommentId = commentId;
    },
    initializeContextMenu(commentId) {
      let menuOptions = {
        target: '#contextmenutarget-' + commentId,
        items: this.selectedAnnotation.replyMenuItems,
        select: (args) => {
          console.log(args);
          switch (args.element.innerText) {
            case "Edit":
              this.onEditButtonClick(this.currentEditCommentId);
              break;
            case "Delete":
              this.onreplycommentdelete(this.currentEditCommentId);
              break;
          }
        },
      };
      var contextMenuElement = document.getElementById('contextmenu-' + commentId);
      new ContextMenu(menuOptions, contextMenuElement);
    },
    onEditButtonClick(commentId) {
      this.isEditing = true;
      const comment = this.selectedAnnotation.replyComments.find(
        (comment) => comment.id === commentId
      );
      if (comment) {
        this.selectedAnnotation.replyAuthor = comment.author;
        this.selectedAnnotation.replyComment = comment.note;
        this.selectedAnnotation.replyState = comment.state;
        this.currentEditCommentId = commentId;
      }
    },
    onreplycommentdelete(commentId) {
      const replyContainer = document.getElementById(commentId);
      if (replyContainer) {
        replyContainer.remove();
      }
      const commentIndex = this.selectedAnnotation.replyComments.findIndex(
        (comment) => comment.id === commentId
      );
      if (commentIndex !== -1) {
        this.selectedAnnotation.replyComments.splice(commentIndex, 1);
      }
      if (this.selectedAnnotation.replyComments.length === 0) {
        this.selectedAnnotation.isReply = false;
        this.ischeckedReplybox = false;
        this.isReplyCommentsContainer = false;
        document.getElementById("repliesContainer").style.display = "none";
      }
      this.displayReplies();
    },
    updateEditReply() {
      this.isEditing = true;
      let currentReplyComment;
      if (this.isEditing && this.currentEditCommentId) {
        currentReplyComment = this.selectedAnnotation.replyComments.find(
          (comment) => comment.id === this.currentEditCommentId
        );
        if (currentReplyComment) {
          currentReplyComment.author = this.selectedAnnotation.replyAuthor;
          currentReplyComment.note = this.selectedAnnotation.replyComment;
          currentReplyComment.state = this.selectedAnnotation.replyState;
          currentReplyComment.modifiedDate = this.formatCurrentDate(new Date());
        } else {
          console.error(
            `Comment with ID ${this.currentEditCommentId} not found.`
          );
        }
        this.displayReplies();
        this.isEditing = false;
        this.currentEditCommentId = null;
        this.selectedAnnotation.replyAuthor = "Guest";
        this.selectedAnnotation.replyComment = "";
        this.replyPlaceholder = "Reply Comment";
        this.selectedAnnotation.replyState = "None";
        if (this.selectedAnnotation.annotationUnSelect) {
          this.enableUpdateButton = true;
        }
      }
    },
    OpenContextMenu(MouseEventArgs) {
      conteMenuObj.o(MouseEventArgs.e.ClientX, MouseEventArgs.e.ClientY);
    },
    updateAnnotationReplyComment(currentAnnotation) {
      let isReplyChanged = false;
      currentAnnotation.commentType = 'add';
      currentAnnotation.replyComment = [];
      if (this.selectedAnnotation.replyComments.length > 0) {
        for (let i = 0; i < this.selectedAnnotation.replyComments.length; i++) {
          if (currentAnnotation.comments[i] && (this.selectedAnnotation.replyComments[i].note != currentAnnotation.comments[i].note)) {
            isReplyChanged = true;
            currentAnnotation.commentType = 'edit';
            currentAnnotation.commentId = currentAnnotation.comments[i].annotName;
            currentAnnotation.editComment = this.selectedAnnotation.replyComments[i].note;
          }
          currentAnnotation.replyComment.push(this.selectedAnnotation.replyComments[i].note);
        }
      }
      if (currentAnnotation.editComment) {
        currentAnnotation.comments = this.selectedAnnotation.replyComments;
      }
      pdfviewerControl.annotation.editAnnotation(currentAnnotation);
      if (!isReplyChanged) {
        currentAnnotation.commentId = null;
        currentAnnotation.editComment = null;
      }
    },
    formatCurrentDate(date) {
      const options = {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Use 12-hour format
      };
      return date.toLocaleString('en-US', options).replace(',', '');
    },

    updateAnnotationComment(currentAnnotation) {
      currentAnnotation.author = this.selectedAnnotation.author;
      let shapeType = currentAnnotation.indent ? currentAnnotation.indent : "";
      if (shapeType != "LineDimension" && shapeType != "PolyLineDimension" && shapeType != "PolygonDimension" && shapeType != "PolygonRadius" && shapeType != "PolygonVolume") {
        currentAnnotation.note = this.selectedAnnotation.comment;
      }
      currentAnnotation.setState = this.selectedAnnotation.setState;
      pdfviewerControl.annotation.editAnnotation(currentAnnotation);
    },
    findStampComments(type) {
      if (type === "Dynamic") {
        this.isDynamicStamp = false;
        this.isSignHereStamp = true;
        this.isStandardBusinessStamp = true;
      }
      else if (type === "SignHere") {
        this.isDynamicStamp = true;
        this.isSignHereStamp = false;
        this.isStandardBusinessStamp = true;
      }
      else if (type === "StandardBusiness") {
        this.isDynamicStamp = true;
        this.isSignHereStamp = true;
        this.isStandardBusinessStamp = false;
      }
      else {
        this.isDynamicStamp = true;
        this.isSignHereStamp = true;
        this.isStandardBusinessStamp = true;
      }
    },
    rgbaStringToHex(rgba) {
      const rgbaRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
      const match = rgba.match(rgbaRegex);

      if (match) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        const a = parseFloat(match[4]);

        const redHex = ('0' + r.toString(16)).slice(-2);
        const greenHex = ('0' + g.toString(16)).slice(-2);
        const blueHex = ('0' + b.toString(16)).slice(-2);

        if (a !== undefined && a < 1) {
          const alphaHex = ('0' + Math.round(a * 255).toString(16)).slice(-2);
          return "#" + redHex + greenHex + blueHex + alphaHex;
        } else {
          return "#" + redHex + greenHex + blueHex;
        }
      } else {
        return null; // Invalid RGBA string
      }
    },
    generateTable() {
      const container = document.querySelector(".pdfViewer-coordinate-table");
      container.innerHTML = "";
      let tableHTML = "";

      // Check annotation type (Polygon, Perimeter, etc.)
      if (this.selectedAnnotation.AnnotationType === "Polygon" ||
        this.selectedAnnotation.AnnotationType === "Perimeter" ||
        this.selectedAnnotation.AnnotationType === "Area" ||
        this.selectedAnnotation.AnnotationType === "Volume") {

        if (this.selectedAnnotation.vertexPoints.length > 0) {
          tableHTML += '<div>';
          tableHTML += '<table class="inner-table coordinate-table vertex">';

          // Loop through the VertexPoints and create rows with 2 columns
          for (let i = 0; i < this.selectedAnnotation.vertexPoints.length; i++) {
            if (i % 2 === 0) {
              // Start a new row every two points
              tableHTML += '<tr>';
            }

            // Add the X and Y value of the current point in a single cell
            const point = this.selectedAnnotation.vertexPoints[i];
            if (i % 2 === 0) {
              tableHTML += `<td style="border-right: 1px solid #ddd;">X${i + 1} =${parseInt(point.x, 10)} &ensp; Y${i + 1} =${parseInt(point.y, 10)}</td>`;
            } else {
              // For the second point in the pair (i + 1), add it to the second column
              const point2 = this.selectedAnnotation.vertexPoints[i];
              tableHTML += `<td>X${i + 1} =${parseInt(point2.x, 10)} &ensp; Y${i + 1} =${parseInt(point2.y, 10)}</td>`;
              tableHTML += '</tr>';
            }
          }

          tableHTML += '</table>';
          tableHTML += '</div>';
        }
        if (this.selectedAnnotation.vertexPoints.length === 1) {
          this.disableDeleteButton = true;
        } else {
          this.disableDeleteButton = false;
        }
      }
      else {
        tableHTML += '<div>';
        tableHTML += '<table class="inner-table coordinate-table-bounds">';
        this.selectedAnnotation.bounds.forEach((bound, index) => {
          tableHTML += '<tr>';
          tableHTML += `<td style="width:400px">X${index + 1} = ${parseInt(bound.X, 10)} &ensp; Y${index + 1} = ${parseInt(bound.Y, 10)} &ensp; W${index + 1} = ${parseInt(bound.Width, 10)} &ensp; H${index + 1} = ${parseInt(bound.Height, 10)}</td>`;
          tableHTML += '</tr>';
        });
        tableHTML += '</table>';
        tableHTML += '</div>';
        if (this.selectedAnnotation.bounds.length === 1) {
          this.disableDeleteButton = true;
        } else {
          this.disableDeleteButton = false;
        }
      }
      // Insert the generated table into the DOM
      container.innerHTML = tableHTML;
      container.style.display = "block";
    },
    onBeforeUpload() {
      var removeIcons = document.getElementById('removeIcon');
      var proxy = this;
      if (removeIcons) {
        removeIcons.onclick = function () {
          proxy.onFileRemove();
        };
      }
    },
    onUpload: function (event) {
      document.getElementById('fileName').innerHTML = event.fileData.name;
      document.getElementById('uploadedImage').src = this.syncfusionLogo;
    },
    isNullOrUndefined(obj) {
      return (obj === null) || (obj === undefined);
    },
    updateAnnotationComments(currentAnnotation) {
      let isReplyChanged = false;
      currentAnnotation.commentType = "add";
      if (((!this.isNullOrUndefined(currentAnnotation.note) && (currentAnnotation.note !== this.selectedAnnotation.comment)) ||
        (!this.isNullOrUndefined(currentAnnotation.notes) && (currentAnnotation.notes !== this.selectedAnnotation.comment))) &&
        (currentAnnotation.comments && (currentAnnotation.comments.length > 0))) {

        currentAnnotation.commentType = "edit";
      }
      let calibrationType = currentAnnotation.indent ?? "";
      if (calibrationType !== "LineDimension" && calibrationType !== "PolyLineDimension" && calibrationType !== "PolygonDimension" &&
        calibrationType !== "PolygonRadius" && calibrationType !== "PolygonVolume") {

        if (!this.isNullOrUndefined(currentAnnotation.note) || ((currentAnnotation.shapeAnnotationType === "Ink" || currentAnnotation.shapeAnnotationType === "FreeText") && !currentAnnotation.note)) {
          currentAnnotation.note = this.selectedAnnotation.comment;
        }
        else if (!this.isNullOrUndefined(currentAnnotation.notes)) {
          currentAnnotation.notes = this.selectedAnnotation.comment;
        }
      }
      currentAnnotation.replyComment = [];
      if (!this.isNullOrUndefined(this.selectedAnnotation.replyComments) && (this.selectedAnnotation.replyComments.length > 0)) {
        if (this.selectedAnnotation.replyComments.length > currentAnnotation.comments?.length) {
          let diff = Number(this.selectedAnnotation.replyComments.length - currentAnnotation.comments.length);
          currentAnnotation.commentType = "add";
          for (let index = (this.selectedAnnotation.replyComments.length - diff); index < (this.selectedAnnotation.replyComments.length); index++) {
            currentAnnotation.replyComment.push(this.selectedAnnotation.replyComments[index].note);
          }
        }
        else if (this.selectedAnnotation.replyComments.length === currentAnnotation.comments?.length) {
          this.selectedAnnotation.replyComments.forEach((value, index) => {
            if (currentAnnotation.comments[index] && (value.note !== currentAnnotation.comments[index].note)) {
              isReplyChanged = true;
              currentAnnotation.commentType = 'edit';
              currentAnnotation.commentId = currentAnnotation.comments[index].annotName;
              currentAnnotation.editComment = value.note;
            }
            //currentAnnotation.replyComment.push(value.note);
          });
        }
      }
      if (!isReplyChanged) {
        currentAnnotation.commentId = null;
        currentAnnotation.editComment = null;
      }
    },
    contextMenuItemSelected(args) {
      var proxy = this;
      switch (args.item.text) {
        case 'Edit':
          this.onEditButtonClick(proxy.currentEditCommentId);
          break;
        case 'Delete':
          this.onreplycommentdelete(proxy.currentEditCommentId);
          break;
      }
    },
    AnnotationUnSelectedEvent(AnnotationUnSelectEventArgs) {
      pdfviewerControl = this.$refs.pdfviewer.ej2Instances;
      pdfviewerControl.enableCommentPanel = false;
      this.StampClickedIStrue = true;
      this.ResetAnnotationProperties();
    },
    resetReplies() {
      this.selectedAnnotation.isReply = false;
      this.selectedAnnotation.replyComments = [];
      this.ischeckedReplybox = false;
      this.isReplyCommentsContainer = false;
    },
    onCommentFocus() {
      this.commentPlaceholder = "";
    },
    onCommentBlur(args) {
      if (args.value === "" && this.isAnnotationUnselected) {
        args.event.target.placeholder = "New Comment";
      }
    },
    change: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.checked) {
        viewer.serviceUrl = "";
      } else {
        viewer.serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
      }
      viewer.dataBind();
      viewer.load(viewer.documentPath, null);
    }
  },
};
</script>