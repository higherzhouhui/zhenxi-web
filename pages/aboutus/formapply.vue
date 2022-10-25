<template>
  <div class="wrap">
    <div class="mask" v-if="popUpImg" @click="clickCallBack"></div>
    <!-- banner -->
    <div class="banner">
      <div class="w1440 content">
        <div class="left">
          <div class="f42 m-b-30 tip1">欢迎加入企金控生态圈</div>
          <div class="f24 m-b-36 tip2">我们将为你提供专属解决方案</div>
          <div class="downLoadWrapper">
              <div class="pic">
                  <img src="@/static/image/ios-down.png" />
                  <h4>扫描二维码下载</h4>
              </div>
              <div class="downHref">
                  <a class="btn" href="https://znxiapp.oss-cn-hangzhou.aliyuncs.com/download/znxi-release.apk" download="true">
                      <svg-icon icon-class="ios" class="icon"/>
                      <div class="desWrapper">
                          <div class="des1">点击下载客户端</div>
                          <div class="des2">APP&nbsp;STORE</div>
                      </div>
                  </a>
                  <a class="btn btn1" href="http://download.zqzxtech.com/ios" target="_blank">
                      <svg-icon icon-class="android" class="icon"/>
                      <div class="desWrapper">
                          <div class="des1">点击下载客户端</div>
                          <div class="des2">ANDROID</div>
                      </div>
                  </a>
              </div>
          </div>
        </div>
        <div class="right" v-if="!success">
          <h1>请填写您的信息</h1>
          <h3>您的专属客户经理将在24小时内联系您</h3>
          <div class="inputContainer">
            <!-- <img class="prefix" src="@/static/image/together/qy.png" alt="企业名称" /> -->
            <svg-icon icon-class="company" class="prefix"/>
            <input class="inputWrapper" type="text" placeholder="您的企业名称" v-model="form.qy" mo />
          </div>
          <div class="inputContainer">
            <!-- <img class="prefix" src="@/static/image/together/name.png" alt="姓名或职务" /> -->
            <svg-icon icon-class="user" class="prefix"/>
            <input class="inputWrapper" type="text" placeholder="您的姓名或职务" v-model="form.name"/>
          </div>
          <div class="inputContainer">
            <!-- <img class="prefix" src="@/static/image/together/tel.png" alt="联系电话" /> -->
            <svg-icon icon-class="phone" class="prefix"/>
            <input class="inputWrapper" type="text" placeholder="您的联系电话" v-model="form.tel"/>
          </div>
          <div class="inputContainer">
            <!-- <img class="prefix" src="@/static/image/together/yzm.png" alt="验证码" /> -->
            <svg-icon icon-class="valid" class="prefix"/>
            <input class="inputWrapper" type="text" placeholder="请输入验证码" v-model="form.yzm"/>
            <div :class="form.tel && validPhone() ? 'yzm active' : 'yzm'" v-on:click="getYanZhenMa">{{time ? `${time}S` : '获取验证码'}}</div>
            <div class="yzm-popup" :style="{width: width + 'px',visibility: popUpImg ? 'visible' : 'hidden'}">
              <img :src="imgbg" alt="yzm" class="yzm-bg"/>
              <img :src="imgslide" alt="yzm" class="slide" :style="{left: left + 'px'}"/>
              <div class="slideBtnWrapper" :style="{width: width + 'px'}">
                <div class="slideBtn" id="slideBtn" :style="{left: left + 'px'}"><div class="jiantou"></div></div>
                <div class="slideRight" v-show="!left">向右滑动填充验证-></div>
              </div>
            </div>
            <div v-if="error" class="error">验证码错误</div>
          </div>
  
          <button class="btn" :disabled="canSubmit() ? false : true" v-on:click="submit">
            提交信息
          </button>
        </div>
        <div class="right" v-if="success">
          <button class="return" v-on:click="goBack">返回</button>
          <img class="successImg" src="@/static/image/together/success.png" />
          <div class="successTitle">提交成功</div>
          <h3>您的专属客户经理将在24小时内联系您</h3>
          <h3 class="h3mb">如有问题，欢迎致电:400-0270816</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { time } from "console";
