<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content aboutTitle">
        <div class="m-b-40 tip1">关于我们</div>
        <div class="f30 m-b-26 tip2">ABOUT US</div>
      </div>
    </div>
    <div class="advantage aboutMain">
      <div class="w1440 content">
          <h1>公司简介</h1>
          <div class="divisin"></div>
          <div class="des m-t-30">振翕科技成立于2018年，是一家专注于数字化技术服务领域的互联网科技企业，基于人工智能、大数据、云计算、移动互联网技术， 致力于为企业提供多行业场景下的智能业财一体化解决方案。</div>
          <div class="des m-t-40">作为省级高新技术企业，振翕科技拥有一支精耕数字化行业多年的独立研发团队，先后获得软件著作权13项、发明专利1项。旗下核
心产品“企金控”，着眼于企业成本支出管控领域，提供项目管理、现金流优化、数据分析、决策支撑等功能在内的企业内控建设云端解决
方案。2022年，振翕科技与江汉大学建立校企合作，“企金控”被该校用作财税试点系统。</div>
          <div class="des m-t-40">在未来，振翕科技将秉持着“洞察业务数据，驱动企业增长”的发展理念，持续致力于以前沿的技术和优质的产品服务，赋能企业实现 全面数字化、实现高效增长。  
</div>
      </div>
    </div>
    <div class="botImg">
      <div class="miaosu">
          <div class="f36">立即开启您的全新智能业财一体化旅程</div>
          <div class="title">企金控——洞察业务数据 驱动企业增长</div>
          <div class="btns">
            <nuxt-link to="/getprice/"><button class="price">获取报价</button></nuxt-link>
            <button class="addprice" v-on:click="showCustomer">点击续费</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus, EventTypes } from "~/util";
export default Vue.extend({
  name: "Expenditure",
  data() {
    return {
      processData: [
        {img: require("@/static/image/together/sass.png"), name: "好用的企业SaaS产品", list: ['打造业财一体化的管理闭环', '助力企业完成数字化转型']},
        {img: require("@/static/image/together/dev.png"), name: "强大的产品研发能力", list: ['精耕数字化技术行业多年', '有着深厚、专业的产品研发积累']},
        {img: require("@/static/image/together/team.png"), name: "专业的企业服务团队", list: ['专属客户成功及服务经理', '有丰富的产品知识和实操经验', '已为多家企业提供数字化解决方案']},
        {img: require("@/static/image/together/service.png"), name: "优质的增值服务", list: ['提供完善的代理扶持权益', '研发、产品、运营团队顶力支持', '售前、售中、售后全流程系统培训']},
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
  background: url(@/static/image/aboutus/bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    .tip1 {
      font-size: 48px;
    }
  }
}
.aboutMain {
  height: 900px;
  background: url(@/static/image/aboutus/center.png) no-repeat center;
  background-size: cover;
  margin-top: 60px;
  h1 {
    font-size: 42px;
    line-height: 48px;
    color: #3d3d3d;
    font-weight: bold;
  }
  .division {
    width: 168px;
    height: 6px;
    background: #559DFF;
    margin-top: 24px;
  }
  .des {
    font-size: 24px;
    line-height: 48px;
    color: #333333;
    font-weight: 400;
    text-indent: 2em;
  }
}
.botImg {
  margin-top: -200px;
  width: 100%;
  height: 570px;
  background: url(@/static/image/aboutus/bot.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  .miaosu {
    width: 90%;
    margin: 150px 0px 0 850px;
    @media (max-width: 1640px) {
      margin: 150px 0px 0 700px;
    }
    @media (max-width: 1440px) {
      margin: 150px 0px 0 550px;
    }
    .title {
      font-size: 42px;
      font-weight: bold;
      margin: 40px 0 48px 0;
      line-height: 60px;
    }
    .btns {
      button {
        width: 112px;
        height: 40px;
        border-radius: 4px;
        color: #fff;
        border: 2px solid #FFFFFF;
        cursor: pointer;
        &:hover {
          transform: scale(1.02);
        }
      }
      .price {
        background: #FFFFFF;
        color: #559DFF;
        margin-right: 20px;
      }
      .addprice {
        background: transparent;
      }
    }
  }
}
.process {
  display: flex;
  justify-content: space-between;
  margin: 100px auto 148px;
  background: #fff;
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    img{
      width: 140px;
    }
    .name {
      padding-top: 24px;
      color: #3d3d3d;
      font-weight: bold;
    }
    &::after {
      content: "";
      position: absolute;
      background: url(@/static/image/product/icon-right.png) no-repeat;
      width: 13px;
      height: 15px;
      display: inline-block;
      top: 63px;
      right: -50px;
    }
    &::before {
      content: "";
      position: absolute;
      background: #dee9ff;
      width: 77px;
      height: 2px;
      display: inline-block;
      top: 70px;
      right: -77px;
    }
    &:last-child {
      &::after,
      &::before {
        content: none;
      }
    }
  }
}

.advantage {
  .content {
    .item {
      height: 426px;
      display: flex;
      margin-top: 60px;
      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
      }
      img {
        height: 100%;
        object-fit: fill;
      }
      &-l,
      &-r {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &-l {
        width: 553px;
        .list-item {
          position: relative;
          padding-left: 26px;
          line-height: 36px;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 12px;
            left: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d8d8d8;
          }
        }
      }
      .acl {
        color: #559DFF;
      }
    }
    .item-r {
      flex: 1;
      background: #f7f8fa;
      padding-left: 60px;
    }
  }
  .hxys {
    font-size: 42px;
    font-weight: bold;
    margin: 70px auto 24px  auto;
    text-align: center;
  }
  .division {
    margin: 0 auto;
    width: 200px;
    height: 6px;
    background: #559DFF;
  }
  .listContainer {
    display: flex;
    justify-content: space-around;
    margin: 80px 0 134px 0;
    width: 100%;
    .hx-list {
      display: flex;
      width: 340px;
      height: 450px;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      .hx-content {
        width: 100%;
        padding: 0 37px;
        left: 0;
        top: 170px;
        position: absolute;
        z-index: 9;
      }
      .hx-title {
        font-size: 28px;
        font-weight: bold;
        line-height: 48px;
        color: #FFFFFF;
      }
      ul {
        margin-top: 33px;
      }
      li {
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
        list-style: none;
        display: flex;
        padding-left: 20px;
        position: relative;
      }
      .circle {
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 10px;
      }
    }
  }
}

.h-title {
  height: 48px;
  font-weight: normal;
  line-height: 48px;
  color: #3d3d3d;
  margin-bottom: 78px;
  position: relative;
  text-align: center;
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
.btn {
  display: inline-block;
  border-radius: 4px;
  background: #559dff;
  padding: 15px 18px;
  color: #fff;
  width: 100px;
  cursor: pointer;
}
</style>
