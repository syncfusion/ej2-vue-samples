<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This demo showcases the Syncfusion® Tree Grid. It presents comprehensive employee information customized for various viewer roles: HR, employee, help desk, and project management. The application uses a structured employee dataset with profiles, work modes, leave balances, and other relevant data.</p>
    </div>
    <div class="viewer-container">
      <div class="viewer-row">
        <label for="viewer" class="viewer-label">Select Viewer Role:</label>
        <div id="role-selection" class="dropdown-container">
          <ejs-dropdownlist
            id="viewer"
            :dataSource="viewerRoles"
            :fields="{ text: 'role', value: 'id' }"
            placeholder="Select Viewer Role"
            v-model="selectedRole"
            @change="onRoleChange"
          ></ejs-dropdownlist>
        </div>
      </div>
    </div>
    <div>
      <ejs-treegrid
        id="EmployeeTreeGrid"
        :dataSource="data"
        childMapping="Children"
        :treeColumnIndex="0"
        :height="400"
        gridLines="Both"
        :allowSorting="true"
        :allowFiltering="true"
        :enableHover="true"
        :filterSettings="{
          type: 'Menu',
          hierarchyMode: 'None',
          mode: 'Immediate',
        }">
        <e-columns>
          <e-column
            v-for="col in columns"
            :key="col?.field"
            :field="col?.field"
            :headerText="col?.headerText"
            :template="col?.template"
            :headerTemplate="col?.headerTemplate"
            :width="col?.width"
            :textAlign="col?.textAlign"
            :format="col?.format"
          ></e-column>
        </e-columns>

        <template v-slot:employeeHeaderTemplate>
          <div
            :style="{
              display: 'inline'
            }"
          >
          <span class="e-icon-userlogin e-icons employee"></span>
          Name
          </div>
        </template>

        <template v-slot:employeeTemplate="{ data }">
          <div class="employee-cell">
            <div class="employee-content">
              <img
                :src="`${data?.Image}.png`"
                :alt="data?.Employee"
                class="employee-img"
              />
              <div class="employee-info">
                <span class="employee-name">{{ data?.Employee }}</span>
                <span class="employee-title">{{ data?.JobTitle }}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:flagTemplate="{ data }">
          <div class="flag-container">
            <img :src="getFlagImage(data?.Location)" alt="data.Location" class="flag-img"/>
            <div class="flag-text">{{data?.Location}}</div>
          </div>
        </template>

        <template v-slot:emailTemplate="{ data }">
          <div class="email-cell">
            <a :href="'mailto:' + data?.Email" class="email-link">{{ data?.Email }}</a>
          </div>
        </template>

        <template v-slot:statusTemplate="{ data }">
          <span
            class="status-badge"
            :class="{
              available: data?.Status === 'Available',
              leave: data?.Status === 'Leave',
              busy: data?.Status === 'Busy',
              default: data?.Status !== 'Available' && data?.Status !== 'Leave'
            }"
          >
            {{ data.Status }}
          </span>
        </template>

        <template v-slot:leaveAvailabilityTemplate="{ data }">
          <div class="leave-bar-container">
            <div class="leave-bar">
              <span class="leave-label">Casual</span>
              <div class="bar">
                <div
                  class="bar-fill"
                  :style="{
                    width: getLeaveWidth(data?.LeaveAvailability?.casual),
                    background: getLeaveColor(data?.LeaveAvailability?.casual),
                  }"
                ></div>
                <div class="barlabel">{{ data?.LeaveAvailability?.casual }}</div>
              </div>
            </div>
            <div class="separator"></div>
            <div class="leave-bar">
              <span class="leave-label">Earned</span>
              <div class="bar">
                <div
                  class="bar-fill"
                  :style="{
                    width: getLeaveWidth(data?.LeaveAvailability?.earned),
                    background: getLeaveColor(data?.LeaveAvailability?.earned),
                  }"
                ></div>
                <div class="barlabel">{{ data?.LeaveAvailability?.earned }}</div>
              </div>
            </div>
            <div class="separator"></div>
            <div class="leave-bar">
              <span class="leave-label">Sick</span>
              <div class="bar">
                <div
                  class="bar-fill"
                  :style="{
                    width: getLeaveWidth(data?.LeaveAvailability?.sick),
                    background: getLeaveColor(data?.LeaveAvailability?.sick),
                  }"
                ></div>
                <div class="barlabel">{{ data?.LeaveAvailability?.sick }}</div>
              </div>
            </div>
          </div>
        </template>
      </ejs-treegrid>
    </div>
    <div id="description">
      <p>
      This section highlights dynamic column generation and custom templates to present data that is specific and relevant to each viewer role. Features such as <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/treegrid/sorting">
              Sorting</a>, <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/treegrid/filtering/filtering#filter-hierarchy-modes">
              Filtering with hierarchical support</a> and <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/columns#format">
              Column formatting</a> are seamlessly integrated. The Tree Grid <a target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-template">
              Column template </a> is utilized to render visual elements like progress bars within cells. The Tree Grid flexibility and customization capabilities make it a powerful tool
          for organizational data representation.
      </p>
      <p>
          <br /> More information about Tree Grid instantiation can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started"> documentation section</a>.
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Sort,
  Filter,
} from '@syncfusion/ej2-vue-treegrid';
import { GridLine } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { employeeData } from './data-source';

