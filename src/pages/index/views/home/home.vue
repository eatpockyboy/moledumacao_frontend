<!--
 * @Author: Chris
 * @Date: 2023-06-30 01:05:16
 * @LastEditors: Chris
 * @LastEditTime: 2023-07-15 18:13:36
 * @Descripttion: **
-->
<template>
  <div class="main">
    <div class="title-wrap">
      <div class="title-content">
        <div class="h1-wrap" style="white-space: pre-wrap">
          <h1>
            <p style="font-size: 130%">
              <strong>澳門摩爾教育-澳門名校補習專家</strong>
            </p>
          </h1>
        </div>
        <div class="h4-wrap" style="white-space: pre-wrap">
          <h4>
            <div style="font-size: 160%">
              <span class="s-text-color-white">精補<a target="_blank"
                  href="https://www.moledumacao.com/puiching">培正</a>｜聖心｜粵華｜<a target="_blank"
                  href="http://rosa-chinese-section">聖羅撒</a>｜慈幼</span>
            </div>
          </h4>
        </div>
      </div>
    </div>
    <div>
      <carousel-plus :list="list" />
    </div>
    <div>
      <carousel :list="list" />
    </div>
    <steps />
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item style="height: 300px">
        <div>
          <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_OK_bbnbhc.jpg" />
        </div>
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div>
          <img class="swiper-img" src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_2_ojxc2q.png" />
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <!-- <ElButton>DDDDD</ElButton>
    <el-button>dddd</el-button> -->
    <div class="recruit-students">
      <div class="" style="white-space: pre-wrap">
        <h2>
          <p>現正招生-歡迎查詢~</p>
        </h2>
      </div>
      <div class="s-component-content s-font-heading" style="white-space: pre-wrap">
        <h4>
          <p>
            <strong><span class="s-text-color-custom2">現正招生聖羅撒中學、培正中學、粵華中學、永援中學</span></strong>
          </p>
          <p>
            <strong><span class="s-text-color-custom2">初一至高三</span></strong>
          </p>
        </h4>
      </div>
    </div>

    <div class="contact">
      <div class="logo-wrap-sm">
        <a href="https://www.getamacau.com/" target="_blank">
          <div class="s-ratio-box" style="max-width: 720px; max-height: 517px">
            <div class="s-ratio-fill" style="padding-bottom: 71.7%"></div>
            <div class="s-img-wrapper">
              <img alt="澳門水坑尾補習社,澳門水坑尾補習中心,澳門永援中學補習,澳門培正中學補習,澳門聖羅撒中學補習"
                title="澳門水坑尾補習社,澳門水坑尾補習中心,澳門永援中學補習,澳門培正中學補習,澳門聖羅撒中學補習" class="crop-default lazyloaded" data-description=""
                data-image-link="https://www.getamacau.com/" width="720" height="517"
                src="//custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1276149/橙-01_mkm8tt.png"
                data-src="//custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1276149/橙-01_mkm8tt.png" />
            </div>
          </div>
        </a>
      </div>
      <div class="detail">
        <div class="s-component-content s-font-heading" style="white-space: pre-wrap">
          <h3>
            <p style="font-size: 130%">
              <strong>澳門摩爾教學-澳門數理化補習專家-水坑尾補習社</strong>
            </p>
          </h3>
        </div>
        <div class="s-component-content s-font-body" style="white-space: pre-wrap">
          <h6>
            <p>
              <span class="s-text-color-custom2"><strong>聯絡我們：</strong></span>
            </p>
          </h6>
        </div>
        <div class="s-component-content s-font-body" style="white-space: pre-wrap">
          <p>電話：<a target="_blank" href="http://3.190.145.57/">62820665</a></p>
          <p>微信：moledu_macau</p>
          <p>Facebook:
            <a target="_blank" href="http://www.facebook.com/moledu.macao">www.facebook.com/moledu.macao</a>
          </p>
          <p>地址：澳門水坑尾街 202婦聯大廈 7樓C室</p>
        </div>
      </div>
    </div>
    <div class="message-panel">
      <div class="s-component-content s-font-heading" style="white-space: pre-wrap;">
        <h2 class="s-title s-font-title">最新消息及課程</h2>
      </div>
      <div>
        <div class="s-blog-entry-inner">
          <div class="s-blog-entry-left s-blog-avatar-container">
            <a target="_self" href="https://www.moledumacao.com/blog/ads20190419">
              <div class="s-blog-avatar"
                style="background-image: url(&quot;//custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_2000,w_2000,f_auto,q_auto/1276149/57121071_1492295230901471_3867494702882226176_o_nd9pfi.png&quot;);">
              </div>
            </a>
          </div>
          <div class="s-blog-entry-right">
            <div class="s-blog-details">
              <div class="s-blog-details-head">
                <div class="s-item-title s-blog-title s-font-heading"><a target="_self"
                    href="https://www.moledumacao.com/blog/ads20190419">澳門摩爾教育 | 中學數理化補習專家</a></div>
                <div class="time-info"><span class="fa fa-star"></span><span class="s-blog-date">2020年8月19日</span><span
                    class="dot"> · </span><span class="s-blog-tags"><span class="s-blog-tag last">Ads</span></span></div>
              </div>
              <div class="detail-info">澳門摩爾教育 | 中學數理化補習專家 🔥🔥招生中🔥🔥
                話咁快就4月份啦~ 想趁復活節小長假期間谷一谷學業？ 畢業4月吾複習, 6月徒傷悲 澳門摩爾教育幫到你！ 復活節期間照常營業~ 快啲inbox我地傾傾啦！ --- ✏️專補
                #初高中全科，精補 #數理化📏 . ⭐⭐明星級導師團隊⭐⭐ 📌#北京大學、#澳大榮譽學院 等名校理工科畢業👨‍🎓 📌#奧數名師🏆 📌多年教學經驗👨‍🏫 .
                💯助你鞏固基礎 · 培養解題邏輯思維📚 --- 🔍 了解更多：https://www.moledumacao.com/ 👉 微信：moledu_macau 或
                62820665 👉 電話：6282 0665 👉 地址：...</div>
            </div>
          </div>
        </div>
        <div class="s-blog-entry-inner">
          <div class="s-blog-entry-left s-blog-avatar-container"><a target="_self"
              href="https://www.moledumacao.com/blog/eng-2022">
              <div class="s-blog-avatar"
                style="background-image: url(&quot;https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&amp;q=80&amp;cs=tinysrgb&amp;fm=jpg&amp;crop=entropy&amp;h=2000&amp;w=2000&amp;fit=clip&amp;fm=jpg&quot;);">
              </div>
            </a></div>
          <div class="s-blog-entry-right">
            <div class="s-blog-details">
              <div class="s-blog-details-head">
                <div class="s-item-title s-blog-title s-font-heading"><a target="_self"
                    href="https://www.moledumacao.com/blog/eng-2022">【摩爾 英文課程列表】2022最新列表-（持續更新）</a></div>
                <div class="time-info  s-font-body"><span class="s-blog-date">2022年5月25日</span><span class="dot"> ·
                  </span><span class="s-blog-tags"><span class="s-blog-tag last">英文</span></span></div>
              </div>
              <div class="detail-info">【EMG-0604】雅思英文綜合班
                日期：2022年6月4日至2022年7月9日 時間：逢星期六下午4點至7點 學費：2800元，6堂共18小時 地點：摩爾教育中心（水坑尾街婦聯大廈7樓C） &nbsp;
                【EMG-0401】雅思英文綜合班 日期：2022年4月9日至2022年5月14日 時間：逢星期六下午4點至7點 學費：2800元，6堂共18小時
                地點：摩爾教育中心（水坑尾街婦聯大廈7樓C） &nbsp; 【EMG-0116】雅思英文綜合班 日期：2022年1月16日至2022年2月20日 時間：逢星期日下午1點至4點
                學費：2800元，6堂...</div>
            </div>
          </div>
        </div>
        <div class="s-blog-entry-inner">
          <div class="s-blog-entry-left s-blog-avatar-container"><a target="_self"
              href="https://www.moledumacao.com/blog/police2022">
              <div class="s-blog-avatar"
                style="background-image: url(&quot;https://images.unsplash.com/photo-1606022831434-91293aebf25a?ixlib=rb-1.2.1&amp;q=80&amp;cs=tinysrgb&amp;fm=jpg&amp;crop=entropy&amp;h=2000&amp;w=2000&amp;fit=clip&amp;fm=jpg&quot;);">
              </div>
            </a></div>
          <div class="s-blog-entry-right">
            <div class="s-blog-details">
              <div class="s-blog-details-head">
                <div class="s-item-title s-blog-title s-font-heading"><a target="_self"
                    href="https://www.moledumacao.com/blog/police2022">【警員補習】2022年澳門保安部隊數學專攻班‼️現正招生</a>
                </div>
                <div class="time-info  s-font-body"><span class="s-blog-date">2022年4月29日</span><span class="dot"> ·
                  </span><span class="s-blog-tags"><span class="s-blog-tag ">升大班,</span><span
                      class="s-blog-tag last">Ads</span></span></div>
              </div>
              <div class="detail-info">
                第三十一屆澳門保安部隊培訓課程已經開始報考啦！一邊操體能嘅同時，千祈唔好忘記常識測試一樣重要！拋低書包一段時間數學基礎仲記得幾多？等我地幫你回憶返啦📚課程時間彈性，啱曬忙碌嘅你地。有興趣就快啲聯絡啦我地了解詳情啦！
                【P-2205】警員數學專攻班 日期：2022年5月9日至5月30日 時間：逢星期一、三、五下午7點-9點 學費：3900元，10堂共20小時
                地點：摩爾教育中心（水坑尾街婦聯大廈7樓C) &nbsp; 【P-2204】警員數學專攻班 日期：2022年4月19日至5月19日 時間：逢星期二、四下午7點-9點
                學費：3900元，10堂共20小時 ...</div>
            </div>
          </div>
        </div>
        <div class="more-article">
          <div class=""><span class="more-article-btn">更多文章</span></div>
        </div>
      </div>
    </div>
    <div class="contact-us">
      <div class="s-component-content s-font-title" style="white-space: pre-wrap;">
        <h2>Connect With Us</h2>
      </div>

      <div class="contact-link">
        <div class="link-wrap">
          <div class="s-img-wrapper">
            <a href="https://www.facebook.com/moledu.macao/" target="_blank">
              <div class="s-ratio-box" style="max-width: 160px; max-height: 160px;">
                <div class="s-ratio-fill" style="padding-bottom: 100%;"></div>
                <div class="s-img-wrapper"><img alt="澳門水坑尾補習社,澳門水坑尾補習中心" title="澳門水坑尾補習社,澳門水坑尾補習中心"
                    class="crop-default lazyloaded" data-description=""
                    data-image-link="https://www.facebook.com/moledu.macao/" width="160" height="160"
                    src="https://uploads.strikinglycdn.com/page/images/icons/fb-icon.png"
                    data-src="https://uploads.strikinglycdn.com/page/images/icons/fb-icon.png"></div>
              </div>
            </a>
          </div>
          <div class="link-name" style="white-space: pre-wrap;">
            <p>Facebook</p>
          </div>
        </div>
        <div class="link-wrap">
          <div class="s-img-wrapper">
            <a href="https://www.instagram.com/moledumacau/" target="_blank">
              <div class="s-ratio-box" style="max-width: 160px; max-height: 160px;">
                <div class="s-ratio-fill" style="padding-bottom: 100%;"></div>
                <div class="s-img-wrapper"><img alt="澳門水坑尾補習社,澳門水坑尾補習中心," title="澳門水坑尾補習社,澳門水坑尾補習中心,"
                    class="crop-default lazyloaded" data-description=""
                    data-image-link="https://www.instagram.com/moledumacau/" width="160" height="160"
                    src="https://uploads.strikinglycdn.com/static/icons/black/instagram-icon.png"
                    data-src="https://uploads.strikinglycdn.com/static/icons/black/instagram-icon.png"></div>
              </div>
            </a>
          </div>
          <div class="link-name" style="white-space: pre-wrap;">
            <p>Instagram</p>
          </div>
        </div>
        <div class="link-wrap">
          <div class="s-img-wrapper"><a href="https://moledumacau.tumblr.com/" target="_blank">
              <div class="s-ratio-box" style="max-width: 160px; max-height: 160px;">
                <div class="s-ratio-fill" style="padding-bottom: 100%;"></div>
                <div class="s-img-wrapper"><img alt="澳門水坑尾補習社,澳門水坑尾補習中心," title="澳門水坑尾補習社,澳門水坑尾補習中心,"
                    class="crop-default lazyloaded" data-description="" data-image-link="https://moledumacau.tumblr.com/"
                    width="160" height="160" src="https://uploads.strikinglycdn.com/page/images/icons/tumblr-icon.png"
                    data-src="https://uploads.strikinglycdn.com/page/images/icons/tumblr-icon.png"></div>
              </div>
            </a></div>
          <div class="link-name" style="white-space: pre-wrap;">
            <p>Tumblr</p>
          </div>
        </div>

      </div>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>
