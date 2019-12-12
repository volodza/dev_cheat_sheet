<template>
  <div>
    <div class="overlay" @click="close()"></div>
    <div class="createObject">
      <div class="header">Добавить объект</div>
      <div class="data">
        <div class="layout">
          <p-input v-model="name" class="name" label="Название"></p-input>
          <p-input v-model="description" class="description" label="Описание"></p-input>
        </div>
         <div class="add">
            <p-btn @click="addObject()" dark>Добавить</p-btn>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.overlay
  background: rgba(102, 102, 102, 0.2)
  width: 100%
  height: 100%
  position: fixed
  top: 0
  z-index: 1
  left: 0
  cursor: default

.createObject
  cursor: default
  z-index: 8
  max-width: 600px
  position: fixed
  top: 5%
  max-height: 95%
  overflow: auto
  right: 0
  left: 0
  margin: auto
  background: #c2c2c2
  .header
    color: white
    background: #303030
    padding: 5px
    font-size: 17px
  .data
    display: flex
    display: flex
    flex-direction: column
    background: white
    padding: 12px
    .name
      flex-basis: 25%
      margin-right: 10px
      height: 30px
    .description
      flex-basis: 70%
    .add
      display: flex
      justify-content: flex-end 
      padding: 12px

.layout
  display: flex
  flex-wrap: wrap
  align-items: flex-end

.flex
  padding: 12px
  display: flex
  flex-direction: column
</style>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
    }
  },

  computed:{
  type(){
    return this.$store.getters.type || localStorage.type
  }

},
  methods: {
    addObject(){
      let result = {
        title: this.name,
        content: this.description,
        type: this.type,
        date: new Date()
      };

      this.$http.post("http://localhost:3000/documents/", result).then(() => {
        // if(res!=200){
          // this.$store.commit('setObject', res)
        // }
        // else{
          window.location.href = '/main/objectList'
        // }
      });
    },
    close() {
      this.$emit('close', false)
    }
  }
}
</script>
