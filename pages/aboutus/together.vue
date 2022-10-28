<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="m-b-40 tip1">振翕科技合作伙伴生态</div>
        <div class="m-b-26 tip2">向全社会邀约意向伙伴，以企金控的产品与行业</div>
        <div class="m-b-54 tip2">解决方案为基础，共同开拓业财一体化市场蓝海</div>
        <nuxt-link to="/aboutus/formapply"><span class="f16 btn">加入我们</span></nuxt-link>
      </div>
    </div>
    <div class="advantage">
      <div class="w1440 content">
        <div class="item">
          <div class="item-l">
            <img
              :src="require('@/static/image/together/secondleft.png')"
              class="img"
            />
          </div>
          <div class="item-r">
            <div class="tip1 m-b-30"><strong>流量难求，降本增效才是核心</strong></div>
            <div class="list">
              <div class="list-item tip2 m-b-26">
                市场红利见顶，流量红利消退，回归商业本质，效率和增长再次成为企
              </div>
              <div class="list-item tip2 m-b-40">
                业的核心追求。如何应对变化，在不确定的时代，获得确定性的增长？
              </div>
              <div class="list-item tip1 m-b-26 acl">
                ——管控企业成本支出，将钱真正花在刀刃上
              </div>
            </div>
          </div>
        </div>
        <div class="hxys tip1">我们的核心优势</div>
        <div class="division"></div>
        <div class="listContainer">
            <div class="hx-list" v-for="(item, index) in processData" :key="index">
                <img :src="item.img" alt="">
                <div class="hx-content">
                  <div class="hx-title">{{item.name}}</div>
                  <ul>
                      <li v-for="(value, i) in processData[index].list"><div class="circle "></div>{{value}}</li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Expenditure",
  data() {
    return {
      processData: [
        {img: require("@/static/image/together/sass.png"), name: "好用的企业SaaS产品", list: ['打造业财一体化的管理闭环', '助力企业完成数字化转型']},
        {img: require("@/static/image/together/dev.png"), name: "强大的产品研发能力", list: ['精耕数字化技术行业多年', '有着深厚、专业的产品研发积累']},
        {img: require("@/static/image/together/team.png"), name: "专业的企业服务团队", list: ['专属客户成功及服务经理', '有丰富的产品知识和实操经验', '已为多家企业提供数字化解决方案']},
        {img: require("@/static/image/together/service.png"), name: "优质的增值服务", list: ['提供完善的代理扶持权益', '研发、产品、运营团队顶力支持', '售前、售中、售后全流程系统培训']},
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.banner {
  background: url(@/static/image/together/together.png) no-repeat;
  background-position: center;
  background-size: cover;
  padding: 80px 0;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }
}
.tip1 {
  font-size: 36px;
  line-height: 50px;
  @media screen and (max-width: 760px) {
    font-size: 30px;
    line-height: 40px;
  }
}
.tip2 {
  font-size: 24px;
  line-height: 32px;
  @media screen and (max-width: 760px) {
    font-size: 20px;
    line-height: 30px;
  }
}
.process {
  display: flex;
  justify-content: space-between;
  margin: 100px auto 148px;
  background: #fff;
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    img{
      width: 140px;
    }
    .name {
      padding-top: 24px;
      color: #3d3d3d;
      font-weight: bold;
    }
  }
}

.advantage {
  background: #fff;
  .content {
    .item {
      display: flex;
      margin-top: 60px;
      align-items: center;
      height: 420px;
      @media screen and (max-width: 760px) {
        height: auto;
        flex-direction: column;
      }
      .tip1 {
        color: #3d3d3d;
      }
      .tip2 {
        color: #666;
      }
      img {
        object-fit: fill;
      }
      &-l,
      &-r {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &-l {
        .list-item {
          position: relative;
          padding-left: 26px;
          line-height: 36px;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 12px;
            left: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d8d8d8;
          }
        }
      }
      .acl {
        color: #559DFF;
      }
    }
    .item-r {
      flex: 1;
      background: #f7f8fa;
      padding: 30px 0 30px 60px;
      @media screen and (max-width:760px) {
        padding: 30px 0;
      }
    }
  }
  .hxys {
    font-weight: bold;
    margin: 70px auto 24px  auto;
    text-align: center;
  }
  .division {
    margin: 0 auto;
    width: 200px;
    height: 6px;
    background: #559DFF;
  }
  .listContainer {
    display: grid;
    margin: 80px 0 134px 0;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    @media screen and (max-width:760px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .hx-list {
      height: 450px;
      @media screen and (max-width:760px) {
        height: 350px;
      }
      position: relative;
      width: 100%;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .hx-content {
        width: 100%;
        padding: 0 37px;
        left: 0;
        top: 170px;
        position: absolute;
        z-index: 9;
        @media screen and (max-width:760px) {
          top: 120px;
        }
      }
      .hx-title {
        font-size: 28px;
        font-weight: bold;
        line-height: 48px;
        color: #FFFFFF;
        text-align: center;
      }
      ul {
        margin-top: 33px;
        @media (max-width: 1300px) {
          margin-top: 0;
        }
      }
      li {
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
        list-style: none;
        display: flex;
        padding-left: 20px;
        position: relative;
      }
      .circle {
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 10px;
      }
    }
  }
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
    height: 6px;
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
    transform: scale(1.02);
  }
}
</style>
