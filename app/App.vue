<template>
  <div>
    <f-portal></f-portal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Portal from './views/portal/portal.vue';
import Component from 'vue-class-component'
@Component({
  components:{
    'f-portal': Portal
  }
})
export default class App extends Vue {

}
</script>

<style>

</style>
