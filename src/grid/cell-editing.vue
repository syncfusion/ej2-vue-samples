<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates cell editing for quick and efficient data updates. It provides a seamless editing experience for modifying individual cell values within the Grid.</p>
    </div>
    <ejs-grid ref='grid' id='GridCellEditing' :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :height='height' :rowHeight='40' :actionComplete='actionComplete' :actionBegin='actionBegin'>
        <e-columns>
            <e-column field='ApptID' headerText='Appointment ID' width='140' textAlign='Left' :isPrimaryKey='true' :visible='false'></e-column>
            <e-column field='Patient' headerText='Patient' width='150' :validationRules='patientRules'></e-column>
            <e-column field='Doctor' headerText='Doctor' width='160' editType='dropdownedit' :template="'doctorTemplate'" :validationRules='doctorRules'></e-column>
            <e-column field='AppointmentTime' headerText='Appointment Time' width='200' editType='datetimepickeredit' format='M/d/y hh:mm a' type='dateTime' :validationRules='appointmentTimeRules'></e-column>
            <e-column field='Type' headerText='Type' width='150' editType='dropdownedit' :template="'typeTemplate'" :validationRules='typeRules'></e-column>
            <e-column field='Status' headerText='Status' width='130' editType='dropdownedit' :template="'statusTemplate'" :validationRules='statusRules'></e-column>
            <e-column field='Room' headerText='Room No' width='120' editType='dropdownedit'></e-column>
            <e-column field='Fee' headerText='Fee' width='90' textAlign='Right' format='C2' editType='numericedit' :edit='feeEdit' :validationRules='feeRules'></e-column>
            <e-column field='Notes' headerText='Notes' width='260' clipMode='EllipsisWithTooltip'></e-column>
        </e-columns>
        <template v-slot:doctorTemplate="{data}">
            <div class="doctor-cell">
                <img v-if="getDoctorImage(data.Doctor)" :src="getDoctorImage(data.Doctor)" :alt="data.Doctor" class="doctor-img" />
                <span>{{ data.Doctor }}</span>
            </div>
        </template>
        <template v-slot:statusTemplate="{data}">
            <div>
                <span :class="['badge', getStatusClass(data.Status)]">{{ data.Status }}</span>
            </div>
        </template>
        <template v-slot:typeTemplate="{data}">
            <div>
                <span :class="['type', getTypeClass(data.Type)]">{{ data.Type }}</span>
            </div>
        </template>
    </ejs-grid>

    <div id="description">
        <p>
            Cell editing allows users to modify a single cell's value directly. This mode is enabled by setting <code><a target="_blank" className="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode">editSettings.mode</a></code> to <code>Cell</code>. Users can enter edit mode by double‑clicking a cell and then changing its value. The update is applied when the user presses "Enter" key or moves to another cell.
        </p>
        <p>
            This editing mode works seamlessly with other Grid features such as validation, formatting, and data binding, ensuring a consistent and efficient editing experience.
        </p>
        <p><strong>Injecting Module:</strong></p>
        <p>
           Features of the Grid component are organized into individual, feature-specific modules. To use the editing and toolbar functionality, inject the required modules by <code>Grid.Inject(Edit, Toolbar)</code>.
        </p>
        <p>
            More information on edit configuration can be found in the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/grid/editing">
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
import { GridComponent, ColumnDirective, ColumnsDirective, Toolbar, Edit, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { appointmentData } from "./data-source";

export default {
  name: 'CellEditing',
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data() {
    return {
      data: appointmentData.slice(0),
      filterSettings: { type: 'CheckBox' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
      height: 400, 
      pageSettings: { pageCount: 5 },
      orderidrules: { required: true },
      patientRules: { required: true },
      doctorRules: { required: true },
      typeRules: { required: true },
      statusRules: { required: true },
      feeRules: { required: true, min: 50, max: 500 },
        appointmentTimeRules: {
            required: true,
            timeRule: [
                (args: any) => {
                    if (!args.value) return false;
                    const date = new Date(args.value);
                    const hour = date.getHours();
                    return hour >= 9 && hour <= 20;
                },
                'Appointment allowed only between 9AM - 9PM',
            ],
        },
      feeEdit: { params: { showSpinButton: false } }
    };
  },
  provide() {
    return {
      grid: [Toolbar, Edit, Page, Sort, Filter]
    };
  },
  methods: {
    actionBegin(args: any) {
      if (args.requestType === 'save' && args.action === 'add') {
        args.data.ApptID = 'APT-' + (Date.now() % 100000);
      }
    },
    getDoctorImage(doctor: string): string {
      const doctorList: string[] = ['Dr. Smith', 'Dr. Johnson', 'Dr. Garcia', 'Dr. Brown', 'Dr. Williams', 'Dr. Martinez', 'Dr. Davis', 'Dr. Jones'];
      const index: number = doctorList.indexOf(doctor) + 1;
      return `src/grid/images/${index}.png`;
    },
    getStatusClass(status: string): string {
      if (status === 'Booked') return 'booked';
      if (status === 'Canceled') return 'canceled';
      if (status === 'Completed') return 'completed';
      return 'pending';
    },
    getTypeClass(type: string): string {
      if (type === 'Emergency') return 'emergency';
      if (type === 'Lab Test') return 'lab';
      if (type === 'Follow-up') return 'follow';
      if (type === 'Routine Check') return 'routine';
      return 'consult';
    },
    actionComplete(args: any) {
      if (args.requestType === 'save' && args.columnName === 'Doctor') {
        const doctorRoomMap: any = {
          'Dr. Smith': 'R1',
          'Dr. Johnson': 'R2',
          'Dr. Garcia': 'R6',
          'Dr. Brown': 'R4',
          'Dr. Williams': 'R3',
          'Dr. Martinez': 'R7',
          'Dr. Davis': 'R8',
          'Dr. Jones': 'R5',
        };
        (this as any).$refs.grid.ej2Instances.updateCell(args.rowIndex, 'Room', doctorRoomMap[args.data.Doctor]);
      }
    }
  }
}
</script>
<style scoped>
#GridCellEditing .e-gridcontent .doctor-cell {
    display: flex;
    align-items: center;
    gap: 8px;
}

#GridCellEditing .e-gridcontent .doctor-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
}

