<template>
  <div id="wrap">
    <table style="width:100%;  border: 1px solid black;" class="table-borderless">
      <tr>
        <th rowspan="2" style="background-color: #C1272D">
          <img src="src/chart/images/grain.png" />
        </th>
        <td
          style="height: 25px; width: 50px; background-color: #C1272D; font-size: 14px; color: #E7C554; font-weight: bold; padding-left: 5px"
        >{{data.y}}</td>
      </tr>
      <tr>
        <td
          style="height: 25px; width: 50px; background-color: #C1272D; font-size: 18px; color: #FFFFFF; font-weight: bold; padding-left: 5px"
        >{{data.x}}</td>
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