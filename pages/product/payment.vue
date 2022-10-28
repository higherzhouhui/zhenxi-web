<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="f36 m-b-40 tip1">聚合支付</div>
        <div class="f24 m-b-26 tip2">敏捷式支付 多种付款方式免切换</div>
        <div class="f24 m-b-54 tip2">核算效率高 强化支付及管理能力</div>
        <span class="f16 btn" v-on:click="showCustomer">立即咨询</span>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <div class="f36 m-b-30">聚合支付</div>
            <div class="list">
              <div class="list-item f24 m-b-26">
                满足企业小额支付需求，灵活适应各种业务场景
              </div>
              <div class="list-item f24 m-b-26">
                打通支付宝、微信等支付通道，秒速打款不出错
              </div>
              <div class="list-item f24 m-b-26">
                对接收银POS机，满足多级门店管理及分帐需求
              </div>
              <div class="list-item f24 m-b-26">
                配备企业标准接口，自动获取识别银行流水数据
              </div>
              <div class="list-item f24 m-b-26">
                流水识别自动归账，轻松查看企业资金稳健度
              </div>
            </div>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/product/payment/item-bg.png')"
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
        { img: require("@/static/image/product/project/icon-01.png"), name: "项目信息录入" },
        { img: require("@/static/image/product/project/icon-02.png"), name: "添加成员分配任务" },
        { img: require("@/static/image/product/project/icon-03.png"), name: "成果报告" },
        { img: require("@/static/image/product/project/icon-04.png"), name: "申请盖章" },
        { img: require("@/static/image/product/project/icon-05.png"), name: "资料归档" },
        { img: require("@/static/image/product/project/icon-06.png"), name: "项目结项" },
        { img: require("@/static/image/product/project/icon-07.png"), name: "项目结算" },
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
  background: url(@/static/image/product/payment/banner-bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
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
  background: #f7f8fa;
  padding: 30px 0;
  .content {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 760px) {
        flex-direction: column;
      }
      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
      }
      &-l,
      &-r {
        height: 100%;
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
