<template>
  <div class="app__inner">
    <div class="content">
      <div 
        v-for="(document,i) in documents"
        :key="i"
        class="document"
      >
        <div class="document__header">
          <h2>{{ document.title }}</h2>
        </div>

        <div class="document__content">
          <p>{{ document.content }}</p>
        </div>

        <!-- <div class="document__tags">
          {{ document.tags}}
        </div> -->

        <div class="document__footer">
          <div class="tags"> {{ document.tags}} </div>
          <div class="instruments">
            <span style="cursor:pointer" @click="1">Редактировать</span>
            <span style="cursor:pointer" @click="deleteDocument(document._id)">Удалить</span>
          </div>
          
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="sidebar-block">
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
      </div>
      <span class="add_btn" @click="$router.push('/add')" >+</span>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  data() {
    return {
      documents:[],
      isActive:false
    }
  },
  methods:{
    activate(){
      this.isActive = true;
    },
    getDocuments(){
      fetch('http://localhost:3000/documents/').then(res => {
        res.json()
           .then(body => this.documents = body);
      })
    },
    deleteDocument(id){
      fetch('http://localhost:3000/documents/' + id,{method: 'DELETE'})
      this.getDocuments()
      // .then(res => {
      //   res.json()
      //      .then(body => this.documents = body);
      // })
    }
  },
  created: function() {
    this.getDocuments()
  }
}
</script>

<style scoped lang='sass'>
.app__inner 
  max-width: 1110px
  padding-left: 80px
  padding-right: 10px
  margin: 0 auto
  flex: 1
  min-width: 900px
  position: relative
  max-width: 1020px
  width: 100%

.content
  width: 70%
  float: left
  // padding-right: 12px
  margin-top: 15px

.document 
  overflow: hidden
  min-height: 75px
  width: 100%
  border: 1px solid #393d41
  border-radius: 2px
  background-color: #22272b
  box-sizing: border-box
  animation-duration: 2000ms
  animation-fill-mode: forwards
  margin-bottom: 15px

  &__header
    padding: 17px 25px 0
    margin-bottom: 15px

    h2
      overflow: hidden
      display: inline-block
      max-width: 100%
      font-weight: 400
      font-size: 20px
      line-height: 24px
      cursor: pointer
      text-overflow: ellipsis
      white-space: nowrap
      margin: 0
      color: #7D7D7D

  &__content
    padding: 0 25px
    font-size: 14px
    color: #24f0ff
    white-space: pre-wrap

  &__tags
    margin: 25px
    position: relative
    line-height: 0
    font-size: 13px
    color: #7D7D7D
  
  &__footer
    font-size: 13px
    line-height: 36px
    overflow: hidden
    padding: 0 25px
    border-top: 1px solid #393d41
    background-color: #1a1e21
    display: flex
    justify-content: space-between

    span
      margin-left: 15px

.sidebar
  padding-left: 6px
  width: 29%
  position: relative
  float: right
  margin-right: 0



.sidebar-block
    margin-top: 15px
    font-size: 13px
    line-height: 20px
    font-weight: 400
    border: 1px solid #393d41
    border-radius: 2px
    background-color: #22272b
    padding: 10px 25px


.menu-item
  padding: 0 25px
  text-decoration: none


.add_btn 
  border: 1px solid #00c58e
  border-radius: 2px
  height: 50px
  width: 100%
  /* display: block; */
  margin: 15px auto
  color: #393d41
  display: flex
  justify-content: center
  line-height: .7
  /* text-align: center; */
  font-size: 50px
  transition: all .3s
  cursor: pointer

.add_btn:hover
  color:#393d41
  background-color:#00c58e
  /* border: 2px solid #2f495e; */




</style>
