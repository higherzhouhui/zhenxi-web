<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="f36 m-b-40 tip1">现金流分析</div>
        <div class="f24 m-b-26 tip2">多元化统计 建立企业各项收支看板中台</div>
        <div class="f24 m-b-54 tip2">自动化报表 让数据说话赋能企业做决策</div>
        <span class="f16 btn" v-on:click="showCustomer">立即咨询</span>
      </div>
    </div>
    <!-- 流程 -->
    <div class="w1440 process">
      <div class="item" v-for="(item, index) in processData" :key="index">
        <img :src="item.img" class="img" />
        <span class="name f24"><strong>{{ item.name }}</strong></span>
        <span class="name f16">{{ item.desc }}</span>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <div class="f36 m-b-30">现金流分析</div>
            <div class="list">
              <div class="list-item f24 m-b-26">
                降低数据报表整理难度，管理层随时随地查看企业盈利情况
              </div>
              <div class="list-item f24 m-b-26">
                可按部门/项目/场景等多维度展示数据，全方位洞察财务情况
              </div>
              <div class="list-item f24 m-b-26">
                自动生成财务报表，让管理层掌控企业盈亏关键环节，减少决策难度
              </div>
            </div>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/product/cashflow/item-bg.png')"
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
        { img: require("@/static/image/product/cashflow/item-01.png"), name: "全方位", desc: "整合所有费用数据，包括日常费用、差旅费用 项目费用等，让管理者全方位了解费用动态" },
        { img: require("@/static/image/product/cashflow/item-02.png"), name: "多维度", desc: "支持按项目、部门、成本中心、时间、费用类 型等各类维度进行费用归集并形成数据报表" },
        { img: require("@/static/image/product/cashflow/item-03.png"), name: "实时透明", desc: "实时记录每笔费用，所有费用均可通过流程追溯 查看实时费用及预算执行情况" },
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
  background: url(@/static/image/product/cashflow/banner-bg.png) no-repeat;
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
    align-items: center;
    padding: 0 60px;
    img{
      width: 140px;
    }
    .name {
      padding-top: 24px;
      color: #3d3d3d;
      line-height: 24px;
    }
    // &::after {
    //   content: "";
    //   position: absolute;
    //   background: url(@/static/image/product/icon-right.png) no-repeat;
    //   width: 13px;
    //   height: 15px;
    //   display: inline-block;
    //   top: 63px;
    //   right: -50px;
    // }
    // &::before {
    //   content: "";
    //   position: absolute;
    //   background: #dee9ff;
    //   width: 77px;
    //   height: 2px;
    //   display: inline-block;
    //   top: 70px;
    //   right: -77px;
    // }
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
