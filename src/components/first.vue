<template>
  <div id="first">
    <h1>first组件</h1>
    <button @click="sendMsg">向组件传值</button>
  </div>
</template>
<script>
import bus from '../utils/eventBus'
export default {
  methods: {
    sendMsg: function() {
      bus.$emit('userDefinedEvent','值来自于first组件')
    }
  }
}
</script>
<style>

</style>


