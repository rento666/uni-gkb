<template name="skeleton">
  <view class="sk-container">
    <view>
      <view >
        <view class="uni-navbar nav-bar--uni-navbar data-v-6bda1a90 nav-bar--data-v-6bda1a90 uni-nvue-fixed nav-bar--uni-nvue-fixed">
          <view class="uni-navbar__content nav-bar--uni-navbar__content data-v-6bda1a90 nav-bar--data-v-6bda1a90 uni-navbar--fixed nav-bar--uni-navbar--fixed uni-navbar--border nav-bar--uni-navbar--border" style="background-color:#23EBB9;">
            <view class="data-v-6bda1a90 nav-bar--data-v-6bda1a90">
              <view class="uni-status-bar bar--uni-status-bar" style="height:44px;"></view>
            </view>
            <view class="uni-navbar__header nav-bar--uni-navbar__header data-v-6bda1a90 nav-bar--data-v-6bda1a90" style="color:#333;background-color:#23EBB9;height:44px;">
              <view class="uni-navbar__header-btns nav-bar--uni-navbar__header-btns uni-navbar__header-btns-left nav-bar--uni-navbar__header-btns-left data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickLeft,$event" style="width:60px;"></view>
              <view class="uni-navbar__header-container nav-bar--uni-navbar__header-container data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickTitle,$event">
                <view class="uni-navbar__header-container-inner nav-bar--uni-navbar__header-container-inner data-v-6bda1a90 nav-bar--data-v-6bda1a90">
                  <text class="uni-nav-bar-text nav-bar--uni-nav-bar-text uni-ellipsis-1 nav-bar--uni-ellipsis-1 data-v-6bda1a90 nav-bar--data-v-6bda1a90 sk-transparent sk-text-14-2857-924 sk-text" style="color:#333;">资讯</text>
                </view>
              </view>
              <view class="uni-navbar__header-btns nav-bar--uni-navbar__header-btns uni-navbar__header-btns-right nav-bar--uni-navbar__header-btns-right data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickRight,$event" style="width:60px;"></view>
            </view>
          </view>
          <view class="uni-navbar__placeholder nav-bar--uni-navbar__placeholder data-v-6bda1a90 nav-bar--data-v-6bda1a90">
            <view class="data-v-6bda1a90 nav-bar--data-v-6bda1a90">
              <view class="uni-status-bar bar--uni-status-bar" style="height:44px;"></view>
            </view>
            <view class="uni-navbar__placeholder-view nav-bar--uni-navbar__placeholder-view data-v-6bda1a90 nav-bar--data-v-6bda1a90" style="height:44px;"></view>
          </view>
        </view>
      </view>
      <view style="padding:10px 0;">
        <view class="article-card">
          <navigator class="navigator" hover-class="navigator-hover">
            <view class="img">
              <image mode="aspectFill" class="sk-image"></image>
            </view>
            <view class="title-time">
              <text class="title sk-transparent sk-text-14-2857-599 sk-text">骨质疏松所致髋部骨折的风险管理</text>
              <view class="subtitle">
                <text style="margin-right:10px;" class="sk-transparent sk-text-14-2857-405 sk-text">骨康宝</text>
                <text class="sk-transparent sk-text-14-2857-720 sk-text">18天前</text>
              </view>
            </view>
          </navigator>
        </view>
      </view>
      <view style="padding:10px 0;">
        <view class="article-card">
          <navigator class="navigator" hover-class="navigator-hover">
            <view class="img">
              <image mode="aspectFill" class="sk-image"></image>
            </view>
            <view class="title-time">
              <text class="title sk-transparent sk-text-14-2857-889 sk-text">1</text>
              <view class="subtitle">
                <text style="margin-right:10px;" class="sk-transparent sk-opacity">2</text>
                <text class="sk-transparent sk-text-14-2857-14 sk-text">13天前</text>
              </view>
            </view>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    name: "news"
  }
</script>
<style>
  @import url('./index.css');
</style>