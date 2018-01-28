<!-- promise -->
<template>
  <div class="promise-wrap full-page">
    <f-close :close-type="'header'"></f-close>
    <section>
      <h1>post sigin</h1>
      <button @click="signin">sigin</button>
      <div>
        {{resData}}
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class PromiseTest extends Vue {
  name: string = 'fan1130';
  password: string = '1';
  resData: any = '';

  // methods
  load(){
    this.resData = 'loading...';
  }
  signin(){
    this.$http.post('http://127.0.0.1:3000/signin', {name: this.name, password: this.password})
      .then(res => {
        console.log(res);
        this.resData = res;
      }).catch(err => {
        console.error(err);
      });
  }
}

</script>
<style lang='scss' scoped>
</style>
