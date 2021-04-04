<template>
  <div id = "balanceSheet">
    <h1 align="center">资产负债表预览</h1>
    <p></p>  <p></p>
    <div>
      <v-row justify="center" align="center">{{mymd5}}</v-row>
    </div>


    <form>

      <v-row
          no-gutters
          style="height: 150px;"
          justify="center"
          align="center"
      >
        <v-col></v-col>
        <v-col
        >
          <h3 align="center">公司名称 ：  </h3>
        </v-col>

        <v-col cols = "2"
        >

          <v-text-field v-model="companyName"
              label="公司名称"
          ></v-text-field>
        </v-col>
        <v-col></v-col>
        <v-col
        >
          <h3 align="center">编制日期 ： </h3>
        </v-col>
        <v-col cols="2"
        >  <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="primary"
                @click="modal = false"
            >
              Cancel
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog></v-col>
        <v-col></v-col>
        <v-col
        >
          <h3 align="right">单位 ： </h3>
        </v-col>
        <v-col
        >  <h3 align="center">人民币元</h3></v-col>
        <v-col></v-col>
      </v-row>
      <v-card
          class="align-center"
          justify="center"
          align="center"
          max-width="3000"
          elevation="12"
      >
        <v-row justify="center" align="center">

          <v-col cols="2">
            <h1>资产 </h1>
          </v-col>

          <v-col>
            <h1> 期初数</h1>
          </v-col>

          <v-col>
            <h1>期末数</h1>
          </v-col>

          <v-col cols="2">
            <h1>负债及所有者权益</h1>
          </v-col>

          <v-col>
            <h1> 期初数</h1>
          </v-col>

          <v-col>
            <h1>期末数</h1>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row justify="center" align="center">

          <v-col cols="2">
            <h2>流动资产</h2>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>

          <v-col cols="2">
            <h2>流动负债 </h2>
          </v-col>

          <v-col></v-col>
          <v-col></v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>货币资金</h3>
          </v-col>
          <v-col>
            <v-text-field outlined v-model="A21" @change="adda21"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A22" @change="adda22" outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>短期借款</h3>
          </v-col>

          <v-col>
            <v-text-field v-model="B381" @change="addb381" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="B382" @change="addb382" outlined></v-text-field>
          </v-col>
         <v-spacer></v-spacer>

        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>短期投资</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>应付票据</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-spacer></v-spacer>
        </v-row>


        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>应收票据 </h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>


          <v-col cols="2">
            <h3>应付账款 </h3>
          </v-col>

          <v-col>
            <v-text-field v-model="B411" @change="addb411" outlined></v-text-field>
          </v-col>
          <v-col><v-text-field outlined v-model="B412" @change="addb412"></v-text-field></v-col>
          <v-spacer></v-spacer>
        </v-row>


        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>应收账款</h3>
          </v-col>
          <v-col>
            <v-text-field v-model="A51" @change="adda51" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A52" @change="adda52" outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>预收账款</h3>
          </v-col>

          <v-col>
            <v-text-field disabled label="不可输入" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field disabled label="不可输入" outlined></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>


        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>减：坏账准备</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>其他应付款</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>应收账款净额</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>应付工资</h3>
          </v-col>

          <v-col>
            <v-text-field v-model="B441" @change="addb441" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model = "B442" @change = "addb442" outlined></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>预付账款</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>应付福利费</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>应收出口退税款</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>未付税金</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>其他应收款</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>未付利润</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>存货</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>其他未交款</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>其中：原材料</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>预提费用</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>其中：产成品</h3>
          </v-col>
          <v-col>
            <v-text-field v-model="A131" @change="adda131" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A132" @change="adda132" outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>一年内到期的长期负债</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>待摊费用</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>其他流动负债</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="0.0"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>待处理流动资产净损失</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>流动负债合计  ==> </h2>
          </v-col>

          <v-col>
            <v-text-field outlined background-color="#FFEFD5" readonly v-model="B531" label="Auto"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined readonly background-color="#FFEFD5" v-model="B532" label="Auto"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>一年内到期的长期债券</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>长期负债</h2>
          </v-col>

          <v-col>
<!--            <v-text-field outlined disabled label="0.0"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="0.0"></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>其他流动资产</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>长期借款</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>流动资产合计 ==> </h2>
          </v-col>
          <v-col>
            <v-text-field background-color="#FFEFD5" readonly v-model="A181" outlined label="Auto"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field background-color="#FFEFD5" readonly v-model="A182" outlined label="Auto"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>应付债券</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>长期投资</h2>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="不可输入"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="不可输入"></v-text-field>-->
          </v-col>

          <v-col cols="2">
            <h3>长期应付款</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>长期投资</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>其他长期负债</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>固定资产</h2>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="不可输入"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="不可输入"></v-text-field>-->
          </v-col>

          <v-col cols="2">
            <h2>长期负债合计 ==> </h2>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled  label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>固定资产原值</h3>
          </v-col>
          <v-col>
            <v-text-field v-model="A221" @change="adda221" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A222" @change="adda222" outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>递延税款</h2>
          </v-col>

          <v-col>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>减： 累积折旧</h3>
          </v-col>
          <v-col>
            <v-text-field v-model = "A231" @change="adda231" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A232" @keydown="adda232" outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>递延税款贷项</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>固定资产净值</h3>
          </v-col>
          <v-col>
            <v-text-field v-model="A241" readonly outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="A242" readonly outlined></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>负债合计 ==> </h2>
          </v-col>

          <v-col>
            <v-text-field outlined readonly background-color="#FFEFD5" v-model="B641" label="Auto"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined readonly background-color="#FFEFD5" v-model="B642" label="Auto"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>固定资产清理</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>所有者权益</h2>
          </v-col>

          <v-col>
