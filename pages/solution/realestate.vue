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
  name: "Realestate",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/realestate/banner-bg.png"),
        title: "房地产行业解决方案",
        desc:
          "房地产的野蛮生长已经结束，集中度越来越高，地产人如何在这场颠覆式创新中不被淘汰，成为胜者？\n在红利日渐减少的市场环境下，企业的经营管理水平日益成为影响业绩表现的关键要素，而数字化是房企们的必经之路。",
      },
      trustData: {
        title: "房地产行业痛点",
        list: [
          {
            img: require("@/static/image/solution/projectcosts/pain-01.png"),
            title: "项目多，难以独立核算",
            list: [
              "无法准确掌握各个项目的营收情况",
              "无法给类似新项目提供预算参考",
            ],
          },
          {
            img: require("@/static/image/solution/projectcosts/pain-02.png"),
            title: "财务管理问题多",
            list: [
              "项目分散管理难、业务前业务中的预算管控难",
              "预算执行效率低、财务信息传输时效性差",
              "“先支出、后审批”现象大量存在",
            ],
          },
          {
            img: require("@/static/image/solution/projectcosts/pain-03.png"),
            title: "企业信息化水平相对落后",
            list: [
              "财务、项目模块孤立运行、财务信息共享难",
              "各项资源调配不灵活",
            ],
          },
        ],
      },
      solutionData: [
        {
          title: "流程管理",
          desc: "企业现金建立标准化的行政管理流程、财务管理流程、合同 管理流程，为企业减轻流程管理负担，提高运作效率，事前、 事中及事后严格执行预算策略，自动进行预算控制。",
          img: require("@/static/image/solution/realestate/solution-01.png"),
        },
        {
          title: "财务自动化",
          desc: "项目可实现独立核算，为财务人员建立一体化高效的专属工 作台，财务人员可批量审批、付款、管理员工信息、导出财 务凭证等，减少财务工作量。",
          img: require("@/static/image/solution/realestate/solution-02.png"),
        },
        {
          title: "数据报表",
          desc: "为管理层提供多维度的数据报告，可以按照不同部门、时间、 费用类型等查看，确保所有数据准确实时，让管理者快速聚 焦、科学决策。",
          img: require("@/static/image/solution/realestate/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
