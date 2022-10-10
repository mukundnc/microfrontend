<template>
  <div style="containerTodo">
    <div class="checkbox">
      <input type="checkbox" v-model="check" @change="onChange()"/>
    </div>
    <div :class="getTextClass">
      <label>{{text}}</label>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'ToDo',
  props: {
    check: Boolean,
    msg: String,
    onCheck: Function,
    id: String
  },
  setup(props) {
    var checked = ref(props.check || false);
    var text = ref(props.msg || '');
    function onChange(){
      props.onCheck(props.id, checked.value);
    }
    return {
      checked,
      text,
      getTextClass: computed(() => checked.value ? 'messageCross' : 'message'),
      onChange
    }
  },
}
</script>