import Vue from "vue";
import { getRequestCaptcha, sendValideCode, submitPersonInfo } from "~/services/common";

export default Vue.extend({
  name: "Expenditure",
  data() {
    return {
      currentTab: 'ios',
      form: {
        qy: '',
        name: '',
        tel: '',
        yzm: '',
      },
      time: 0,
      timer: {},
      success: false,
      imgbg: '',
      imgslide: '',
      left: 0,
      width: 0,
      height: 0,
      popUpImg: false,
      key: '',
      error: false,
    };
  },
  mounted() {
    const slideBtnDom = document.getElementById('slideBtn');
    const self = this;
    //鼠标按下
    if (slideBtnDom) {
      slideBtnDom.onmousedown = function (e) {
      //鼠标相对于盒子的位置
      var offsetX = e.clientX - slideBtnDom!.offsetLeft;
      //鼠标移动
      document.onmousemove = function (e) {
        let cleft = Math.floor(e.clientX - offsetX);
        if (cleft > self.width - 40) {
          cleft = self.width - 40;
        }
        if (cleft < 0) {
          cleft = 0;
        }
        self.left = cleft;
      }
      //鼠标抬起
      document.onmouseup = function () {
          self.sendYZMRequest();
          document.onmousemove = null;
          document.onmouseup = null;
      }
      }
    }
  },
  methods: {
    // handleClickDownIcon(tab: string) {
    //   if (tab === 'ios') {
    //     window.open('http://download.zqzxtech.com/ios');
    //   } else {
    //     window.open('https://znxiapp.oss-cn-hangzhou.aliyuncs.com/download/znxi-release.apk');
    //   }
    //   // this.currentTab = tab;
    // },
    getYanZhenMa() {
      if (this.time || !this.validPhone()) {
        return;
      }
      this.getCapchaImg();
      // this.time = 59;
      // this.timer = setInterval(() => {
      //   this.time --;
      //   if (!this.time) {
      //     clearInterval(this.timer as any);
      //   }
      // }, 1000);
    },
    sendYZMRequest() {
      sendValideCode({
        areaCode: '+86',
        captcha: {
          key: this.key,
          vx: this.left,
          width: this.width,
        },
        phone: this.form.tel,
      }).then((res: any) => {
        if (res?.success) {
          this.popUpImg = false;
          this.time = 59;
          this.timer = setInterval(() => {
            this.time --;
            if (!this.time) {
              clearInterval(this.timer as any);
            }
          }, 1000);
        } else {
          this.getCapchaImg();
        }
      });
      // this.time = 59;
      // this.timer = setInterval(() => {
      //   this.time --;
      //   if (!this.time) {
      //     clearInterval(this.timer as any);
      //   }
      // }, 1000);
    },
    submit() {
      //将所有的数据传到后端
      submitPersonInfo({
        corpName: this.form.qy,
        name: this.form.name,
        phone: this.form.tel,
        smsCode: this.form.yzm,
      }).then((res: any) => {
        if (res?.success) {
          this.success = true;
        } else {
          this.error = true;
        }
      })
    },
    goBack() {
      this.success = false;
      this.form.qy = '';
      this.form.name = '';
      this.form.tel = '';
      this.form.yzm = '';
      clearInterval(this.timer as any);
      this.time = 0;
    },
    getCapchaImg() {
        getRequestCaptcha().then((res: any) => {
        this.imgbg = res?.data?.image1;
        this.imgslide = res?.data?.image2;
        this.key = res?.data?.uuid;
        this.left = 0;
        const img = new Image();
        img.src = this.imgbg;
        this.popUpImg = true;
        img.onload = () => {
          this.width = img.width;
          this.height = img.height;
        }
      });
    },
    clickCallBack() {
      this.popUpImg = false;
    },
    validPhone() {
      var reg='^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-9])|(18[0-9])|166|198|199|191|(147))\\d{8}$';
      var regExp=new RegExp(reg);
      return regExp.test(this.form.tel);
    },
    canSubmit() {
      if (this.form.name && this.form.qy && this.form.tel && this.form.yzm) {
        return true;
      }
      return false;
    },
  },
  watch: {
    'form.yzm': {
      handler() {
        this.error = false;
      }
    }
  },
  destroyed() {
    clearInterval(this.timer as any);
  }
});
</script>
<style lang="scss" scoped>
.banner {
  min-height: calc(100vh - 80px);
  background: url(@/static/image/together/bg.png) no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 80px);
  }
  .tip1 {
    font-weight: bold;
  }
  .downLoad {
    display: flex;
    align-items: center;
    .erweima {
      width: 240px;
      height: 240px;
      border: 2px solid #0957EB;
      box-sizing: border-box;
      padding: 4px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
    .tabs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 220px;
      cursor: pointer;
      img {
        width: 240px;
        height: 60px;
        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }
  .right {
    width: 600px;
    height: 700px;
    border: 1px solid #1a55c2;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    padding: 0 60px;
    margin-right: 20px;
    @media (max-width: 1440px) {
      width: 450px;
      height: 550px;
      padding: 0 20px;
    }
    h1 {
      color: #333333;
      font-weight: bold;
      font-size: 32px;
      margin-top: 40px;
      text-align: center;
    }
    h3 {
      font-size: 22px;
      color: #3D3D3D;
      text-align: center;
    }
    .inputContainer {
      width: 100%;
      height: 55px;
      position: relative;
      @media (max-width: 1440px) {
        height: 45px;
      }
      .prefix {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);  
      }
      .inputWrapper {
        width: 100%;
        height: 100%;
        border: 2px solid #1a55c2;
        border-radius: 4px;
        padding-left: 60px;
        font-size: 20px;
        color: #000;
        ::placeholder {
          color: #999999;
          font-size: 20px;
        }
        &:hover {
          border: 2px solid #0558f1;
        }
        &:focus-visible {
          outline: transparent;
        }
      }
      .yzm {
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 50%;
        color: #999999;
        cursor: pointer;
        transform: translateY(-50%);  
      }
      .active {
        color: #035BEC;
      }
      .yzm-popup {
        position: absolute;
        z-index: 99;
        left: 44px;
        top: -180px;
        .yzm-bg {
          width: 100%;
          height: 100%;
        }
        .slide {
          z-index: 101;
          position: absolute;
          left: 0;
          top: 0;
        }
        .slideBtnWrapper {
          position: relative;
          text-align: center;
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: #f7f9fa;
          color: #45494c;
          border: 1px solid #e4e7eb;
        }
        .slideBtn {
          position: absolute;
          top: -1px;
          left: 0;
          border: 1px solid #1991fa;
          width: 40px;
          height: 40px;
          background: #fff;
          box-shadow: 0 0 3px rgb(0 0 0 / 30%);
          cursor: pointer;
          transition: background .2s linear;
          .jiantou {
            position: absolute;
            top: 15px;
            left: 13px;
            width: 14px;
            height: 12px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAHXCAMAAADusXjuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAGdtcwAAAAAAAAAAAAAAAAAAABmR+gECAgAAAAAAAAAAAAAAAAAAAAAAAPf49QAAAAAAAAAAAAAAAAAAALLS/QICAgEBAf///wAAAGS1/P///////wAAAP///xyS+gAAAN3q/pWbof///6Gqs////wAAAAAAACCV+v///zef+5LL/Xq2+woKCkVJTZWdppefqAIDAv///////////5WdpqvX/Z/R/Vyx/KDS/Zyjq5mhqpefqP///2ltcGdtczub+pafqP///0VJTY2hp5WdpgAAAGdtc////0Gk+3e//P///////yDIrvBnZ////8zQ1P////////b39P///6Kqsv///////5WdppefqP////T18pWdppWdpiDIrubw/gICAvb39P///yDIriaX+pWdpUan+5rP/R4eHr2+u////////////5Wdpv///////5WdpuHi3/Lz8Git+8nf/Wdtc/////////Dx7v///9LS0JWdpiDIrvBnZ/BnZ77Z/ZWdppWdppWdpuDh3uzt6q6vrZWdpmdtc+rr6dPU0cvLydbX1JWdpkVJTZnF/O71/vf6//BnZ2dtc////////9LT0Ovs6ru8uZWdppWdppWdpjM0M5WdppWdppWdplSl+/BnZ+bn5O7v7AMDA6Gqs2dtc////77g/v///6TT/bfc/Vau+3vA/P///////4TE/P///////////6bU/f///////7W2szIzMozI/P///2y5/P///y6b+pWdpoq+/KbM/JWdpv///////////yDIriDIrqGqs2dtc6Gqs6Gqs6Gqs////2dtc0VJTZWdpmdtc////x0dHZWdptPl/kVJTSDIriDIrmdtc6iopsDBvvX282FmaWdtc5Wdpv///yDIriDIrvBnZ2dtc6Gqs6Gqs6Gqs2dtc2dtc2dtc2dtc/BnZ35+ffBnZ0VJTWdtc2dtc2dtc35+ff///2dtc9/g3oOKkp6nsL3CyP7//v///6Gqs/f49fBnZyDIrmdtc0VJTdgAqpkAAAD5dFJOUwDMDxgGBArMAQIMDhYDB5kFEwkVHeUfHHgU2tgZEafMIvJD5Oc+GxrNk9Ll2SZF6wge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) 0 -26px;
            background-size: 34px 471px;
          }
          &:hover {
            background: #1991fa;
            .jiantou {
              background-position: 0 -13px;
            }
          }
        }
        .slideRight {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #45494c;
          font-size: 14px;
        }
      }
    }
    .btn {
      width: 100%;
      height: 60px;
      border-radius: 4px;
      background: #035BEC;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      margin-bottom: 30px;
      cursor: pointer;
      &:hover {
        background: var(--buttonHover);
      }
      &:disabled {
        cursor: no-drop;
      }
      @media (max-width: 1440px) {
        height: 40px;
        font-size: 20px;
      }
    }
    .successImg {
      width: 120px;
      height: 120px;
      margin-top: 160px;
    }
    .successTitle {
      font-size: 36px;
      font-weight: bold;
    }
    .h3mb {
      margin-bottom: 190px;
    }
    .return {
      position: absolute;
      font-size: 24px;
      color: #666666;
      top: 40px;
      left: 40px;
      background: #fff;
      cursor: pointer;
    }
  }
  .error {
    color: red;
    font-size: 14px;
    margin: 8px 0 0 0;
  }
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 9;
}

.downLoadWrapper {
      margin-top: 40px;
      display: flex;
  }
.pic {
  width: 180px;
  height: 200px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 4px 10px 0px rgba(93, 93, 93, 0.3);
  h4 {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 12px;
      color: #3D3D3D;
  }
  img {
      width: 160px;
      height: 160px;
      object-fit: fill;
  }
}
.downHref {
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .btn {
      width: 176px;
      height: 48px;
      border-radius: 100px;
      background: #035BEC;
      box-shadow: 0px 4px 10px 0px rgba(74, 197, 122, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
      &:hover {
          background: var(--buttonHover);
      }
  }
  .btn1 {
      background: #4AC57A;
      &:hover {
          background: #25ad5a;
      }
  }
  .icon {
      width: 20px;
      height: 22px;
      margin-right: 10px;
  }
  .des1 {
      font-size: 12px;
      opacity: 0.8;
  }
  .des2 {
      text-align: center;
      margin-top: 3px;
  }
}

</style>