#GridCellEditing .e-gridcontent .badge {
    padding: 4px 10px;
    border-radius: 12px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    display: inline-block;
}

#GridCellEditing .e-gridcontent .badge.booked {
    background-color: #28a745;
}

#GridCellEditing .e-gridcontent .badge.canceled {
    background-color: #dc3545;
}

#GridCellEditing .e-gridcontent .badge.completed {
    background-color: #007bff;
}

#GridCellEditing .e-gridcontent .badge.pending {
    background-color: #fd7e14;
}

#GridCellEditing .e-gridcontent .type {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    font-weight: 500;
}

#GridCellEditing .e-gridcontent .type.emergency {
    color: #dc3545;
}

#GridCellEditing .e-gridcontent .type.lab {
    color: #6f42c1;
}

#GridCellEditing .e-gridcontent .type.follow {
    color: #fd7e14;
}

#GridCellEditing .e-gridcontent .type.routine {
    color: #17a2b8;
}

#GridCellEditing .e-gridcontent .type.consult {
    color: #28a745;
}

/* Dark theme overrides */
.material3-dark #GridCellEditing .e-gridcontent .badge.booked,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .badge.booked,
.fluent2-dark #GridCellEditing .e-gridcontent .badge.booked,
.tailwind3-dark #GridCellEditing .e-gridcontent .badge.booked,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .badge.booked,
.fluent-dark #GridCellEditing .e-gridcontent .badge.booked,
.highcontrast #GridCellEditing .e-gridcontent .badge.booked {
    background-color: #14532d;
}

