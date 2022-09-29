<template>
    <div class="control-section">
        <div class="row skeleton-animation">
             <div>
                <ejs-button id="reloadSkeleton" class="e-primary" v-on:click.native="reloadClick">Reload</ejs-button>
            </div>
            <div class="col-sm-6">
                <h5>Fade Effect</h5>
                <br />  
                <div id="skeletondatacard"  v-if="isDataLoaded" class="e-card">
                    <div class="cardProfile">
                        <div :class="cardProfileImage"></div>
                    </div>
                    <div class="cardinfo">
                        <label id="name" style="font-size: 15px;">{{cardname}}</label><br />
                        <label id="time" style="font-weight:normal;">{{cardtime}}</label>
                    </div>
                    <div class="cardContent">
                        <div :class="cardPostImage"></div>
                    </div>
                    <div class="cardoptions">
                        <div id="cardLeftOptn" style="width:20%;">
                          <button class="e-btn e-outline e-primary" style="width: 100%;">Like</button>
                        </div>
                        <div id="cardRightOptn" style="width:20%;">
                          <button class="e-btn e-primary" style="width: 100%;">Share</button>
                        </div>
                    </div>
                </div>              
                <div id="skeletonCard" v-else class="e-card">
                    <div class="cardProfile">
                        <ejs-skeleton id="cardProfile" shape="Circle" width="60px" shimmerEffect="Fade"></ejs-skeleton>
                    </div>
                    <div class="cardinfo">
                        <ejs-skeleton id="cardText1" width="30%" height="15px" shimmerEffect="Fade"></ejs-skeleton>
                        <br />
                        <ejs-skeleton id="cardText2" width="15%" height="15px" shimmerEffect="Fade"></ejs-skeleton>
                    </div>
                    <div class="cardContent">
                        <ejs-skeleton id="cardContent" shape='Rectangle' width="100%" height="250px" shimmerEffect="Fade"> </ejs-skeleton>
                    </div>
                    <div class="cardoptions">
                        <ejs-skeleton id="cardLeftOptn" shape='Rectangle' width="20%" height="32px" shimmerEffect="Fade"> </ejs-skeleton>
                        <ejs-skeleton id="cardRightOptn" shape='Rectangle' width="20%" height="32px" shimmerEffect="Fade"> </ejs-skeleton>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h5>Pulse Effect</h5>
                <br />
                 <ejs-listview  v-if="isDataLoaded" id='skeleton-listview' ref="listObj"  height='420px'  :dataSource='contactdata' cssClass='e-list-template e-card' :template="'listTemplate'" sortOrder='Ascending' >
                  <template v-slot:listTemplate="{data}">
                    <div class="e-list-wrapper e-list-multi-line e-list-avatar">
                      <span :class="['e-avatar e-avatar-circle']" v-if="data.avatar !== ''">{{data.avatar}}</span>
                      <span :class="[data.pic + ' e-avatar e-avatar-circle']" v-if="data.pic !== '' "> </span>
                      <span class="e-list-item-header">{{data.text}}</span>
                      <span class="e-list-content">{{data.contact}}</span>
                    </div>
                  </template>
                </ejs-listview>
                <ul id=skeleton-list v-else class="e-card">
                    <li v-for="n in 8" v-bind:key="n">
                        <ejs-skeleton class="listProfile" shape='Circle' shimmerEffect="Pulse"></ejs-skeleton>
                        <div>
                            <ejs-skeleton class="listCtn" width="80%" shimmerEffect="Pulse"></ejs-skeleton>
                            <br />
                            <ejs-skeleton class="distCtn" width="60%" shimmerEffect="Pulse"></ejs-skeleton>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div id="action-description">
            <p>
                This sample demonstrates the fade and pulse shimmer effects of the skeleton with a card and a list layout. Click the reload button to load data to the card and list with a skeleton to show loading.
            </p>
        </div>
        <div id="description">
            <p>
                The default skeleton shimmer effect is wave. This can be changed to <b>Fade</b> and <b>Pulse</b> shimmer effects using the <code>shimmerEffect</code> property.
            </p>
        </div>
    </div>
</template>
  