<!--            <v-text-field outlined disabled label=""></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>在建工程</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>实收资本</h3>
          </v-col>

          <v-col>
            <v-text-field v-model="B661" @change="addb661" outlined></v-text-field>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
            <v-text-field v-model="B662" @change="addb662" outlined></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>固定资产合计 ==> </h2>
          </v-col>
          <v-col>
            <v-text-field outlined background-color="#FFEFD5" v-model="A281" label="Auto"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined background-color="#FFEFD5" v-model="A282" label="Auto"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>法人资本金</h2>
          </v-col>

          <v-col>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2> </h2>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>

          <v-col cols="2">
            <h3>个人资本金</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2> </h2>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>

          <v-col cols="2">
            <h3>资本公积</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>无形及其他长期资产</h2>
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>
          <v-col>
<!--            <v-text-field outlined disabled label="Auto"></v-text-field>-->
          </v-col>

          <v-col cols="2">
            <h3>盈余公积</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>无形资产</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>其中：公益金</h3>
          </v-col>

          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h3>长期待摊费用</h3>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field outlined disabled label="不可输入"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h3>未分配利润</h3>
          </v-col>

          <v-col>
            <v-text-field v-model="B721"  @change="addb721" outlined></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="B722" @change="addb722" outlined></v-text-field>
<!--            <v-text-field outlined></v-text-field>-->
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>无形及递延资产合计 ==>  </h2>
          </v-col>
          <v-col>
            <v-text-field disabled label="Auto" background-color="#FFEFD5"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field disabled label="Auto" background-color="#FFEFD5"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>所有者权益合计 ==>  </h2>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="B731" background-color="#FFEFD5" label="Auto" color="warning"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="B732" background-color="#FFEFD5" label="Auto"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row>' '</v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>资产总计</h2>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="A361" background-color="#FFEFD5"  label="Auto" color="warning"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="A362" background-color="#FFEFD5" label="Auto"></v-text-field>
          </v-col>

          <v-col cols="2">
            <h2>负债及所有者权益合计</h2>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="B741" background-color="#FFEFD5"  label="Auto" color="warning"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field readonly v-model="B742" background-color="#FFEFD5" label="Auto"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center" justify-lg="center">

          <v-col cols="2">
            <h2>单位负责人</h2>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="companyCharger" color="warning"></v-text-field>
          </v-col>
          <v-col>

          </v-col>


          <v-col cols="2">
            <h2>财务负责人</h2>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="finicialCharger" color="warning"></v-text-field>
          </v-col>
          <v-col>

          </v-col>


          <v-spacer></v-spacer>
        </v-row>
        <v-row>' '</v-row>

        <v-btn
            class="mr-4"
            @click="submit"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
        <v-row>' '</v-row>
        <v-row>' '</v-row>

        <v-row>' '</v-row>
        <v-row>' '</v-row>
      </v-card>


    </form>
  </div>
</template>

