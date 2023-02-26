<template>
  <div class="depositsWrapper">
    <h2>Scanning</h2>
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false" >
    </a-table>
    <h2>Deposits</h2>
    <div class="inputWrapper">
      <div class="icon"><img :src="require('../static/image/usdt.png')" alt="usdt" /><span>USDT</span></div>
      <a-input placeholder="Please enter an integer multiple of 100">
        <template #addonAfter>
        <a-select v-model:value="afterselect" style="width: 95px;">
          <a-select-option value="ERC200" >ERC200</a-select-option>
          <a-select-option value="ERC721">ERC721</a-select-option>
          <a-select-option value="TRC200">TRC200</a-select-option>
          <a-select-option value="ERC1155">ERC1155</a-select-option>
        </a-select>
      </template>
      </a-input>
    </div>
    <div class="desc">
      <div class="left">Invest Days: 120D</div>
      <div class="right">Daily Yield:0.5%-2%</div>
    </div>
    <div class="approveBtn">Approve</div>
    <div class="summaryTitle">
      <div class="left">Summary</div>
      <nuxt-link to="/profit">
        <div class="right">
        Details
        <svg focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
      </div>
      </nuxt-link>
    </div>
    <div class="summaryContent">
      <div class="left">
        <div class="top">Cumulative deposits</div>
        <div class="bottom">
          <div class="number">22223.541</div>
          <div class="unit">usdt</div>
        </div>
      </div>
      <div class="left">
        <div class="top">Cumulative income</div>
        <div class="bottom">
          <div class="number">22223.141</div>
          <div class="unit">usdt</div>
        </div>
      </div>
    </div>
    <div class="balance">
      <div class="left">
        <div class="top">Balance</div>
        <div class="bottom">
          <div class="number">22222</div>
          <div class="unit">usdt</div>
        </div>
      </div>
      <div class="right">
        <div class="exchange">exchange</div>
        <div class="withdraw">withdraw</div>
      </div>
    </div>
    <div class="summaryTitle">
      <div class="left">My Team</div>
      <div class="right">
        Details
        <svg focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
      </div>
    </div>
    <div class="summaryContent">
      <div class="left" style="background-color: #bef3e3;">
        <div class="top">Total address</div>
        <div class="bottom">
          <div class="number" style="color: rgb(52 95 163)">1845</div>
        </div>
      </div>
      <div class="left" style="background-color: #bef3e3;">
        <div class="top">Total deposit</div>
        <div class="bottom" style="color: rgb(52 95 163)">
          <div class="number">195456.11</div>
          <div class="unit">usdt</div>
        </div>
      </div>
    </div>
    <div class="summaryTitle">
      <div class="left">My Team</div>
    </div>
    <div class="netLink">
      <div class="left">www.baidu.con.zky.11111111iiioo</div>
      <svg @click="clipboardSuccess" data-icon="copy" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg>
    </div>
</div>
</template>
  
<script lang="ts">
import Vue from "vue";
import { message } from 'ant-design-vue';

export default Vue.extend({
  name: "depositsWrapper",
  data() {
    return {
      afterselect: 'ERC200',
      dataSource: [
          {
            key: '1',
            pool: 'STETH',
            project: 'Lido',
            tvl: '$8.65b',
            apy: '4.24%',
          },
          {
            key: '2',
            pool: 'BTC',
            project: 'JustLend',
            tvl: '$2.73b',
            apy: '0.24%',
          },
          {
            key: '3',
            pool: 'CBETH',
            project: 'Coinbase Wrpaped Stak',
            tvl: '$1.85b',
            apy: '4.58%',
            ellipsis: true,
          },
          {
            key: '4',
            pool: 'ETH-STETH',
            project: 'Curve',
            tvl: '$1.36b',
            apy: '4.04%',
          }
        ],

        columns: [
          {
            title: 'Pool',
            dataIndex: 'pool',
            key: 'pool',
          },
          {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
          },
          {
            title: 'TVL',
            dataIndex: 'tvl',
            key: 'tvl',
          },
          {
            title: 'APY',
            dataIndex: 'apy',
            key: 'apy',
          },
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
.depositsWrapper {
  padding: 20px 16px;
  h2 {
    font-size: 20px;
    margin: 12px 0;
    text-indent: 1rem;
    font-weight: bold;
  }
  .inputWrapper {
    position: relative;
    .icon {
      position: absolute;
      right: 100px;
      z-index: 99;
      display: flex;
      align-items: center;
      top: 50%;
      transform: translate(0, -50%);
      background: #fff;
      padding: 0 3px;
      span {
        color: rgb(52, 192, 106);
        margin-left: 5px;
      }
      img {
        height: 20px;
      }
    }
  }
  .desc {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    font-size: 16px;
  }
  .approveBtn {
    margin: 16px 0;
    background: #3029bf;
    width: 100%;
    text-align: center;
    line-height: 32px;
    font-size: 18px;
    color: #fff;
    border-radius: 10px;
  }
  .summaryTitle {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    .left {
      font-size: 20px;
      font-weight: bold;
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
  .summaryContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    margin: 16px 0;
    .left {
      border-radius: 12px;
      border: 1px solid #352eb8;
      padding: 5px 8px;
      .top {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
      .bottom {
        display: flex;
        .number {
          flex: 1;
          font-size: 24px;
          text-align: center;
        }
        .unit {
          width: 24px;
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
  .balance {
    border: 1px solid #352eb8;
    border-radius: 16px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      top {
        font-size: 16px;
        color: #999;
      }
      .bottom {
        display: flex;
        margin-top: 12px;
        .number {
          font-size: 24px;
        }
        .unit {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
    .right {
      >div {
        border: 1px solid #3a3680;
        padding: 3px 10px;
        font-size: 14px;
        color: #666;
      }
      .exchange {
        color: #000;
        border: 1px solid #1c13c7;
        margin-bottom: 12px;
      }
    }
  }
  .myTotal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    margin: 16px 0;
    .left {
      
      .top {
        text-align: center;
        margin-bottom: 16px;
        color: #654242;
      }
      .mnumber {
        font-size: 16px;
        color: #2698ba;
      }
    }
  }
  .netLink {
    display: flex;
    align-items: center;
    .left {
      padding: 8px 6px;
      border-radius: 8px;
      border: 1px solid #2698ba;
      box-shadow: 2px 2px 2px #a19ed9;
      color: green;
      margin-right: 20px;
    }
  }
}
::v-deep .ant-select-selection-selected-value {
  line-height: 30px;
}
</style>
  