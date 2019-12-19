<template>
  <div id="wrap">
    <table
      style="width:100%; background-color: #ffffff; border-spacing: 0px; border-collapse:separate; border: 1px solid grey; border-radius:10px; padding-top: 5px; padding-bottom:5px"
    >
      <tr>
        <td
          style="font-weight:bold; color:black; padding-left: 5px;padding-top: 2px;padding-bottom: 2px;"
        >Sales</td>
      </tr>
      <tr>
        <td
          style="padding-left: 5px; color:black; padding-right: 5px; padding-bottom: 2px;"
        >Target : {{data.target}}K</td>
      </tr>
      <tr>
        <td style="padding-left: 5px; color:black; padding-right: 5px">Current : {{data.value}}K</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>