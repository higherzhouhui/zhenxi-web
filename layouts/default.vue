<template>
    <div>
        <div class="offline" v-if="$nuxt.isOffline">You are offline</div>
        <Head />
        <!-- <Tool /> -->
        <div class="main"><Nuxt /></div>
        <Footer />
    </div>
</template>

<style>
.offline {
    width: 100vw;
    height: 22px;
    background: var(--bg);
    font-size: 16px;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    color: #fff;
    z-index: 10001;
    line-height: 22px;
}
.main {
    padding-top: 60px;
    min-height: calc(100vh - 300px);
}
</style>
