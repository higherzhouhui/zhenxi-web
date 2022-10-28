<template>
    <div class="downLoadContainer">
        <div class="main">
            <div class="left">
                <h1>立即开启您的全新智能业财一体化旅程</h1>
                <h2>企金控——洞察业务数据&nbsp;&nbsp;驱动企业增长</h2>
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
            <div class="right">
                <img src="@/static/image/download-right.png" alt="">
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "DownLoad",
    data() {
        return {}
    },
    methods: {
    },
  });
  </script>
  <style lang="scss" scoped>
  .downLoadContainer {
    width: 100%;
    min-height: 800px;
    background: url(@/static/image/download-bg.png) no-repeat;
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 760px) {
        min-height: 400px;
    }
    .main {
        display: flex;
        @media (max-width: 1200px) {
            flex-direction: column;
            align-items: center;
        }
        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 65px;
            @media (max-width: 1200px) {
                align-items: center;
            }
            @media (max-width: 760px) {
                margin-right: 0;
            }
            h1 {
                font-family: PingFang SC Bold;
                font-size: 36px;
                font-weight: bold;
                line-height: 54px;
                color: #3D3D3D;
                @media (max-width: 760px) {
                    font-size: 30px;
                    line-height: 40px;
                }
            }
            h2 {
                font-size: 30px;
                font-weight: bold;
                color: #559DFF;
                line-height: 45px;
                margin-top: 15px;
                @media (max-width: 760px) {
                    font-size: 24px;
                    line-height: 32px;
                }
            }
            .downLoadWrapper {
                margin-top: 40px;
                display: flex;
            }
            .pic {
                width: 140px;
                height: 160px;
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
                    width: 120px;
                    height: 120px;
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
        }
        .right {
            @media (max-width: 760px) {
                display: none;
            }
        }
    }
  }
  </style>
  