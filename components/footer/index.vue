<template>
  <div class="footerWraper">
    <div class="wrap">
      <img src="@/static/image/footer.png" class="bg" loading="lazy"/>
      <div class="footer w1440">
        <div class="content">
          <section>
            <div class="link">
                <nuxt-link to="/product/expenditure"><li>支出管控</li></nuxt-link>
                <nuxt-link to="/product/project"><li>项目管理</li></nuxt-link>
                <nuxt-link to="/product/bidding"><li>招投标管理</li></nuxt-link>
                <nuxt-link to="/product/cashflow"><li>现金流分析</li></nuxt-link>
                <nuxt-link to="/product/wisdom"><li>智慧财务</li></nuxt-link>
                <nuxt-link to="/product/integrate"><li>系统集成</li></nuxt-link>
                <nuxt-link to="/product/payment"><li>聚合支付</li></nuxt-link>
                <nuxt-link to="/getprice/"><li>银企直联获取报价</li></nuxt-link>
                <nuxt-link to="/aboutus/aboutus"><li>了解振翕科技</li></nuxt-link>
                <li v-on:click="showCustomer">联系我们</li>
                <nuxt-link to="/aboutus/together"><li class="clear">渠道合作</li></nuxt-link>
            </div>
            <div class="cooperation">
              <div class="title">
                <img
                  src="@/static/image/icon-cooperation.png"
                  alt=""
                  class="icon-cooperation"
                  loading="lazy"
                />
                <span>商务合作</span>
              </div>
              <ul>
                <li>联系电话：4000278016</li>
                <li>邮箱地址：service@zxtec.online</li>
                <li>联系地址：武汉市光谷鼎创科技园2502-3</li>
              </ul>
              <ul>
                <!-- <li>联系地址：武汉市光谷鼎创科技园2502-3</li> -->
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

      </div>
    </div>
    <div class="copyright">
      Copyright © 2019 - 2020 版权所有©武汉振翕科技有限公司 |
      鄂ICP备19001039号-1
    </div>
  </div>
</template>

<script lang="ts">
import { EventBus, EventTypes } from '~/util';

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
.footerWraper {
  position: relative;
  z-index: 8;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -1;
  }
  .footer {
    .content {
      padding: 50px 0 20px 0;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
      section {
        li {
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
            cursor: pointer;
            color: #ffffff;
            float: left;
            min-width: 200px;
            @media screen and (max-width: 760px) {
              min-width: 140px;
            }
            margin-bottom: 18px;
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
        .link:after { content:"."; display:block; height:0; visibility:hidden; clear:both; }
        .cooperation {
          margin-top: 20px;
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
              bottom: -15px;
              display: block;
              width: 135px;
              height: 3px;
              background: #ffffff;
            }
          }
          li {
            margin-right: 60px;
            cursor: text;
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
            width: 140px;
            height: 140px;
            border-radius: 10px;
            box-sizing: border-box;
            border: 2px solid #ffffff;
            background: url(@/static/image/ios-down.png) no-repeat;
            background-size: 95% 95%;
            background-position: center;
          }
          .ios {
            background: url(@/static/image/ios-down.png) no-repeat;
            background-size: 95% 95%;
            background-position: center;
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
  }
  .copyright {
      font-size: 16px;
      font-weight: normal;
      line-height: 40px;
      color: #ffffff;
      width: 100%;
      text-align: center;
      background: #000000;
    }
}
</style>
