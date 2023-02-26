<template>
    <div class="profitWrapper">
      <h2>profit</h2>
      <a-table :dataSource="dataSource" :columns="columns" :pagination="false" size="small">
      </a-table>
  </div>
  </template>
    
  <script lang="ts">
  import Vue from "vue";
  import { message } from 'ant-design-vue';
  
  export default Vue.extend({
    name: "profitWrapper",
    data() {
      return {
        afterselect: 'ERC200',
        dataSource: [
            {
              key: '1',
              cf: 'deposits',
              time: '12-01 15:31',
              profit: '999.886 USDT',
              apy: '4.24%',
            },
            {
              key: '2',
              cf: 'income',
              time: '12-11 15:31',
              profit: '995.636 USDT',
              apy: '0.24%',
            },
            {
              key: '3',
              cf: 'deposits',
              time: '12-11 15:31',
              profit: '997.686 USDT',
              apy: '4.58%',
              ellipsis: true,
            },
            {
              key: '5',
              cf: 'income',
              time: '12-15 15:31',
              profit: '1007.856 USDT',
              apy: '4.04%',
            },
            {
              key: '6',
              cf: 'deposits',
              time: '01-15 15:31',
              profit: '1017.856 USDT',
              apy: '4.58%',
              ellipsis: true,
            },
            {
              key: '7',
              cf: 'income',
              time: '01-18 13:31',
              profit: '985.74USDT',
              apy: '4.04%',
            },
            {
              key: '8',
              cf: 'deposits',
              time: '01-22 13:31',
              profit: '1025.22USDT',
              apy: '4.58%',
              ellipsis: true,
            },
            {
              key: '9',
              cf: 'income',
              time: '01-23 13:31',
              profit: '1035.31USDT',
              apy: '4.04%',
            },
            {
              key: '10',
              cf: 'deposits',
              time: '01-28 13:31',
              profit: '1035.22usdt',
              apy: '4.58%',
              ellipsis: true,
            }
          ],
  
          columns: [
            {
              title: 'Classification',
              dataIndex: 'cf',
              key: 'cf',
            },
            {
              title: 'Time',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'Profit',
              dataIndex: 'profit',
              key: 'profit',
            }
          ],
      }
    },
    methods: {
      handleChange(e: any) {
        console.log(e)
      },
      clipboardSuccess() {
        message.success('copied')
      }
    },
  });
  </script>
  <style lang="scss" scoped>
  .profitWrapper {
    padding: 0 16px;
    h2 {
      font-size: 24px;
      margin: 16px 0;
      font-weight: bold;
      text-align: center;
      line-height: 32px;
    }
  }
  ::v-deep .ant-select-selection-selected-value {
    line-height: 30px;
  }
  </style>
    