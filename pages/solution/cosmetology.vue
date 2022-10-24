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
  name: "Cosmetology",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/cosmetology/banner-bg.png"),
        title: "医疗美容业解决方案",
        desc:
          "从产业本身来看，作为一个快速成长的新兴产业，医美产业呈现出“野蛮生长”的状态，尚未形成良好的 产业生态。因此容易造成行业的虚假营销、夸大宣传以及低价竞争等恶性现象。企业自身需要进行合规自控，才能稳定发展。",
      },
      trustData: {
        title: "医疗美容业常见痛点",
        list: [
          {
            img: require("@/static/image/solution/cosmetology/pain-01.png"),
            title: "费用难以管控",
            list: [
              "营销费用投入大",
            ],
          },
          {
            img: require("@/static/image/solution/cosmetology/pain-02.png"),
            title: "政策压力下，利润率低",
            list: [
              "医保控费大环境下，药价面临政策压力，利润率收紧",
            ],
          },
          {
            img: require("@/static/image/solution/cosmetology/pain-03.png"),
            title: "支出费用被关注",
            list: [
              "费用支出合规性被高度关注",
            ],
          },
        ],
      },
      solutionData: [
        {
          title: "流程管理",
          desc: "建立标准化的行政管理流程、财务管理流程、合同管理流程， 为企业减轻流程管理负担，提高运作效率，事前、事中及 事后严格执行预算策略，自动进行预算控制。",
          img: require("@/static/image/solution/cosmetology/solution-01.png"),
        },
        {
          title: "财务自动化",
          desc: "项目可实现独立核算，为财务人员建立一体化高效的专属工 作台，财务人员可批量审批、付款、管理员工信息、导出财 务凭证等，减少财务工作量。",
          img: require("@/static/image/solution/cosmetology/solution-02.png"),
        },
        {
          title: "数据报表",
          desc: "为管理层提供多维度的数据报告，可以按照不同部门、时 间、费用类型等查看，让每笔支出都有据可依，研发支出 进度一目了然，让管理者快速聚焦、科学决策。",
          img: require("@/static/image/solution/cosmetology/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
