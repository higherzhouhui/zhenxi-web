<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content" style="align-items: center;">
        <img class="giveyou" src="@/static/image/getprice/giveyou.png" alt="">
        <div class="des">帮企业省钱，让员工省事</div>
      </div>
    </div>
    <div class="w1440 content">
      <div class="h-title">套餐选择</div>
      <h2 class="h2-des">据你的团队规模与业务需求，选择相应的套餐</h2>
      <div class="table">
        <div class="row head">
          <div class="f1">授权范围</div>
          <div class="f2">
            <div>标准版</div>
            <nuxt-link to="/aboutus/formapply"><div class="btn freeuse">注册试用</div></nuxt-link>
            <!-- <img class="version-img" src="@/static/image/getprice/freeuse.png" alt=""> -->
          </div>
          <div class="f3">
            <div>行业版</div>
            <div class="btn getpriceBtn" v-on:click="showCustomer">获取报价</div>
          </div>
          <div class="f4">
            <div>定制版</div>
            <div class="btn getpriceBtn" v-on:click="showCustomer">获取报价</div>
            <img class="version-img dz-img" src="@/static/image/getprice/choose.png" alt="">
          </div>
        </div>
        <div class="row" v-for="item in comboData" :key="item.title">
          <div class="f1">{{item.title}}</div>
          <div class="f2"><img v-if="item.test" src="@/static/image/getprice/have.png" alt=""> <img v-if="!item.test" src="@/static/image/getprice/no.png" alt=""></div>
          <div class="f3"><img v-if="item.major" src="@/static/image/getprice/have.png" alt=""> <img v-if="!item.major" src="@/static/image/getprice/no.png" alt=""></div>
          <div class="f4"><img v-if="item.enterprise" src="@/static/image/getprice/have.png" alt=""> <img v-if="!item.enterprise" src="@/static/image/getprice/no.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="zhilian">
      <div class="w1440 main">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus, EventTypes } from "~/util";
export default Vue.extend({
  name: "GetPrice",
  data() {
    return {
      comboData: [
        {title: '借支单功能', test: true, major: true, enterprise: true},
        {title: '付款单功能', test: true, major: true, enterprise: true},
        {title: '报销单功能', test: true, major: true, enterprise: true},
        {title: '核销单功能', test: true, major: true, enterprise: true},
        {title: '采购单功能', test: false, major: false, enterprise: true},
        {title: '收款单功能', test: true, major: true, enterprise: true},
        {title: '挂帐单功能', test: false, major: false, enterprise: true},
        {title: '单据打印', test: false, major: false, enterprise: true},
        {title: '自定义费用分类', test: false, major: false, enterprise: true},
        {title: '费用标准设置', test: false, major: false, enterprise: true},
        {title: '随身账本', test: false, major: true, enterprise: true},
        {title: '机酒火快捷订票', test: false, major: false, enterprise: true},
        {title: '企业采购商城', test: false, major: false, enterprise: true},
        {title: '现金日记账管理', test: false, major: true, enterprise: true},
        {title: '银行日记账管理', test: false, major: true, enterprise: true},
        {title: '自动生成日记账', test: false, major: true, enterprise: true},
        {title: '企业账户管理', test: false, major: true, enterprise: true},
        {title: '项目管理', test: false, major: true, enterprise: true},
        {title: '项目台账', test: false, major: false, enterprise: true},
        {title: '合同管理', test: false, major: true, enterprise: true},
        {title: '请章管理', test: false, major: false, enterprise: true},
        {title: '通讯录', test: false, major: true, enterprise: true},
        {title: '现金流日报', test: false, major: true, enterprise: true},
        {title: '现金流周报', test: false, major: true, enterprise: true},
        {title: '凭证管理', test: false, major: false, enterprise: true},
        {title: '账簿管理', test: false, major: false, enterprise: true},
        {title: '期末结转', test: false, major: false, enterprise: true},
        {title: '财务报表', test: false, major: false, enterprise: true},
        {title: '辅助核算', test: false, major: false, enterprise: true},
        {title: '应收应付管理', test: false, major: false, enterprise: true},
        {title: '审批流程', test: false, major: true, enterprise: true},
        {title: '企业设置', test: false, major: true, enterprise: true},
        {title: '组织架构', test: false, major: true, enterprise: true},
        {title: '职务权限', test: false, major: true, enterprise: true},
        {title: '员工列表', test: false, major: true, enterprise: true},
        {title: '企业公告', test: false, major: true, enterprise: true},
        {title: '安全日志', test: false, major: false, enterprise: true},
      ],
    };
  },
  methods: {
    showCustomer() {
      EventBus.emit(EventTypes.Customer, true);
    },
  },
});
</script>
<style lang="scss" scoped>
.banner {
  height: 451px;
  background: url(@/static/image/getprice/bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    .giveyou {
      width: 670px;
      height: 60px;
    }
    .des {
      margin-top: 35px;
      width: fit-content;
      height: 36px;
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #FFFEFE;
      line-height: 48px;
    }
  }
}
.content {
  margin-bottom: 128px;
  .h-title {
      margin-top: 70px;
      height: 48px;
      font-weight: normal;
      line-height: 48px;
      color: #3d3d3d;
      margin-bottom: 45px;
      position: relative;
      text-align: center;
      font-size: 48px;
      &::after {
        content: "";
        position: absolute;
        bottom: -24px;
        display: block;
        width: 200px;
        height: 6px;
        background: #559dff;
        left: 50%;
        transform: translate(-50%);
      }
    }
    .h2-des {
      text-align: center;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 48px;
      margin-bottom: 80px;
    }
    .btn {
      width: 100px;
      height: 44px;
      background: rgba(85,157,255,0);
      border: 1px solid #559DFF;
      border-radius: 6px;
      font-weight: 400;
      color: #559DFF;
      line-height: 36px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
      }
    }
    .getpriceBtn {
      background: #559DFF;
      color: #fff;
    }
    .table {
      width: 100%;
      .row:nth-child(even) {
        background: #F7F8FA;
      }
      .row:nth-child(odd) {
        background: #fff;
      }
      .row {
        display: flex;
        width: 100%;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 38px;
        height: 38px;
      }
      .head {
        height: 162px;
        background: #F7F8FA!important;
        border-radius: 20px;
        font-size: 34px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 36px;
        margin-bottom: 22px;
      }
      .f1 {
        flex: 4;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-left: 72px;
      }
      .f2 {
        flex: 3;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        align-items: center;
        
      }
      .f3 {
        flex: 3;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        
      }
      .f4 {
        flex: 3;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        align-items: center;
        
      }
      .version-img {
        position: absolute;
        left: 215px;
        top: 0;
      }
      .dz-img {
        left: 150px;
        top: -20px;
        @media (max-width: 1440px) {
          left: 100px;
        }
      }
    }
    .zhilian {
      width: 100%;
      background: #F7F8FA;
      .main {
        display: flex;
        justify-content: space-between;
      }
    }
}
</style>
