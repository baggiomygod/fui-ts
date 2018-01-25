<template>
    <article class="flex-wrap">
        <div class="left col">
            flex-grow:0; // 有剩余空间也不放大<br/>
            flex-shrink:1; // 空间不足时缩小<br/>
            flex-basis:auto; // auto元素本来的大小 180px
        </div>
        <div class="main col">
            flex-grow:1; // 有剩余空间时放大<br/>
            flex-shrink:1; // 空间不足时缩小<br/>
            flex-basis:auto: // 本来的大小
        </div>
        <div class="right col">
            flex-flow:0; //有剩余空间也不放大<br/>
            flex-shrink:0; // 不缩小<br/>
            flex-basis:210px; // 占据主轴210px空间
        </div>
    </article>
</template>
<script lang="ts">
import {
    Vue,
    Component
  } from 'vue-property-decorator'
  @Component({})
  export default class Layout extends Vue {
    layout: string = 'flex'
    principleImgUrls: string[] = []
  }
</script>
<style lang="scss">
    .flex-wrap{
        display:flex;
        flex-flow:row nowrap;
        div{
            height:200px;
        }
        .left{
            background-color:#adadd4;
            width:2rem;
            flex-grow:0;
            flex-shrink:1;
            flex-basis:auto;
        }
        .main{
            background-color:#eee;
            flex-grow:1;
            flex-shrink:1;
            flex-basis:auto;
        }
        .right{
            background-color:#e3e3e3;
            // width:200px;
            flex-grow:0;
            flex-shrink:0;
            flex-basis:2.5rem;
        }
    }
</style>
