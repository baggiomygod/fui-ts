<template>
  <div class="close-wrap"
       :class="{'header-close': closeType === 'header'}"
       @click="back">
    <i class="close icon iconfont icon-xiangzuo1"></i>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Inject} from 'vue-property-decorator'

@Component({})
export default class Close extends Vue {
  // props
  @Prop({default: ''})
  closeType: 'icon'

  // methods
  back(): void{
    /*
       问题：this.$router报错：Property '$router' does not exist on type 'Close'
       1.默认：this['$router'].go(-1); ts可以识别转义
       2.vue-shim.d.ts: 添加全局变量使TS可识别this.$router
    */
    this.$router.go(-1);
  }
}
</script>
<style lang="scss" type="stylesheet/scss">
 .close-wrap{
      position: relative;
      display: inline-block;
      top: 0;
      left: 0;
      padding: 3px;
      font-size: .5rem;
      .close{
        font-size: .5rem;
        color: #3e98f0;
        cursor: pointer;
      }
      &.header-close{
        display: flex;
        // height: 1rem;
        padding: .2rem;
        box-sizing: border-box;
        background-color: #3e98f0;
        width: 100%;
        .close{
          color: #fff;
        }
      }
    }

</style>
