<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart style="display: block" :theme="theme" align="center" id="chartcontainer" :title="title"
        :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :chartArea="chartArea"
        :width="width" :textRender="textRender" :load="load" >
        <template v-slot:materialMan="{ data }">
          <div style="background-color: #00bdae; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:materialWomen="{ data }">
          <div style="background-color: #404041; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>'
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricMan="{ data }">
          <div style="background-color: #4472c4; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricWomen="{ data }">
          <div style="background-color: #ed7d31; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapMan="{ data }">
          <div style="background-color: #a16ee5; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapWomen="{ data }">
          <div style="background-color: #f7ce69; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:highcontrastMan="{ data }">
          <div style="background-color: #79ece4; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:highcontrastWomen="{ data }">
          <div style="background-color: #e98272; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:material3Man="{ data }">
          <div id='templateWrap' style="background-color:#6355C7;border-radius: 3px;">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:material3Women="{ data }">
          <div id='templateWrap' style="background-color:#00AEE0;border-radius: 3px;">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:material3darkMan="{ data }">
          <div id='templateWrap' style="background-color:#4EAAFF;border-radius: 3px;">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:material3darkWomen="{ data }">
          <div id='templateWrap' style="background-color:#FA4EAB;border-radius: 3px;">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>'
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:materialdarkMan="{ data }">
          <div style="background-color: #9ecb08; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:materialdarkWomen="{ data }">
          <div style="background-color: #56aeff; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>'
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricdarkMan="{ data }">
          <div style="background-color: #4472c4; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricdarkWomen="{ data }">
          <div style="background-color: #ed7d31; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapdarkMan="{ data }">
          <div style="background-color: #a16ee5; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapdarkWomen="{ data }">
          <div style="background-color: #f7ce69; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5Man="{ data }">
          <div style="background-color: #FD7E14; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5Women="{ data }">
          <div style="background-color: #6610F2; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5darkMan="{ data }">
          <div style="background-color: #FD7E14; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5darkWomen="{ data }">
          <div style="background-color: #6610F2; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>'
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwindMan="{ data }">
          <div style="background-color: #5A61F6; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwindWomen="{ data }">
          <div style="background-color: #65A30D; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwind3Man="{ data }">
          <div style="background-color: #2F4074; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwind3Women="{ data }">
          <div style="background-color: #03B4B4; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwinddarkMan="{ data }">
          <div style="background-color: #8B5CF6; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwinddarkWomen="{ data }">
          <div style="background-color: #22D3EE; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwind3darkMan="{ data }">
          <div style="background-color: #8029F1; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwind3darkWomen="{ data }">
          <div style="background-color: #1ABC9C; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluentMan="{ data }">
          <div style="background-color: #1AC9E6; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluentWomen="{ data }">
          <div style="background-color: #DA4CB2; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluentdarkMan="{ data }">
          <div style="background-color: #1AC9E6; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluentdarkWomen="{ data }">
          <div style="background-color: #DA4CB2; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2Man="{ data }">
          <div style="background-color: #6200EE; border-radius: 3px;">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2Women="{ data }">
          <div style="background-color: #09AF74; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2darkMan="{ data }">
          <div style="background-color: #9BB449; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2darkWomen="{ data }">
          <div style="background-color: #2A72D5; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2highcontrastMan="{ data }">
          <div style="background-color: #9BB449; border-radius: 3px">
            <img src="./images/male.png" style="width: 24px; height: 24px; padding: 2px" alt="Male Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <template v-slot:fluent2highcontrastWomen="{ data }">
          <div style="background-color: #2A72D5; border-radius: 3px">
            <img src="./images/female.png" style="width: 24px; height: 24px; padding: 2px" alt="Female Icon"/>
            <div style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              ">
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <e-series-collection>
          <e-series :dataSource="seriesData" xName="sports" yName="boys" name="Boys" width="2" type="Column"
            columnSpacing=0.5 columnWidth=0.75 :marker="marker"></e-series>
          <e-series :dataSource="seriesData1" xName="sports" yName="girls" name="Girls" width="2" type="Column"
            columnSpacing=0.5 columnWidth=0.75 :marker="marker1"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates data label template support in charts. Each data label for each point is rendered using the template.
      </p>
    </div>
    <div id="description">
      <p>
        The Blazor Charts data label template feature allows you to change the appearance and behavior of the data label for each data point using the <code>Template</code> property in <code>ChartDataLabel</code>.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        To use dataLabel, we need to inject <code>dataLabel</code> module using
        <code>provide: { chart: [ DataLabel] },</code> method.
      </p>
      <p>
        More information on the data label template can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/data-labels/#data-label-template" aria-label="Navigate to the documentation for Data Label Template in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  Category,
  Legend,
  DataLabel,
  ColumnSeries,
  Highlight
} from "@syncfusion/ej2-vue-charts";

  import { loadChartTheme } from "./theme-color";
  let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { sports: "Tennis", boys: 50, girls: 38 },
        { sports: "Badminton", boys: 30, girls: 40 },
        { sports: "Cycling", boys: 37, girls: 20 },
        { sports: "Football", boys: 60, girls: 21 },
        { sports: "Hockey", boys: 15, girls: 8 },
      ],

      seriesData1: [
        { sports: "Tennis", boys: 50, girls: 38 },
        { sports: "Badminton", boys: 30, girls: 40 },
        { sports: "Cycling", boys: 37, girls: 20 },
        { sports: "Football", boys: 60, girls: 21 },
        { sports: "Hockey", boys: 15, girls: 8 },
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 70,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { color: '#eaeaea', width: 1 }
      },
      width: Browser.isDevice ? '100%' : "75%",
      chartArea: { border: { width: 0 } },
      title: "Athletes in Popular School",

      marker1: {
        visible: false,
        shape: "Circle",
        dataLabel: {
          visible: true,
          position: "Outer",
          margin: { top: 70 },
          template: "materialWomen",
        }, width: 2
      },

      marker: {
        visible: false,
        shape: "Rectangle",
        dataLabel: {
          visible: true,
          position: "Outer",
          margin: { top: 70 },
          template: "materialMan",
        }, width: 2
      },
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category, DataLabel, Highlight],
  },
  methods: {
    load: function (args) {
      theme =  loadChartTheme(args);
    },
    textRender: function (args) {
      if (theme === "Material") {
        args.template =
          args.series.name === "Boys" ? "materialMan" : "materialWomen";
      } else if (theme === "Material3") {
        args.template =
          args.series.name === "Boys" ? "material3Man" : "material3Women";
      } else if (theme === "Fabric") {
        args.template = args.series.name === "Boys" ? "fabricMan" : "fabricWomen";
      } else if (theme === "HighContrast") {
        args.template =
          args.series.name === "Boys" ? "highcontrastMan" : "highcontrastWomen";
      } else if (theme === "Tailwind") {
        args.template =
          args.series.name === "Boys" ? "tailwindMan" : "tailwindWomen";
      } else if (theme === "Tailwind3") {
        args.template =
          args.series.name === "Boys" ? "tailwind3Man" : "tailwind3Women";
      } else if (theme === "Bootstrap") {
        args.template =
          args.series.name === "Boys" ? "bootstrapMan" : "bootstrapWomen";
      } else if (theme === "Bootstrap5") {
        args.template =
          args.series.name === "Boys" ? "bootstrap5Man" : "bootstrap5Women";
      } else if (theme === "TailwindDark") {
        args.template =
          args.series.name === "Boys" ? "tailwinddarkMan" : "tailwinddarkWomen";
      } else if (theme === "Tailwind3Dark") {
        args.template =
          args.series.name === "Boys" ? "tailwind3darkMan" : "tailwind3darkWomen";
      } else if (theme === "MaterialDark") {
        args.template =
          args.series.name === "Boys" ? "materialdarkMan" : "materialdarkWomen";
      } else if (theme === "Material3Dark") {
        args.template =
          args.series.name === "Boys" ? "material3darkMan" : "material3darkWomen";
      } else if (theme === "FabricDark") {
        args.template =
          args.series.name === "Boys" ? "fabricdarkMan" : "fabricdarkWomen";
      } else if (theme === "Bootstrap5Dark") {
        args.template =
          args.series.name === "Boys" ? "bootstrap5darkMan" : "bootstrap5darkWomen";
      } else if (theme === "Fluent") {
        args.template =
          args.series.name === "Boys" ? "fluentMan" : "fluentWomen";
      } else if (theme === "FluentDark") {
        args.template =
          args.series.name === "Boys" ? "fluentdarkMan" : "fluentdarkWomen";
      } else if (theme === "Fluent2") {
        args.template =
          args.series.name === "Boys" ? "fluent2Man" : "fluent2Women";
      } else if (theme === "Fluent2Dark") {
        args.template =
          args.series.name === "Boys" ? "fluent2darkMan" : "fluent2darkWomen";
      } else if (theme === "Fluent2HighContrast") {
        args.template =
          args.series.name === "Boys" ? "fluent2highcontrastMan" : "fluent2highcontrastWomen";
      } else {
        args.template =
          args.series.name === "Boys" ? "bootstrapdarkMan" : "bootstrapdarkWomen";
      }
    },
  },
};
</script>