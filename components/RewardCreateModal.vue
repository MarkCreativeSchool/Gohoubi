<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit.prevent="submit">
        <header class="modal-card-head">
          <p class="modal-card-title">ご褒美登録</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">ご褒美の名前</label>
            <input type="text" v-model="name" class="input" />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" :disabled="name === ''">登録</button>
        </footer>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    }
  },
  methods: {
    submit() {
      // localStorage.removeItem("works")
      let rewards = localStorage.getItem("rewards")
      if (rewards === null) {
        rewards = []
      } else {
        rewards = JSON.parse(rewards)
      }
      const reward = {
        name: this.name,
      }
      rewards.push(reward)
      localStorage.setItem("rewards", JSON.stringify(rewards))
      this.$emit("addReward", reward)
    },
    close() {
      this.$emit("closeReward")
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
