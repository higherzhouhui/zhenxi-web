<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner" :style="{ backgroundImage:'url('+ bannerData.bgUrl +')' }">
      <div class="w1440 content">
        <div class="m-b-54 tip1">{{bannerData.title}}</div>
        <div class="m-b-26 tip2" v-html="bannerData.desc">
        </div>
      </div>
    </div>
    <!-- 行业常见痛点 -->
    <div class="w1440 trust">
      <div class="h-title">{{trustData.title}}</div>
      <div class="item-box">
        <div class="item" v-for="(item, index) in trustData.list" :key="index">
          <img :src="item.img" class="img" loading="lazy"/>
          <div class="content">
            <div class="title f24 m-b-32">{{ item.title }}</div>
            <div class="list">
              <div
                class="list-item f18 m-b-16"
                v-for="(item1, index1) in item.list"
                :key="index1"
              >
                {{ item1 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企金控的解决方案 -->
    <div class="advantage">
      <div class="h-title f42">企金控的解决方案</div>
      <div class="content" v-for="(item,index) in solutionData" :key="index">
        <div class="item w1440">
          <div class="item-l" v-if="index != 1">
            <div class="f36 m-b-30 tip1">{{item.title}}</div>
            <div class="f24 m-b-50 tip2">
              {{item.desc}}
            </div>
            <span class="f16 btn" v-on:click="showCustomer">点击获取您的专属方案</span>
          </div>
          <div class="item-r">
            <img
              :src="item.img"
              height="405px"
              class="img"
              loading="lazy"
            />
          </div>
          <div class="item-l" v-if="index == 1">
            <div class="f36 m-b-30 tip1">{{item.title}}</div>
            <div class="f24 m-b-50 tip2">
              {{item.desc}}
            </div>
            <span class="f16 btn" v-on:click="showCustomer">点击获取您的专属方案</span>
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
  name: "SolutionPage",
   props: {
    bannerData: {
      type:Object,
    },
    trustData: {
      type:Object,
    },
    solutionData:[]
  },
  data() {
     return{}
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
  background: url(@/static/image/solution/projectcosts/banner-bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  padding: 100px 0;
  @media screen and (max-width: 760px){
    padding: 60px 0;
    .tip1 {
      font-size: 28px!important;
    }
    .tip2 {
      font-size: 22px!important;
    }
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    .tip1 {
      font-size: 36px;
      line-height: 50px;
    }
    .tip2{
      width: 90%;
      font-size: 28px;
      line-height: 36px;
      margin: 0 auto;
    }
  }
}
.trust {
  background: #fff;
  margin: 70px auto;
  .h-title {
    margin-bottom: 110px;
  }
  .item-box {
    display: flex;
    // grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    @media screen and (max-width: 760px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0;
      grid-row-gap: 20px;
    }
    .item {
      height: 280px;
      position: relative;
      text-align: center;
      color: #fff;
      flex: 1;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          180deg,
          rgba(12, 43, 86, 0) 0%,
          #000000 100%
        );
      }
      .img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
      }
      .content {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        padding-top: 40px;
        .title {
          line-height: 24px;
          z-index: 1;
        }
      }
    }
  }
}

.advantage {
  background: #fff;
  padding: 30px 0 0 0;
  .content {
    &:nth-child(odd) {
      background: #fff;
    }
    &:nth-child(even) {
      background: #f7f8fa;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 760px) {
        flex-direction: column;
        padding: 30px 10px;
      }
      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
        line-height: 36px;
      }
      &-l,
      &-r {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        img {
          object-fit: scale-down;
        }
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
      .btn {
        width: 200px;
      }
    }
  }
}

.h-title {
  font-size: 36px;
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
