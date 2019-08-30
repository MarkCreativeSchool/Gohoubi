<template>
  <section class="wrap">
    <h1>ごほうび<br />アプリ</h1>
    <img src="/gohoubi/to.png" class="im" />
    <div class="buttons">
      <nuxt-link :to="{ path: '/list' }" class="button is-fullwidth is-primary">スタート</nuxt-link>
      <nuxt-link :to="{ path: '/setting' }" class="button is-fullwidth setting">設定</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  height: 100vh;
  width: 100%;
  background: cornflowerblue;
  h1 {
    padding-top: 160px;
    text-align: center;
    font-size: 48px;
    color: #fff;
    line-height: 1.2;
  }
  .im {
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }
  .buttons {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.5);
    width: 90%;
    padding: 30px 30px 25px;
    .setting {
      margin-top: 20px;
    }
  }
}
</style>
