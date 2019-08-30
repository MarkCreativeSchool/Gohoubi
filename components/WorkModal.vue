<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">お手伝い</p>
        <button @click="close" class="delete" aria-label="close"></button>
      </header>
      <div class="modal-card-body">
        <ul>
          <li v-for="(work, i) in works" :key="`work-${i}`" @click="select(i)">
            <span class="point">★{{ work.point }}</span>
            {{ work.work }}
          </li>
        </ul>
      </div>
      <footer class="modal-card-foot">
        <button @click="close" type="button" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const works = JSON.parse(localStorage.getItem("works"))
    return {
      works: works,
    }
  },
  methods: {
    close() {
      this.$emit("closeWork")
    },
    select(index) {
      const w = this.works[index]
      if (window.confirm(w.work + "でよろしいですか？")) {
        this.$emit("addPoint", w.point)
      }
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
    .modal-card-body {
      padding: 0;
      ul {
        li {
          cursor: pointer;
          padding: 15px 20px;
          border-bottom: solid 1px #ddd;
        }
      }
    }
  }
}
</style>
