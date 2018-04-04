<template>
  <div class="map-wrap full-page fui-transitions">
    <f-close :close-type="'header'"></f-close>
    <div id="v-map"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { MP } from "./map"
const AK:String = 'n37hDGi4q9vXYoGq9LrawykWffibwYpc'
let map:any = {}
let BMap:any = {}

@Component({})
export default class Map extends Vue {
  x: Number = 116.331398;
  y: Number = 39.89744;

  getLocation(){
    if (navigator.geolocation) { // 原生API获取定位
      navigator.geolocation.getCurrentPosition(this.posSuccess, this.posErr, {
        enableHighAccuracy: true,
        timeout: 3000,
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
    // 如果原生获取地理位置失败，调用百度地图接口获取当前城市
    this.getCurrCity();
    
  }
  // 根据IP获取地理位置---获取的位置不准
  locationByIp(){
    this.$http.jsonp(`https://api.map.baidu.com/location/ip`,{
      params:{
        ak:AK,
        coor:'bd09l'
        }  
    }).then(res => {
      let point = res.data.content.point
      this.x = point.x;
      this.y = point.y;
      let currPoint = new BMap.Point(this.x, this.y);
      let mk = new BMap.Marker(currPoint);
      map.addOverlay(mk);
      let label = new BMap.Label(`x:${this.x}, y:${this.y}`);
      mk.setLabel(label)
      map.setCenter(new BMap.Point(currPoint), 12);
    })
  }
  // 百度API获取当前城市
  getCurrCity(){
    let currCity = new BMap.LocalCity()
    currCity.get(this.localCity)
  }
  // 定位到当前城市
  localCity(result){
    let cityName = result.name;
    map.setCenter(cityName);
    alert(`当前城市是${cityName}`);
  }
  mounted() {
    console.log("初始化地图...")
    this.$nextTick(() => {
      MP(AK).then(BM => {
        BMap = BM
        this.getLocation()
        map = new BMap.Map("v-map")
        let initPoint = new BMap.Point(this.x, this.y);
        let mk = new BMap.Marker(initPoint);
        map.addOverlay(mk);
        let label = new BMap.Label(`x:${this.x}, y:${this.y}`);
        mk.setLabel(label);
        map.centerAndZoom(new BMap.Point(this.x, this.y), 12)
        
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
