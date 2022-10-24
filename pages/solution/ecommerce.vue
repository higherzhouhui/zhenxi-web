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
  name:"Ecommerce",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/ecommerce/banner-bg.png"),
        title: "电商行业解决方案",
        desc: "传统电商产业对平台依赖性大，产品同质化在传统电商产品上表现十分严重，推广引流趋向品牌化，中小型企业、商家难以生存；数据管理难运营效率低下，库存数据、订单数据、统一数据等不同步。",
      },
      trustData: {
        title: "电商行业常见痛点",
        list: [
          {
            img: require("@/static/image/solution/ecommerce/pain-01.png"),
            title: "依赖性大，缺乏独立系统",
            list: ["对电商平台依赖性大，缺乏独立经理管理系统"],
          },
          {
            img: require("@/static/image/solution/ecommerce/pain-02.png"),
            title: "营销花费大，缺乏管控",
            list: ["平台营销引流花费多，现金流缺乏系统性管控"],
          },
        ],
      },
      solutionData: [
        {
          title: "流程管理",
          desc: "建立标准化的行政管理流程、财务管理流程、合同管理流程， 为企业减轻流程管理负担，提高运作效率，事前、事中及 事后严格执行预算策略，自动进行预算控制。",
          img: require("@/static/image/solution/ecommerce/solution-01.png"),
        },
        {
          title: "财务自动化",
          desc: "项目可实现独立核算，为财务人员建立一体化高效的专属工作台，财务人员可批量审批、付款、管理员工信息、导出财务凭证等，减少财务工作量。",
          img: require("@/static/image/solution/ecommerce/solution-02.png"),
        },
        {
          title: "数据报表",
          desc: "为管理层提供多维度的数据报告，可以按照不同部门、时 间、费用类型等查看，确保所有数据准确实时，让管理者 快速聚焦、科学决策。",
          img: require("@/static/image/solution/ecommerce/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
