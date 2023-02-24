<template>
  <div class="footerWraper">
    <div class="content">
      <h1>Contact Us</h1>
      <h3>Business Enquiries</h3>
      <p>hellowWorld@gmail.com</p>
      <h3>Customer Support</h3>
      <p>supportmy@gmail.com</p>
      <h1 class="sh1">Learn More</h1>
      <div class="learnMore">
        <div>Audit</div>
        <div>Github</div>
        <div>Contract</div>
        <div>Docs</div>
        <div>google</div>
      </div>
      <h1 class="sh1">Join Community</h1>
      <div class="learnMore">
        <div><svg-icon icon-class="icon-Facebook" class="icon"/></div>
        <div><svg-icon icon-class="icon-INS" class="icon"/></div>
        <div><svg-icon icon-class="icon-Twiter" class="icon"/></div>
        <div><svg-icon icon-class="opensea" class="icon"/></div>
        <div><svg-icon icon-class="share-link" class="icon"/></div>
      </div>
    </div>
    <div class="menu">
      <nuxt-link to="/Vaults">
      <div :class="`tab ${currentPage === '/Vaults' ? 'avtive' : ''}`">
        <svg focusable="false" class="" data-icon="fund" width="30" height="30" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L531 565 416.6 450.5a8.03 8.03 0 00-11.3 0l-214.9 215a8.03 8.03 0 000 11.3l36.7 36.9z"></path></svg>
        <p>Vaults</p>
      </div>
      </nuxt-link>
      <nuxt-link to="/Deposits">
      <div :class="`tab ${currentPage === '/Deposits' ? 'avtive' : ''}`">
        <svg focusable="false" class="" data-icon="red-envelope" width="30" height="30" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M440.6 462.6a8.38 8.38 0 00-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 00-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 00-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142zM832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z"></path></svg>
        <p>Deposits</p>
      </div>
     </nuxt-link>
     <nuxt-link to="/Swap">
      <div :class="`tab ${currentPage === '/Swap' ? 'avtive' : ''}`">
        <svg focusable="false" class="" data-icon="shopping-cart" width="30" height="30" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path></svg>
        <p>Swap</p>
      </div>
      </nuxt-link>
     <nuxt-link to="/Info">
      <div :class="`tab ${currentPage === '/Info' ? 'avtive' : ''}`">
        <svg focusable="false" class="" data-icon="user" width="30" height="30" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
        <p>Info</p>
      </div>
      </nuxt-link>
     <nuxt-link to="/Voting">
      <div :class="`tab ${currentPage === '/Voting' ? 'avtive' : ''}`">
        <svg focusable="false" class="" data-icon="reconciliation" width="30" height="30" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg>
        <p>Voting</p>
      </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "Head",
  props: {},
  data() {
    return {
      currentPage: ''
    };
  },
  mounted() {
    const path = location.pathname;
    this.judgeCurrentPage(path);
  },
  methods: {
    judgeCurrentPage(path: string) {
      
      this.currentPage = path;
    },
  },
  watch: {
    $route(to, _from) {
      const path = to.path;
      this.judgeCurrentPage(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.footerWraper {
  width: 100%;
  border-top: 1px solid #f5f5f5;
  padding: 30px 0 100px 0;
  .content {
    padding: 0 16px;

    h1 {
      line-height: 24px;
      margin: 24px 0 12px 0;
    }

    h3 {
      margin-top: 12px;
    }

    p {
      font-size: 12px;
      margin-top: 6px;
    }

    .learnMore {
      display: flex;
      >div {
        margin-right: 16px;
        font-weight: 600;
      }
      .icon {
        font-size: 20px;
      }
    }
  }
  .menu {
    display: flex;
    align-items: center;
    height: 60px;
    border-top: 1px solid #f5f5f5;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    >a {
      flex: 1;
      .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #000;
        }
        .avtive {
          color: #1045db;
          font-weight: bold;
        }
    }
  }
}

</style>
