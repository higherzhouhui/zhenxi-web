<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="content">
        <img src="@/static/image/home/banner-title.png" alt="" class="name" />
        <div class="title">洞察业务数据 驱动企业增长</div>
        <div class="button" v-on:click="showCustomer">获取您的专属方案</div>
        <div class="des">提供多行业场景下的智能业财一体化解决方案</div>
      </div>
    </div>
    <!-- 问答 -->
    <div class="w1440">
      <div class="home-QA">
        <div class="qus h-title f36">
          后疫情时代，企业如何跨过寒冬，保持冷静增长？
        </div>
        <div class="anwser f36">答：降本增效</div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="w1440 solution">
      <div class="item" v-for="(item, index) in solutionData" :key="index">
        <img :src="item.img" class="img" />
        <div class="item-r">
          <div class="title f20 m-b-10">{{ item.title }}</div>
          <div class="desc f14 p-b-16">{{ item.desc }}</div>
          <div class="list m-b-36 m-t-20">
            <div
              class="list-item f16"
              v-for="(item1, index1) in item.list"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </div>
          <div class="linkName f18 m-b-20">{{ item.linkName }}</div>
          <div class="receive-btn f16" v-on:click="showCustomer">领取您的解决方案</div>
        </div>
      </div>
    </div>
    <!-- 我们能为你做什么 -->
    <div class="banner2">
      <div class="w1440">
        <div class="content">
          <div class="f36 p1 m-b-62">我们能为你做什么？</div>
          <div class="f24 p2 m-b-40">企金控助力企业全面数字化转型</div>
          <div class="f24 p3 m-b-40">
            完成业财一体化让账上每一笔钱都花得清楚值当
          </div>
          <div class="f32 p4">帮你管住钱，留住人</div>
        </div>
      </div>
    </div>
    <!-- 2大优势 -->
    <div class="w1440 advantage">
      <div class="h-title f36">2大重磅优势解决老板核心顾虑</div>
      <div class="content">
        <div class="item">
          <div class="item-l">
            <div class="f36 m-b-40 tip1">一图看全局</div>
            <div class="f24 m-b-26 tip2">企业现金流收支情况一图全盘掌握</div>
            <div class="f24 m-b-54 tip2">
              每天花1分钟打开APP查看企业完整营收状况
            </div>
            <nuxt-link to="/aboutus/formapply"><span class="f16 btn">立即体验</span></nuxt-link>
          </div>
          <div class="item-r">
            <img
              :src="require('@/static/image/home/advantage-01.png')"
              class="img"
            />
          </div>
        </div>
        <div class="item">
          <div class="item-l">
            <img
              :src="require('@/static/image/home/advantage-02.png')"
              class="img"
            />
          </div>
          <div class="item-r" style="margin-left: 18px;">
            <div class="f36 m-b-40 tip1">三表看优化</div>
            <div class="f24 m-b-24 tip2">
              成本、业务、人效三表聚焦企业经营重点帮你轻松找到高成
            </div>
            <div class="f24 m-b-54 tip2">
              本支出项、锁定赚钱项目、筛选优秀员工
            </div>
            <nuxt-link to="/aboutus/formapply"><span class="f16 btn">立即体验</span></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 7大功能点 -->
    <div class="function">
      <div class="h-title f36">7大细分功能点让成本管控方案落地</div>
      <div class="content">
        <div class="w1440 box">
          <div class="menu">
            <div class="">
              <dl v-for="(item, index) in functionData" :key="index" v-on:click="setCurrent(index)" :class="`seven-menu-contain ${index == current ? 'active' : ''}`">
                <dt class="icon"><img :src="item.normalIcon" alt=""></dt>
                <dt class="hovericon"><img :src="item.hoverIcon" alt=""></dt>
                <dd class="f24 title">{{ item.title }}</dd>
                <dt class="right-n-icon"><img src="@/static/image/home/seven-normal.png" alt=""></dt>
                <dt class="right-h-icon"><img src="@/static/image/home/seven-hover.png" alt=""></dt>
              </dl>
            </div>
          </div>
          <div class="detail">
            <div class="f36 m-b-30">{{functionData[current].title}}</div>
            <div class="f24 m-b-30">{{functionData[current].desc}}</div>
            <div class="list m-b-36 m-t-20">
              <div
                class="list-item f22 m-b-26"
                v-for="(item1, index1) in functionData[current].list"
                :key="index1"
              >
                {{ item1 }}
              </div>
            </div>
            <nuxt-link to="/aboutus/formapply"><span class="f16 btn m-t-20">立即体验</span></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 多行业解决方案 -->
    <div class="w1440 industry">
      <div class="h-title f36">企金控为多行业提供业财一体化专业解决方案</div>
      <div class="solve-container">
        <div class="img-wrapper">
          <img src="@/static/image/home/solve-1.png" alt="" />
          <nuxt-link to="/solution/number">
            <div class="mask">
            <img src="@/static/image/home/mask-shuzi.png" />
            <div>数字资产行业</div>
          </div></nuxt-link>
        </div>
        <div class="img-wrapper">
          <img src="@/static/image/home/solve-2.png" alt="" />
          <nuxt-link to="/solution/production">
            <div class="mask">
              <img src="@/static/image/home/mask-sczz.png" />
              <div>生产制造业</div>
            </div>
          </nuxt-link>
        </div>
        <div class="img-wrapper">
          <img src="@/static/image/home/solve-3.png" alt="" />
          <nuxt-link to="/solution/ecommerce">
            <div class="mask">
              <img src="@/static/image/home/mask-ds.png" />
              <div>电商行业</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- 为什么我们值得信赖 -->
    <div class="w1440 trust">
      <div class="h-title f36">为什么我们值得信赖？</div>
      <div class="item-box">
        <div class="item" v-for="(item, index) in trustData" :key="index">
          <img :src="item.img" class="img" />
          <div class="title f32 m-b-48">{{ item.title }}</div>
          <div class="list">
            <div
              class="list-item f22 m-b-30"
              v-for="(item1, index1) in item.list"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 证书 -->
    <div class="w1440 certificate">
      <div class="box1">
        <img
          :src="require('@/static/image/home/certificate-01.png')"
          class="img"
        />
        <img
          :src="require('@/static/image/home/certificate-02.png')"
          class="img"
        />
      </div>
      <div class="box2">
        <img
          :src="require('@/static/image/home/certificate-03.png')"
          class="img"
        />
      </div>
      <div class="box3">
        <img
          :src="require('@/static/image/home/certificate-04.png')"
          class="img"
        />
        <img
          :src="require('@/static/image/home/certificate-05.png')"
          class="img"
        />
      </div>
      <div class="box4">
        <img
          :src="require('@/static/image/home/certificate-06.png')"
          class="img"
        />
      </div>
    </div>
    <!-- 合作客户 -->
    <div class="w1440 partner">
      <div class="h-title f36">合作客户</div>
      <div class="item-box">
        <img :src="require('@/static/image/home/p-pf.png')" class="img" />
        <img :src="require('@/static/image/home/p-xy.png')" class="img" />
        <img :src="require('@/static/image/home/p-zg.png')" class="img" />
        <img :src="require('@/static/image/home/p-gs.png')" class="img" />
        <img :src="require('@/static/image/home/p-aly.png')" class="img" />
        <img :src="require('@/static/image/home/p-hwy.png')" class="img" />
        <img :src="require('@/static/image/home/p-txy.png')" class="img" />
        <img :src="require('@/static/image/home/p-jd.png')" class="img" />
        <img :src="require('@/static/image/home/p-al.png')" class="img" />
        <img :src="require('@/static/image/home/p-xc.png')" class="img" />
        <img :src="require('@/static/image/home/p-ny.png')" class="img" />
        <img :src="require('@/static/image/home/p-dl.png')" class="img" />
      </div>
    </div>
    <div class="banner3">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus, EventTypes } from "~/util";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      current: 2,
      solutionData: [
        {
          img: require("@/static/image/home/solution-01.png"),
          title: "企业老板",
          desc: "行业环境不好，开源节流迫在眉睫",
          list: [
            "降本增效不知从哪下手？",
            "项目太多盈收状况模糊？",
            "钱款去向不明难以掌控？",
            "业财务数据割裂决策难？",
          ],
          linkName: "支出管控就找企金控，帮助企业更成功！",
        },
        {
          img: require("@/static/image/home/solution-02.png"),
          title: "财务主管",
          desc: "日常工作繁琐重要，一旦出错黑锅难背！",
          list: [
            "报销票据太多统计复杂？",
            "发票真伪难分辨风险高？",
            "跟老板报告数据总出岔？",
            "每到封账汇总手忙脚乱？",
          ],
          linkName: "财务减负就找企金控，帮助企业更成功！",
        },
        {
          img: require("@/static/image/home/solution-03.png"),
          title: "行政主管",
          desc: "对接员工供应商财务老板，职场“中间人”太难当！",
          list: [
            "员工多需求多审批麻烦？",
            "人效考核难与业绩挂钩？",
            "合同资质印章多难存放？",
            "每月考勤报表统计复杂？",
          ],
          linkName: "人效管理就找企金控，帮助企业更成功！",
        },
        {
          img: require("@/static/image/home/solution-04.png"),
          title: "业务主管",
          desc: "垫付报销、核算项目、提升业绩都是痛！",
          list: [
            "员工垫付资金大成本高？",
            "报销周期长、流程繁杂？",
            "员工业绩不均太难管理？",
            "项目多收付不清难核算？",
          ],
          linkName: "项目管理就找企金控，帮助企业更成功！",
        },
      ],
      trustData: [
        {
          img: require("@/static/image/home/trust-01.png"),
          title: "强大的交付能力",
          list: [
            "精耕数字化技术行业多年",
            "专业的独立研发团队",
            "敏捷化处理问题",
          ],
        },
        {
          img: require("@/static/image/home/trust-02.png"),
          title: "靠谱的服务支撑",
          list: [
            "资深的研发技术顾问-专业解决您的难题",
            "专属的客户成功经理-持续跟进您的需求",
            "专属的客户服务经理-及时相应您的疑问",
          ],
        },
        {
          img: require("@/static/image/home/trust-03.png"),
          title: "安全的信息保障",
          list: [
            "信息安全等级保护（三级）",
            "顶尖水平的云数据中心",
            "敏感信息复核加密储存",
          ],
        },
        {
          img: require("@/static/image/home/trust-04.png"),
          title: "成熟的行业经验",
          list: [
            "服务客户遍布多个行业",
            "行业经验复用帮企业更快发展",
            "定制化功能满足不同行业需求",
          ],
        },
      ],
      functionData: [
        {
          title: "支出管控",
          desc: "从源头管控，费用流通高效不超支",
          list: [
            "预先设置报销规则，将审批流程真正规范化",
            "出差、采购、接待费用企业账户一键支付，无需员工垫付",
            "各项费用标准提前设定，确保每一笔支出合规透明不超标",
          ],
          normalIcon: require("@/static/image/home/seven-0.png"),
          hoverIcon: require("@/static/image/home/seven-h0.png"),
        },
        {
          title: "项目管理",
          desc: "业务可视化，项目全生命周期管理",
          list: [
            "重要合同全部线上归档，权限设置保护企业隐私",
            "多元化项目结算方式，满足不同类型项目结算需求",
            "实时呈现多维度项目报表，从细节把控成本预算",
          ],
          normalIcon: require("@/static/image/home/seven-1.png"),
          hoverIcon: require("@/static/image/home/seven-h1.png"),
        },
        {
          title: "现金流分析",
          desc: "多元化统计，建立企业各项收支看板中台",
          list: [
            "系统录入数据，降低人工统计误差提升效率",
            "各项收支图表化展示，成本管控缺口轻松盘查",
            "支出明细自动生成报表，数据赋能更好做决策",
          ],
          normalIcon: require("@/static/image/home/seven-2.png"),
          hoverIcon: require("@/static/image/home/seven-h2.png"),
        },
        {
          title: "智慧财务",
          desc: "线上财务室，审批核算自动化处理",
          list: [
            "凭证自动生成，大幅缩短财务审批工作量",
            "智能出纳管理，一键批量付款效率成倍提升",
            "业务核算多维度统计，企业支出管理更规范",
          ],
          normalIcon: require("@/static/image/home/seven-3.png"),
          hoverIcon: require("@/static/image/home/seven-h3.png"),
        },
        {
          title: "系统集成",
          desc: "集合大数据，助力企业生态一体化完善",
          list: [
            "直连管理软件，完成企业内部“大数据”闭环",
            "全功能API接口开放，满足企业个性化业务需求",
          ],
          normalIcon: require("@/static/image/home/seven-4.png"),
          hoverIcon: require("@/static/image/home/seven-h4.png"),
        },
        {
          title: "聚合支付",
          desc: "敏捷式支付，多种付款方式免切换",
          list: [
            "打通支付宝、微信等支付通道，秒速打款不出错",
            "配备企业标准接口，自动获取识别银行流水数据",
            "流水识别自动归账，轻松查看企业资金稳健度",
          ],
          normalIcon: require("@/static/image/home/seven-5.png"),
          hoverIcon: require("@/static/image/home/seven-h5.png"),
        },
        {
          title: "招投标管理",
          desc: "全面提效率，加强招投标数字化管理",
          list: [
            "标书重点内容分类细化，确保项目规范化落地实施",
            "招标投标各项支出精确到个人，把握成本预控",
            "审批状态开标时间清晰设置，杜绝漏标损失",
          ],
          normalIcon: require("@/static/image/home/seven-6.png"),
          hoverIcon: require("@/static/image/home/seven-h6.png"),
        },
      ],
    };
  },
  methods: {
    showCustomer() {
      EventBus.emit(EventTypes.Customer, true);
    },
    setCurrent(index: number) {
      this.current = index;
    },
  },
});
</script>
<style lang="scss" scoped>
.banner {
  height: 828px;
  background: url(@/static/image/home/banner1-bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 220px;
    .title {
      font-size: 32px;
      margin-top: 40px;
    }
    .button {
      margin-top: 70px;
      padding: 17px 30px;
      border-radius: 4px;
      border: 1px solid #fff;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      &:hover {
        border: 1px solid var(--buttonbg);
        background: var(--buttonbg);
      }
    }
    .des {
      margin-top: 40px;
      font-size: 24px;
      line-height: 36px;
      position: relative;
      &::before,
      &::after {
        content: "";
        display: inline-block;
        width: 50px;
        height: 2px;
        background: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -70px;
      }
      &::after {
        left: unset;
        right: -70px;
      }
    }
  }
}
.home-QA {
  height: 290px;
  background: #fafafa;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -88px;
  margin-bottom: 68px;
  .anwser {
    font-weight: normal;
    line-height: 48px;
    color: #559dff;
  }
}
.solution {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 70px;
  .item {
    height: 290px;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    .img {
      width: 300px;
      object-fit: cover;
      @media (max-width: 1440px) {
        width: 200px;
      }
    }
    .item-r {
      flex: 1;
      padding: 20px 0 20px 20px;
      @media (max-width: 1440px) {
        padding: 10px 0 10px 10px;
      }
      .title {
        height: 20px;
        line-height: 20px;
        color: #3d3d3d;
      }
      .desc {
        line-height: 14px;
        color: #999999;
        border-bottom: 1px solid #f5f5f5;
      }
      .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 17px;
        @media (max-width: 1200px) {
          margin-top: 0 !important;
        }
        &-item {
          line-height: 15px;
          font-size: 15px;
          color: #3d3d3d;
          position: relative;
          padding-left: 16px;
          display: block;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #d8d8d8;
          }
        }
      }
      .linkName {
        line-height: 18px;
        color: var(--bg);
      }
      .receive-btn {
        display: inline-block;
        line-height: 14px;
        color: var(--bg);
        padding: 16px 24px;
        border: 1px solid var(--bg);
        cursor: pointer;
        &:hover {
          background: var(--buttonbg);
          color: #fff;
        }
      }
    }
  }
}
.banner2 {
  height: 640px;
  background: url(@/static/image/home/banner2-bg.png) no-repeat;
  background-position: center;
  background-color: rgba(38, 44, 74, 1);
  //  background-size: cover;
  margin-bottom: 70px;
  position: relative;
  .content {
    color: #fff;
    position: absolute;
    margin: 185px 0 0 74px;
    .p1 {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -36px;
        display: block;
        width: 120px;
        height: 8px;
        background: #fff;
        left: 0;
      }
    }
  }
}
.advantage {
  .content {
    .item {
      height: 520px;
      display: flex;
      justify-content: space-between;

      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
      }

      &-l,
      &-r {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
.function {
  margin: 70px 0;
  position: relative;
  .h-title {
    margin-bottom: 110px;
  }
  .content {
    height: 771px;
    background: url(@/static/image/home/function-bg.png) no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    .box {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .menu {
      width: 498px;
      height: 744px;
      background: url(@/static/image/home/menu-bg.png) no-repeat;
      background-position: bottom left;
      padding: 85px 45px 45px 45px;
      @media (max-width: 1440px) {
        width: 400px;
        padding: 85px 0px 45px 45px;

      }
      .seven-menu-contain {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0 70px;
        justify-content: space-between;
        cursor: pointer;
        &:hover {
          background: #559dff;
          color: #fff;
        .icon {
          display: none;
        }
        .hovericon {
          display: block;
        }
        .right-h-icon {
          display: block;
        }
        .right-n-icon {
          display: none;
        }
        }
      }
      dd {
        padding: 24px;
        text-align: left;
        flex: 2;
      }
      .active {
        background: #559dff;
        color: #fff;
        .icon {
          display: none;
        }
        .hovericon {
          display: block;
        }
        .right-h-icon {
          display: block;
        }
        .right-n-icon {
          display: none;
        }
      }
      .icon, .hovericon {
        width: 28px;
        height: 28px;
        object-fit: fill;
        display: none;
      }
      .icon {
        display: block;
      }
      .right-n-icon, .right-h-icon {
        display: none;
      }
      .right-n-icon {
        display: block;
      }
    }
    .detail {
      flex: 1;
      margin: 155px 0 0 40px;
      .list-item {
        position: relative;
        padding-left: 26px;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 8px;
          left: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d8d8d8;
        }
      }
    }
  }
}
.trust {
  background: url(@/static/image/home/trust-bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 48px;
  .h-title {
    margin-top: 70px;
    margin-bottom: 118px;
  }
  .item-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
      
    }
    .item {
      height: 583px;
      background: #fff;
      box-shadow: 0px 3px 51px 0px rgba(158, 173, 186, 0.35);
      position: relative;
      text-align: center;
      .img {
        width: 190px;
        height: 207px;
        margin: -67px auto 24px;
      }
      .title {
        line-height: 36px;
        color: #3d3d3d;
      }
      .list {
        padding: 0 40px;
        .list-item {
          line-height: 36px;
          color: #3d3d3d;
          text-align: left;
          position: relative;
          padding-left: 26px;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 14px;
            left: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #d8d8d8;
          }
        }
      }
    }
  }
}
.certificate {
  display: grid;
  justify-content: space-between;
  // height: 507px;
  margin-bottom: 70px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .box1,
  .box2,
  .box3,
  .box4 {
    border: 1px solid #dddddd;
    background: #fafafa;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .box1 {
    flex: 1;
    img {
      margin-bottom: 20px;
    }
  }
  .box2 {
    flex: 1;
  }
  .box3 {
    flex: 1;
    img {
      margin-bottom: 20px;
    }
  }
  .box4 {
    flex: 1;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
}
.partner {
  margin-bottom: 105px;
  .h-title {
    margin-bottom: 110px;
  }
  .item-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 212px;
    grid-row-gap: 121px;
    .img {
      margin: 0 auto;
      height: 50px;
      text-align: center;
    }
  }
}
.banner3{
  height: 629px;
  background: url(@/static/image/home/banner3-bg.png) no-repeat;
  // background-position: center;
  // background-size: cover;
  width: 100%;
  background-size: 100% 100%;
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
    height: 4px;
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
    background: var(--buttonHover);
  }
}

.solve-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .img-wrapper {
    width: 32%;
    position: relative;
    cursor: pointer;
    &:hover {
      .mask {
        visibility: visible;
      }
    }
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    img {
      width: 50px;
      height: 50px;
      object-fit: fill;
    }
    >div {
      color: #fff;
      font-size: 16px;
      margin-top: 18px;
    }
  }
}
</style>
