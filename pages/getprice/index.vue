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
      <div class="h-title">服务对比选择</div>
      <h2 class="h2-des">据你的团队规模与业务需求，选择最适合您的服务</h2>
    </div>
    <div class="zhilian">
      <div class="w1440 main">
        <div class="column">
          <div class="title bzb">
            <h1>标准版</h1>
            <h3>小微企业</h3>
          </div>
          <div class="gongneng">
            <nuxt-link to="/aboutus/formapply"><div class="btn btn-bzb">注册试用</div></nuxt-link>
            <div v-for="item in comboData" :key="item.title">
              <div class="list" v-if="item.test">
                <img src="@/static/image/getprice/yes.png" />
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
        <div class="column" style="border: 1px solid #37C5A9">
          <div class="title zyb">
            <h1>专业版</h1>
            <h3>中型企业</h3>
          </div>
          <div class="gongneng">
            <div class="btn btn-zyb" @click="showCustomer">获取报价</div>
            <div v-for="item in comboData" :key="item.title">
              <div class="list" v-if="item.major">
                <img src="@/static/image/getprice/yes.png" />
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
        <div class="column" style="border: 1px solid #FCB469;">
          <div class="title dzb">
            <h1>定制版</h1>
            <h3>大型企业(根据定制功能收费)</h3>
          </div>
          <div class="gongneng">
            <div class="btn btn-dzb" @click="showCustomer">获取报价</div>
            <div v-for="item in comboData" :key="item.title">
              <div class="list" v-if="item.enterprise">
                <img src="@/static/image/getprice/yes.png" />
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="konwMore">
      <h1>欢迎联系我们了解更多</h1>
      <div class="btnWrapper">
        <nuxt-link to="/aboutus/formapply"><div class="kown-btn">预约顾问</div></nuxt-link>
        <div class="kown-btn kefu" @click="showCustomer">在线客服</div>
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
  margin-bottom: 90px;
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
    }
}
.zhilian {
    width: 100%;
    background: #F7F8FA;
    padding-top: 40px;
    .main {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 40px;
      @media screen and (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .column {
      border-radius: 8px;
      padding-bottom: 70px;
      border: 1px solid #5E97FF;
      background: #fff;
      margin-bottom: 70px;
    }
    .title {
      height: 148px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h1 {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
      }
      h3 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        margin-top: 14px;
      }
    }
    .bzb {
      background: url(@/static/image/getprice/bzb.png);
    }
    .zyb {
      background: url(@/static/image/getprice/zyb.png);
    }
    .dzb {
      background: url(@/static/image/getprice/dzb.png);
    }
    .gongneng {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .btn {
      width: 216px;
      height: 54px;
      background: rgba(246,250,255,0);
      border: 1px solid #5391FE;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #5391FE;
      margin: 35px 0;
      cursor: pointer;
    }
    .btn-bzb:hover {
      background: var(--buttonHover);
      color: #fff;
    }
    .btn-zyb {
      background: rgba(246,250,255,0);
      border: 1px solid #3EC7AC;
      color: #3EC7AC;;
      &:hover {
        color: #fff;
        background: #2cc32c;
      }
    }
    .btn-dzb {
      background: rgba(246,250,255,0);
      border: 1px solid #FBB56C;
      color: #FBB56C;
      &:hover {
        color: #fff;
        background: #bbbb32;
      }
    }
    .list {
      width: 190px;
      display: flex;
      align-items: center;
      font-size: 22px;
      font-family: PingFang SC;
      color: #333333;
      line-height: 40px;
      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
}
.konwMore {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0 80px 0;
  h1 {
    font-size: 36px;
    line-height: 60px;
  }
  .btnWrapper {
    margin-top: 20px;
    display: flex;
    .kown-btn {
      width: 200px;
      height: 60px;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--buttonbg);
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: var(--buttonHover);
      }
    }
    .kefu {
      color: #559DFF;
      background: #fff;
      border: 1px solid #559DFF;
      margin-left: 30px;
      &:hover {
        background: var(--buttonbg);
        color: #fff;
      }
    }
  }
}
</style>
