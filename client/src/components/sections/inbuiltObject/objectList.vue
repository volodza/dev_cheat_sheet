<template>
  <div class="array">
    <div class="title">
      <h1>{{type}}</h1>
      <p-btn @click="dialog = true" dark>Добавить</p-btn>
    </div>
    <createObject @close="dialog = $event" v-if="dialog" />
    <ul class="objectList">
      <!-- {{h}} -->
      <li v-for="obj in objects" :key="obj._id">
        <div>{{ obj.title }}</div>
        <div>{{ obj.content }}</div>
        <span @click="deleteObj(obj)">X</span>
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
  .title
    display: flex
    justify-content: space-between
    padding: 0 20px
    h1
      font-size: 40px
  .objectList
    background: white
    padding: 0
    li
      display: flex
      justify-content: space-between
      padding: 15px 20px
      border-bottom: 1px solid #303030
      span
        cursor: pointer
</style>

<script>
import createObject from './createObject'

export default {
  components: {
    createObject
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    type() {
      return this.$store.getters.type || localStorage.type
    },
    objects() {
      return this.$store.getters.objects
    }
  },

  watch: {
    type() {
      this.getObj()
    }
  },

  methods: {
    getObj() {
      this.$http.get('http://localhost:3000/documents/').then(res => {
        this.$store.commit(
          'setObjects',
          res.body.filter(x => x.type === this.type)
        )
      })
    },
    deleteObj(obj) {
      this.$http
        .delete('http://localhost:3000/documents/' + obj._id)
        .then(() => {
          // if(res!=200){
          //     err=>{
          //       err
          //     }
          //   }
          //   else{
          this.getObj()
          // }
        })
    }
  },
  created: function() {
    this.getObj()
  }
}
</script>
