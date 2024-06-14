<script>
    import { OtpInputComponent } from '@syncfusion/ej2-vue-inputs';

    export default {
        components: { 'ejs-otpinput': OtpInputComponent }
    }
</script>

<template>
    <div class="control-section">
        <div class="otp-container">
            <label>Default (Number) OTP Input</label>
            <ejs-otpinput value="1234" type="number"></ejs-otpinput>
        </div>
        <div class="otp-container">
            <label>Text OTP Input</label>
            <ejs-otpinput value="e3c7" type="text"></ejs-otpinput>
        </div>
        <div class="otp-container">
            <label>Password OTP Input</label>
            <ejs-otpinput value="1234" type="password"></ejs-otpinput>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the default functionalities of the OTP Input component. It allows users to enter OTP (One-Time Password) during MFA processes such as login, account verifications, booking activities, and more.
        </p>
    </div>
    <div id="description">
        <p>
            This example showcases the usage of the <code>type</code> and <code>value</code> properties in the OTP Input component. The available input types are <code>number</code>, <code>text</code> and <code>password</code>. Once the user enters the OTP according to the specified <code>type</code>, the <code>value</code> property can be used to access the entered OTP.
        </p>
    </div>
</template>

<style scoped>
    .otp-container {
        width: 240px;
        margin: 50px auto;
    }

    .otp-container label {
        margin-bottom: 15px;
    }
</style>