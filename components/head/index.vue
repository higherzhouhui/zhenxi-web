<template>
  <div class="header-body">
    <nuxt-link to="/">
    <div class="left">
      <svg-icon icon-class="logo-round" class="myLogo"/>
      <span>autofarm</span>
    </div>
    </nuxt-link>
    <div class="right">
      <div class="wallet">
        <svg-icon icon-class="wallet-icon" class="walletIcon"/>
        <span>Wallet</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Head",
  props: {
    active: {
      type: [String, Number],
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
  },
  methods: {
  
  },
  watch: {
  
  },
});
</script>

<style lang="scss" scoped>
.header-body {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  z-index: 999;
  .left{
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
      color: #000;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .wallet {
    padding: 8px 6px;
    border: 1px solid #7660c2;
    border-radius: 6px;
    color: #7660c2;
    font-weight: 500;
    font-size: 18px;
    .walletIcon {
      width: 20px;
      height: 20px;
    }
  }
  .myLogo {
    width: 30px;
    height: 30px;
  }
}
</style>