export default defineComponent({
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data() {
    return {
      selectedRole: 'hr',
      data: employeeData,
      viewerRoles: [
        { id: 'hr', role: 'HR' },
        { id: 'employee', role: 'Employee' },
        { id: 'helpdesk', role: 'Help Desk' },
        { id: 'pm', role: 'Project Management' },
      ],
    };
  },
  computed: {
    columns() {
      return this.getColumns(this.selectedRole);
    },
  },
  methods: {
    onRoleChange(args) {
      this.selectedRole = args.value;
      var treegrid =
          document.getElementsByClassName('e-treegrid')[0]?.ej2_instances[0];
        treegrid?.clearSorting();
        treegrid?.clearFiltering();
    },
    getColumns(viewer) {
      const baseColumns = [
        { field: 'ID', headerText: 'ID', width: 200, textAlign: 'Left' },
        {
          field: 'Employee',
          template: 'employeeTemplate',
          headerTemplate: 'employeeHeaderTemplate',
          width: 280,
        },
      ];

      switch (viewer) {
        case 'hr':
          return [
            ...baseColumns,
            {
              field: 'Location',
              headerText: 'Location',
              template: 'flagTemplate',
              width: 200,
            },
            {
              field: 'JoinDate',
              headerText: 'Date Joined',
              textAlign: 'Right',
              width: 180,
              format: 'yMd',
              type:'date'
            },
            {
              field: 'Salary',
              headerText: 'Salary per month',
              textAlign: 'Right',
              clipMode:'EllipsisWithTooltip',
              width: 240,
              format: 'C0',
            },
            {
              field: 'Email',
              template: 'emailTemplate',
              headerText: 'Email',
              textAlign: 'Center',
              width: 200,
            },
          ];
          case 'employee':
          return [
            ...baseColumns,
            {
              field: 'Status',
              headerText: 'Presence',
              width: 200,
              textAlign: 'Center',
              template: 'statusTemplate',
            },
            { field: 'WorkMode', headerText: 'Work Mode', width: 230 },
            {
              field: 'Email',
              template: 'emailTemplate',
              headerText: 'Email',
              textAlign: 'Center',
              width: 200,
            },
          ];

        case 'helpdesk':
          return [
            ...baseColumns,
            {
              field: 'Status',
              headerText: 'Presence',
              width: 200,
              textAlign: 'Center',
              template: 'statusTemplate',
            },
            {
              field: 'LeaveAvailability',
              template: 'leaveAvailabilityTemplate',
              headerText: 'Leave Availability',
              textAlign: 'Center',
              width: 400,
              allowFiltering: false,
            },
            {
              field: 'LeaveCount',
              headerText: `Leave Taken in ${new Date().getFullYear()}`,
              textAlign: 'Center',
              width: 280,
            },
          ];
        case 'pm':
          return [
            ...baseColumns,
            { field: 'Department', headerText: 'Department', width: 200 },
            {
              field: 'ProjectDetails',
              headerText: 'Project Details',
              width: 230,
            },
            {
              field: 'ProjectStatus',
              headerText: 'Project Status',
              width: 200,
            },
            {
              field: 'Email',
              template: 'emailTemplate',
              headerText: 'Email',
              textAlign: 'Center',
              width: 200,
            },
          ];
        default:
          return baseColumns;
      }
    },
    getImageUrl(fullName) {
      return `//ej2.syncfusion.com/javascript/demos/src/tree-grid/images/${fullName}.png`;
    },
    getLeaveWidth(value) {
      return `${(value / 12) * 100}%`;
    },
    getLeaveColor(value) {
      if (value > 8) return '#00b300';
      if (value > 4) return '#ffa500';
      return '#df2222';
    },
    getFlagImage(value){
      const basePath = location.href.includes("stackblitz")
      ? 'https://ej2.syncfusion.com/vue/demos/'
      : '';
      return `${basePath}source/tree-grid/images/${value}.png`;
    }
  },
  provide: {
    treegrid: [Page, Sort, Filter],
  },
});
</script>

