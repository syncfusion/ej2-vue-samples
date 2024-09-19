<template>
    <div class="description-container e-card">
        <div class='e-card-header-title' :style="{ fontWeight: 600 }">Smart Paste Integration with Scheduler</div>
        <div class='e-card-content '>
            <p>
                This sample demonstrates integrating the Smart Paste Component with the Scheduler to convert natural
                language into scheduler events. Users can use Smart Paste to populate and add events to the Scheduler
                via a custom dialog.
            </p>
        </div>
    </div>
    <div id='container' ref={containerRef} class="scheduler-ai-container">
        <ejs-tabs id="tab" heightAdjustMode='Auto' ref='tabObj' :selected='tabSelected'
            :animation='{ previous: { effect: "None" }, next: { effect: "None" } }'>
            <e-tabitems>
                <e-tabitem :header="{ 'text': 'Meeting Contents' }" content="meetingContents">
                    <template #meetingContents>
                        <div id="meeting_contents">
                            <div class="control-section">
                                <div class="row card-item">
                                    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6" :style='{
                                        marginBottom: "15px",
                                        marginTop: "15px"
                                    }'>
                                        <div :tabIndex='0' class="e-card" id="basic">
                                            <div class="e-card-header">
                                                <div class="e-card-header-caption">
                                                    <div class="e-card-header-title"> Discussion on Ticket 429519 </div>
                                                </div>
                                                <ejs-button id="first-card-button" content='Schedule Appointment'
                                                    iconCss='e-icons e-timeline-work-week'
                                                    :onClick='() => handleButtonClick(cardContent1)'>
                                                </ejs-button>
                                            </div>
                                            <div class="e-card-content">
                                                <div>
                                                    <span>Hi John, </span><br /> <br />
                                                    <span> We have scheduled the meeting for tomorrow(24th Jan) at 12
                                                        PM IST at Mathura Towers
                                                        and this meeting is scheduled to discuss the issue related to
                                                        the ticket 429519 only. </span>
                                                    <span> For any other issues, please create a new ticket or
                                                        update the respective tickets and
                                                        our technical team will follow up with the details in those
                                                        tickets.</span> <br /> <br />
                                                    <p>
                                                        "Note: Screen sharing is to see the issue at your
                                                        end and debug directly,
                                                        if needed.We request you to contact your IT team and
                                                        get prior approval / disable firewall settings to
                                                        share the controls.
                                                        This will help to minimize the resolution time."
                                                    </p><br />
                                                    <span>Regards, </span> <br />
                                                    <span>Sabitha </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row card-item">
                                    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6" :style='{
                                        marginBottom: "15px",
                                        marginTop: "15px"
                                    }'>
                                        <div :tabIndex='0' class="e-card" id="basic">
                                            <div class="e-card-header">
                                                <div class="e-card-header-caption">
                                                    <div class="e-card-header-title"> Exciting Updates and Demo
                                                        Invitation
                                                        from Syncfusion </div>
                                                </div>
                                                <ejs-button id="second-card-button" content='Schedule Appointment'
                                                    iconCss='e-icons e-timeline-work-week'
                                                    :onClick='() => handleButtonClick(cardContent2)'></ejs-button>
                                            </div>
                                            <div class="e-card-content">
                                                <div>
                                                    <br />
                                                    <span>
                                                        <strong>You: </strong> Hi Alex, I hope you're doing well! I’m
                                                        reaching out from Syncfusion Software Pvt Ltd.
                                                        We've recently made some exciting updates to our UI components
                                                        and
                                                        I'd love to share them with you.< /span><br /> <br />
                                                            <span> <strong>Recipient: </strong> Hi Andrew, I'm doing
                                                                well,
                                                                thanks! What kind of updates have you made?</span>
                                                            <br />
                                                            <br />
                                                            <span>
                                                                <strong>You: </strong> We've enhanced key components
                                                                such as the Scheduler, Carousel, Tab, Toolbar,
                                                                Accordion, and Appbar.
                                                                Additionally, we've improved accessibility to meet WCAG
                                                                2.2 standards and enhanced security with XSS prevention.
                                                                These updates aim to provide a more robust and secure
                                                                experience for our users.
                                                            </span><br /> <br />
                                                            <span>
                                                                <strong>Recipient: </strong> That sounds
                                                                fantastic! I’d be interested in seeing these
                                                                updates in action.
                                                            </span><br /> <br />
                                                            <span>
                                                                <strong>You: </strong> Wonderful! I’d
                                                                love to schedule a demo to showcase
                                                                these new features. Are you available
                                                                for a session on Wednesday,
                                                                August 7th at 11 AM, or Friday, August
                                                                9th at 2 PM ? The demo will be held at
                                                                our Morrisville office.
                                                            </span><br /> <br />
                                                            <span>
                                                                <strong>Recipient: </strong>
                                                                Friday, August 9th at 2 PM works
                                                                for me.
                                                            </span><br /> <br />
                                                            <span>
                                                                <strong>You: </strong>
                                                                Perfect! I’ll send a
                                                                calendar invite for
                                                                Friday, August 9th at 2
                                                                PM at our Morrisville
                                                                office.
                                                            </span><br /> <br />
                                                            <span>
                                                                <strong>Recipient:
                                                                </strong> Great,
                                                                see you then!
                                                            </span><br />
                                                            <br />
                                                            <span>
                                                                <strong>You:
                                                                </strong>
                                                                See you
                                                                on
                                                                Friday!
                                                                Have a
                                                                great
                                                                day.
                                                            </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row card-item">
                                    <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"
                                        :style='{ marginBottom: "15px", marginTop: "15px" }'>
                                        <div :tabIndex='0' class="e-card" id="basic">
                                            <div class="e-card-header">
                                                <div class="e-card-header-caption">
                                                    <div class="e-card-header-title"> Meeting to discuss on Ticket
                                                        603027 </div>
                                                </div>
                                                <ejs-button id="third-card-button" content='Schedule Appointment'
                                                    iconCss='e-icons e-timeline-work-week'
                                                    :onClick='() => handleButtonClick(cardContent3)'></ejs-button>
                                            </div>
                                            <div class="e-card-content">
                                                <div>
                                                    <span>Hi Liji, </span><br /> <br />
                                                    <span> We have scheduled the meeting for today at 3 PM IST in
                                                        Chennai
                                                        and this meeting is scheduled to discuss the issue related to
                                                        the ticket 603027 only.
                                                    </span>
                                                    <span> For any other issues, please create a new ticket or
                                                        update the respective tickets and our technical team will
                                                        follow up with the details in
                                                        those tickets.</span> <br /> <br />
                                                    <br />
                                                    <span>Regards, </span> <br />
                                                    <span>Ram </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </e-tabitem>
                <e-tabitem :header="{ 'text': 'Schedule' }" content="schedule">
                    <template #schedule>
                        <ejs-schedule ref='scheduleObj' height='750px' :selectedDate='new Date()' currentView='Week'
                            :eventSettings='{ dataSource: events }' :eventRendered='onEventRendered'>
                        </ejs-schedule>
                    </template>
                </e-tabitem>
            </e-tabitems>
        </ejs-tabs>
    </div>

    <ejs-dialog id="editor_dialog" ref='dialogObj' header='dlgHeader' content='dlgContent' target='#container'
        :showCloseIcon='true' :isModal='true' :visible='false' width='500px' :created='created' :close='closeDialog'
        :open='openDialog'>
        <template #dlgHeader>
            <div id="dlgHeader" ref={dlgHeaderRef} :style='{ visibility: "hidden" }' class="dialogHeader">
                <div>Event Scheduler</div>
            </div>
        </template>
        <template #dlgContent>
            <div id="dlgContent" ref={dlgContentRef} :style='{ visibility: "hidden" }' class="dialogContent">
                <form id="formId" class="form-horizontal schedule-form" :onSubmit='formSubmit'>
                    <div class="form-group">
                        <div class="e-float-input">
                            <input class="e-input" type="text" id="subject" name="Subject"
                                data-smartpaste-description="Subject must be the core content of the input" />
                            <span class="e-float-line"></span>
                            <label class="e-float-text" htmlFor="subject">Subject</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="e-float-input">
                            <input class="e-input" type="text" id="location" name="Location"
                                data-smartpaste-description="Check if there is any location given in the input, if there is any location then add it, if not ignore it" />
                            <span class="e-float-line"></span>
                            <label class="e-float-text" htmlFor="location">Location</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-datetimepicker id="startTime" name="StartTime"
                                data-smartpaste-description='Get Start Time from the input, Date must follow the format: MM/dd/yyyy HH:mm'
                                :value='(() => { let d = new Date(); d.setHours(12, 0, 0, 0); return d; })()'
                                format='MM/dd/yyyy HH:mm' />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="e-float-input">
                            <ejs-datetimepicker id="endTime" name="EndTime"
                                data-smartpaste-description="If there is End Time in the input get the End Time, If the End Time is not present in the input, add 1hr to the StartTime and Provide the date,  Date must follow the format: MM/dd/yyyy HH:mm"
                                :value='(() => { let d = new Date(); d.setHours(13, 0, 0, 0); return d; })()'
                                format='MM/dd/yyyy HH:mm' />
                        </div>
                    </div>

                    <div class="form-group description">
                        <div class="e-float-input">
                            <textarea rows={4} id="description" name="Description"
                                data-smartpaste-description="Description must be the summary of the entire input"></textarea>
                            <span class="e-float-line"></span>
                            <label class="e-float-text" htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div class="row button-group">
                        <div>
                            <ejs-smartpastebutton type="button" id="smart-paste"
                                class="smart-schedule-button form-button" :style='{ visibility: "hidden" }'
                                :aiAssistHandler='AzureAIRequest'>Smart Paste
                            </ejs-smartpastebutton>
                        </div>

                        <div :style='{ display: "inline-block" }'>
                            <ejs-button id="saveButton" class="samplebtn" :isPrimary='true' :disabled='true'
                                type="submit" :style='{ marginRight: "10px" }' :data-ripple='true'>Save
                            </ejs-button>
                        </div>
                        <div :style='{ float: "right" }'>
                            <ejs-button id="cancelButton" class="samplebtn" :onClick='dialogBtnClick' type="reset"
                                data-ripple="true">cancel</ejs-button>
                        </div>
                    </div>
                </form>
            </div>
        </template>
    </ejs-dialog>



    <ejs-toast id="ToastElement" ref='toastObj' title='Events Added' content='' :position="{ X: 'Right', Y: 'Top' }"
        cssClass='e-toast-success'>
    </ejs-toast>
