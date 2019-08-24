<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit.prevent="submit">
        <header class="modal-card-head">
          <p class="modal-card-title">お手伝い登録</p>
          <button @click="close" type="button" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">お手伝いの名前</label>
            <input type="text" v-model="work" class="input" />
          </div>
          <div class="field">
            <label class="label">お手伝いのポイント</label>
            <div class="select">
              <select v-model="point">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" :disabled="!work.length > 0">登録</button>
          <!--
          <button @click="close" type="button" class="button">Cancel</button>
          -->
        </footer>
      </form>
    </div>
  </div>
</template>
<script>
// import { mapActions } from "vuex"
export default {
  data() {
    return {
      work: "",
      point: 1,
    }
  },
  destroyed() {
    console.log("created")
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
      this.work = ""
      this.point = 1
    },
    close() {
      this.work = ""
      this.point = 1
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
