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
  name: "Projectcosts",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/projectcosts/banner-bg.png"),
        title: "工程造价咨询&工程安全咨询",
        desc:
          "随着社会经济的不断深入发展，工程项目的规模越来越大，子系统越来越多，涉及到的行业部门越来越多国际上逐渐兴起了全过程工程咨询服务的热潮。但要科学合理地完成项目工程，做好全流程的支出管控成为了关键要点。",
      },
      trustData: {
        title: "工程咨询业常见痛点",
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
          desc: "建立标准化的行政管理流程、财务管理流程合同管理流程，为企业减轻流程管理负担提高运作效率，事前、事中及事后严格执行预算策略，自动进行预算控制。",
          img: require("@/static/image/solution/projectcosts/solution-01.png"),
        },
        {
          title: "项目独立核算",
          desc: "项目可实现独立核算，为财务人员建立一体化高效的专属工作台，财务人员可批量审批付款、管理员工信息、导出财务凭证等，减少财务工作量。",
          img: require("@/static/image/solution/projectcosts/solution-02.png"),
        },
        {
          title: "数据报表",
          desc: "为管理层提供多维度的数据报告，可以按照不同部门、时间、 费用类型等查看，确保所有数据准确实时，让管理者快速聚 焦、科学决策。",
          img: require("@/static/image/solution/projectcosts/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
