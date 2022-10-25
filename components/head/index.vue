<template>
  <div class="header-body">
    <div class="header">
      <div class="leftContainer">
        <nuxt-link to="/"><img src="@/static/image/logo.png" alt="" class="logo" /></nuxt-link>
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
                <nuxt-link to="/product/expenditure"><li>支出管控</li></nuxt-link>
                <nuxt-link to="/product/project"><li>项目管理</li></nuxt-link>
                <nuxt-link to="/product/cashflow"><li>现金流分析</li></nuxt-link>
                <nuxt-link to="/product/wisdom"><li>智慧财务</li></nuxt-link>
                <nuxt-link to="/product/integrate"><li>系统集成</li></nuxt-link>
                <nuxt-link to="/product/payment"><li>聚合支付</li></nuxt-link>
                <nuxt-link to="/product/bidding"><li>招投标管理</li></nuxt-link>
            </div>
          </div>
          <div class="box" :class="{ active: currentPage == 2 }">
              <a class="menuTitle">
                行业解决方案
                <svg-icon icon-class="headarrow" class="arrow"/>
              </a>
              <div class="arrow"></div>
              <div class="dropDown">
                <nuxt-link to="/solution/projectcosts"><li>工程造价咨询&工程安全咨询</li></nuxt-link>
                <nuxt-link to="/solution/realestate"><li>房地产行业解决方案</li></nuxt-link>
                <nuxt-link to="/solution/rural"><li>乡村数字化解决方案</li></nuxt-link>
                <nuxt-link to="/solution/number"><li>数字资产行业解决方案</li></nuxt-link>
                <nuxt-link to="/solution/production"><li>生产制造业解决方案</li></nuxt-link>
                <nuxt-link to="/solution/ecommerce"><li>电商行业解决方案</li></nuxt-link>
                <nuxt-link to="/solution/cosmetology"><li>医疗美容业解决方案</li></nuxt-link>
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
              <nuxt-link to="/aboutus/together/"><li>渠道合作</li></nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="btnGroup">
        <nuxt-link to="/download/"><Button class="down">下载企金控</Button></nuxt-link>
        <nuxt-link to="/aboutus/formapply"><Button class="free">免费试用</Button></nuxt-link>
      </div>
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
    routerTo(path: string) {
      this.$nuxt.$router.push(path);
    },   
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
  .logo {
    width: 122px;
    height: 27px;
  }
  .list {
    margin-left: 48px;
    height: 100%;
    display: flex;
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
        border-radius: 0 0 5px 5px;
        transition: all 0.3s;
        opacity: 0;
        li {
          width: 100%;
          font-size: 14px;
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 30px 0 30px;
          letter-spacing: 1px;
          color: #000;
          &:hover {
            background: #559dff;
            color: #fff;
          }
          border-bottom: 1px solid #f3f1f1;
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
