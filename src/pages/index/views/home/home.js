// import { ElButton, ElCarousel } from "element-plus";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import Carousel from "../../components/carousel/index.vue";
import CarouselPlus from "../../components/carouselPlus/index.vue";
import CustomFooter from "../../components/footer/index.vue";
import Steps from "../../components/steps/index.vue";

export default {
  name: "login",
  components: { Carousel, CarouselPlus, CustomFooter, Steps, Swiper, SwiperSlide },
  setup(props, context){
    const list = ref([
      "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_2_ojxc2q.png",
    ]);
    const a = ref(0);
    return {
      list
    };
  }
}