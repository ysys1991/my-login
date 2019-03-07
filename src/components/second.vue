<template>
  <div id="secondChild">
    <h2>second组件</h2>
    <p>从first接收的字符串参数：{{msg}}</p>
  </div>
</template>
<script>
import bus from '../utils/eventBus'

export default {
  data() {
    return {
      msg: '默认值'
    }
  },
  mounted() {
    var _self = this
    bus.$on('userDefinedEvent',function(msg){
      _self.msg = msg
    })
  }
}
</script>
<style>

</style>