.material3-dark #GridCellEditing .e-gridcontent .badge.canceled,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .badge.canceled,
.fluent2-dark #GridCellEditing .e-gridcontent .badge.canceled,
.tailwind3-dark #GridCellEditing .e-gridcontent .badge.canceled,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .badge.canceled,
.fluent-dark #GridCellEditing .e-gridcontent .badge.canceled,
.highcontrast #GridCellEditing .e-gridcontent .badge.canceled {
    background-color: #7f1d1d;
}

.material3-dark #GridCellEditing .e-gridcontent .badge.completed,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .badge.completed,
.fluent2-dark #GridCellEditing .e-gridcontent .badge.completed,
.tailwind3-dark #GridCellEditing .e-gridcontent .badge.completed,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .badge.completed,
.fluent-dark #GridCellEditing .e-gridcontent .badge.completed,
.highcontrast #GridCellEditing .e-gridcontent .badge.completed {
    background-color: #1e3a8a;
}

.material3-dark #GridCellEditing .e-gridcontent .badge.pending,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .badge.pending,
.fluent2-dark #GridCellEditing .e-gridcontent .badge.pending,
.tailwind3-dark #GridCellEditing .e-gridcontent .badge.pending,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .badge.pending,
.fluent-dark #GridCellEditing .e-gridcontent .badge.pending,
.highcontrast #GridCellEditing .e-gridcontent .badge.pending {
    background-color: #7c2d12;
}

.material3-dark #GridCellEditing .e-gridcontent .type.emergency,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .type.emergency,
.fluent2-dark #GridCellEditing .e-gridcontent .type.emergency,
.tailwind3-dark #GridCellEditing .e-gridcontent .type.emergency,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .type.emergency,
.fluent-dark #GridCellEditing .e-gridcontent .type.emergency,
.highcontrast #GridCellEditing .e-gridcontent .type.emergency {
    color: #f87171;
}

.material3-dark #GridCellEditing .e-gridcontent .type.lab,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .type.lab,
.fluent2-dark #GridCellEditing .e-gridcontent .type.lab,
.tailwind3-dark #GridCellEditing .e-gridcontent .type.lab,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .type.lab,
.fluent-dark #GridCellEditing .e-gridcontent .type.lab,
.highcontrast #GridCellEditing .e-gridcontent .type.lab {
    color: #c3d31b;
}

.material3-dark #GridCellEditing .e-gridcontent .type.follow,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .type.follow,
.fluent2-dark #GridCellEditing .e-gridcontent .type.follow,
.tailwind3-dark #GridCellEditing .e-gridcontent .type.follow,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .type.follow,
.fluent-dark #GridCellEditing .e-gridcontent .type.follow,
.highcontrast #GridCellEditing .e-gridcontent .type.follow {
    color: #fb923c;
}

.material3-dark #GridCellEditing .e-gridcontent .type.routine,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .type.routine,
.fluent2-dark #GridCellEditing .e-gridcontent .type.routine,
.tailwind3-dark #GridCellEditing .e-gridcontent .type.routine,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .type.routine,
.fluent-dark #GridCellEditing .e-gridcontent .type.routine,
.highcontrast #GridCellEditing .e-gridcontent .type.routine {
    color: #a0169f;
}

.material3-dark #GridCellEditing .e-gridcontent .type.consult,
.bootstrap5_3-dark #GridCellEditing .e-gridcontent .type.consult,
.fluent2-dark #GridCellEditing .e-gridcontent .type.consult,
.tailwind3-dark #GridCellEditing .e-gridcontent .type.consult,
.fluent2-highcontrast #GridCellEditing .e-gridcontent .type.consult,
.fluent-dark #GridCellEditing .e-gridcontent .type.consult,
.highcontrast #GridCellEditing .e-gridcontent .type.consult {
    color: #37b317;
}
</style>