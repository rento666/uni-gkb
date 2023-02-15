<template>
  <view>
    <div class="container">
      <div class="skill-box">
        <div class="skill-bar">
          <text class="skill-per" :style="{'width' : percent + '%'}">
            <text class="tooltip">{{percent}}%</text>
          </text>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  /**
   * Progress 进度条
   * @description 进度条视图组件
   * @author wrt  
   * @property {Number} percent 进度，默认是10，满值为100
   */
  export default {
    name:"rt-progress",
    props: {
      percent: {
        type: Number,
        default: 10,
      }
    }
  }
</script>

<style lang="scss">
.container {
    position: relative;
    background: #fff;
    margin: 0 15px;
    padding: 5px 20px 1px;
    border-radius: 7px;
    .skill-box{
        width: 100%;
        margin: 25px 0;
        .skill-bar {
            height: 8px;
            width: 100%;
            border-radius: 6px;
            margin-top: 6px;
            background: rgba(0, 0, 0, 0.1);
            .skill-per {
                position: relative;
                display: block;
                height: 100%;
                width: 50%;
                border-radius: 6px;
                background: #20d6a9;
                animation: progress 0.4s ease-in-out forwards;
                opacity: 0;
                .tooltip {
                    position: absolute;
                    right: -14px;
                    top: -28px;
                    font-size: 9px;
                    font-weight: 500;
                    color: #fff;
                    padding: 2px 6px;
                    border-radius: 3px;
                    background: #20d6a9;
                    z-index: 1;
                }
                .tooltip::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: -2px;
                    height: 10px;
                    width: 10px;
                    z-index: -1;
                    background-color: #20d6a9;
                    transform: translateX(-50%) rotate(45deg);
                }
            }
        }
    }
}
@keyframes progress {
    0% {
        width: 0;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>