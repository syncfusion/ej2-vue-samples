<template>
  <div class="orientation-tab-section">
    <div class="col-lg-8 control-section">
        <div class="e-sample-resize-container">
        <ejs-tab ref="tabObj" id="tab_orientation" height='320px' :showCloseButton=true heightAdjustMode='Auto'>
            <e-tabitems>
                <e-tabitem :header='headerText0' :content="'RomeTemplate'"></e-tabitem>
                <template v-slot:RomeTemplate>
                    <div><div class="content-title"><div class="cnt-text">Employee Info</div></div><div id="rome">
                        <div class="template-container"><div class="left"><img class="empImg" src="https://ej2.syncfusion.com/demos/src/images/employees/1.png" alt="Anne Dodsworth" /></div>
                        <div class="left info"><div class="empname">Anne Dodsworth</div> 
                        <div class="role">Product Manager</div></div></div><div class="template-container"><div class="left">
                            <img class="empImg" src="https://ej2.syncfusion.com/demos/src/images/employees/2.png" alt="Laura Callahan" /></div>
                            <div class="left info">
                                <div class="empname">Laura Callahan</div> <div class="role">Team Lead</div></div></div>
                                <div class="template-container"><div class="left">
                                    <img class="empImg" src="https://ej2.syncfusion.com/demos/src/images/employees/3.png" alt="Andrew Fuller" /></div>
                                    <div class="left info"><div class="empname">Andrew Fuller</div> <div class="role">Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <e-tabitem :header='headerText1' :content="'ParisTemplate'"></e-tabitem>
                <template v-slot:ParisTemplate>
                    <div><div class="content-title"><div class="cnt-text">Employee Info</div></div><div id="rome">
                        <div class="template-container"><div class="left"><img class="empImg" src="src/tab/Employees/4.png" alt="Robert King" /></div>
                            <div class="left info"><div class="empname">Robert King</div> 
                            <div class="role">Team Lead</div></div></div><div class="template-container"><div class="left">
                                <img class="empImg" src="src/tab/Employees/5.png" alt="Michael Suyama" /></div>
                                <div class="left info"><div class="empname">Michael Suyama</div> <div class="role">Developer</div></div></div>
                                    <div class="template-container"><div class="left"><img class="empImg" src="src/tab/Employees/6.png" alt="Margaret Peacock" /></div>
                                    <div class="left info"><div class="empname">Margaret Peacock</div> <div class="role">Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <e-tabitem :header='headerText2' :content="'LondonTemplate'"></e-tabitem>
                <template v-slot:LondonTemplate>
                    <div><div class="content-title"><div class="cnt-text">Employee Info</div></div>
                    <div id="rome"><div id="ripple" class="template-container"><div class="left">
                        <img class="empImg" src="src/tab/Employees/7.png" alt="Janet Leverling" /></div>
                    <div class="left info"><div class="empname">Janet Leverling</div> 
                    <div class="role"> CEO</div></div></div><div class="template-container"><div class="left">
                        <img class="empImg" src="src/tab/Employees/8.png" alt="Steven Buchanan" /></div>
                    <div class="left info"><div class="empname">Steven Buchanan</div> <div class="role">HR</div></div></div>
                    <div class="template-container"><div class="left">
                        <img class="empImg" src="src/tab/Employees/9.png" alt="Nancy Davolio" /></div>
                    <div class="left info"><div class="empname">Nancy Davolio</div> 
                    <div class="role">Product Manager</div></div></div></div></div>
                </template>
            </e-tabitems>
        </ejs-tab>
        </div>
        <div id="action-description">
        <p>This sample demonstrates the <code>header</code> orientation of the <code>Tab</code>. Select option from drop-downs to switch header placement and changing the header style in properties panel.</p>
    </div>

    <div id="description">
        <p>The <code>Tab</code> allows to place the header section inside the Tab component either at <code>top/bottom/left/right</code> position by using <code>headerPlacement</code> property.</p>
        <p>This sample illustrates the use of header placement and <code>showCloseButton</code> property. Users can change the header position by changing the drop-down value options and can close the Tab item by clicking close icon in header.</p>
        <br>
        <p>The User can also view different header styles of Tab component by selecting options from `Header Styles` drop-down. Header styles changed by adding predefined classes in Tab root element and it class names listed below</p>
        <ul>
           <li>Material and Fabric theme differentiates all the available tab header styles such as <code>e-fill, e-background e-accent.</code></li>
           <li>In bootstrap theme, all the styles such as <code>e-fill</code> & <code>e-background e-accent</code> will have the same look with no difference.</li>
        </ul>
        <p>If above classes not included in root element default style will applied in Tab component.</p>
        <p>More information about Tab can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/tab/getting-started/" target="_blank">documentation</a> section.</p>
    </div>
    </div>
    <div class="col-lg-4 property-section">
                <table id="property" title="Properties">
                    <tr>
                        <td style="width:50%; padding-bottom: 10px;">Header Placement:</td>
                        <td style="width:50%; padding-bottom: 10px;">
                              <ejs-dropdownlist ref="dropObj1" id='header-place' width='90%' :dataSource='dataPlace' :change='placeChange' :value='placeValue' :fields='placeFields'>
                            </ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:50%; padding-bottom: 10px;">Header Styles:</td>
                        <td style="width:50%; padding-bottom: 10px;">
                            <ejs-dropdownlist ref="dropObj2" id='header-styles' width='90%' :dataSource='dataStyles' :change='styleChange' :value='styleValue' :fields='styleFields'>
                            </ejs-dropdownlist>
                        </td>
                    </tr>
                </table>
    </div>
