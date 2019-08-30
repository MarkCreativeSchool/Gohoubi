<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form>
        <header class="modal-card-head">
          <p class="modal-card-title">{{ reward.name }}</p>
          <button @click="close" type="button" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">お手伝いの名前</label>
            <input type="text" v-model="form.name" class="input" />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="update" type="button" class="button is-success" :disabled="!form.name">更新</button>
          <button @click="remove" type="button" class="button is-danger">削除</button>
        </footer>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "RewardUpdateModal",
  props: {
    reward: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
      },
    }
  },
  reward: function(newValue, oldValue) {
    console.log(newValue)
    this.form.name = newValue.name
  },
  methods: {
    remove() {
      if (window.confirm("本当に削除してもよろしいですか")) {
        this.$emit("deleteReward")
      }
    },
    update() {
      this.$emit("updateReward", this.form)
    },
    close() {
      this.$emit("closeRewardUpdateModal")
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
