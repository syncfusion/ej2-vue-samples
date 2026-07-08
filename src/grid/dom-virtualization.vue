<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This demo showcases the DOM Virtualization feature in the Grid, enabling efficient handling of large datasets. Instead of rendering all records at once, the Grid intelligently displays only the rows visible within the viewport, ensuring smooth scrolling and responsive performance.</p>
        </div>
        <div class="content-wrapper">
            <ejs-grid ref='grid' id='DOMVirtualGrid' :dataSource="getTradeData" :query="query" :allowSelection='true' :allowFiltering='true' :allowSorting='true' :enableVirtualization='true' :enableDomVirtualization='true' :domVirtualizationSettings='domVirtualizationSettings' :pageSettings='pageSettings' :filterSettings='filterSettings' height='400' :rowHeight='50'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' width='150' textAlign='Right' :isPrimaryKey='true' :visible='true'></e-column>
                    <e-column field='Employees' headerText='Employee Name' width='260' :template="'empAvatarTemplate'"></e-column>
                    <e-column field='Designation' headerText='Designation' width='170' :clipMode="'EllipsisWithTooltip'"></e-column>
                    <e-column field='Status' headerText='Status' width='150' :template="'statusTemplate'"></e-column>
                    <e-column field='Trustworthiness' headerText='Trustworthiness' width='160' :template="'trustTemplate'" :visible='false'></e-column>
                    <e-column field='Rating' headerText='Rating' width='160' :template="'ratingTemplate'" :visible='false'></e-column>
                    <e-column field='Software' headerText='Software Proficiency' width='180' :template="'progessTemplate'" :visible='false' :allowFiltering='false' :allowSorting='false'></e-column>
                    <e-column field='CurrentSalary' headerText='Current Salary' format='C2' textAlign='Right' width='160'></e-column>
                    <e-column field='Location' width='160' headerText='Location'></e-column>
                    <e-column field='Address' headerText='Address' width='240' :clipMode="'EllipsisWithTooltip'"></e-column>
                </e-columns>

                <template v-slot:empAvatarTemplate="{data}">
                    <div class="customer-details">
                        <div :class="'customer-avatar ' + getAvatarClass(data.Employees)">{{ getInitials(data.Employees) }}</div>
                        <div class="customer-info">
                            <p class="customer-name">{{ data.Employees }}</p>
                            <p class="customer-email">{{ data.Mail }}</p>
                        </div>
                    </div>
                </template>

                <template v-slot:statusTemplate="{data}">
                    <div :class="'statustemp ' + (data.Status === 'Active' ? 'e-activecolor' : 'e-inactivecolor')">
                        <span :class="'statustxt ' + (data.Status === 'Active' ? 'e-activecolor' : 'e-inactivecolor')">{{ data.Status }}</span>
                    </div>
                </template>

                <template v-slot:trustTemplate="{data}">
                    <img :src="'src/grid/images/' + data.Trustworthiness + '.png'" style="width: 31px; height: 24px" :alt="data.Trustworthiness"/>
                    <span id="Trusttext">{{ data.Trustworthiness }}</span>
                </template>

                <template v-slot:ratingTemplate="{data}">
                    <ejs-rating :value="data.Rating" :readOnly='true' cssClass='custom-rating'></ejs-rating>
                </template>
                <template v-slot:progessTemplate="{data}">
                    <div id="myProgress" class="pbar">
                        <div id="myBar" class="bar" :class="{'progressdisable': data.Status === 'Inactive'}" :style="{ width: getProgressWidth(data.Software) + '%' }">
                            <div id="pbarlabel" class="barlabel">{{ getProgressWidth(data.Software) }}%</div>
                        </div>
                    </div>
                </template>


            </ejs-grid>
        </div>

        <div id="description">
            <p>
                DOM virtualization is a performance optimization feature that renders only the visible rows within the Grid viewport instead of rendering the entire dataset. This significantly improves performance when working with large volumes of data.
            </p>
            <p>
                With this feature enabled, the Grid calculates the content height and renders only the necessary <code>tr</code> elements required for the visible portion of the Grid. As the user scrolls, previously rendered rows are replaced with newly required rows, ensuring that only a minimal number of DOM elements are maintained at any time. This behavior improves both rendering speed and memory usage, making the Grid highly efficient for large datasets.
            </p>
            <p>
                DOM virtualization can be enabled by setting the <code>enableDomVirtualization</code> property to <code>true</code>. In this demo, the Grid is loaded with "100k" records using both DOM virtualization and row virtualization features. Row virtualization is enabled using the <code>enableVirtualization</code> property.
            </p>
            <p>
                <strong>Injecting Module</strong>
            </p>
            <p>
                Features of the Grid component are organized into individual, feature-specific modules. To use DOM virtualization, inject the module by <code>Grid.Inject(DomVirtualization);</code>
            </p>
            <br />
            <p>
                More information on DOM virtualization can be found in this
                <a target="_blank" aria-label="API link for documentation"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/getting-started">
                    documentation section</a>.
            </p>
           <p>
                Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit our
                <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">
                    Vue Data Grid component</a> page.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { GridComponent, ColumnsDirective, ColumnDirective, DomVirtualization, Sort, Filter, Selection } from "@syncfusion/ej2-vue-grids";
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