</template>
<script>

import { SelectEventArgs, TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs } from '@syncfusion/ej2-vue-schedule';
import { createSpinner, DialogComponent, hideSpinner, showSpinner } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent, ChatOptions, SmartPasteButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getAzureChatAIRequest } from '../common/openai';
import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { ToastComponent } from '@syncfusion/ej2-vue-notifications';

let cardContent1 = "Title: Discussion on Ticket 429519" +
    "Hi John,\n\n" +
    "We have scheduled the meeting for tomorrow (24th Jan) at 12 PM IST at Mathura Towers and this meeting is scheduled to discuss the issue related to the ticket 429519 only. " +
    "For any other issues, please create a new ticket or update the respective tickets and our technical team will follow up with the details in those tickets.\n\n" +
    "Note: Screen sharing is to see the issue at your end and debug directly, if needed. We request you to contact your IT team and get prior approval/disable firewall settings to share the controls. This will help to minimize the resolution time.\n\n" +
    "Regards,\n\n" +
    "Sabitha";

let cardContent2 = "Title: Meeting to discuss on Ticket 603027" +
    "Hi Liji,\n\n" +
    "We have scheduled the meeting for today at 3 PM IST in Chennai and this meeting is scheduled to discuss the issue related to the ticket 595353 and 603027 only. " +
    "For any other issues, please create a new ticket or update the respective tickets and our technical team will follow up with the details in those tickets.\n\n" +
    "Regards,\n\n" +
    "Ram";

