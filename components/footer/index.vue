<template>
  <div class="footer-body">
    <div class="footer w1440">
      <!-- <img src="@/static/image/logo.png" alt="" class="logo" /> -->
      <div class="content">
        <section>
          <div class="link">
            <ul>
              <nuxt-link to="/product/expenditure"><li>费控报销</li></nuxt-link>
              <nuxt-link to="/product/project"><li>项目管理</li></nuxt-link>
              <nuxt-link to="/product/bidding"><li>招投标管理</li></nuxt-link>
              <nuxt-link to="/product/cashflow"><li>现金流分析</li></nuxt-link>
            </ul>
            <ul>
              <nuxt-link to="/product/wisdom"><li>智慧财务</li></nuxt-link>
              <nuxt-link to="/product/integrate"><li>系统集成</li></nuxt-link>
              <nuxt-link to="/product/payment"><li>聚合支付</li></nuxt-link>
              <nuxt-link to="/getprice/"><li>银企直联获取报价</li></nuxt-link>
            </ul>
            <ul>
              <nuxt-link to="/aboutus"><li>了解振翕科技</li></nuxt-link>
              <li v-on:click="showCustomer">联系我们</li>
              <li><nuxt-link to="/together/">渠道合作</nuxt-link></li>
            </ul>
          </div>
          <div class="cooperation">
            <div class="title">
              <img
                src="@/static/image/icon-cooperation.png"
                alt=""
                class="icon-cooperation"
              />
              <span>商务合作</span>
            </div>
            <ul>
              <li>联系电话：4000278016</li>
              <li>邮箱地址：service@zxtec.online</li>
            </ul>
            <ul>
              <li>联系地址：武汉市光谷鼎创科技园2502-3</li>
            </ul>
          </div>
        </section>
        <aside>
          <div class="qrcode">
            <div class="pic ios"></div>
            <div class="name">IOS版</div>
          </div>
          <div class="qrcode">
            <div class="pic"></div>
            <div class="name">安卓版</div>
          </div>
        </aside>
      </div>
      <div class="copyright">
        Copyright © 2019 - 2020 版权所有©武汉振翕科技有限公司 |
        鄂ICP备19001039号-1
      </div>
    </div>
  </div>
</template>

<script lang="ts">import { EventBus, EventTypes } from '~/util';

export default {
  name: "Head",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showCustomer() {
      EventBus.emit(EventTypes.Customer, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-body {
  background: url(@/static/image/footer.png);
  background-size: 100% 100%;
  position: relative;
  left: 0;
  top: 0;
  height: 500px;
  min-width: 100%;
  z-index: 8;
  .footer {
    margin: 0 auto;
    padding-top: 68px;
    .logo {
      height: 30px;
      margin-bottom: 90px;
    }
    .content {
      height: 300px;
      display: flex;
      justify-content: space-between;
      section {
        ul {
          margin-bottom: 20px;
          li {
            min-width: 175px;
            display: inline-block;
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            cursor: pointer;
            color: #ffffff;
            a {
              color: #ffffff;
            }
            &:hover{
              color: var(--bg);
              a {
                color: var(--bg);
              }
            }
          }
        }
        .cooperation {
          margin-top: 68px;
          font-size: 24px;
          line-height: 24px;
          color: #ffffff;
          cursor:default;
          .title {
            margin-bottom: 54px;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              bottom: -10px;
              display: block;
              width: 135px;
              height: 4px;
              background: #ffffff;
            }
          }
          li {
            min-width: 375px;
            cursor:default;
            &:hover{
              color: #ffffff;
            }
          }
        }
      }
      aside {
        display: flex;
        justify-content: center;
        .qrcode {
          .pic {
            width: 176px;
            height: 176px;
            border-radius: 10px;
            box-sizing: border-box;
            border: 2px solid #ffffff;
            background: url(@/static/image/ios-down.png) no-repeat;
            background-size: 100% 100%;
          }
          .ios {
            background: url(@/static/image/ios-down.png) no-repeat;
            background-size: 100% 100%;
          }
          .name {
            width: 100%;
            text-align: center;
            margin-top: 20px;
            height: 24px;
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            color: #ffffff;
          }
          &:first-child {
            margin-right: 40px;
          }
        }
      }
    }
    .copyright {
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
      color: #ffffff;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
  }
}
</style>
