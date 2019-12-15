<template>
  <div class="app__inner">
    <div class="content">
      {{ content }}
      <!-- <div class="document"> -->
        <div class="document-title">
          <input 
            class="document-title_input" 
            type="text" 
            placeholder="Название документа..."
            v-model="title"
          >
        </div>
        
        <div class="document-content">
          <textarea v-model="content" class="document-content_textarea" placeholder="Описание..."></textarea>
        </div>

        <div class="document-tags">
          <input v-model="tags" class="document-tags_input" placeholder="Теги через запятую" type="text">
        </div>
        <!-- <div class="document-footer"> -->
          <span @click="addDocument" class="add_btn">+</span>
        <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="sidebar">
      <div class="sidebar-block">
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
        <li class="menu-item">Menu 1</li>
      </div>
    </div>
  </div>
</template>>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  data() {
    return {
      title:'',
      content:'',
      tags:''
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
    },
    async addDocument (){
      let user = {
        title: this.title,
        content: this.content,
        tags:this.tags
      };

      let response = await fetch('/documents/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });

      this.$router.push('/')

      // if (response.ok) { // если HTTP-статус в диапазоне 200-299
      //   // получаем тело ответа (см. про этот метод ниже)
      //   let json = await response.json();
      // } else {
      //   alert("Ошибка HTTP: " + response.status);
      // }
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
    max-width: 1020px;
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
  /* padding: 17px 25px; */
  margin-bottom: 15px;
  border: 1px solid #393d41;
  border-radius: 2px;
  background-color: #22272b;
}

.document-title_input {
  width:100%;
  height:50px;
  background-color: #22272B;
  outline:none;
  border: none;
  color:#A6A6A6;
  padding:0 20px;
  font-size: 24px;
}

.document-content_textarea{
  background-color: #22272B;
  outline:none;
  border: none;
  color:#BFBFBF;
  font-size: 14px;
  width:100%;
  height:400px;
  resize: none;
}

.document-content{
  padding: 17px 20px;
  margin-bottom: 15px;
  border: 1px solid #393d41;
  border-radius: 2px;
  background-color: #22272b;
}
.document-tags{
  /* padding: 17px 25px; */
  margin-bottom: 15px;
  border: 1px solid #393d41;
  border-radius: 2px;
  background-color: #22272b;
}
.document-tags_input{
    width:100%;
  height:30px;
  background-color: #22272B;
  outline:none;
  border: none;
  color:#D7D7D7;
  padding:0 20px;
  font-size: 13px;
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