<style>
body {
touch-action: none;
}

.employee-cell {
padding: 8px 10px;
}

.employee-content {
display: flex;
align-items: center;
}
#EmployeeTreeGrid .e-headertext ,
    #EmployeeTreeGrid .e-headercelldiv{
       font-size: medium;
    }

.employee-img {
border-radius: 50%;
margin-right: 10px;
width: 30px;
height: 30px;
}

.employee-info {
display: flex;
flex-direction: column;
}

.employee-name {
font-size: 14px;
font-weight: 500;
}

.employee-title {
font-size: 10px;
}

.flag-container {
display: inline-block;
}

.flag-img {
width: 20px;
height: 15px;
vertical-align: middle;
}

.flag-text {
display: inline;
padding-left: 4px;
}

.email-cell {
padding: 8px 10px;
}

.email-link {
font-size: 13px;
padding: 4px 8px;
}

.leave-bar-container {
display: flex;
justify-content: center;
gap: 8px;
padding: 2px 0;
}

.leave-bar {
display: flex;
align-items: center;
gap: 5px;
}

.leave-label {
text-align: right;
}

#EmployeeTreeGrid .bar {
width: 50px;
height: 15px;
background-color: #eee;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-weight: 600;
color: #000000;
padding: 6px 4px;
}

#EmployeeTreeGrid .barlabel {
position: absolute;
z-index: 1;
pointer-events: none;
font-size: 12px;
font-weight: 500;
}

#EmployeeTreeGrid .bar-fill {
height: 100%;
position: absolute;
top: 0;
left: 0;
}

.email-cell {
  padding: 8px 10px;
}

.fluent2,
.fluent2-dark,
.fluent2-highcontrast {
 #EmployeeTreeGrid #columnddl .e-input-group {
    width: 140px !important;
  }
}

 /* Light Themes */
 .tailwind .email-cell,
 .tailwind3 .email-cell,
 .bootstrap .email-cell,
 .bootstrap4 .email-cell,
 .bootstrap5 .email-cell,
 .fluent .email-cell,
 .fluent2 .email-cell,
 .fluent2-highcontrast .email-cell,
 .highcontrast .email-cell,
 .material .email-cell,
 .material3 .email-cell,
 .fabric .email-cell {
   background-color: #ebf1ff;
   font-size: xx-small;
 }

 /* Dark Themes */
 .tailwind-dark .email-cell,
 .tailwind3-dark .email-cell,
 .bootstrap-dark .email-cell,
 .bootstrap5-dark .email-cell,
 .fluent-dark .email-cell,
 .fluent2-dark .email-cell,
 .material-dark .email-cell,
 .material3-dark .email-cell,
 .fabric-dark .email-cell{
   background-color: #000000aa;
   color: #6179ff;
   font-size: xx-small;
 }

.email-cell .email-link {
  text-decoration: none;
  font-size: 13px;
  padding: 4px 8px;
  background-color: #ebf1ff;
  font-size: xx-small;
}

.status-badge {
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
}

.status-badge.available {
  background-color: #ccffcc;
  color: #00cc00;
}

.status-badge.leave {
  background-color: #ffd7cc;
  color: #e60000;
}

.status-badge.busy {
  background-color: #ffd09d;
  color: #ff8707;
}

.viewer-container {
  margin: 10px;
}

.viewer-row {
  display: flex;
  align-items: center;
}

.viewer-label {
  margin-right: 10px;
  font-weight: bold;
}

.dropdown-container {
  width: 200px
}


.leave-bar-container .separator {
  width: 1px;
  background-color: #ccc;
  margin: 0 8px;
}

.flag-container {
  display: inline-block;
}

.flag-container .flag-img {
  width: 20px;
  height: 15px;
  vertical-align: middle;
}

.flage-container .flag-text {
  display: inline-block;
  padding-left: 4px;
  vertical-align: middle;
}

</style>