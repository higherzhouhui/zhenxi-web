<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="m-b-40 tip1">智慧财务</div>
        <div class="m-b-26 tip2">线上财务室 审批核算自动化处理</div>
        <div class="m-b-54 tip2">人力效率高 财务辅助分析和决策</div>
        <span class="f16 btn" v-on:click="showCustomer">立即咨询</span>
      </div>
    </div>
    <!-- 流程 -->
    <div class="w1440 process">
      <div class="item" v-for="(item, index) in processData" :key="index">
        <img :src="item.img" class="img" />
        <div>
            <div class="name"><strong>{{ item.name }}</strong></div>
            <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <div class="tip1 m-b-30">智慧财务</div>
            <div class="list">
              <div class="list-item tip2 m-b-26">
                凭证自动生成，大幅缩短财务审批工作量
              </div>
              <div class="list-item tip2 m-b-26">
                智能出纳管理，一键批量付款效率成倍提升
              </div>
              <div class="list-item tip2 m-b-26">
                业务核算多维度统计，企业支出管理更规范
              </div>
            </div>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/product/wisdom/item-bg.png')"
              class="img"
            />
          </div>
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
      { img: require("@/static/image/product/wisdom/item-01.png"), name: "流程可观", desc: "从费用申请、报销、归集、汇总、分析将有一 条完整的可视化流程，财务人员清晰可查" },
        { img: require("@/static/image/product/wisdom/item-02.png"), name: "自动化", desc: "财务凭证自动生成、备用金自动冲销、智能机器 审核，帮财务实现工作量骤减" },
        { img: require("@/static/image/product/wisdom/item-03.png"), name: "批量化", desc: "批量打款、审批及凭证导出，全面提升效率， 将更多人力置于财务分析与决策中" },
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
  background: url(@/static/image/product/wisdom/banner-bg.png) no-repeat;
  background-position: center;
  background-size: cover;  background-size: cover;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }
  .tip1 {
    font-size: 36px;
    margin-bottom: 48px;
    @media screen and (max-width: 760px) {
      font-size: 28px;
    }
  }
  .tip2 {
    font-size: 24px;
    margin-bottom: 36px;
    @media screen and (max-width: 760px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
.process {
  display: flex;
  justify-content: space-between;
  margin: 100px auto 148px;
  background: #fff;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin: 50px auto 100px;
  }
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    align-items: center;
    padding: 0 60px;
    @media screen and (max-width: 760px) {
      flex-direction: row;
      padding: 0;
      img {
        width: 80px!important;
        margin-right: 20px;
      }
      .name, .desc {
        text-align: left;
      }
    }
    img{
      width: 140px;
    }
    .name {
      padding-top: 24px;
      color: #3d3d3d;
      line-height: 32px;
      font-size: 24px;
    }
    .desc {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.advantage {
  background: #f7f8fa;
  padding: 30px 0;
  .content {
    .item {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
      .tip1 {
        color: #3d3d3d;
        font-size: 36px;
        @media screen and (max-width: 760px) {
          font-size: 28px;
        }
      }
      .tip2 {
        color: #666;
        font-size: 24px;
        @media screen and (max-width: 760px) {
          font-size: 18px;
        }
      }
      &-l,
      &-r {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &-l {
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
  &:hover {
    transform: scale(1.02);
  }
}
</style>