<script setup>
// import { ElButton, ElCarousel } from "element-plus";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import Carousel from "../../components/carousel/index.vue";
import CarouselPlus from "../../components/carouselPlus/index.vue";
import CustomFooter from "../../components/footer/index.vue";
import Steps from "../../components/steps/index.vue";
const list = [
  "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_OK_bbnbhc.jpg",
  "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/1276149/City_Buildings_Facebook_Cover_2_ojxc2q.png",
];
const a = ref(0);
</script>
<style lang="scss" scoped>
.swiper-img {
  object-fit: cover;
  width: 100%;
}

.time-list {
  font-family: montserrat, PingFang TC, Microsoft JhengHei, 微軟正黑體, STXihei,
    sans-serif;
}

.contact {
  display: flex;
  flex-direction: row-reverse;
  padding: 0 40px;
  font-size: 15px;
  color: #50555c;
  margin-bottom: 72px;

  a {
    color: #2aabd9
  }

  h6 {
    font-size: 18px;
    color: #ef7f4f;
  }

  .logo-wrap-sm {
    position: relative;
    // flex: 1;
    width: 36%;
    max-width: 720px;
    max-height: 517px;

    img {
      // max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      height: auto;
      // vertical-align: middle;
      // object-fit: contain;

      // display: block;
      // max-height: 200px;
      // margin: 0 auto;
    }
  }

  .detail {
    // flex-shrink: 1;

    flex: 1;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    text-align: left;
  }
}

