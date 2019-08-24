<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">お手伝い登録</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <Roulette />
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" :disabled="!work.length > 0">登録</button>
      </footer>
    </div>
  </div>
</template>
<script>
import Roulette from "~/components/Roulette"
export default {
  components: { Roulette },
  data() {
    return {
      work: "",
      point: 1,
    }
  },
  methods: {
    submit() {
      // localStorage.removeItem("works")
      let works = localStorage.getItem("works")
      if (works === null) {
        works = []
      } else {
        works = JSON.parse(works)
      }
      const data = {
        work: this.work,
        point: this.point,
      }
      works.push(data)
      localStorage.setItem("works", JSON.stringify(works))
      this.$emit("addWork", data)
    },
    close() {
      this.$emit("closeWorkSettingModal")
    },
  },
}
</script>
<style lang="scss" scoped>
.modal {
  .modal-card {
    max-width: calc(100% - 40px);
    .modal-card-head {
      .modal-card-title {
        font-size: 16px;
      }
    }
  }
}
</style>