let cardContent3 = "Title: Exciting Updates and Demo Invitation from Syncfusion" +
    "You: Hi Alex, I hope you're doing well! I’m reaching out from Syncfusion Software Pvt Ltd. " +
    "We've recently made some exciting updates to our UI components and I'd love to share them with you.\n" +
    "Recipient: Hi Andrew, I'm doing well, thanks! What kind of updates have you made?\n" +
    "You: We've enhanced key components such as the Scheduler, Carousel, Tab, Toolbar, Accordion, and Appbar. " +
    "Additionally, we've improved accessibility to meet WCAG 2.2 standards and enhanced security with XSS prevention. " +
    "These updates aim to provide a more robust and secure experience for our users.\n" +
    "Recipient: That sounds fantastic! I’d be interested in seeing these updates in action.\n" +
    "You: Wonderful! I’d love to schedule a demo to showcase these new features. Are you available for a session on Wednesday, " +
    "August 7th at 11 AM, or Friday, August 9th at 2 PM? The demo will be held at our Morrisville office.\n" +
    "Recipient: Friday, August 9th at 2 PM works for me.\n" +
    "You: Perfect! I’ll send a calendar invite for Friday, August 9th at 2 PM at our Morrisville office.\n" +
    "Recipient: Great, see you then!\n" +
    "You: See you on Friday! Have a great day.";

interface ScheduleEvent {
    Id: number;
    Subject: string;
    Location: string;
    StartTime: Date;
    EndTime: Date;
    Description: string;
}

