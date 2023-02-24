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

  </div>
</template>
  
<script lang="ts">
import Vue from "vue";
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
    handleChange(e) {

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
}
::v-deep .ant-select-selection-selected-value {
  line-height: 30px;
}
</style>
  