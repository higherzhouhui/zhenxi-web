<template>
  <div class="header-body">
    <div class="header">
      <div class="leftContainer">
        <nuxt-link to="/"><svg-icon icon-class="head-logo" class="logo"/></nuxt-link>
        <div class="list">
          <nuxt-link to="/">
            <div class="box" :class="{ active: currentPage == 0 }">
              <div class="menuTitle">首页</div>
            </div>
          </nuxt-link>
          <div class="box" :class="{ active: currentPage == 1 }">
            <a class="menuTitle">
              产品功能
              <svg-icon icon-class="headarrow" class="arrow"/>
            </a>
            <div class="arrow"></div>
            <div class="dropDown">
                <nuxt-link :to="item.href" v-for="item in menus.product" :key="item.href"><li>{{item.title}}</li></nuxt-link>
            </div>
          </div>
          <div class="box" :class="{ active: currentPage == 2 }">
              <a class="menuTitle">
                行业解决方案
                <svg-icon icon-class="headarrow" class="arrow"/>
              </a>
              <div class="arrow"></div>
              <div class="dropDown">
                <nuxt-link :to="item.href" v-for="item in menus.solution" :key="item.href"><li>{{item.title}}</li></nuxt-link>
              </div>
          </div>
          <nuxt-link to="/getprice/"><div class="box" :class="{ active: currentPage == 3 }"><div class="menuTitle">服务选择</div></div></nuxt-link>
          <div class="box" :class="{ active: currentPage == 4 }">
            <a class="menuTitle">
              关于我们
              <svg-icon icon-class="headarrow" class="arrow"/>
            </a>
            <div class="dropDown">
              <nuxt-link to="/aboutus/aboutus"><li>公司介绍</li></nuxt-link>
              <nuxt-link to="/aboutus/together/"><li style="border-bottom: none;">渠道合作</li></nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="btnGroup">
        <nuxt-link to="/download/"><Button class="down">下载企金控</Button></nuxt-link>
        <nuxt-link to="/aboutus/formapply"><Button class="free">免费试用</Button></nuxt-link>
      </div>
      <div class="menuIconWraper" @click="handleMenuClick(!showMenu)">
        <svg-icon icon-class="head-menu" :class="showMenu ? 'menuIcon active' : 'menuIcon'"/>
      </div>
      <Menu :left="showMenu ? '0' : '100vw'" :callBack="() => handleMenuClick(false)" :menus="menus"/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default  Vue.extend({
  name: "Head",
  components: {
  },
  props: {
    active: {
      type: [String, Number],
    },
  },
  data() {
    return {
      currentPage: 0 as any,
      showMenu: false,
      menus: {
        product: [
          {href: '/product/expenditure', title: '支出管控'},
          {href: '/product/project', title: '项目管理'},
          {href: '/product/cashflow', title: '现金流分析'},
          {href: '/product/wisdom', title: '智慧财务'},
          {href: '/product/integrate', title: '系统集成'},
          {href: '/product/payment', title: '聚合支付'},
          {href: '/product/bidding', title: '招投标管理'},
        ],
        solution: [
          {href: '/solution/projectcosts', title: '工程造价咨询&工程安全咨询'},
          {href: '/solution/realestate', title: '房地产行业解决方案'},
          {href: '/solution/rural', title: '乡村数字化解决方案'},
          {href: '/solution/number', title: '数字资产行业的解决方案'},
          {href: '/solution/production', title: '生产制造业解决方案'},
          {href: '/solution/ecommerce', title: '电商行业解决方案'},
          {href: '/solution/cosmetology', title: '医疗美容业解决方案'},
        ],
        aboutus: [
          {href: '/aboutus/aboutus', title: '公司介绍'},
          {href: '/aboutus/together', title: '渠道合作'},
        ],
      },
    };
  },
  mounted() {
    const path = location.pathname;
    this.judgeCurrentPage(path);
  },
  methods: {
    judgeCurrentPage(path: string) {
        this.currentPage = NaN;
        if (path === '/') {
          this.currentPage = 0;
        }
        if (path.includes('/product')) {
          this.currentPage = 1;
        }
        if (path.includes('/solution')) {
          this.currentPage = 2;
        }
        if (path.includes('/getprice')) {
          this.currentPage = 3;
        }
        if (path.includes('/aboutus/aboutus')) {
          this.currentPage = 4;
        }
    },
    handleMenuClick(flag: boolean) {
      this.showMenu = flag;
    }
  },
  watch: {
    $route (to, _from) {
        const path = to.path;
        this.judgeCurrentPage(path);
    }
  },
});
</script>

