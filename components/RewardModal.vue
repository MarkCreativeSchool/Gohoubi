<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">ご褒美ルーレット</p>
        <button class="delete" aria-label="close" @click="finishAndClose"></button>
      </header>
      <section class="modal-card-body">
        <Roulette @finishAndClose="finishAndClose" />
      </section>
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
    finishAndClose() {
      this.$emit("finishAndClose")
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