<style>
    .skeleton-animation .col-sm-6 {
        padding: 30px;
        min-height: 350px;
        position: relative;
    }

    #reloadSkeleton {
        margin-left: 30px;
    }

    /* Skeleton customization */
    .skeleton-animation .e-card {    
        display: block;
    }
    #skeletondatacard,
    #skeletonCard {
        padding: 10px;
        line-height: inherit;
        height: 420px;
    }

   .skeleton-animation .cardProfile {
        float: left;
        margin-right: 15px;
    }

   .skeleton-animation .cardinfo {
        margin-top: 10px;
        overflow: hidden;
    }

   .skeleton-animation #skeleton-list,
   .skeleton-animation .cardinfo label {
        margin: 0;
        white-space: nowrap;
    }

    .skeleton-animation .cardContent {
        margin: 20px 0px 30px;
    }

   .skeleton-animation .cardoptions {
        display: flex;
        justify-content: space-between;
    }

   .skeleton-animation .cardoptions>div {
        min-width: 60px;
    }

   #skeleton-list {
        padding-left: 12px;
        padding-top: 7px;
        height: 420px;
        line-height: inherit;
    }

   #skeleton-list li {
        list-style: none;
        display: flow-root;
        margin-bottom: 9px;
    }

    .skeleton-animation .listProfile {
        float: left;
        margin-right: 15px;
        width: 40px;
        height: 40px;
    }

   .skeleton-animation .listCtn {
        margin: 5px 0px;
        width: 80%;
        height: 14px;
    }

   .skeleton-animation .distCtn {
        width: 60%;
        height: 14px;
    }

   .skeleton-animation .image.profile-image {
        background-image: url('./images/profile.png');
        background-size: 60px 60px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }

   .skeleton-animation .image.post-image {
        background: url('./images/post.jpg');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: center;
        height: 250px;
        width: 100%;
    }

    /* List view customization */
    #skeleton-listview .e-list-item .e-avatar {
        color: white;
    }
    #skeleton-listview .e-list-item:nth-child(1) .e-avatar {
        background-color: #039be5;
    }

    #skeleton-listview .e-list-item:nth-child(2) .e-avatar {
        background-color: #e91e63;
    }

    #skeleton-listview .e-list-item:nth-child(6) .e-avatar {
        background-color: #009688;
    }

    #skeleton-listview .e-list-item:nth-child(8) .e-avatar {
        background-color: #0088;
    }

    #skeleton-listview .pic01 {
        background-image: url("./images/1.png");
    }

    #skeleton-listview .pic02 {
        background-image: url("./images/3.png");
    }

    #skeleton-listview .pic03 {
        background-image: url("./images/5.png");
    }

    #skeleton-listview .pic04 {
        background-image: url("./images/2.png");
    }
</style>
  
<script>
import Vue from "vue";
import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(SkeletonPlugin,ListViewPlugin);


export default Vue.extend({
    data: function() {
    return {
      isDataLoaded:false,
      contactdata: [],
      cardname: "",
      cardtime: "",
      cardProfileImage: "image e-avatar",
      cardPostImage: "image",
      fields: {text: 'text'},
    };
  },
  methods:{
     getData:function() {
        return new Promise(function(resolve){ 
            setTimeout(function() {
                var data = {};
                data.listdata = [
                    { text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01" },
                    { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
                    { text: "Isabella", contact: "(206) 555-8122", id: "4", avatar: "", pic: "pic02" },
                    { text: "William ", contact: "(206) 555-9482", id: "5", avatar: "W", pic: "" },
                    { text: "Jacob", contact: "(71) 555-4848", id: "6", avatar: "", pic: "pic04" },
                    { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
                    { text: "Oliver", contact: "(71) 555-5598", id: "8", avatar: "", pic: "pic03" },
                    { text: "Charlotte", contact: "(206) 555-1189", id: "9", avatar: "C", pic: "" }
                ];
                data.name = 'Laura Callahan';
                data.time = new Date().toLocaleString();
                resolve(data);
            }, 3000);
        });
    },
    loadData:function() {
        this.getData().then((data)=>{
            this.cardProfileImage = "image profile-image e-avatar";
            this.cardname = data.name;
            this.cardtime = data.time;
            this.cardPostImage = "image post-image";
            this.contactdata = data.listdata;
            this.isDataLoaded = true;
        });
    },
    reloadClick:function() {
        if (this.isDataLoaded) {
            this.isDataLoaded = false;
            this.cardProfileImage = "image e-avatar";
            this.cardname ="";
            this.cardtime = "";
            this.cardPostImage = "image";
            this.contactdata =[];
            this.loadData();
        }
    },
  },
  mounted() {
   this.loadData()
  }
});
</script>
  