<style lang="scss" scoped>
.header-body {
  background: url(@/static/image/nav-bg.png) no-repeat;
  background-size: 100% 100%;
  position: sticky;
  left: 0;
  top: 0;
  height: 80px;
  z-index: 99;
  box-sizing: border-box;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 5%);
  .leftContainer {
    display: flex;
    align-items: center;
  }
  .btnGroup {
    display: flex;
    align-items: center;
    @media screen and (max-width: 760px) {
      display: none;
    }
    button {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-right: 21px;
    }
    .down {
      background: var(--buttonbg);
      color: #fff;
      &:hover {
        background: var(--buttonHover);
      }
    }
    .free {
      color: var(--buttonbg);
      background: #fff;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
  .menuIconWraper {
    display: flex;
    align-items: center;
    visibility: hidden;
    @media screen and (max-width: 760px) {
      visibility: visible;
    }
    .menuIcon {
      width: 28px;
      height: 25px;
      fill: rgb(255, 255, 255);
    }
    .active {
      fill: var(--bg);
    }
  }
}
.header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 5%);
  @media (max-width: 1440px) {
    width: 100%;
    padding: 0 60px;
  }
  @media (max-width: 760px) {
    width: 100%;
    padding: 0 30px;
  }
  .logo {
    width: 122px;
    height: 27px;
  }
  .list {
    margin-left: 48px;
    height: 100%;
    display: flex;
    @media screen and (max-width: 760px) {
      display: none;
    }
    .box {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      line-height: 1;
      padding: 6px 0 10px 0;
      position: relative;
      transition: 0.3s;
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 45px;
      @media (max-width: 1200px) {
        margin-right: 20px;
      }
      .menuTitle {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          width: 0%;
          height: 2px;
          background: var(--bg);
          left: 50%;
          top: 80%;
          transform: translateX(-50%);
          transition: all 0.2s;
        }
      }
      &.active {
        .menuTitle {
            color: var(--bg);
            &.menuTitle::after {
              width: 100%;
          }
        }
        .arrow {
          fill: var(--bg);
          transform: rotate(180deg);
        }
      }
      &:hover {
        .menuTitle {
          color: var(--bg);
          &::after {
            width: 100%;
          }
        }
        .dropDown {
          visibility: visible;
          opacity: 1;
        }
        .arrow {
          fill: var(--bg);
          transform: rotate(180deg);
        }
      }
      .dropDown {
        position: absolute;
        left: 0;
        top: 80px;
        background: #fff;
        visibility: hidden;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        min-width: 150px;
        box-shadow: 0px 3px 51px 0px rgba(174,182,206,0.35);
        border-radius: 0 0 3px 3px;
        transition: all 0.3s;
        opacity: 0;
        overflow: hidden;
        li {
          width: 100%;
          font-size: 14px;
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 30px 0 30px;
          letter-spacing: 1px;
          color: #000;
          // border-bottom: 1px solid #f3f1f1;
          &:hover {
            background: #559dff;
            color: #fff;
          }
        }
      }
      .arrow {
        width: 12px;
        height: 12px;
        fill: #fff;
        transition: transform 0.2s;
        margin-left: 5px;
      }
    }
  }
}
</style>
