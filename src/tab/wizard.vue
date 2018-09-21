<template>
    <div class="control-section e-tab-section">
        <div class="col-lg-8 content-wrapper">
            <div class="e-sample-resize-container" id="dialog_target">
                <div id='booking' style='display: none'>
                    <div class="wizard-title">Plan your journey</div>
                    <div class="responsive-align">
                        <div class='row'>
                            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
                                <ejs-dropdownlist id='startPoint' width='100%' :dataSource='cities' :fields='autoCompleteFields' floatLabelType='Auto' placeholder='From'></ejs-dropdownlist>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
                                <ejs-dropdownlist id="endPoint" width="100%" :dataSource='cities' :fields='autoCompleteFields' floatLabelType='Auto' placeholder='To'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
                                <ejs-datepicker id="date" width='100%' placeholder='Journey Date' floatLabelType='Auto' :min='dateMin' :max='dateMax' :value='date'></ejs-datepicker>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item">
                                <ejs-dropdownlist id="quota" :dataSource='quotas' placeholder='Ticket type' floatLabelType='Auto' :fields='fields'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="btn-container">
                            <button id='searchNext' class='e-btn' v-on:click='btnClicked'>Search Train</button>
                        </div>
                        <span id="err1"></span>
                    </div>
                </div>
                <div id='selectTrain' style='display: none'>
                    <div class="wizard-title">Select the train from the list </div>
                    <ejs-grid id='availableTrain' width="100%" :rowSelected='trainSelected'>
                        <e-columns>
                            <e-column field='TrainNo' headerText='Train No' width=120 type='number'></e-column>
                            <e-column field='Name' headerText='Name' width=140></e-column>
                            <e-column field='Departure' headerText='Departure' width=120></e-column >
                            <e-column field='Arrival' headerText='Arrival' width=140></e-column >
                            <e-column field='Availability' headerText='Availability' width=140 type='number'></e-column >
                        </e-columns>
                    </ejs-grid>
                    <br />
                    <div class="btn-container">
                        <button id="goToSearch" class='e-btn' v-on:click='btnClicked'>Back</button>
                        <button id="bookTickets" class='e-btn' v-on:click='btnClicked'>Continue</button>
                    </div >
                    <span id="err2"></span>
                </div>
                <div id='details' style='display: none'>
                    <div class="details-page wizard-title">Enter the passenger details</div>
                    <div id="PassengersList">
                        <table id="passenger-table">
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th class="name-header">Name</th>
                                    <th class="age-header">Age</th>
                                    <th class="gender-header">Gender</th>
                                    <th class="type-header">Berth Preference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input id='pass_name1' class="e-input" type="text" placeholder="Passenger Name">
                                    </td>
                                    <td>
                                        <ejs-numerictextbox id='pass_age1' :showSpinButton=false min=1 max=100 value=18 format=n0></ejs-numerictextbox>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_gender1' :dataSource='gender' text="Male" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_berth1' :dataSource='berths' placeholder="Optional" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id='pass_name2' class="e-input" type="text" placeholder="Passenger Name">
                                    </td>
                                    <td>
                                        <ejs-numerictextbox :showSpinButton=false min=1 max=100 value=18 format=n0></ejs-numerictextbox>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_gender2' :dataSource='gender' text="Male" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_berth2' :dataSource='berths' placeholder="Optional" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id='pass_name3' class="e-input" type="text" placeholder="Passenger Name">
                                    </td>
                                    <td>
                                        <ejs-numerictextbox :showSpinButton=false min=1 max=100 value=18 format=n0></ejs-numerictextbox>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_gender3' :dataSource='gender' text="Male" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                    <td>
                                        <ejs-dropdownlist id='pass_berth3' :dataSource='berths' placeholder="Optional" :fields='fields'></ejs-dropdownlist>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div class="btn-container">
                        <button id="goBackToBook" class='e-btn' v-on:click='btnClicked'>Back</button>
                        <button id="confirmTickets" class='e-btn' v-on:click='btnClicked'>Continue</button>
                    </div>
                    <span id="err3"></span>
                </div>
                <div id='confirm' style='display: none'>
                    <div class="tab-title1 wizard-title">Confirm the details and proceed</div>
                    <ejs-grid id='ticketDetailGrid' width="100%">
                        <e-columns>
                            <e-column field='TrainNo' headerText='Train No' width=120 type='number'></e-column>
                            <e-column field='PassName' headerText='Name' width=140></e-column>
                            <e-column field='Gender' headerText='Gender' width=120></e-column>
                            <e-column field='Berth' headerText='Berth' width=140 ></e-column >
                        </e-columns>
                    </ejs-grid>
                    <br />
                    <div id="amount"></div>
                    <br />
                    <div class="btn-container">
                        <button id="goBackDetails" class='e-btn' v-on:click='btnClicked'>Back</button>
                        <button id="makePayment" class='e-btn' v-on:click='btnClicked'>Pay</button>
                    </div>
                </div>
                <ejs-tab id="tab_wizard" heightAdjustMode="None" height=390 :showCloseButton=false :select="tabSelected">
                    <e-tabitems>
                        <e-tabitem :header='headerText0' content="#booking"></e-tabitem>
                        <e-tabitem :header='headerText1' content="#selectTrain" disabled=true></e-tabitem>
                        <e-tabitem :header='headerText2' content="#details" disabled=true></e-tabitem>
                        <e-tabitem :header='headerText3' content="#confirm" disabled=true></e-tabitem>
                    </e-tabitems>
                </ejs-tab>
                <ejs-dialog id='alertDialog' header='Success' width=250 isModal=true showCloseIcon=true content='Your payment successfully processed' target='#dialog_target' :created='dlgCreated' visible=false></ejs-dialog>
            </div>
            <div id="action-description">
                <p>This sample demonstrates simple train reservation wizard that enable/disable Tab items based on sequential validation of each Tab content.</p>
            </div>
            <div id="description">
                <p>Tab items can be disabled dynamically by passing the index and boolean value to the <a target="_blank" href="http://ej2.syncfusion.com/documentation/tab/api-tab.html?lang=typescript#enabletab">enableTab</a> method.</p>
                <p>You can design wizard like sample with Tab using the in-built API and customizing the content with proper validations.</p>
                <p>More information about Tab can be found in this <a href="" target="_blank">documentation</a> section.</p>
            </div>
        </div>
    </div>
