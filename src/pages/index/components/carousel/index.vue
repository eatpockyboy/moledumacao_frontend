<!--
 * @Author: Chris
 * @Date: 2023-07-06 02:07:41
 * @LastEditors: Chris
 * @LastEditTime: 2023-07-06 04:23:28
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
    <swiper-slide v-for="item in list" :key="item">
      <img class="swiper-img" :src="item" />
    </swiper-slide>
    <!-- <swiper-slide>
      <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_OK_bbnbhc.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_2_ojxc2q.png" />
    </swiper-slide> -->
    <!-- <swiper-slide>Slide 4</swiper-slide> -->
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default {
    props: {
      list: {
        type: Array,
        required: true,
      }
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
<!-- <style scoped>

.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: hsla(0,0%,100%,.25);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: hsla(0,0%,100%,.8);
}
</style> -->