const avatarColorClasses: string[] = ['avatar-red', 'avatar-blue', 'avatar-green', 'avatar-orange', 'avatar-purple'];

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-rating': RatingComponent
  },
  data() {
    return {
      pageSettings: { pageSize: 100 },
      filterSettings: { type: 'CheckBox' },
      domVirtualizationSettings: { rowBuffer: 10 }
    };
  },
  methods: {
    getInitials(name: string): string {
      const parts: string[] = name.trim().split(' ');
      if (parts.length >= 2) {
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    },
    getAvatarClass(name: string): string {
      let sum: number = 0;
      for (let i: number = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
      }
      return avatarColorClasses[sum % avatarColorClasses.length];
    },
    getProgressWidth(software: number): number {
      if (software <= 20) {
        return software + 30;
      }
      return software;
    }
  },
  computed: {
    getTradeData(): DataManager {
      return new DataManager({
        url: "https://services.syncfusion.com/vue/production/api/UrlDataSource",
        adaptor: new UrlAdaptor()
      });
    },
    query(): Query {
      return new Query().addParams('dataCount', '100000');
    }
  },
  provide: {
    grid: [DomVirtualization, Sort, Filter, Selection]
  }
};
</script>

<style scoped>
#DOMVirtualGrid .customer-details {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 0;
    width: 100%;
}

#DOMVirtualGrid .customer-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
}

#DOMVirtualGrid .customer-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

#DOMVirtualGrid .customer-name {
    margin: 0 0 2px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    color: #202124;
}

#DOMVirtualGrid .customer-email {
    margin: 0;
    font-size: 13px;
    line-height: 1.2;
    color: #5f6368;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Avatar pastel color variants */
#DOMVirtualGrid .avatar-red {
    color: rgb(217, 48, 37);
    background-color: rgb(252, 232, 230);
}

#DOMVirtualGrid .avatar-blue {
    color: rgb(26, 115, 232);
    background-color: rgb(232, 240, 254);
}

#DOMVirtualGrid .avatar-green {
    color: rgb(19, 115, 51);
    background-color: rgb(230, 244, 234);
}

#DOMVirtualGrid .avatar-orange {
    color: rgb(234, 134, 0);
    background-color: rgb(254, 247, 224);
}

#DOMVirtualGrid .avatar-purple {
    color: rgb(147, 51, 234);
    background-color: rgb(243, 232, 255);
}

/* Status template styles */
#DOMVirtualGrid .statustemp.e-inactivecolor {
    background-color: #ffd7cc;
    width: 64px;
}

