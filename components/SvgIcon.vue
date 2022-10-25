<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
      <use :xlink:href="iconName" />
    </svg>
  </template>
  
  <script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      },
    },
    computed: {
      isExternal() {
        return /^(https?:|mailto:|tel:)/.test(this.iconClass)
      },
      //通过iconClass 获取svg文件名
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      //返回url请求位置
      styleExternalIcon() {
        return {
          mask: `url(${this.iconClass}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
        }
      }
    }
  })   
  </script>
  
  <style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: #333;
    overflow: hidden;
  }
  
  .svg-external-icon {
    background-color: #333;
    mask-size: cover!important;
    display: inline-block;
  }
  </style>