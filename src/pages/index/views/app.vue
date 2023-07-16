<!--
 * @Author: Chris
 * @Date: 2023-06-30 00:31:55
 * @LastEditors: Chris
 * @LastEditTime: 2023-07-04 21:29:14
 * @Descripttion: **
-->
<template>
  <div id="app">
    <div class="container">
      <div class="nav-container">
        <a
          class="logo-wrap"
          href="https://www.facebook.com/moledu.macao"
          target="_blank"
          aria-label="image link"
        >
          <img
            src="../../../asset/images/logo.jpg"
            alt="澳門水坑尾補習社,澳門水坑尾補習中心,澳門培正補習,澳門TIS補習,澳門聖公會中學補習,澳門慈幼補習,澳門粵華補習,澳門聖心補習,澳門永援補習,澳門聖羅撒補習,澳門英才補習,澳門數學補習,澳門物理補習,澳門數學補習,澳門化學補習,澳門數理化補習,澳門中學補習,澳門初中補習,澳門a level,澳門高中補習"
            title="澳門水坑尾補習社,澳門水坑尾補習中心,澳門培正補習,澳門TIS補習,澳門聖公會中學補習,澳門慈幼補習,澳門粵華補習,澳門聖心補習,澳門永援補習,澳門聖羅撒補習,澳門英才補習,澳門數學補習,澳門物理補習,澳門數學補習,澳門化學補習,澳門數理化補習,澳門中學補習,澳門初中補習,澳門a level,澳門高中補習"
            class="logo"
            data-description=""
            data-image-link="https://www.facebook.com/moledu.macao"
          />
        </a>
        <div class="nav">
          <div class="menu">
            <div
              class="menu-item"
              v-for="(menu, index) in menuList"
              :key="index"
            >
              <span>{{ menu.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="mobile-header">
            <div class="header">
                <a
                class="logo-wrap"
                href="https://www.facebook.com/moledu.macao"
                target="_blank"
                aria-label="image link"
                >
                <img
                    src="../../../asset/images/logo.jpg"
                    alt="澳門水坑尾補習社,澳門水坑尾補習中心,澳門培正補習,澳門TIS補習,澳門聖公會中學補習,澳門慈幼補習,澳門粵華補習,澳門聖心補習,澳門永援補習,澳門聖羅撒補習,澳門英才補習,澳門數學補習,澳門物理補習,澳門數學補習,澳門化學補習,澳門數理化補習,澳門中學補習,澳門初中補習,澳門a level,澳門高中補習"
                    title="澳門水坑尾補習社,澳門水坑尾補習中心,澳門培正補習,澳門TIS補習,澳門聖公會中學補習,澳門慈幼補習,澳門粵華補習,澳門聖心補習,澳門永援補習,澳門聖羅撒補習,澳門英才補習,澳門數學補習,澳門物理補習,澳門數學補習,澳門化學補習,澳門數理化補習,澳門中學補習,澳門初中補習,澳門a level,澳門高中補習"
                    class="logo"
                    data-description=""
                    data-image-link="https://www.facebook.com/moledu.macao"
                />
                </a>
            </div>
        </div>
        <div>
            <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./app.js"></script>
<style src="./app.scss" />