#DOMVirtualGrid .statustemp.e-activecolor {
    background-color: #ccffcc;
    width: 57px;
}

#DOMVirtualGrid .statustxt.e-activecolor {
    color: #00cc00;
}

#DOMVirtualGrid .statustxt.e-inactivecolor {
    color: #e60000;
}

#DOMVirtualGrid .statustemp {
    position: relative;
    height: 19px;
    border-radius: 5px;
    text-align: center;
}

#DOMVirtualGrid td.e-rowcell .statustxt.e-activecolor {
    color: #00cc00;
    position: relative;
    top: 9px;
}

#DOMVirtualGrid td.e-rowcell .statustxt.e-inactivecolor {
    color: #e60000;
    position: relative;
    top: 9px;
}

.bootstrap5 #DOMVirtualGrid td.e-rowcell .statustxt.e-inactivecolor,
.bootstrap5 #DOMVirtualGrid td.e-rowcell .statustxt.e-activecolor {
    top: 8px;
}

.e-bigger #DOMVirtualGrid.e-grid .statustxt {
    position: relative;
    top: -2px;
}



/* Progress bar */
#DOMVirtualGrid #myProgress {
    position: relative;
    height: 18px;
    width: 10em;
    text-align: left;
    background-color: white;
}

#DOMVirtualGrid #myBar {
    position: absolute;
    width: 10%;
    height: 100%;
    background-color: #00b300;
}

#DOMVirtualGrid #myBar.progressdisable {
    background-color: #df2222;
}

#DOMVirtualGrid #pbarlabel {
    position: relative;
    left: 10px;
    line-height: 18px;
    font-size: 11px;
    color: white;
}

.custom-rating.e-rating-container .e-rating-item-container {
    font-size: 11px;
}

.custom-rating.e-rating-container .e-rating-item-container .e-rating-icon {
    -webkit-text-fill-color: lightgrey;
    -webkit-text-stroke: 1px lightgrey;
}

.custom-rating.e-rating-container .e-rating-item-container.e-rating-selected .e-rating-icon {
    background: linear-gradient(to right, #ffa600 var(--rating-value), #ffa600 var(--rating-value));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #ffa600;
}

/* Dark theme */
.fabric-dark #DOMVirtualGrid .customer-name,
.material-dark #DOMVirtualGrid .customer-name,
.bootstrap-dark #DOMVirtualGrid .customer-name,
.tailwind-dark #DOMVirtualGrid .customer-name,
.tailwind3-dark #DOMVirtualGrid .customer-name,
.bootstrap5-dark #DOMVirtualGrid .customer-name,
.bootstrap5_3-dark #DOMVirtualGrid .customer-name,
.material3-dark #DOMVirtualGrid .customer-name,
.fluent-dark #DOMVirtualGrid .customer-name,
.fluent2-dark #DOMVirtualGrid .customer-name,
.fluent2-highcontrast #DOMVirtualGrid .customer-name,
.highcontrast #DOMVirtualGrid .customer-name {
    color: rgb(232, 234, 237);
}

.fabric-dark #DOMVirtualGrid .customer-email,
.material-dark #DOMVirtualGrid .customer-email,
.bootstrap-dark #DOMVirtualGrid .customer-email,
.tailwind-dark #DOMVirtualGrid .customer-email,
.tailwind3-dark #DOMVirtualGrid .customer-email,
.bootstrap5-dark #DOMVirtualGrid .customer-email,
.bootstrap5_3-dark #DOMVirtualGrid .customer-email,
.material3-dark #DOMVirtualGrid .customer-email,
.fluent-dark #DOMVirtualGrid .customer-email,
.fluent2-dark #DOMVirtualGrid .customer-email,
.fluent2-highcontrast #DOMVirtualGrid .customer-email,
.highcontrast #DOMVirtualGrid .customer-email {
    color: rgb(154, 160, 166);
}

