<template>
    <div class="col-lg-12 control-section avatar-badge">

        <div class="sample_container">
            <div class="avatar-block">
                <!-- Card Component -->
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div class="avatar-sub-block">
                            <!-- xSmall Avatar-->
                            <div class="e-avatar e-avatar-xsmall">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Small Avatar-->
                            <div class="e-avatar e-avatar-small">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Avatar-->
                            <div class="e-avatar">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Large Avatar-->
                            <div class="e-avatar e-avatar-large">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- xLarge Avatar-->
                            <div class="e-avatar e-avatar-xlarge">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="circleAvatar avatar-block">
                <!-- Card Component -->
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div class="avatar-sub-block">
                            <!-- xSmall Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-xsmall">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Small Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-small">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Circle Avatar-->
                            <div class="e-avatar e-avatar-circle">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- Large Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-large">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div class="avatar-sub-block">
                            <!-- xLarge Circle Avatar-->
                            <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                                <img src="./images/pic01.png" alt="profile_pic">
                            </div>
                            <!-- Notification Badge -->
                            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the integration of avatar component with badges to create notification avatars.</p>
        </div>

        <div id="description">
            <p>The avatar can be used with badges to indicate the new activities to users. The container needs
                <code>position: relative</code> property to achieve the notifications styled avatar. In this sample, the wrapper is applied with
                <code>position: relative</code> property with avatar and badge elements inside it.
            </p>
            <p>Since the avatar is a supportive and dependent component, it can be used in many ways and have wide variety of use-cases.</p>
        </div>
    </div>
</template>
<style>
    .avatar-badge {
        overflow: auto;
        padding-left: 0px;
        padding-right: 0px;
    }

    .avatar-badge .sample_container .avatar-sub-block {
        display: inline-block;
        position: relative;
        margin: 9px
    }

    .avatar-badge .sample_container .avatar-block {
        display: inline-block;
        vertical-align: top;
    }

    /* Media Queries for various devices */

    @media only screen and (max-width: 965px) {
        .avatar-badge .sample_container {
            max-width: 332px;
            margin: auto;
            margin-top: 0;
        }
        .avatar-badge .circleAvatar {
            margin-top: 15px;
        }
        .avatar-badge .e-avatar-showcase.e-card {
            width: 320px;
        }
    }

    @media only screen and (min-width: 965px) {
        .avatar-badge .sample_container {
            max-width: 825px;
            margin: auto;
            margin-top: 70px;
        }
        .avatar-badge .e-avatar-showcase.e-card {
            width: 400px;
        }
    }

    .avatar-badge .e-avatar.image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    /* Card Customization */

    .avatar-badge .e-avatar-showcase.e-card {
        height: 140px;
        padding: 4px;
        margin: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-radius: 8px;
    }

    .avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-header-title {
        align-self: center;
        font-size: 18px;
        letter-spacing: 1px;
        text-shadow: #eaeaea 1px 1px 2px;
    }

    .avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {
        color: rgba(0, 0, 0, 0.75);
        white-space: pre-line;
        font-size: 14px;
        text-shadow: #eaeaea 1px 1px 2px;
    }

    .avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {
        margin: 0;
    }

    .avatar-badge .e-avatar-showcase.e-card .e-card-content {
        overflow: visible;
        align-self: center;
        padding: 10px 11px 10px 0px;
        color: rgba(0, 0, 0, 0.75)
    }

    .bootstrap4 .avatar-badge .e-avatar-showcase.e-card {
        box-shadow: none;
    }

</style>
<script>
export default {};
</script>