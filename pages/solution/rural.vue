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
  name: "Rural",
  data() {
    return {
      bannerData: {
        bgUrl: require("@/static/image/solution/rural/banner-bg.png"),
        title: "乡村数字化解决方案",
        desc:
          "建设数字乡村既是乡村振兴的战略方向，又是建设数字中国的重要内容。随着信息化、网络化和 数字化在农业农村发展中的广泛应用，数字乡村建设将持续释放数字红利，成为建立乡村现代化经济体系、现代乡村社 会治理体系、开启城乡融合发展和现代化建设新局面的重要抓手。",
      },
      trustData: {
        title: "乡村数字化常见痛点",
        list: [
          {
            img: require("@/static/image/solution/rural/pain-01.png"),
            title: "乡村服务平台割裂",
            list: [
              "村民办事麻烦效率低下",
            ],
          },
          {
            img: require("@/static/image/solution/rural/pain-02.png"),
            title: "各地区农业水平参差不齐",
            list: [
              "产业发展不平衡",
              "“先支出、后审批”现象大量存在",
            ],
          },
          {
            img: require("@/static/image/solution/rural/pain-03.png"),
            title: "产业数字化程度低",
            list: [
              "村民营收情况不容乐观",
            ],
          },
        ],
      },
      solutionData: [
        {
          title: "串联乡政服务平台，数字赋能",
          desc: "结合乡村治理现状和实际，研发丰富乡村数字服务体系的功 能设置和模块，可开发互联网+村务、互联网+政务等功能 板块，可以助力实现党务、政务、财务等信息公开，推进 乡村治理内容和治理方式线上化、透明化，把村里事搬到 手机上，有效提高村民参与度。",
          img: require("@/static/image/solution/rural/solution-01.png"),
        },
        {
          title: "财务审批快速，村民办事更便捷",
          desc: "为财务人员建立一体化高效的专属工作台，财务人员可批量 审批、付款、管理员工信息、导出财务凭证等，减少财务工 作人员的工作量，同时提升村民满意度。",
          img: require("@/static/image/solution/rural/solution-02.png"),
        },
        {
          title: "搭建产业载体，帮助村民致富",
          desc: "为管理层提供多维度的数据报告，可以按照不同部门、时间、 费用类型等查看，确保所有数据准确实时，让管理者快速聚 采集与农业农村相关的资源、治理、生产、经营、流通相关 的大数据，并对其进行整理、分析和展示，有效实现农业农 村资源合理配置、农业生产智能化、乡村产业数字化和农业 农村科学决策。",
          img: require("@/static/image/solution/rural/solution-03.png"),
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
