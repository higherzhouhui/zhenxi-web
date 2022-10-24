<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="f36 m-b-40 tip1">支出管控</div>
        <div class="f24 m-b-26 tip2">全方位管控 实现费用透明不超支</div>
        <div class="f24 m-b-54 tip2">一站式报销 帮助企业省钱还省事</div>
        <span class="f16 btn" v-on:click="showCustomer">立即咨询</span>
      </div>
    </div>
    <!-- 流程 -->
    <div class="w1440 process">
      <div class="item" v-for="(item, index) in processData" :key="index">
        <img :src="item.img" class="img" />
        <span class="name f24">{{ item.name }}</span>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <div class="f36 m-b-30">支出管控</div>
            <div class="list">
              <div class="list-item f24 m-b-26">
                纸质发票线上导入，告别手动贴发票时代
              </div>
              <div class="list-item f24 m-b-26">
                发票归入票池，机器人智能验真查重，避免财税损失
              </div>
              <div class="list-item f24 m-b-26">
                对预算进行事前、事中、事后管控和分析，穿插全业
                务环节进行费用管控
              </div>
            </div>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/product/expenditure/item-bg.png')"
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
        { img: require("@/static/image/product/expenditure/icon-01.png"), name: "申请" },
        { img: require("@/static/image/product/expenditure/icon-02.png"), name: "差旅" },
        { img: require("@/static/image/product/expenditure/icon-03.png"), name: "票据" },
        { img: require("@/static/image/product/expenditure/icon-04.png"), name: "报销" },
        { img: require("@/static/image/product/expenditure/icon-05.png"), name: "审批" },
        { img: require("@/static/image/product/expenditure/icon-06.png"), name: "财务" },
        { img: require("@/static/image/product/expenditure/icon-07.png"), name: "归档" },
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
  background: url(@/static/image/product/expenditure/banner-bg.png) no-repeat;
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
  .content {
    .item {
      height: 520px;
      display: flex;
      justify-content: space-between;
      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
      }
      img {
        height: 412px;
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
