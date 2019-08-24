<template>
  <div>
    <div class="g-header">
      <div class="prev">
        <nuxt-link :to="{ path: '/' }">戻る</nuxt-link>
      </div>
      <div>設定</div>
    </div>
    <section>
      <h3>お手伝い</h3>
      <button @click="workSettingModal.isActive = !workSettingModal.isActive" class="button">お手伝い登録</button>
      <div class="nothing" style="margin-top: 10px;" v-if="works.length === 0">お手伝いが登録されていません。下のお手伝いを追加するボタンからお手伝いを追加してください。</div>
      <ul class="list" v-else>
        <li v-for="(work, i) in works" :key="`work-${i}`">
          <a class="list-item" @click="openUpdateModal(i)">
            <div class="left">
              <span class="point">★{{ work.point }}</span>
              {{ work.work }}
            </div>
            <div class="right">x</div>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h3>ご褒美</h3>
      <button @click="rewardCreateModal.isActive = !rewardCreateModal.isActive" class="button">ご褒美登録</button>
      <div class="nothing" style="margin-top: 10px;">ご褒美が登録されていません。下のご褒美を追加するボタンからご褒美を追加してください。</div>
      <ul style="margin-top: 10px;">
        <li><a class="list-item">aaa</a></li>
      </ul>
    </section>
    <section>
      <h3>スペシャルご褒美</h3>
      <button @click="workSettingModal.isActive = !workSettingModal.isActive" class="button">スペシャルご褒美登録</button>
      <ul>
        <li><a class="list-item">aaa</a></li>
      </ul>
    </section>
    <WorkSettingModal v-show="workSettingModal.isActive" @closeWorkSettingModal="closeWorkSettingModal" @addWork="addWork"></WorkSettingModal>
    <WorkUpdateModal v-show="workUpdateModal.isActive" :work="workUpdateModal.work" @deleteWork="deleteWork" @updateWork="updateWork" @closeWorkUpdateModal="closeWorkUpdateModal"></WorkUpdateModal>
    <RewardCreateModal v-show="rewardCreateModal.isActive" />
  </div>
</template>
<script>
import WorkSettingModal from "~/components/WorkSettingModal"
import WorkUpdateModal from "~/components/WorkUpdateModal"
import RewardCreateModal from "~/components/RewardCreateModal"
export default {
  components: { WorkSettingModal, WorkUpdateModal, RewardCreateModal },
  data() {
    let works = JSON.parse(localStorage.getItem("works"))
    if (works === null) {
      works = []
    }
    return {
      works: works,
      workSettingModal: {
        isActive: false,
      },
      workUpdateModal: {
        work: {},
        isActive: false,
      },
      rewardCreateModal: {
        isActive: false,
      },
      selectedIndex: 0,
    }
  },
  methods: {
    addWork(data) {
      this.works.push(data)
      this.closeWorkSettingModal()
    },
    closeWorkSettingModal() {
      this.workSettingModal.isActive = !this.workSettingModal.isActive
    },
    openUpdateModal(index) {
      this.selectedIndex = index
      const work = this.works[index]
      this.workUpdateModal.work = work
      this.workUpdateModal.isActive = true
    },
    closeWorkUpdateModal() {
      this.workUpdateModal.isActive = false
    },
    updateWork(work) {
      this.works[this.selectedIndex] = work
      this.workUpdateModal.isActive = false
      localStorage.setItem("works", JSON.stringify(this.works))
    },
    deleteWork() {
      this.works.splice(this.selectedIndex, 1)
      this.workUpdateModal.isActive = false
      localStorage.setItem("works", JSON.stringify(this.works))
    },
  },
}
</script>
<style lang="scss" scoped>
.g-header {
  border-bottom: solid 1px #ddd;
  padding: 15px;
  text-align: center;
  .prev {
    position: absolute;
    left: 15px;
  }
}
section {
  padding: 15px;
  h3 {
    font-weight: bold;
    font-size: 16px;
    border-bottom: solid 1px #ddd;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .nothing {
    background: #f3f3f3;
    color: #aaa;
    font-size: 13px;
    padding: 15px;
  }
  .list {
    margin: 15px 0;
    .list-item {
      width: 100%;
      display: flex;
      background: #fff;
      border-color: #ddd;
      color: #333;
      border-bottom: solid 1px #ddd;
      .left {
        flex: 1;
        .point {
          display: inline-block;
          width: 30px;
          font-size: 14px;
        }
      }
      .right {
        width: 20px;
        text-align: center;
      }
    }
  }
}
</style>
