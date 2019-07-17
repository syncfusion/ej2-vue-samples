<template>
<div>
<div class="control-section">
    <div class="control-wrapper">
        <div class="default-section">
             <div class="forum">
                <div class="questionSection">
                    <div class="raiser">
                        <table>
                            <tbody><tr>
                                <td>
                                    <div class="questionar"> </div>
                                </td>
                                <td>
                                    <div class="Questionarname"> Kimberly </div>
                                </td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div class="questionHeader">
                        <div class="header">
                            How to add a custom item to the toolbar of RichTextEditor
                        </div>
                        <div class="detailsQuestion">Posted on May 7, 2018 6.10 PM</div>
                        <div class="explain">
                            I want to add a custom icon, “code-mirror” to the toolbar of RichTextEditor and display the RichTextEditor content in code-mirror format.
                        </div>
                        <div class="tags">
                            <div class="tagSection">
                                <table>
                                    <tbody><tr>
                                        <td>
                                            <div class="tag"> HTML </div>
                                        </td>
                                        <td>
                                            <div class="tag"> JavaScript </div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div class="questionLikes">
                                <table>
                                    <tbody><tr>
                                        <td>
                                            <span class="e-icon e-like questionSide">
                                                <img class="e-icon" src="./images/like.svg">
                                                <span>Like</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="e-icon e-dislike">
                                                <img class="e-icon" src="./images/dislike.svg">
                                                <span>Dislike</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                        </div>
                    </div>
                    <div class="separator"></div>
                </div>
                <div class="answerSection">
                    <div class="answerCount">1 Answer</div>
                    <div class="answer">
                        <table>
                            <tbody><tr>
                                <td rowspan="2">
                                    <div class="logos"> </div>
                                </td>
                                <td>
                                    <div class="authorname">Mabel Weber</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="detailsAnswer">Answered on May 7, 2018 6.30 PM</div>
                                </td>
                            </tr>
                        </tbody></table>
                        <div class="posting">
                            To add a custom icon
                            <b>code-mirror</b> to the Toolbar, you have to use template option of the
                            <b>toolbarSettings</b>. To know more about adding custom icons, refer to
                            <a href='https://ej2.syncfusion.com/home/' target='_blank'>custom tool</a> sample of RTE.
                        </div>
                        <div class="likeAnswer">
                            <table>
                                <tbody><tr>
                                    <td>
                                        <span class="e-icon e-like">
                                            <img class="e-icon" src="./images/like.svg">
                                            <span>Like</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="e-icon e-dislike">
                                            <img class="e-icon" src="./images/dislike.svg">
                                            <span>Dislike</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody></table>
                        </div>
                        <div class="separator"></div>
                    </div>
                </div>

                <div id="createpostholder">
                    <form novalidate="novalidate">
                        <ejs-richtexteditor ref="rteInstance" :value="value" placeholder="Write a reply"></ejs-richtexteditor>
                        <div id="buttonSection">
                            <table>
                                <tbody><tr>
                                    <td>
                        <ejs-button v-on:click.native="clickSubmit" :isPrimary="isPrimary" id="rteSubmit" type="button" value="Reply">Reply</ejs-button>
                                    </td>
                                    <td>
                        <ejs-button v-on:click.native="clickCancel" id="rteCancel" value="Cancel" type="button">Cancel</ejs-button>
                                    </td>

                                </tr>
                            </tbody></table>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates how to design forum application using rich text editor. You can type the content and click reply
        button to post it. </p>
</div>

<div id="description">
    <p>RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting
        word content as HTML or Markdown format. So, RichTextEditor can easily customized to use for blog posting, forums
        as an editor for response.</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>

