<template>
  <div class="array">
    <p-btn @click="dialog=true" dark>Добавить</p-btn>
    <createObject 
    @close='dialog=$event'
    v-if="dialog"/>
  <ul class="objectList">
    <li>
      
    </li>
  </ul>
  </div>
</template>

<style lang="sass" scoped>
  .array
    display: flex
    flex-direction: column
    background: white
    min-height: 100%
    padding: 15px 15px
    min-height: 100vh
</style>

<script>
import createObject from "./createObject"

export default {
  components:{
    createObject
  },
  data(){
  return {
    dialog: false,
  }
},
methods:{

}
}
</script>