.fabric-dark #DOMVirtualGrid .avatar-red,
.material-dark #DOMVirtualGrid .avatar-red,
.bootstrap-dark #DOMVirtualGrid .avatar-red,
.tailwind-dark #DOMVirtualGrid .avatar-red,
.tailwind3-dark #DOMVirtualGrid .avatar-red,
.bootstrap5-dark #DOMVirtualGrid .avatar-red,
.bootstrap5_3-dark #DOMVirtualGrid .avatar-red,
.material3-dark #DOMVirtualGrid .avatar-red,
.fluent-dark #DOMVirtualGrid .avatar-red,
.fluent2-dark #DOMVirtualGrid .avatar-red {
    color: rgb(242, 139, 130);
    background-color: rgb(89, 53, 50);
}

.fabric-dark #DOMVirtualGrid .avatar-blue,
.material-dark #DOMVirtualGrid .avatar-blue,
.bootstrap-dark #DOMVirtualGrid .avatar-blue,
.tailwind-dark #DOMVirtualGrid .avatar-blue,
.tailwind3-dark #DOMVirtualGrid .avatar-blue,
.bootstrap5-dark #DOMVirtualGrid .avatar-blue,
.bootstrap5_3-dark #DOMVirtualGrid .avatar-blue,
.material3-dark #DOMVirtualGrid .avatar-blue,
.fluent-dark #DOMVirtualGrid .avatar-blue,
.fluent2-dark #DOMVirtualGrid .avatar-blue {
    color: rgb(138, 180, 248);
    background-color: rgb(52, 65, 85);
}

.fabric-dark #DOMVirtualGrid .avatar-green,
.material-dark #DOMVirtualGrid .avatar-green,
.bootstrap-dark #DOMVirtualGrid .avatar-green,
.tailwind-dark #DOMVirtualGrid .avatar-green,
.tailwind3-dark #DOMVirtualGrid .avatar-green,
.bootstrap5-dark #DOMVirtualGrid .avatar-green,
.bootstrap5_3-dark #DOMVirtualGrid .avatar-green,
.material3-dark #DOMVirtualGrid .avatar-green,
.fluent-dark #DOMVirtualGrid .avatar-green,
.fluent2-dark #DOMVirtualGrid .avatar-green {
    color: rgb(129, 201, 149);
    background-color: rgb(46, 73, 58);
}

.fabric-dark #DOMVirtualGrid .avatar-orange,
.material-dark #DOMVirtualGrid .avatar-orange,
.bootstrap-dark #DOMVirtualGrid .avatar-orange,
.tailwind-dark #DOMVirtualGrid .avatar-orange,
.tailwind3-dark #DOMVirtualGrid .avatar-orange,
.bootstrap5-dark #DOMVirtualGrid .avatar-orange,
.bootstrap5_3-dark #DOMVirtualGrid .avatar-orange,
.material3-dark #DOMVirtualGrid .avatar-orange,
.fluent-dark #DOMVirtualGrid .avatar-orange,
.fluent2-dark #DOMVirtualGrid .avatar-orange {
    color: rgb(253, 214, 99);
    background-color: rgb(83, 69, 44);
}

.fabric-dark #DOMVirtualGrid .avatar-purple,
.material-dark #DOMVirtualGrid .avatar-purple,
.bootstrap-dark #DOMVirtualGrid .avatar-purple,
.tailwind-dark #DOMVirtualGrid .avatar-purple,
.tailwind3-dark #DOMVirtualGrid .avatar-purple,
.bootstrap5-dark #DOMVirtualGrid .avatar-purple,
.bootstrap5_3-dark #DOMVirtualGrid .avatar-purple,
.material3-dark #DOMVirtualGrid .avatar-purple,
.fluent-dark #DOMVirtualGrid .avatar-purple,
.fluent2-dark #DOMVirtualGrid .avatar-purple {
    color: rgb(197, 138, 249);
    background-color: rgb(79, 55, 91);
}
</style>