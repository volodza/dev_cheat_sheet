<template>
  <div
    @click="$emit('click', $event)"
    :class="dark ? 'btn dark' : 'btn light'"
    :style="'background-color:' + color"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    dark:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'#edeef0'
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    height: 35px
    line-height: 35px
    cursor: pointer
    border-radius: 2px
    text-align: center
    -moz-user-select: none
    -khtml-user-select: none
    -webkit-user-select: none
    user-select: none
    padding: 0 5px


  .dark
    color: white
    background: #4b4b4b !important
    &:hover
      background: #303030 !important


  .light
    color: black
</style>