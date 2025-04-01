<template>
    <div class="control-section chat-ui">
        <div class="loadonDemand-chatui">
            <ejs-chatui id="loadonDemand" :user="currentUser" headerText="Michale Suyama" headerIconCss="chat_user2_avatar" showTimeBreak="true" loadOnDemand="true" :messages="chatMessages"></ejs-chatui>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the load on-demand feature of the Chat UI component to render a large number of data's.</p>
    </div>
    <div id="description">
        <p> 
            In this example, the chat <code>messages</code> are the list of conversations between two users allowing to scroll through their conversation history. The <code>loadOnDemand</code> property allows you to load more messages on demand, improving the performance and reducing load times, particularly in long conversations. Only the visible conversations are render, reducing the amount of DOM elements and improving the overall performance.
        </p>
    </div>    
</template>


<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";

const currentUser = {
  id: "user1",
  user: "Albert"
};

const michaleUser = {
  id: "user2",
  user: "Michale Suyama",
  avatarUrl: "src/chat-ui/images/andrew.png"
};

let chatMessages = [];
let baseDate = new Date();
baseDate.setDate(baseDate.getDate() - 3);
let dayIncrement = 24 * 60 * 60 * 1000;
let authorNames = ["Albert", "Michale"];
for (let i = 1; i <= 200; i++) {
    if (i % 50 === 1 && i !== 1) {
        baseDate = new Date(baseDate.getTime() + dayIncrement);
    }
    let authorIndex = i % 2;
  chatMessages.push({
    text: 'Message ' + i + ' from ' + authorNames[authorIndex],
    author: authorIndex === 0 ? currentUser: michaleUser,
    timeStamp: new Date((baseDate.getTime() - ((200 * 60 * 1000)) + ((60 * 1000) * i)))
  });
}
</script>

<style>
    .loadonDemand-chatui {
        height: 500px;
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    .loadonDemand-chatui .chat_user2_avatar {
        background-image: url('/src/chat-ui/images/andrew.png');
        background-color: unset;
    }   

    @media only screen and (max-width: 850px) {
        .loadonDemand-chatui {
            flex-direction: column;
            height: 500px;
            width: 80%;
        }
        .chat-ui.control-section {
            height: 1050px;
        }
    }
</style>