<template>
  <div class="time-list">
    <div class="time-list-header">
      <h2 class="time-list-header-h2">專科補習時間表！</h2>
      <h4 class="time-list-header-h4">以下時間表為專科補習時間表，常規補習照常上課！</h4>
    </div>
    <div class="progress-list">
      <div class="progress-item" v-for="(item, index) in list" :key="index">
        <div class="progress-row">
          <div class="progress-num">{{ index + 1 }}</div>
          <div class="progress-content">
            <div class="progress-content-text">{{ item.text }}</div>
            <div class="progress-content-time">{{ item.time }}</div>
          </div>
        </div>
        <div v-if="index !== list.length-1" class="progress-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StepNum from "./stepNum.vue";
const list = [
  {
    text: 'Gavin Sir X Calvin Sir- 會計、數學、物理、',
    time: 'MON: 19:00~22:00'
  },
  {
    text: 'Edy Sir X Gavin Sir -化學、數學、微積分 ',
    time: 'TUE: 1900~22:00'
  },
  {
    text: 'Gavin Sir X Calvin Sir- 會計、數學、物理、',
    time: 'WED: 1900~22:00'
  },
  {
    text: 'Gavin Sir X Calvin Sir- 會計、數學、物理、',
    time: 'THU: 1900~22:00'
  },
  {
    text: 'Gavin Sir X Calvin Sir- 會計、數學、物理、',
    time: 'FRI: 1900~22:00'
  },
]
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1023px) {}
@media only screen and (min-width: 728px) {}
.time-list {
  max-width: 94%!important;
  margin: 0 auto;
  padding: 75px 0;
  &-header {
    margin-bottom: 44px;
    text-align: center;
    font-family: work sans, helvetica, 'Lisong Pro', 'PMingLiU', 'PingFang TC','Microsoft JhengHei',"微軟正黑體",STXihei, sans-serif;
    &-h2 {
      margin-bottom: 10px;
      color: #50555c;
      font-weight: 400;
    }
    &-h4 {
      margin-bottom: 10px;
      color: #cccccc;
    }
  }
}
.progress-list {
  width: 50%;
  margin: 0 auto;
  color: #50555c;
  .progress-item {
    position: relative;
    .progress-row {
      display: flex;
      margin-top: 10px;
      margin-bottom: 50px;
      .progress-num {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        margin-bottom: 12px;
        margin-right: 20px;
        border: 1px solid #50555c;
        font-size: 26px;
        font-weight: 700;
      }
      .progress-content {
        &-text {
          margin-bottom: 5px;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
        }
        &-time {
          line-height: 1.5;
          letter-spacing: .4px;
        }
      }
    }
    .progress-line {
      position: absolute;
      left: 27px;
      top: 75px;
      height: calc(100% - 40px);
      width: 1px;
      background-color: #cbccce;

    }
  }
}
</style>