</div>
</template>
<style>
#tab_orientation .e-content .e-item {
    font-size: 12px;
    padding: 10px;
    text-align: justify;
}

#tab_orientation .e-tab-text {
        display: inherit;
    }



#tab_orientation .e-content .e-item .template-container {
    height: 63px;
    padding: 7px 16px 0 16px;
    border-bottom: 1px solid gainsboro;
}
#tab_orientation .e-content .e-item .template-container:hover {
    background: #eee;
}
.highcontrast #tab_orientation .e-content .e-item .template-container:hover
{
    background: #685708;
}
.bootstrap-dark #tab_orientation .e-content .e-item .template-container:hover,
.bootstrap5-dark #tab_orientation .e-content .e-item .template-container:hover,
.tailwind-dark #tab_orientation .e-content .e-item .template-container:hover,
.fabric-dark #tab_orientation .e-content .e-item .template-container:hover,
.material-dark #tab_orientation .e-content .e-item .template-container:hover,
.fluent-dark #tab_orientation .e-content .e-item .template-container:hover
{
    background: #343a40;
}
.left {
    display: inline-block;
    vertical-align: top;
}
.empImg {
    height: 48px;
    width: 48px;
}
.empname, .role {
    font-size: 15px;
    line-height: normal;
}
.empname {
    font-weight: 500;
    padding: 0px !important;
    bottom: 0px !important;
    margin: 0px !important;
}
.role {
    color: grey;
    font-weight: 100;
}
.info {
    padding: 7px 15px 0 15px;
}
.content-title {
    height: 50px;
    display: table;
    margin: 0 auto;
}
.cnt-text {
    vertical-align: middle;
    display: table-cell;
    font-size: 18px;
    font-weight: 600;
}
.property-panel-content {
    padding: 10px;
}
@media only screen and (min-width: 1824px) {
    .orientation-tab-section .e-sample-resize-container {
        width: 60%;
    }

    .e-bigger .orientation-tab-section .e-sample-resize-container {
        width: 70%;
    }
}

    @media screen and (max-width: 376px) {
        .orientation-tab-section {
            padding: 0 5px;
        }
        #tab_orientation .e-content.sb-sample-content-area .e-item.e-active {
            padding-left: 0;
            padding-right: 0;
        }
        .template-container {
            padding: 7px 5px 0;
        }
        #tab_orientation .e-content .e-item.e-active {
            padding: 10px 0;
        }
        .info {
            padding: 7px 0 0 8px;
        }
    }
</style>
<script>
import { TabComponent, TabItemsDirective, TabItemDirective } from "@syncfusion/ej2-vue-navigations";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    components: {
        'ejs-tab': TabComponent,
        'e-tabitems': TabItemsDirective,
        'e-tabitem': TabItemDirective,
        'ejs-dropdownlist': DropDownListComponent,
    },
     data: function(){
        return {
            headerText0: { text: 'Rome' },
            headerText1: { text: 'Paris' },
            headerText2: { text: 'London' },
            dataPlace: [{ id: 'top', position: 'Top' }, { id: 'bottom', position: 'Bottom' },{ id: 'left', position: 'Left' }, { id: 'right', position: 'Right' }],
            dataStyles: [{ id: 'default', class: 'Default' }, { id: 'fill', class: 'Fill' }, { id: 'accent', class: 'Accent' }],
            styleValue: 'default',
            styleFields: { text: 'class', value: 'id' },
            placeValue: 'top',
            placeFields: { text: 'position', value: 'id' },
        }
   },
     methods: {
       placeChange: function(args) {
           this.tabObj = this.$refs.tabObj.ej2Instances;
           var placement = this.$refs.dropObj1.$el.value;
           this.tabObj.headerPlacement = placement;
           this.tabObj.dataBind();
       },
       styleChange: function(args) {
            var name = args.value;
            this.tabObj = this.$refs.tabObj.ej2Instances;
            this.tabObj.element.classList.remove('e-fill');
            this.tabObj.element.classList.remove('e-background');
            this.tabObj.element.classList.remove('e-accent');
            if (name === 'fill') {
                this.tabObj.element.classList.add('e-fill');
            } else if (name === 'accent') {
                this.tabObj.element.classList.add('e-background');
                this.tabObj.element.classList.add('e-accent');
            }
            this.tabObj.refreshActiveBorder();
       }
    }
};
</script>