<template>
    <div class="col-lg-12 control-section avatar-default">

        <div class="sample_container">
            <div class="avatar-block">
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <!-- xSmall Avatar-->
                        <div class="e-avatar e-avatar-xsmall image"></div>
                        <!-- Small Avatar-->
                        <div class="e-avatar e-avatar-small image"></div>
                        <!-- Avatar-->
                        <div class="e-avatar image"></div>
                        <!-- Large Avatar-->
                        <div class="e-avatar e-avatar-large image"></div>
                        <!-- xLarge Avatar-->
                        <div class="e-avatar e-avatar-xlarge image"></div>
                    </div>
                    <div class="e-card-content">
                        <div>Default</div>
                    </div>
                </div>
            </div>
            <div class="circleAvatar avatar-block">
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <!-- xSmall Circle Avatar-->
                        <div class="e-avatar e-avatar-xsmall e-avatar-circle image"></div>
                        <!-- Small Circle Avatar-->
                        <div class="e-avatar e-avatar-small e-avatar-circle image"></div>
                        <!-- Circle Avatar-->
                        <div class="e-avatar e-avatar-circle image"></div>
                        <!-- Large Circle Avatar-->
                        <div class="e-avatar e-avatar-large e-avatar-circle image"></div>
                        <!-- xLarge Circle Avatar-->
                        <div class="e-avatar e-avatar-xlarge e-avatar-circle image"></div>
                    </div>
                    <div class="e-card-content">
                        <div>Circle</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the default avatar and circle avatar in which the
            <code>.e-avatar</code> and
            <code>.e-avatar-circle</code> classes should be added, respectively to the target element.</p>
        </div>

        <div id="description">
            <p>The avatar is developed in pure CSS which is used to represents the profile picture or initials or icons in presentable way. It comes with two different shapes, they are listed below.</p>
            <ul>
                <li>Default avatar: To apply default avatar, add the
                    <code>.e-avatar</code> class to the target element.</li>
                <li>Circle avatar: To apply circle avatar, add the
                    <code>.e-avatar-circle</code> class to the target element.</li>
            </ul>
            <p>The avatar comes with 5 different sizes, and are applied through modifier classes. They are:</p>
            <ul>
                <li>xSmall avatar: This can be applied by adding
                    <code>.e-avatar-</code> class.</li>
                <li>Small avatar: This can be applied by adding
                    <code>.e-avatar-small</code> class.</li>
                <li>Default avatar: This can be applied by adding
                    <code>.e-avatar</code> class. No additional class is needed for this.</li>
                <li>Large avatar: This can be applied by adding
                    <code>.e-avatar-large</code> class.</li>
                <li>xLarge avatar: This can be applied by adding
                    <code>.e-avatar-xlarge</code> class.</li>
            </ul>
            <p>
                <i>The
                    <code>.e-avatar</code> is the main class, which should be included in the target element to use any of the other avatar features.</i>
            </p>
            <p>The images can be added in the following two different ways to the avatar:</p>
            <ul>
                <li>Using CSS
                    <code>background</code> property on the avatar element. It doesn’t require any additional element.</li>
                <li>Using image tag. The image tag needs to be wrapped by the avatar element.</li>
            </ul>
        </div>
    </div>
</template>
<style>
    .avatar-default {
        overflow: auto;
    }

    /* Media Quries for various devices */

    @media only screen and (max-width: 965px) {
        .avatar-default .sample_container {
            max-width: 332px;
            margin: auto;
            margin-top: 0;
        }
        .avatar-default .circleAvatar {
            margin-top: 15px;
        }
        .avatar-default .e-avatar-showcase.e-card {
            width: 300px;
        }
    }

    @media only screen and (min-width: 965px) {
        .avatar-default .sample_container {
            max-width: 825px;
            margin: auto;
            margin-top: 70px;
        }
        .avatar-default .e-avatar-showcase.e-card {
            width: 400px;
        }
    }

    
    .avatar-default .sample_container .avatar-block {
        display: inline-block;
        vertical-align: top;
    }

    /* Assinging image for avatar in 'background-image' property */

    .avatar-default .e-avatar.image {
        background-image: url('./images/pic01.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: 2px;
    }

    /* Card Customization */

    .avatar-default .e-avatar-showcase.e-card {
        height: 140px;
        padding: 5px;
        margin: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-radius: 8px;
    }

    .avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-header-title {
        align-self: center;
        font-size: 18px;
        letter-spacing: 1px;
        text-shadow: #eaeaea 1px 1px 2px;
    }

    .avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {
        color: rgba(0, 0, 0, 0.75);
        white-space: pre-line;
        font-size: 14px;
        text-shadow: #eaeaea 1px 1px 2px;
    }

    .avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {
        margin: 0;
    }

    .avatar-default .e-avatar-showcase.e-card .e-card-content {
        align-self: center;
        padding: 10px 0 10px 0;
        overflow: visible;
    }

    .bootstrap4 .avatar-default .e-avatar-showcase.e-card {
        box-shadow: none;
    }

</style>
<script>
export default {};
</script>    
