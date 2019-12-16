<template>
  <div class="app__inner">
    <div class="content">
      <div 
        v-for="(document,i) in documents"
        :key="i"
        class="document"
      >
        <h2 class="document-title">{{ document.title}}</h2>
        <div class="document-content">
          <prism language="javascript">{{ document.content }}</prism>
        </div>
        <div class="document-tags">
          {{ document.tags}}
        </div>
        <div class="document-footer">
         <span style="cursor:pointer" @click="1">Редактировать</span>
          <span style="cursor:pointer" @click="deleteDocument(document._id)">Удалить</span>
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
</template>>

<script>
import Logo from '~/components/Logo.vue'
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  data() {
    return {
      documents:[{content:'let i = 0'}],
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
    async deleteDocument(id){
      await fetch('http://localhost:3000/documents/' + id,{method: 'DELETE'})
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

<style scoped>

.app__inner {
    max-width: 1110px;
    padding-left: 80px;
    padding-right: 10px;
    margin: 0;
    flex: 1;
    min-width: 900px;
    position: relative;
    /* max-width: 1020px; */
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.content{
  width: 70%;
  float: left;
  padding-right: 12px;
  margin-top: 15px;
}

.document {
    overflow: hidden;
    min-height: 75px;
    width: 100%;
    border: 1px solid #393d41;
    border-radius: 2px;
    background-color: #22272b;
    box-sizing: border-box;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
    margin-bottom:15px;
}

.document-title{
  padding: 17px 25px 0;
  margin-bottom: 15px;
}

.document-content{
  padding: 0 25px;
}

.document-tags{
  margin: 25px;
  position: relative;
  line-height: 0;
}

.document-footer{
    font-size: 13px;
    line-height: 36px;
    overflow: hidden;
    padding: 8px 25px;
    border-top: 1px solid #393d41;
    background-color: #1a1e21;
    display: flex;
    justify-content: space-between;
}

.sidebar{
  padding-left: 6px;
  width: 30%;
  position: relative;
  float: right;
  margin-right: 0;
  overflow: hidden;
}

.sidebar-block{
    margin-top: 15px;
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    border: 1px solid #393d41;
    border-radius: 2px;
    background-color: #22272b;
    padding: 10px 25px;
}

.menu-item{
  padding: 0 25px;
  text-decoration: none;
}

.add_btn {
  border: 1px solid #00c58e;
  border-radius: 2px;
  height: 50px;
  width: 100%;
  /* display: block; */
  margin: 15px auto;
  color: #393d41;
  display: flex;
  justify-content: center;
  line-height: .7;
  /* text-align: center; */
  font-size: 50px;
  transition: all .3s;
  cursor: pointer;
}
.add_btn:hover{
  color:#393d41;
  background-color:#00c58e;
  /* border: 2px solid #2f495e; */
}



</style>