<script>
import crypto from 'crypto'
export default {

  name: "balanceSheet",
  data() {
    return {
      mymd5:'',
      A21: '0.0',
      A22: '0.0',
      A51: '0.0',
      A52: '0.0',
      A131: '0.0',
      A132: '0.0',
      A181: '0.0',
      A182: '0.0',
      A221: '0.0',
      A222: '0.0',
      A231: '0.0',
      A232: '0.0',
      A241: '0.0',
      A242: '0.0',
      A281: '0.0',
      A282: '0.0',
      A361: '0.0',
      A362: '0.0',

      B381: '0.0',
      B382: '0.0',
      B411: '0.0',
      B412: '0.0',
      B441: '0.0',
      B442: '0.0',
      B531: '0.0',
      B532: '0.0',
      B641: '0.0',
      B642: '0.0',
      B661: '0.0',
      B662: '0.0',
      B721: '0.0',
      B722: '0.0',
      B731: '0.0',
      B732: '0.0',
      B741: '0.0',
      B742: '0.0',

      companyName: 'ILoveLK有限公司',
      companyCharger: 'LK',
      finicialCharger:'HJR',
      date: '2021-04-04',
      modal: ''

    }

  },
  methods:{
    submit(){
      var datee = new Date()
      var fillDate = datee.getFullYear()+'-'+(datee.getMonth()+1)+'-'+datee.getDate()
      console.log(fillDate)
      const md5 = crypto.createHash('md5')
      md5.update(this.companyCharger)
      const md5pwd = md5.digest('hex')
      console.log(fillDate)
      this.mymd5 = md5pwd
    },
    clear(){
      this.A21='0.0',
          this.A22= '0.0',
          this.A51= '0.0',
          this.A52= '0.0',
          this.A131= '0.0',
          this.A132= '0.0',
          this.A181= '0.0',
          this.A182= '0.0',
          this.A221= '0.0',
          this.A222= '0.0',
          this.A231= '0.0',
          this.A232= '0.0',
          this.A241= '0.0',
          this.A242= '0.0',
          this.A281= '0.0',
          this.A282= '0.0',
          this.A361= '0.0',
          this.A362= '0.0',

          this.B381= '0.0',
          this.B382= '0.0',
          this.B411= '0.0',
          this.B412= '0.0',
          this.B441= '0.0',
          this.B442= '0.0',
          this.B531= '0.0',
          this.B532= '0.0',
          this.B641= '0.0',
          this.B642= '0.0',
          this.B661= '0.0',
          this.B662= '0.0',
          this.B721= '0.0',
          this.B722= '0.0',
          this.B731= '0.0',
          this.B732= '0.0',
          this.B741= '0.0',
          this.B742= '0.0',
          this.companyName='',
          this.companyCharger = ''
          this.finicialCharger = ''
    },
    adda21() {
      this.A181 = String(Number(this.A21) + Number(this.A51)+Number(this.A131))
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },
    adda51(){
      this.A181 = String(Number(this.A21) + Number(this.A51)+Number(this.A131))
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },
    adda131(){
      this.A181 = String(Number(this.A21) + Number(this.A51)+Number(this.A131))
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },
    adda221(){
      this.A281 = String(Number(this.A221) - Number(this.A231)  )
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },
    adda231(){
      this.A281 = String(Number(this.A221) - Number(this.A231))
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },

    adda251(){
      this.A281 = String(Number(this.A221) + Number(this.A231) +Number(this.A241) )
      this.A361 = String(Number(this.A181) + Number(this.A281))
    },

    adda22() {
      this.A182= String(Number(this.A22) + Number(this.A52)+Number(this.A132))
      this.A362 = String(Number(this.A182) + Number(this.A282))
    },
    adda52(){
      this.A182= String(Number(this.A22) + Number(this.A52)+Number(this.A132))
      this.A362 = String(Number(this.A182) + Number(this.A282))
    },
    adda132(){
      this.A182= String(Number(this.A22) + Number(this.A52)+Number(this.A132))
      this.A362 = String(Number(this.A182) + Number(this.A282))
    },
    adda222(){
      this.A282 = String(Number(this.A222) - Number(this.A232))
      this.A362 = String(Number(this.A182) + Number(this.A282))
    },
    adda232(){
      this.A282 = String(Number(this.A222) - Number(this.A232))
      this.A362 = String(Number(this.A182) + Number(this.A282))
    },

    addb381(){
      this.B531 = String(Number(this.B381)+Number(this.B411)+Number(this.B441))
      this.B641 = this.B531
      this.B741 = String(Number(this.B731)+Number(this.B641))
    },
    addb382(){
      this.B532 = String(Number(this.B382)+Number(this.B412)+Number(this.B442))
      this.B642 = this.B532
      this.B742 = String(Number(this.B732)+Number(this.B642))
    },
    addb411(){
      this.B531 = String(Number(this.B381)+Number(this.B411)+Number(this.B441))
      this.B641 = this.B531
      this.B741 = String(Number(this.B731)+Number(this.B641))
    },
    addb412(){
      this.B532 = String(Number(this.B382)+Number(this.B412)+Number(this.B442))
      this.B642 = this.B532
      this.B742 = String(Number(this.B732)+Number(this.B642))
    },
    addb441(){
      this.B531 = String(Number(this.B381)+Number(this.B411)+Number(this.B441))
      this.B641 = this.B531
      this.B741 = String(Number(this.B731)+Number(this.B641))
    },
    addb442(){
      this.B532 = String(Number(this.B382)+Number(this.B412)+Number(this.B442))
      this.B642 = this.B532
      this.B742 = String(Number(this.B732)+Number(this.B642))
    },
    addb661(){
      this.B731 = String(Number(this.B661)+Number(this.B721))
      this.B741 = String(Number(this.B731)+Number(this.B641))
    },
    addb662(){
      this.B732 = String(Number(this.B662)+Number(this.B722))
      this.B742 = String(Number(this.B732)+Number(this.B642))
    },
    addb721(){
      this.B731 = String(Number(this.B721)+Number(this.B661))
      this.B741 = String(Number(this.B731)+Number(this.B641))
    },
    addb722(){
      this.B732 = String(Number(this.B722)+Number(this.B662))
      this.B742 = String(Number(this.B732)+Number(this.B642))
    },



  }


}
</script>

<style scoped>

</style>