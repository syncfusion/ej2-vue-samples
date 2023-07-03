<template let-data>
    <div>
        <div class = 'e-card-header'>
            <div class = 'e-card-header-caption'>
                <div :class = "['e-text','e-card-header-title' +' e-tooltip-text']">
                    {{ data.Summary}}
                </div>
            </div>
        </div>
        <div class = 'e-card-footer'>
            <div class = 'e-link-wrapper '>
                <span :class = "['e-'+data.Type.toLowerCase()]" :title = 'data.Type'></span>
                <a class ='e-custom-link'>
                    <span class = 'e-project'>TASK- </span>
                    <span class = 'e-card-footer-text'>{{data.Id}}</span>
                </a>
            </div>
            <div class = 'e-custom-wrapper'>
                <div class = 'e-story-points-wrapper'>
                    <div class = 'e-story-points' title = 'Story Point'>
                        {{data.StoryPoints}}
                    </div>
                </div>
                <div :class = "['e-priority','e-'+data.Priority.toLowerCase()+'-icon']" :title = 'data.Priority' ></div>
                <div class = 'e-card-avatar' :title = 'data.Assignee'> {{ getString(data.Assignee) }} </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import Vue from "vue";
  
  export default {
    data() {
      return {
        data: {},
      };
    },
    methods: {
        getString: function(Assignee) {
            return Assignee.match(/\b(\w)/g).join("").toUpperCase();
        }
    },
  };
  </script>