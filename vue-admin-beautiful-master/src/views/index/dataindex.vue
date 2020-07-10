<template>
  <div class="index-container">

    <el-row :gutter="20">
      <el-col
        v-for="(item, index) in iconList"
        :key="index"
        :xs="12"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <!-- <router-link :to="item.link" target="_blank"> -->
          <el-card class="icon-panel" shadow="never">
            <div style="font-weight: bolder;margin-top: -10px;">{{ item.title }}</div>
            <div style="color: #e2386b;font-size: 18px;margin-top: 10px;">{{ item.num }}</div>
            <div style="font-weight: bolder;margin-top: 10px;">{{ item.sub_num}}</div>
          </el-card>
        <!-- </router-link> -->
      </el-col>
      <el-col>
        <div id="myChart" :style="{height: '300px'}"></div>
      </el-col>
    </el-row>
    <div v-show="show_order">
      <el-table
        v-loading="listLoading"
        :data="list"
        :element-loading-text="elementLoadingText"
      >
        <el-table-column
          show-overflow-tooltip
          label="id"
          prop="id"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="订单号"
          prop="orderid"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="卡种"
          prop="name"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="支付金额"
          prop="pay_price"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="佣金"
          prop="price_over"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="激活状态"
          prop="status"
        ></el-table-column>

        <el-table-column
          show-overflow-tooltip
          label="数量"
          prop="number"
        ></el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
import VabChart from "@/plugins/echarts";
import VabCount from "@/plugins/vabCount";
import { mapGetters } from "vuex";
// import { dependencies, devDependencies } from "../../../package.json";
// import { getList } from "@/api/changeLog";
// import { getNoticeList } from "@/api/notice";
// import { getRepos, getStargazers } from "@/api/github";
export default {
  name: "dataindex",
  components: {
    VabChart,
    VabCount,
  },
  data() {
    return {
      iconList: [
        {
          title:'触发量',
          num:'0',
          sub_num:'0',
          link:'/order_list'
        },
        {
          title:'裂变会员',
          num:'0',
          sub_num:'0',
          link:''
        },
        {
          title:'转化会员',
          num:'0',
          sub_num:'0',
          link:''
        },
        {
          title:'成交订单',
          num:'0',
          sub_num:'0',
          link:''
        },
        {
          title:'结算金额',
          num:'0',
          sub_num:'0',
          link:''
        },
        {
         title:'领取券码',
         num:'0',
         sub_num:'0',
         link:''
        },
      ],
      list: [
         {
           id:'10585',
           orderid:'1088548',
           name:"无限年卡",
           pay_price:"500.00",
           price_over:'50.00',
           status:'已激活',
           number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
        {
          id:'10585',
          orderid:'1088548',
          name:"无限年卡",
          pay_price:"500.00",
          price_over:'50.00',
          status:'已激活',
          number:'x10'
        },
     ],
    };
  },
  created() {
  },
  mounted() {

    this.drawLine();
  },
  computed: {
    ...mapGetters({
      collapse: "settings/collapse",
      visitedRoutes: "tagsBar/visitedRoutes",
      device: "settings/device",
      routes: "routes/routes",
    }),
  },
  methods: {
    drawLine(){
      let _this = this;
       let myChart = this.$echarts.init(document.getElementById('myChart'));
       myChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '无限年卡',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: '单次卡',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: '享阅年卡',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: '12次卡',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: '超级年卡',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
            ]
       });
       setTimeout(function (){
         myChart.resize();
       },300)
       myChart.on('click', function (params) {
         //
         _this.$router.push('/order_list');
       });
       window.addEventListener("resize", function () {
         myChart.resize();
       });
     }
  },
};
</script>
<style lang="scss" scoped>

.index-container {
  padding: 0 !important;
  margin: 0 !important;
  background: #f5f7f8 !important;

  ::v-deep {
    .el-alert {
      padding: $base-padding;

      &--info.is-light {
        min-height: 82px;
        padding: $base-padding;
        margin-bottom: 15px;
        color: #909399;
        background-color: $base-color-white;
        border: 1px solid #ebeef5;
      }
    }

    .el-card__body {
      .echarts {
        // width: 100%;
        // height: 140px;
      }
    }
  }

  .card {
    min-height: 420px;

    ::v-deep {
      .el-card__body {
        .echarts {
          width: 100%;
          height: 305px;
        }
      }
    }
  }

  .bottom {
    height: 40px;
    padding-top: 20px;
    margin-top: 5px;
    color: #595959;
    text-align: left;
    border-top: 1px solid $base-border-color;
  }

  .table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;

    td {
      position: relative;
      min-height: 20px;
      padding: 9px 15px;
      font-size: 14px;
      line-height: 20px;
      border: 1px solid #e6e6e6;

      &:nth-child(odd) {
        width: 20%;
        text-align: right;
        background-color: #f7f7f7;
      }
    }
  }

  .icon-panel {
    height: 100px;
    text-align: center;
    cursor: pointer;

    svg {
      font-size: 40px;
    }

    p {
      margin-top: 10px;
    }
  }

  .bottom-btn {
    margin-top: 5px;

    button {
      margin: 5px 10px 5px 0;
    }
  }
}
</style>