</template>
<style>
.e-content .e-item {
        font-size: 12px;
        margin: 10px;
    }

    #amount {
        text-align: right;
        font-size: 15px;
        padding: 15px 0px;
    }

    #passenger-table th {
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        border: 1px solid gainsboro;
    }

    #passenger-table td,
    th {
        padding: 10px;
    }

    #passenger-table td {
        border: 1px solid gainsboro;
    }

    .name-header {
        width: 200px;
    }

    .age-header {
        width: 80px;
    }

    .gender-header {
        width: 120px;
    }

    .type-header {
        width: 150px;
    }

    .btn-container {
        text-align: center;
    }

    .search-item {
        padding-right: 50px;
        padding-bottom: 20px;
    }

    .item-title {
        font-weight: 500;
        padding-top: 10px;
    }

    @media (max-width: 450px) {
        .e-sample-resize-container {
            height: 450px;
        }
        .responsive-align {
            width: 75%;
            margin: 0 auto;
        }
        .search-item {
            padding: 0 0 20px 0;
            width: 100%;
        }
    }

    #err1,
    #err2,
    #err3 {
        font-weight: bold;
        color: red;
        display: block;
        margin-top: 15px;
    }

    .wizard-title {
        font-size: 15px;
    }

    #PassengersList {
        overflow: auto;
    }

    #passenger-table {
        min-width: 500px;
        width: 100%;
    }
