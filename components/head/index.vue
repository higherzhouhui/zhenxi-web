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
            <a class="menuTitle">产品功能</a>
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
              <a class="menuTitle">行业解决方案</a>
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
          <nuxt-link to="/getprice/"><div class="box" :class="{ active: currentPage == 3 }"><div class="menuTitle">获取报价</div></div></nuxt-link>
          <nuxt-link to="/aboutus"><div class="box" :class="{ active: currentPage == 4 }"><div class="menuTitle">关于我们</div></div></nuxt-link>
        </div>
      </div>

      <div class="btnGroup">
        <a href="https://admin.zqzxtech.com/preview.html#/download" target="_blank"><Button class="down">下载企金控</Button></a>
        <nuxt-link to="/together/joinus"><Button class="free">免费试用</Button></nuxt-link>
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
        if (path.includes('/aboutus')) {
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
      margin-right: 45px;
      cursor: pointer;
      line-height: 1;
      padding: 6px 0 10px 0;
      position: relative;
      transition: 0.3s;
      height: 100%;
      display: flex;
      align-items: center;
      .menuTitle {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        &:hover {
          color: var(--bg);
          &::after {
          content: "";
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--bg);
          left: 50%;
          top: 80%;
          transform: translateX(-50%);
          }
        }
      }
      &.active {
        .menuTitle {
            color: var(--bg);
            &.menuTitle::after {
            content: "";
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 2px;
            background: var(--bg);
            left: 50%;
            top: 80%;
            transform: translateX(-50%);
          }
        }
        .arrow {
          border-top-color: var(--bg);
        }
      }
      &:hover {
        .menuTitle {
          color: var(--bg);
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 2px;
            background: var(--bg);
            left: 50%;
            top: 80%;
            transform: translateX(-50%);
          }
        }
        .dropDown {
          visibility: visible;
        }
        .arrow {
          border-top-color: var(--bg);
        }
      }
      .dropDown {
        position: absolute;
        left: 0;
        top: 80px;
        background: #fff;
        visibility: hidden;
        width: max-content;
        box-shadow: 0px 3px 51px 0px rgba(174,182,206,0.35);
        border-radius: 0 0 3px 3px;
        li {
          width: 100%;
          font-size: 14px;
          height: 30px;
          display: flex;
          align-items: center;
          padding: 0 30px 0 10px;
          letter-spacing: 1px;
          color: #000;
          &:hover {
            background: #559dff;
            color: #fff;
          }
        }
        a {
          color: #000;
        }
      }
      .arrow {
        border: 5px solid transparent;
        border-top-color: #fff;
        margin: 8px 0 0 6px;
      }
    }
  }
}
</style>
