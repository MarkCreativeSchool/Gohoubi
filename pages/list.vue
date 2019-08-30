<template>
  <div style="padding: 0px;margin-top: 0px;">
    <div class="g-nav">
      <div><img src="/gohoubi/l.png" style="height: 30px;" /></div>
      <div class="prev">
        <nuxt-link :to="{ path: '/' }">戻る</nuxt-link>
      </div>
      <div>ごほうびアプリ</div>
    </div>
    <div style="padding: 15px;">
      <ul class="items" style="padding-bottom: 140px;">
        <li v-for="(item, i) in 60" :key="item" :class="{ active: point > i }">
          <img src="/gohoubi/seal.png" class="seal" />
          <span v-if="i == 60 - 1">★★★</span>
          <span v-else-if="i % 10 == 0 && i > 0">★</span>
          <span v-else>{{ i + 1 }}</span>
        </li>
      </ul>
    </div>
    <div class="action-button">
      <div><img src="/gohoubi/button.png" @click="workModal.isActive = true" /></div>
    </div>
    <WorkModal v-if="workModal.isActive" @addPoint="addPoint" @closeWork="closeWork" />
    <RewardModal v-if="rewardModal.isActive" @finishAndClose="finishAndClose" />
  </div>
</template>
<script>
import WorkModal from "~/components/WorkModal"
import RewardModal from "~/components/RewardModal"
export default {
  components: { WorkModal, RewardModal },
  data() {
    // localStorage.setItem("point", 0)
    const point = localStorage.getItem("point") || 0
    return {
      point: point,
      workModal: {
        isActive: false,
      },
      rewardModal: {
        isActive: false,
      },
    }
  },
  watch: {
    point(newValue, oldValue) {
      const diff = newValue - oldValue
      for (let i = 0; i < diff; i++) {
        const n = parseInt(i) + parseInt(oldValue) + 1
        if (n % 10 === 0 && n > 0) {
          this.rewardModal.isActive = true
          return
        }
      }
    },
  },
  methods: {
    addPoint(point) {
      this.workModal.isActive = false
      let newPoint = parseInt(this.point) + parseInt(point)
      if (newPoint > 60) {
        newPoint = newPoint - 60
      }
      this.point = newPoint
      localStorage.setItem("point", newPoint)
    },
    closeWork() {
      this.workModal.isActive = false
    },
    finishAndClose() {
      this.rewardModal.isActive = false
    },
  },
}
</script>
<style lang="scss" scoped>
.g-nav {
  border-bottom: solid 1px #ddd;
  text-align: center;
  padding: 15px;
  img {
    height: 80px;
  }
  .prev {
    position: absolute;
    left: 15px;
  }
}
.action-button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  > div {
    // background: rgba(0, 0, 200, 0.2);
    padding: 10px;
    text-align: center;
    color: #fff;
    img {
      width: 300px;
    }
  }
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  li {
    width: 20%;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 10px;
    img {
      opacity: 0.1;
    }
    span {
      display: block;
      margin-top: -5px;
    }
    &.active {
      img {
        opacity: 1;
      }
    }
  }
}
</style>
