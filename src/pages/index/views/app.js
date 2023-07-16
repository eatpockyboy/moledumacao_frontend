import { onMounted, ref } from "vue"

export default {
  name: "app",
  setup(props, context){
    const menuList = ref([
      {
        label: "首頁",
      },
      {
        label: "常規補習-名校補習之選",
      },
      {
        label: "最新課程",
      },
      {
        label: "澳門升學課程",
      },
      {
        label: "最新語言課程",
      },
      {
        label: "澳門四校聯考補習班",
      },
      {
        label: "網上教學",
      },
      {
        label: "精補培正中學",
      },
      {
        label: "精補聖羅撒中學",
      },
      {
        label: "精補鏡平中學",
      },
      {
        label: "精補聖羅撒中學（英文部）",
      },
      {
        label: "精補永援中學",
      },
      {
        label: "精補慈幼中學",
      },
      {
        label: "精補粵華補習",
      },
      {
        label: "精補聖若瑟中學",
      },
      {
        label: "精補聖公會中學",
      },
      {
        label: "澳門專業數學補習",
      },
    ]);
    return {
      menuList
    };
  }
}