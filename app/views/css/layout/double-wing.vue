<template>
    <article class="double-wing-wrap">
        <div class="main-wrap col">
            <div class="main">main</div>
        </div>
        <div class="left col">left</div>
        <div class="right col">right</div>
    </article>
</template>
<script lang="ts">
import {
    Vue,
    Component
  } from 'vue-property-decorator'
  @Component({})
  export default class Layout extends Vue {
    layout: string = 'double-wing'
    principleImgUrls: string[] = []
  }
</script>
<style lang="scss">
    .double-wing-wrap{
        .col{
            float:left;
            height:200px;
        }
        .main-wrap{
            width:100%;
            background-color:#ccc;
        }
        .main{
            margin:0 2.5rem;
        }
        .left{
            width:2.5rem;
            background-color:#eee;
            margin-left:-100%;
        }
        .right{
            width:2.5rem;
            background-color:#FF0000;
            margin-left:-2.5rem;
        }
    }
</style>