</div>
</template>
<style>
    .tagSection {
        float: left;
    }

    .likeAnswer span.e-icon {
        float: left;
    }

    img.e-icon {
        width: 13px;
        height: 25px;
    }

    span.questionSide {
        margin-left: 24px;
        float: left;
    }

    .e-dislike {
        margin-left: 16px;
        float: left;
    }

    .questionHeader {
        margin-top: 12px;
        margin-bottom: 5px;
    }

    .header {
        font-size: 16px;
        font-family: roboto-Semibold, SegoeUI-Semibold;
        color: #000000;
        font-weight: bold;
        clear: both;
    }

    .highcontrast .header {
        color: #fff;
    }

    @media (max-width: 550px) {
        .forum {
            padding: 20px 20px 60px 20px;
        }
    }

    @media (min-width: 550px) {
        .forum {
            margin: 0 auto;
            width: 80%;
            border: 1px solid #d8d8c0;
            padding: 10px 90px 60px 90px;
            box-shadow: 2px 2px 2px 2px #f5f5ef;
        }
        .highcontrast .forum {
            border: 1px solid #fff;
        }
    }

    .e-like span {
        font-family: Helvetica, Times New Roman;
        color: #E3175A;
        font-size: 12px;
    }

    .e-dislike span {
        font-family: Helvetica, Times New Roman;
        color: #717171;
        font-size: 12px;

    }

    .detailsQuestion {
        font-size: 12px;
        font-family: roboto, SegoeUI;
        color: #575757;
        margin-top: 8px;
    }

    .explain {
        margin-top: 16px;
        font-size: 13px;
        font-family: roboto, SegoeUI;
        color: #000000;
    }

    .highcontrast .explain {
        color: #fff;
    }

    .separator {
        margin-top: 5px;
        border-bottom: 1px solid #DADADA;
        margin-bottom: 5px;
    }

    .tags td:first-child div {
        margin-left: 0px;
    }

    .tag {
        color: #000000;
        padding: 3px 14px;
        background-color: #DDDDDD;
        font-size: 13px;
        margin-left: 8px;
        border-radius: 6px;
        float: left;
        text-transform: lowercase;
        font-family: roboto, SegoeUI;
    }

    .answerCount {
        color: #575757;
        margin-top: 24px;
        margin-bottom: 24px;
        font-family: roboto-Semibold, SegoeUI-Semibold;
        width: 63px;
    }

    .likeAnswer {
        margin-top: 13px;
    }

    .tags {
        margin-top: 10px;
        margin-bottom: 24px;
    }

    .questionar {
        width: 32px;
        background: url(./images/emp1.png);
        height: 32px;
        float: left;
        -ms-flex-line-pack: center;
        align-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #bcbcbc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        color: #fff;
        margin-top: 2px;
    }

    .raiser {
        height: 34px;
    }

    .Questionarname {
        margin-top: 13px;
        float: left;
        font-weight: 500;
        margin-left: 10px;
    }

    .your-answer {
        color: #3b3b3b;
        font-weight: 300;
    }

    .rating {
        padding-left: 10px;
        margin-top: -95px;
    }

    .logos {
        background: url(./images/emp2.png);
        height: 32px;
        -ms-flex-line-pack: center;
        align-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #bcbcbc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        color: #fff;
        width: 32px;
    }

    .logo {
        background: url(./images/author.png) no-repeat scroll 0 0 transparent;
        height: 32px;
        width: 32px;
    }

    .emp1 {
        background: url(./images/1.png) no-repeat scroll 0 0 transparent;
        height: 32px;
        width: 32px;
    }

    .emp2 {
        background: url(./images/2.png) no-repeat scroll 0 0 transparent;
        height: 32px;
        width: 32px;
    }

    .emp3 {
        background: url(./images/3.png) no-repeat scroll 0 0 transparent;
        height: 32px;
        width: 32px;
    }
    .author {
        margin-bottom: 5px;
        height: 50px;
        margin-top: 5px;
    }

    .name {
        margin: 5px;
        float: left;
        color: blue;
    }

    .posting {
        clear: both;
        color: #000;
        line-height: 24px;
        margin-top: 12px;
        font-family: roboto, SegoeUI;
        font-size: 13px;
    }

    .highcontrast .posting {
        color: #fff;
    }

    .authorname {
        font-family: SegoeUI-Semibold;
        color: #000000;
        font-size: 13px;
    }

    .highcontrast .authorname {
        color: #fff;
    }

    .detailsAnswer {
        color: #575757;
        font-size: 12px;
        font-family: roboto, SegoeUI;
        margin-top: 7px;
    }

    #buttonSection {
        float: right;
        margin-top: 11px;

    }

    #buttonSection input {
        margin-right: 11px;
    }

    .authorname,
    .detailsAnswer {
        margin-left: 11px;
    }

    .answerCount {
        color: #76766f;
        margin-top: 20px;
        margin-bottom: 12px;
    }

    .questDesc {
        min-height: 120px;
        width: 100%;
    }

    .answerHeader {
        border-bottom: 1px solid #ced1d1;
        margin-bottom: 20px;
        margin-top: -40px;
    }

    .answer {
        margin-top: 15px;
    }

    .editorholder h4 {
        padding: 15px 0;
    }

    #createpostholder {
        margin-top: 25px;
    }
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Link, Image, QuickToolbar, HtmlEditor, Toolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(RichTextEditorPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
        isPrimary: true,
        value: ''
        };
    },
    methods: {
        clickCancel: function() {
            var answerElement = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
            answerElement.innerHTML = '';
            this.value = '';
            this.$refs.rteInstance.dataBind();
            this.$refs.rteInstance.refresh();
            },
            clickSubmit: function() {
                var empCount = 0
                var answerElement = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');
                var comment = answerElement.innerHTML;
                var empList = ['emp1','emp2','emp3'];
                var nameList = ['Anne Dodsworth', 'Janet Leverling', 'Laura Callahan'];
                if (comment !== null && comment.trim() !== '' && answerElement.innerText.trim() !== '') {
                    var answer = document.querySelector('.answer');
                    var cloneAnswer = answer.cloneNode(true);
                     var authorName = cloneAnswer.querySelector('.authorname');
                    var logo =  cloneAnswer.querySelector('.logos');
                     logo.classList.remove('logos');
                     if (empCount < 3) {
                logo.classList.add(empList[empCount]);
                authorName.innerHTML = nameList[empCount];
                empCount++;
            } else {
                logo.classList.add('logo');
                authorName.innerHTML = 'User';
            }
            var timeZone = cloneAnswer.querySelector('.detailsAnswer');
             var day = this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate();
             var hr = new Date().getHours() + ':' + new Date().getMinutes();
             if (new Date().getHours() > 12) {
                hr = hr + ' PM';
            } else {
                hr = hr + ' AM';
            }
            timeZone.innerHTML = 'Answered on ' + day + ', ' + new Date().getFullYear() + ' ' + hr;
            var postContent = cloneAnswer.querySelector('.posting');
            postContent.innerHTML = comment;
            var postElement = document.querySelector('.answerSection');
            postElement.appendChild(cloneAnswer);
            var countEle = document.querySelector('.answerCount');
            var count = parseInt(countEle.innerHTML, null);
            count = count + 1;
            countEle.innerHTML = count.toString() + ' Answers';
            answerElement.innerHTML = '';
            this.value = '';
            this.$refs.rteInstance.dataBind();
            this.$refs.rteInstance.refresh();
                }
            },
            getMonthName: function(index) {
        var month = [];
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        return month[index];
    }
    },
    provide:{
        richtexteditor:[Link, Image, QuickToolbar, HtmlEditor, Toolbar]
    }
});
</script>