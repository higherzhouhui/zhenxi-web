<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="m-b-40 tip1">招投标管理</div>
        <div class="m-b-26 tip2">全面提效率 加强招投标数字化管理</div>
        <div class="m-b-54 tip2">信息全串联 关联合同操作查看便捷</div>
        <span class="f16 btn" v-on:click="showCustomer">立即咨询</span>
      </div>
    </div>
    <!-- 流程 -->
    <div class="w1440 process">
      <div class="item" v-for="(item, index) in processData" :key="index">
        <img :src="item.img" class="img" />
        <span class="name">0{{index + 1}}.{{ item.name }}</span>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <div class="tip1 m-b-30">招投标管理</div>
            <div class="list">
              <div class="list-item tip2 m-b-26">
                标书重点内容分类细化，确保项目规范化落地实施
              </div>
              <div class="list-item tip2 m-b-26">
                招标投标各项支出精确到个人，把握成本预控
              </div>
              <div class="list-item tip2 m-b-26">
                审批状态开标时间清晰设置，杜绝漏标损失
              </div>
            </div>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/product/bidding/item-bg.png')"
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
        { img: require("@/static/image/product/project/icon-01.png"), name: "项目立项" },
        { img: require("@/static/image/product/project/icon-02.png"), name: "资格预审" },
        { img: require("@/static/image/product/project/icon-03.png"), name: "场地预约" },
        { img: require("@/static/image/product/project/icon-04.png"), name: "招标公告及文件" },
        { img: require("@/static/image/product/project/icon-05.png"), name: "澄清答疑" },
        { img: require("@/static/image/product/project/icon-06.png"), name: "评标结果公示" },
        { img: require("@/static/image/product/project/icon-07.png"), name: "中标结果公示" },
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
  background: url(@/static/image/product/bidding/banner-bg.png) no-repeat;
  background-position: center;
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
    }
  }
}
.process {
  display: flex;
  justify-content: space-between;
  margin: 100px auto 148px;
  @media screen and (max-width: 760px) {
    margin: 50px auto 80px;
  }
  background: #fff;
  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    .item {
      flex: 1;
      width: auto!important;;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    width: 140px;
    .name {
      padding-top: 24px;
      color: #3d3d3d;
      font-weight: bold;
      font-size: 24px;
      @media screen and (max-width: 760px) {
        font-size: 18px;
      }
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
      @media  (max-width: 760px) {
        flex-direction: column;
        align-items: flex-start;
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
