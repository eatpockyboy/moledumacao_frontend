<!--
 * @Author: Chris
 * @Date: 2023-07-06 02:07:41
 * @LastEditors: Chris
 * @LastEditTime: 2023-07-15 01:33:14
 * @Descripttion: **
-->
<template>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="pagination"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-item-content">
        <div class="swiper-left">
          <div
            class="s-component-content swiper-left-title"
            style="white-space: pre-wrap"
          >
            <h2>
              <p style="font-size: 80%">
                <span class="s-text-color-black"
                  ><strong>Gavin Sir 國立新加坡大學碩士</strong></span
                >
              </p>
            </h2>
          </div>
          <div
            class="s-component-content swiper-left-heading"
            style="white-space: pre-wrap"
          >
            <h4>
              <p>
                <span class="s-text-color-black"
                  ><strong
                    ><strong>精通會計，英文，物理，數學</strong></strong
                  ></span
                >
              </p>
            </h4>
          </div>
          <div class="s-component-content  swiper-left-link">
            <a
              class="s-common-button css-chf7i2 s-font-button small"
              id="custom-btn"
              href="https://m.me/moledu.macao/"
              data-is-nav-btn="false"
              data-type="Web"
              data-component="button"
              target="_blank"
              >立即了解</a
            >
          </div>
        </div>
        <div class="swiper-right">
          <img
            class="swiper-img"
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1276149/1318072234368_1318072234368_r_ykuvbm.jpg"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item-content">
        <div class="swiper-left">
          <div
            class="s-component-content s-font-title"
            style="white-space: pre-wrap"
          >
            <h2>
              <p><strong>Edy Sir 北京大學雙學士</strong></p>
            </h2>
          </div>
          <div
            class="s-component-content s-font-heading"
            style="white-space: pre-wrap"
          >
            <h4>
              <p>
                <span class="s-text-color-gray"
                  ><strong>奧林匹克化學、數學培訓導師</strong></span
                >
              </p>
            </h4>
          </div>
          <div class="s-component-content css-owv3vc">
            <a
              class="s-common-button css-chf7i2 s-font-button small"
              id="custom-btn"
              href="https://m.me/moledu.macao/"
              data-is-nav-btn="false"
              data-type="Web"
              data-component="button"
              target="_blank"
              >立刻了解</a
            >
          </div>
        </div>
        <div class="swiper-right">
          <img
            class="swiper-img"
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1276149/PKU_zkq4ly.png"
          />
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>
      <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_OK_bbnbhc.jpg" />
    </swiper-slide> -->
    <!-- <swiper-slide>
      <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_2_ojxc2q.png" />
    </swiper-slide> -->
    <!-- <swiper-slide>Slide 4</swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      pagination: {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  // background: hsla(0, 0%, 100%, 0.25);
}

a {
  text-decoration: none;
  padding: 10px 20px;
  background-color: rgb(204, 204, 204);
  color: #000;
}

.swiper-pagination-bullet-active {
  color: #fff;
  // background: hsla(0, 0%, 100%, 0.8);
}
.swiper-item-content {
  height: 746px;
  display: flex;
  align-items: center;
  // padding: 80px 20px;
  padding: 0 20px;
  .swiper-left {
    width: 50%;
    text-align: center;

    .swiper-left-title {
      padding-bottom: 16px;
    }
    .swiper-left-heading {
      padding-bottom: 32px;
    }
    // flex: 1;
    // flex-shrink: 0;
    // flex-grow: 1;
  }
  .swiper-right {
    // height: 100%;
    width: 50%;
    text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex: 1;
    // flex-shrink: 0;
    // flex-grow: 1;
    .swiper-img {
      max-width: 84%;
      // aspect-ratio: 500 / 660;
    }
  }
}
</style>
