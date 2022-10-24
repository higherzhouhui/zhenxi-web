<template>
  <div>
    <div class="mask" v-if="showMask" @click="clickCallBack"></div>
    <div class="toolWrapper">
      <div class="vxContainer">
        <img class="tool-img" v-if="!showCustomer" src="@/static/image/tool/contact.png" alt="contact" v-on:click="setCustomerShow(!showCustomer)"/>
        <img class="tool-img" v-if="showCustomer" src="@/static/image/tool/contact-h.png" alt="contact" v-on:click="setCustomerShow(!showCustomer)"/>
        <div class="vxPic contact" :style="{visibility: showCustomer ? 'visible' : 'hidden', opacity: showCustomer ? 1 : 0}" id="customer">
          <div class="contact-title">微信扫码联系专业顾问</div>
          <img class="contact-img" src="@/static/image/qywx.png" alt="">
          <div class="contact-welTel m-t-8">欢迎拨打电话咨询</div>
          <div class="contact-telNumber m-t-8">400-027-8016</div>
          <div class="contact-address">公司联系地址</div>
          <div class="contact-address">武汉市光谷鼎创科技园2502-3</div>
          <div class="contact-address">邮箱地址</div>
          <div class="contact-address m-b-12">service@zxtec.online</div>
        </div>
      </div>
      <div class="division"></div>
      <div class="vxContainer">
        <img class="img-normal tool-img" src="@/static/image/tool/tel.png" alt="contact" />
        <img class="img-hover tool-img" src="@/static/image/tool/tel-h.png" alt="contact" />
        <div class="vxPic tel">
          <div class="welTel">欢迎拨打电话咨询</div>
          <div class="telNumber">400-027-8016</div>
        </div>
      </div>
      <div class="division"></div>
      <div class="vxContainer">
        <img class="img-normal tool-img" src="@/static/image/tool/vx.png" alt="contact" />
        <img class="img-hover tool-img" src="@/static/image/tool/vx-h.png" alt="contact" />
        <div class="vxPic myvx">
          <div class="f16 m-t-8 m-b-8">扫码下载企金控APP</div>
          <img src="@/static/image/ios-down.png" alt="">
        </div>
      </div>
      <div class="division"></div>
      <div class="vxContainer">
        <img class="img-normal tool-img" src="@/static/image/tool/top.png" @click="scrollTop" alt="contact" />
        <img class="img-hover tool-img" src="@/static/image/tool/top-h.png" @click="scrollTop" alt="contact" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

import { EventBus, EventTypes } from '~/util';

export default Vue.extend({
  name: "Tool",
  components: {
  },
  props: {
   
  },
  data() {
    return {
      showCustomer: false,
      showMask: false,
    };
  },
  mounted() {
    EventBus.addListener(EventTypes.Customer, this.setCustomerShow);
  },
  methods: {
   scrollTop() {
      let scrollTop = document.scrollingElement?.scrollTop || 0;
      const timer = setInterval(() => {
        scrollTop -= 100;
        if (scrollTop < 0) {
          clearInterval(timer);
          return;
        }
        window.scrollTo(0,scrollTop);
      }, 20);
   },
   setCustomerShow(flag: boolean) {
      this.showCustomer = flag;
      this.showMask = flag;
   },
   clickCallBack() {
      this.showCustomer = false;
      this.showMask =false;
   },
  },

  watch: {
 
  },
});
</script>

<style lang="scss" scoped>
.toolWrapper {
  width: 50px;
  height: 300px;
  background: #fff;
  border-radius: 35px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0 20px 12px;
  z-index: 66;
  box-shadow: 0px 3px 51px 0px rgba(174,182,206,0.35);
  @media (max-width: 1440px) {
    right: 10px;
  }
  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
  }
  .division {
    width: 26px;
    height: 2px;
    background: #E8E7E8;
  }
  .tool-img {
    cursor: pointer;
  }
  .vxContainer {
    position: relative;
    .img-hover {
      display: none;
    }
    &:hover {
      .myvx {
        visibility: visible;
        opacity: 1;
      }
      .tel {
        visibility: visible;
        opacity: 1;
      }
      .img-hover {
        display: block;
      }
      .img-normal {
        display: none;
      }
      .contact {
        visibility: visible;
        opacity: 1;
      }
    }
    .vxPic {
      width: 160px;
      position: absolute;
      top: 50%;
      left: -40px;
      transform: translate(-100%,-50%);
      padding: 3px;
      border-radius: 4px;
      visibility: hidden;
      background:#fff;
      font-size: 26px;
      font-weight: bold;
      transition: all 0.5s;
      opacity: 0;
      box-shadow: 0px 3px 51px 0px rgba(174,182,206,0.35);
      &::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translate(0, -50%);
        border: 10px solid transparent;
        border-left-color: #fff;
        box-shadow: 0px 3px 51px 0px rgba(174,182,206,0.35);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tel {
      width: 220px;
      border: none;
      text-align: center;
      padding: 0;
      height: 70px;
      .welTel {
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
      }
      .telNumber {
        font-size: 24px;
        color: #035BEC;
        margin-top: 8px;
      }
    }
    .contact {
      width: 240px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;

      .contact-title {
        margin: 12px 0;
        font-weight: bold;
      }
      .contact-img {
        width: 150px;
        height: 150px;
        object-fit: fill;
      }
      .contact-wallet {
        margin-top: 8px;
      }
      .contact-address {
        margin-top: 8px;
      }
      .contact-telNumber {
        color: var(--bg);
      }
    }
  }
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 9;
}
</style>
