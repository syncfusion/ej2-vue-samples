 <template>
 <div>
 <div class='showLabel'>
         <ejs-textbox id='Description' placeholder='Enter Description'></ejs-textbox>
    </div>
    <div class='showLabel' style='padding-top: 14px'>
        <ejs-textbox id='Color' placeholder='Enter Color'></ejs-textbox>
    </div>
    <div class='showDropdown'>
         <ejs-dropdownlist id='SourceId' :created='sourceDropdownCreate' :popupHeight='popupHeight' :change='sourceDropdownChange' :fields='fields'>
         </ejs-dropdownlist>
    </div>
    <div class='showDropdown' style='padding-top: 14px'>
         <ejs-dropdownlist id='TargetId' :created='targetDropdownCreate' :popupHeight='popupHeight' :change='targetDropdownChange' :fields='fields'>
         </ejs-dropdownlist>
    </div>
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