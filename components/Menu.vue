<template>
    <div class="menuWrapper" :style="{left: left}">
      <a-menu
        mode="inline"
        :openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        @openChange="onOpenChange"
      >
        <a-menu-item key="/" @click="callBack"><nuxt-link to="/">首页</nuxt-link></a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
          </template>
          <template #title><div class="zhedie">产品功能</div></template>
            <a-menu-item :key="item.href" @click="callBack" v-for="item in menus.product"><nuxt-link :to="item.href">{{item.title}}</nuxt-link></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon></template>
          <template #title>
            <div class="zhedie">行业解决方案</div>
          </template>
          <a-menu-item :key="item.href" @click="callBack" v-for="item in menus.solution"><nuxt-link :to="item.href">{{item.title}}</nuxt-link></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/getprice/"  @click="callBack"><nuxt-link to="/getprice/">服务选择</nuxt-link></a-menu-item>
        <a-sub-menu key="sub4">
          <template #icon>
          </template>
          <template #title><div class="zhedie">关于我们</div></template>
          <a-menu-item :key="item.href" @click="callBack" v-for="item in menus.aboutus"><nuxt-link :to="item.href">{{item.title}}</nuxt-link></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/download" @click="callBack"><nuxt-link to="/download">下载企金控</nuxt-link></a-menu-item>
        <a-menu-item key="/aboutus/formapply" @click="callBack"><nuxt-link to="/aboutus/formapply">免费试用</nuxt-link></a-menu-item>
      </a-menu>
    </div>
  </template>
  <script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    name: 'Menu',
    props: {
        left: {
            type: String,
            default: '100vw',
        },
        callBack: {
            type: Function,
            required: true,
        },
        menus: {
            type: Object,
            required: true,
        }
    },
    setup() {
      const state = reactive({
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: [''],
        selectedKeys: [],
      });
      const onOpenChange = (openKeys: string[]) => {
        const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
        if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
          state.openKeys = openKeys;
        } else {
          state.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      };
      return {
        ...toRefs(state),
        onOpenChange,
      };
    },
  });
  </script>
  
  

  <style lang="scss" scoped>.menuWrapper {
    width: 100vw;
    height: calc(100vh - 50px);
    position: fixed;
    left: 100vw;
    top: 80px;
    background: #fff;
    transition: all 0.3s;
    visibility: hidden;
    @media screen and (max-width: 760px) {
        visibility: visible;
    }
    a,.zhedie {
        display: flex;
        align-items: center;
        height: 40px;
        font-size: 18px;
        font-weight: 600;
    }
}
</style>
  
  