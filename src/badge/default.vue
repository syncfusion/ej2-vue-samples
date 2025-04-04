<template>
    <div class="badge-default">
        <div class="col-lg-12 control-section default">
            <div class="sample_container">
                <div class="e-btn-group e-custom-button">
                    <button id="badge-update" class="e-btn">Updates
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-info e-badge-notification e-badge-overlap">14</span>
                    </button>
                    <button id="task" class="e-btn">Tasks
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-success e-badge-notification e-badge-overlap">48</span>
                    </button>
                    <button id="notify" class="e-btn">Notifications
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap">99</span>
                    </button>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the default functionalities of the badge. To apply the badge, add
            <code>.e-badge</code> class to the target element.</p>
        </div>

        <div id="description">
            <p>
                The Badge is a component which is developed in pure CSS and designed in
                <code>em</code> relative units, so that badge will always be in relevant to the parent and makes the badge super easy to customize.
            </p>
            <p>For example, to increase the size of the badge, increase the font-size, width, and height.</p>
            <p>There are 6 different types of badges as follows: </p>
            <ul>
                <li>Default badge: To get the default badge, add the
                    <code>.e-badge</code> class to the target element.
                </li>
                <li>Notification badge: To get the notification badge, add the
                    <code>.e-badge-notification</code> class with
                    <code>.e-badge</code> and change the wrapper element to
                    <code>position: relative</code> property.
                </li>
                <li>Circle badge: To get the circle badge, add the
                    <code>.e-badge-circle</code> class with
                    <code>.e-badge</code>.
                </li>
                <li>Pill badge: To get the pill badge, add the
                    <code>.e-badge-pill</code> class with
                    <code>.e-badge</code>.
                </li>
                <li>Dot badge: To get the dot badge, add the
                    <code>.e-badge-dot</code> class with
                    <code>.e-badge</code> and change the wrapper element to
                    <code>position: relative</code> property.
                </li>
            </ul>
            <p>The badge component supports two positions, and this is applicable only to notification and dot badge.</p>
            <ul>
                <li>Top: It is the default position, so there is no additional class needed for the top position.</li>
                <li>Bottom: To get the bottom badge, add the
                    <code>.e-.badge-bottom</code> class with
                    <code>.e-badge</code>.</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .badge-default .control-section {
        overflow: auto;
    }

    .badge-default .sample_container {
        max-width: 328px;
        margin: auto;
        margin-top: 130px;
    }

    .badge-default .e-btn {
        position: relative;
    }

    .badge-default .e-bigger .e-btn {
        padding: 3px 10px;
    }

    @media only screen and (max-width: 400px) {
        .badge-default .sample_container .e-btn-group {
            left: calc(50% - 111px);
        }
        .badge-default .sample_container #task {
            display: none;
        }
    }

    /* Group Button Customization */

    .badge-default .e-btn-group {
        width: auto;
        position: relative;
        left: calc(50% - 164px);
    }

    .badge-default .e-btn-group.e-custom-button {
        box-shadow: none;
    }

    .highcontrast .badge-default .e-btn-group.e-custom-button .e-btn:focus {
        outline: 0px;
        color: white;
    }

    .fabric .badge-default .e-btn-group.e-custom-button .e-btn,
    .material .badge-default .e-btn-group.e-custom-button .e-btn,
    .bootstrap .badge-default .e-btn-group.e-custom-button .e-btn {
        background: #F6F7F9;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        text-transform: initial;
    }

    .badge-default #badge-update.e-btn {
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        border-right: 1px dotted #aaa;
        width: 100px;
    }

    .badge-default #task.e-btn {
        border-right: 1px dotted #aaa;
        width: 100px;
    }

    .badge-default #notify.e-btn {
        padding-left: 24px;
        padding-right: 24px;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
    }

    .material3 #badge-update.e-btn {
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
    }

    .material3 #task.e-btn {
        border-radius: 0;
    }

    .material3 #notify.e-btn {
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
    }

    .material3 .e-btn-group.e-custom-button {
        box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .badge-default .default .e-badge.e-badge-overlap {
        transform: translateX(-110%);
        z-index: 100;
    }
</style>

<script>
export default {
}
</script>