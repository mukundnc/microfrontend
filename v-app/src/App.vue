<template>
  <div>
    <MyTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'

export default {
  name: 'App',
  components: {
    MyTable
  },
  props:{
    apiUrl: String
  },
  setup(props) {
    console.log(props)
  },
}
</script>

<style lang="scss">
  // @import url('./index.css');
  @import url('./assets/style.css');
  @import url('./assets/bootstrap.min.css');
</style>