export default {
    components: {
        'ejs-button': ButtonComponent,
        'ejs-tabs': TabComponent,
        'e-tabitems': TabItemsDirective,
        'e-tabitem': TabItemDirective,
        'ejs-schedule': ScheduleComponent,
        'ejs-dialog': DialogComponent,
        'ejs-smartpastebutton': SmartPasteButtonComponent,
        'ejs-datetimepicker': DateTimePickerComponent,
        'ejs-toast': ToastComponent
    },
    data() {
        return {
            event: '',
            events: [],
            cardContent1: cardContent1,
            cardContent2: cardContent2,
            cardContent3: cardContent3
        }
    },
    methods: {
        onEventRendered: function (args: EventRenderedArgs) {
            if (this.event && (this.event as any).Id === args.data.Id) {
                args.element.classList.add('e-appointment-border');
            }
        },
        showDialog: function () {
            this.$refs.dialogObj.show();
        },
        handleButtonClick: function (content: string): void {
            navigator.clipboard.writeText(content).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
            this.showDialog();
        },
        tabSelected: function (args: SelectEventArgs) {
            if ((args as any).selectedIndex === 1) {
                this.$refs.scheduleObj.ej2Instances.refresh();
                if (this.event && (this.event as any).Subject) {
                    this.$refs.toastObj.content = `${this.event.Subject} has been scheduled at ${this.event.StartTime.toLocaleString()}`;
                    this.$refs.toastObj.dataBind();
                    this.$refs.toastObj.show();
                }

            }
        },
        created: function () {
            (document.getElementById('dlgContent') as HTMLElement).style.visibility = 'visible';
            (document.getElementById('dlgHeader') as HTMLElement).style.visibility = 'visible';
        },
        closeDialog: function () {
            (document.getElementById('subject') as HTMLInputElement).value = '';
            (document.getElementById('location') as HTMLInputElement).value = '';
            (document.getElementById('startTime') as HTMLInputElement).value = (() => {
                let d = new Date();
                d.setHours(12, 0, 0, 0);
                let date = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                let time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                return `${date} ${time}`;
            })();
            (document.getElementById('endTime') as HTMLInputElement).value = (() => {
                let d = new Date();
                d.setHours(14, 0, 0, 0);
                let date = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                let time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                return `${date} ${time}`;
            })();
            (document.getElementById('description') as HTMLTextAreaElement).value = '';
            (document.getElementById('saveButton') as HTMLButtonElement).disabled = true;
        },
        openDialog: function () {
            showSpinner(document.getElementById('editor_dialog') as HTMLElement);
            (document.querySelector('.smart-schedule-button') as HTMLElement).click();
            let intervalId = setInterval(() => {
                let subject = (document.getElementById('subject') as HTMLInputElement).value;
                if (subject !== '') {
                    clearInterval(intervalId);
                    hideSpinner(document.getElementById('editor_dialog') as HTMLElement);
                    (document.getElementById('saveButton') as HTMLButtonElement).disabled = false;
                }
            }, 1000);
        },
        AzureAIRequest: async function (settings: ChatOptions) {
            let output = '';
            try {
                const response = await getAzureChatAIRequest(settings) as string;
                output = response;
            } catch (error) {
                console.error("Error:", error);
            }
            return output;
        },
        switchTab: function (): void {
            this.$refs.tabObj.select(1);
        },
        formSubmit: function (e: Event) {
            e.preventDefault();
            let subject = (document.getElementById('subject') as HTMLInputElement).value;
            let location = (document.getElementById('location') as HTMLInputElement).value;
            let startTime = (document.getElementById('startTime') as HTMLInputElement).value;
            let endTime = (document.getElementById('endTime') as HTMLInputElement).value;
            let description = (document.getElementById('description') as HTMLTextAreaElement).value;
            var newEvent = [];
            this.event = {
                Id: this.events.length + 1,
                Subject: subject,
                Location: location,
                StartTime: new Date(startTime),
                EndTime: new Date(endTime),
                Description: description
            };
            newEvent = [...this.events];
            newEvent.push(this.event);
            this.events = newEvent;
            this.$refs.scheduleObj.selectedDate = new Date(startTime);
            this.$refs.scheduleObj.eventSettings.dataSource = this.events;
            this.$refs.scheduleObj.dataBind();
            this.$refs.dialogObj.hide();
            this.switchTab();
        },
        dialogBtnClick: function () {
            this.$refs.dialogObj.hide();
        }
    },
    mounted() {
        createSpinner({
            target: document.getElementById('editor_dialog') as HTMLElement
        })
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}
</script>

<style>
.control-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-item {
    width: 75%;
}

.schedule-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.schedule-form .form-group.description,
.schedule-form .button-group {
    grid-column: 1 / 3;
}

.row.button-group {
    display: flex;
    justify-content: end;
}

.samplebtn {
    height: 40px;
    width: 85px;
    margin-bottom: 15px;
    border-radius: 25px;
}

.e-dlg-container {
    height: 140vh !important;
}
</style>