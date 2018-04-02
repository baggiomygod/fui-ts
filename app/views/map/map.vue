<template>
  <div class="map-wrap full-page fui-transitions">
    <f-close :close-type="'header'"></f-close>
    <div id="v-map"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { MP } from "./map";

@Component({})
export default class Map extends Vue {
  x: Number = 116.491;
  y: Number = 31.233;
  getLocation(){
    console.log('1.检查是否支持位置信息...')
    alert('1.检查是否支持位置信息...')
    if (navigator.geolocation) {
      console.log('2.正在获取位置信息...')
      alert('2.正在获取位置信息...')
      navigator.geolocation.getCurrentPosition(this.posSuccess, this.posErr, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      })
    } else {
      alert('你的浏览器不支持获取地理位置')
    }
  }
  posSuccess(pos){
    console.log('获取位置成功:', pos)
    alert(pos.coords.longitude)
    let crd = pos.coords
    this.x = crd.longitude
    this.y = crd.latitude
    console.log(`经度：${this.x} 纬度：${this.y}`)
  }

  posErr(err){
    console.log('获取位置失败:', err)
    alert(`获取位置失败: ${err.code}`)

    switch(err.code) {
      case err.TIMEOUT:
          console.log('连接超时，请重试')
        break;
      case err.PERMISSION_DENIED:
          console.log('您拒绝了使用位置共享服务，查询已取消')
        break;
      case err.POSITION_UNAVAILABLE:
          console.log('无法获取您的地理位置')
        break;
      default:
        break;
    }
  }

  mounted() {
    console.log("初始化地图...")
    this.getLocation();

    this.$nextTick(() => {
      MP("n37hDGi4q9vXYoGq9LrawykWffibwYpc").then(BMap => {
        let map = new BMap.Map("v-map");
        map.centerAndZoom(new BMap.Point(this.x, this.y), 11);
      });
    });


  }
}
</script>
<style lang='scss' scoped>
.map-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#v-map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
