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
  name:"Production",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/production/banner-bg.png"),
        title: "生产制造业解决方案",
        desc: "中国制造业规模位列世界第一，门类齐全、体系完整，在支撑中国经济社会发展方面发挥着 重要作用。但中国仍处于工业化进程中，制造业与先进国家相比还有较大差距，特别是在企业信息化、智能化方面仍 处于起步阶段，整体发展水平不高，制约了制造业企业的发展。"
      },
      trustData: {
        title: "生产制造业常见痛点",
        list: [
          {
            img: require("@/static/image/solution/production/pain-01.png"),
            title: "行业传统财务审批流程落后",
            list: ["记账凭证关联整理工作量大", "纸质档案存储成本高保管风险高", "制造业交易频繁，发票与银行回单归档麻烦"],
          },
          {
            img: require("@/static/image/solution/production/pain-02.png"),
            title: "企业现金流流转效率低",
            list: ["机器采购频率高金额大", "备用金金额难以准确估量"],
          },
        ],
      },
      solutionData: [
        {
          title: "流程管理",
          desc: "建立标准化的行政管理流程、财务管理流程、合同管理流程 为企业减轻流程管理负担，提高运作效率，事前、事中及 事后严格执行预算策略，自动进行预算控制。",
          img: require("@/static/image/solution/production/solution-01.png"),
        },
        {
          title: "财务自动化",
          desc: "项目可实现独立核算，为财务人员建立一体化高效的专属工 作台，财务人员可批量审批、付款、管理员工信息、导出财 务凭证等，减少财务工作量。",
          img: require("@/static/image/solution/production/solution-02.png"),
        },
        {
          title: "企业便捷支付",
          desc: "企业采购、备用金、对公付款，都可采用企业账户支付，为 企业提供可定制化的省心集采体验。",
          img: require("@/static/image/solution/production/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