</style>
<script>
import Vue from "vue";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { NumericTextBoxPlugin} from '@syncfusion/ej2-vue-inputs';
import { DialogPlugin} from '@syncfusion/ej2-vue-popups';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(DatePickerPlugin);
Vue.use(GridPlugin);
Vue.use(TabPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function() {
    return {
        cities: [
            { name: 'Chicago', fare: 300 },
            { name: 'San Francisco', fare: 125 },
            { name: 'Los Angeles', fare: 175 },
            { name: 'Seattle', fare: 250 },
            { name: 'Florida', fare: 150 }
        ],
        autoCompleteFields: { text: 'name', value: 'name' },
        dateMin: new Date(new Date().getTime()),
        dateMax: new Date(new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)),
        quotas: [
            { id: '1', text: 'Business Class' },
            { id: '2', text: 'Economy Class' },
            { id: '4', text: 'Common Class' }
        ],
        fields: { id: 'id', text: 'text', value: 'text' },
        gender: [
            { id: '1', text: 'Male' },
            { id: '2', text: 'Female' }
        ],
        berths: [
            { id: '1', text: 'Upper' },
            { id: '2', text: 'Lower' },
            { id: '3', text: 'Middle' },
            { id: '4', text: 'Window' },
            { id: '5', text: 'Aisle' }
        ],
       headerText0: { 'text': 'New Booking' },
       headerText1: { 'text': 'Train List' },
       headerText2: { 'text': 'Add Passenger' },
       headerText3: { 'text': 'Make Payment' }
    }
  },
   methods: {
       showDate: function(args){
           var journeyDate = document.getElementById("date").ej2_instances[0];
           journeyDate.show();
       },
       btnClicked: function(args){
          var startPoint = document.getElementById("startPoint");
          var endPoint = document.getElementById("endPoint");
          let tabObj=document.getElementById('tab_wizard');
            switch (args.target.id) {
                 case 'searchNext':
                      if (!isNullOrUndefined(startPoint.value) && !isNullOrUndefined(endPoint.value) && !isNullOrUndefined(document.getElementById("quota").value) && !isNullOrUndefined(document.getElementById("date"))) {
                      if (!isNullOrUndefined(startPoint.value) && startPoint.value === endPoint.value) {
                          document.getElementById('err1').innerText = '* Arrival point can\'t be same as Departure';
                       } else {
                            tabObj.ej2_instances[0].enableTab(0, false);
                            tabObj.ej2_instances[0].enableTab(1, true);
                            this.filterTrains(args);
                            tabObj.ej2_instances[0].select(1);
                            document.getElementById('err1').innerText = '';
                            document.getElementById('err2').innerText = '';
                       }
                     } else {
                           document.getElementById('err1').innerText = '* Please fill all the details before proceeding';
                     }
                     break;
                  case 'bookTickets':
                      if (document.getElementById('availableTrain').ej2_instances[0].getSelectedRecords() === undefined || document.getElementById('availableTrain').ej2_instances[0].getSelectedRecords().length === 0) {
                            document.getElementById('err2').innerText = '* Select your convenient train';
                      } else {
                            tabObj.ej2_instances[0].enableTab(2, true);
                            tabObj.ej2_instances[0].select(2);
                            tabObj.ej2_instances[0].enableTab(1, false);
                            document.getElementById('err2').innerText = '';
                       }
                       break;
                  case 'confirmTickets':
                       let name = document.getElementById('pass_name1');
                       let age = document.getElementById('pass_age1');
                       let gender = document.getElementById('pass_gender1');
                       if (name.value === '' || age.value === '' || gender.value === '') {
                            document.getElementById('err3').innerText = '* Please enter passenger details';
                       } else {
                            tabObj.ej2_instances[0].enableTab(3, true);
                            tabObj.ej2_instances[0].select(3);
                            tabObj.ej2_instances[0].enableTab(2, false);
                            document.getElementById('err3').innerText = '';
                            this.finalizeDetails(args);
                      }
                      break;
                  case 'makePayment':
                        document.getElementById('alertDialog').ej2_instances[0].show();
                        break;
                  case 'goToSearch':
                        this.selectedTrain = [];
                        tabObj.ej2_instances[0].enableTab(0, true);
                        tabObj.ej2_instances[0].select(0);
                        tabObj.ej2_instances[0].enableTab(1, false);
                        break;
                  case 'goBackToBook':
                        tabObj.ej2_instances[0].enableTab(1, true);
                        tabObj.ej2_instances[0].select(1);
                        tabObj.ej2_instances[0].enableTab(2, false);
                        break;
                 case 'goBackDetails':
                        tabObj.ej2_instances[0].enableTab(2, true);
                        tabObj.ej2_instances[0].select(2);
                        tabObj.ej2_instances[0].enableTab(3, false);
                        break;
                 }
            },
           trainSelected: function(args){
                 this.selectedTrain = args.data;
            },
           tabSelected: function(args){
                 if (args.isSwiped)
                      args.cancel = true;
           },
           dlgCreated: function(args){
                 let tabObj=document.getElementById('tab_wizard');
                 let alertDlg = document.getElementById("alertDialog").ej2_instances[0];
                 alertDlg.hide();
                 alertDlg.content = "Your payment successflly processed";
                 alertDlg.buttons = [{
                 buttonModel: { content: "Ok", isPrimary: true },
                   click: function () {
                         document.getElementById("alertDialog").ej2_instances[0].hide();
                         tabObj.ej2_instances[0].enableTab(0, true);
                         tabObj.ej2_instances[0].enableTab(1, false);
                         tabObj.ej2_instances[0].enableTab(2, false);
                         tabObj.ej2_instances[0].enableTab(3, false);
                         tabObj.ej2_instances[0].select(0);
                   }
            }];
            alertDlg.dataBind();
            alertDlg.hide();
            },
            filterTrains: function(args){
                let result= [];
                let fromCity = document.getElementById('startPoint').value;
                let toCity=document.getElementById('endPoint').value;
                let count= Math.floor((Math.random() * 3) + 2);
                for (var i = 0; i < count; i++) {
                    let details= [];
                    details.TrainNo = Math.floor((Math.random() * 20) + 19000);
                    details.Name = 'Train ' + i;
                    details.Departure = fromCity;
                    details.Arrival = toCity;
                    details.Availability = Math.floor((Math.random() * 20) + 20);
                    result.push(details);
                }
            document.getElementById('availableTrain').ej2_instances[0].dataSource = result;
          },
          finalizeDetails: function(args){
               var reserved= [];
               var passCount = 0;
               var startPoint = document.getElementById("startPoint");
               var endPoint = document.getElementById("endPoint");
               for (let i = 1; i <= 3; i++) {
                    let name = document.getElementById('pass_name' + i);
                    let berthSelected= document.getElementById('pass_berth' + i);
                    let gender = document.getElementById('pass_gender' + i);
                    if (name.value !== '') {
                        let details = [];
                        let berth = berthSelected.value;
                        details.TrainNo = this.selectedTrain.TrainNo.toString();
                        details.PassName = name.value;
                        details.Gender = gender.value;
                        details.Berth = (berth === '') ? 'Any' : berth;
                        reserved.push(details);
                        passCount++;
                   }
                   let calcFare= 0;
               for (let i= 0; i < this.cities; i++) {
                   if (startPoint.value === this.cities[i].name) {
                       calcFare = calcFare + this.cities[i].fare;
                    }
                    if (endPoint.value === this.cities[i].name) {
                        calcFare = calcFare + this.cities[i].fare;
                    }
                }
                let displayAmt = document.getElementById('amount');
                if (document.getElementById('quota').value === 'Economy Class') {
                     displayAmt.innerText = 'Total payable amount: $' + passCount * (300 + calcFare);
                } else if (document.getElementById("quota").value === 'Business Class') {
                     displayAmt.innerText = 'Total payable amount: $' + passCount * (500 + calcFare);
                } else if (document.getElementById("quota").value === 'Common Class') {
                    displayAmt.innerText = 'Total payable amount: $' + passCount * (150 + calcFare);
              }
          }
          document.getElementById('ticketDetailGrid').ej2_instances[0].dataSource = reserved;
       }
   }
});
</script>