<template>
  <div class="wrap">
    <SolutionPage
      :bannerData="bannerData"
      :trustData="trustData"
      :solutionData="solutionData"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name:"Number",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/number/banner-bg.png"),
        title: "数字资产行业的解决方案",
        desc: "资产的数字化，已经成为一个趋势，三年前没有人能够想到，如今可以拿着一部手机下载微信或支付宝， 就能随时随地收、付款，持有现钞的需求已越来越少。市场红火与野蛮生长和缺乏全球监管协调是并行的事实，因此， 要想长久良性发展，有效地管控、规则与制度显得尤为重要。",
      },
      trustData: {
        title: "数字资产业常见痛点",
        list: [
          {
            img: require("@/static/image/solution/number/pain-01.png"),
            title: "缺乏平台",
            list: ["缺乏底层业务服务平台"],
          },
          {
            img: require("@/static/image/solution/number/pain-02.png"),
            title: "规划混乱，效率低下",
            list: ["数据周期规划混乱，数据处理效率低下"],
          },
          {
            img: require("@/static/image/solution/number/pain-03.png"),
            title: "难以管理",
            list: ["业务难以统一统筹管理"],
          },
        ],
      },
      solutionData: [
        {
          title: "建立可靠监管流程，保护资产安全",
          desc: "建立标准化的财务管理流程、合同管理流程，为企业减轻流 程管理负担，提高运作效率，对买卖中的风险性加以控制， 确保每一笔资产的流入全是能够追朔、不能伪造的；",
          img: require("@/static/image/solution/number/solution-01.png"),
        },
        {
          title: "搭建底层服务平台，提升数据处理效率",
          desc: "搭建最底层专用工具服务项目的数据资产托管绿色生态，缩 短数据采集、预处理等工作周期，提升处理效率，快速挖掘 整理出完善优质的数据属性供分析应用；",
          img: require("@/static/image/solution/number/solution-02.png"),
        },
        {
          title: "建立顺畅的业务管理流程",
          desc: "统一数据的增删、修改、使用等权限管理，建立全面、准确 、完整地反映企业运营状况的单一数据视图。为不同业务和 技术部门的数据需求、数据质量、数据应用等问题，建立一 个清晰的协调机制和统一的数据管理渠道，为业务部门提供 数据支持。",
          img: require("@/static/image/solution/number/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
