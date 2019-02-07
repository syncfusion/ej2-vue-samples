<template>
  <div class="control-section e-tab-section">
    <div class="e-sample-resize-container">
        <ejs-tab id="tab_rtl" enableRtl='true' heightAdjustMode='Auto'>
            <e-tabitems>
                <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
            </e-tabitems>
        </ejs-tab>
        <div id="action-description">
                <p>This sample demonstrates the RTL mode of the <code>Tab</code>. Click on the <code>header</code> element for activate the corresponding tab, and displays its <code>content</code> with right-to-left direction.</p>
            </div>

            <div id="description">
                 <p>The RTL sample illustrates the direction of the <code>Tab</code> from right to left.</p>
                 <p>More information about Tab can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/tab/getting-started/" target="_blank">documentation</a> section.</p>
            </div>  
    </div>
</div>
</template>
<style>
  .e-content .e-item {
        font-size: 12px;
        padding: 10px;
        text-align: justify;
    }
    .container {
        min-width: 350px;
        max-width: 500px;
        margin: 0 auto;
    }
</style>
<script>
import Vue from "vue";
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(TabPlugin);
export default Vue.extend({
  data: function(){
        return {
            headerText0: { text: "Twitter" }, 
            headerText1: { text: "Facebook" },
            headerText2: { text: "WhatsApp" },
            content0: 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
        'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read them. ' +
        'Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and ' +
        'has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, ' +
        'and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million ' +
        'users posting 340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.',

        content1: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website ' +
        'was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
        'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
        'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
        'University. It gradually added support for students at various other universities and later to high-school students.',

        content2: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that ' +
        'operates under a subscription business model. It uses the Internet to send text messages, images, video, user location ' +
        'and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
        'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
        'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'
        }
   }
});
</script>