h2 {
  margin-bottom: 40px;
  font-weight: 400;
  color: #1D2023;
  font-family: work sans, helvetica, "Lisong Pro", "PMingLiU", "PingFang TC", "Microsoft JhengHei", "微軟正黑體", STXihei, sans-serif;
}

.recruit-students {
  color: #1D2023;
  text-align: center;
  padding-bottom: 32px;

  // h2 {
  //   margin-bottom: 20px;
  //   font-weight: 400;
  //   color: #1D2023;
  //   font-family: work sans, helvetica, "Lisong Pro", "PMingLiU", "PingFang TC", "Microsoft JhengHei", "微軟正黑體", STXihei, sans-serif;
  // }
  h2 {
    margin-bottom: 20px;
  }
  h4 {
    color: #ef7f4f;
  }
}

.message-panel {
  padding: 0 40px;
  margin-bottom: 75px;

  // text-align: center;

  a {
    font-size: 18px;
    text-decoration: none;
  }

  // h2 {
  //   margin-bottom: 40px;
  // }

  .detail-info {
    text-align: left;
    font-size: 15px;
    color: #50555c;
    padding-bottom: 28px;
  }

  .time-info {
    font-size: 18px;
    color: rgb(204, 204, 204);
    padding: 4px 0 8px;
  }
  .more-article {
    text-align: center;
  }
  .more-article-btn {
    padding: 10px 20px;
    background-color: rgb(204, 204, 204);
  }
}
.contact-us {
  text-align: center;
}
.contact-link {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .link-wrap {
    margin: 0 20px;
    flex: 1;
    position: relative;
    max-width: 160px;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
    }
  }
  .link-name {
    padding: 16px 0;
  }
}

// .el-carousel__item h3 {
//   color: #475669;
//   opacity: 0.75;
//   line-height: 300px;
//   margin: 0;
//   text-align: center;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
