<template>
  <div class="depositsWrapper">
    <h2>Scanning</h2>
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false" >
    </a-table>
    <h2>Deposits</h2>

  </div>
</template>
  
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "depositsWrapper",
  data() {
    return {
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
}
</style>
  