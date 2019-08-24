<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form>
        <header class="modal-card-head">
          <p class="modal-card-title">{{ work.work }}</p>
          <button @click="close" type="button" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">お手伝いの名前</label>
            <input type="text" v-model="form.work" class="input" />
          </div>
          <div class="field">
            <label class="label">お手伝いのポイント</label>
            <div class="select">
              <select v-model="form.point">
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
          <button @click="update" type="button" class="button is-success" :disabled="!form.work">更新</button>
          <button @click="remove" type="button" class="button is-danger">削除</button>
        </footer>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkUpdateModal",
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        work: "",
        point: 0,
      },
    }
  },
  watch: {
    work: function(newValue, oldValue) {
      this.form.work = newValue.work
      this.form.point = newValue.point
    },
  },
  methods: {
    remove() {
      if (window.confirm("本当に削除してもよろしいですか")) {
        this.$emit("deleteWork")
      }
    },
    update() {
      this.$emit("updateWork", this.form)
    },
    close() {
      this.$emit("closeWorkUpdateModal")
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
