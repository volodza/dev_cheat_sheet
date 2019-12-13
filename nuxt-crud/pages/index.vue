<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        CHEAT SHEET
         <logo />
      </h1>

      <span @click="activate" class="add_btn" >+</span>

      <div v-if="isActive" class="docAdd"></div>
      
      <div 
        style="border-radius: 4px;border: 1px solid #3b8070;padding:10px;margin:10px" 
        v-for="(document,i) in documents" 
        :key="i" 
        class="doc"
      >
      <div style="display:flex;justify-content: space-between;">
        <h2  > {{ document.title }} </h2>
        <span class="close"></span>
      </div>
        <!-- <p>{{ document.content }}</p> -->
      </div>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
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
      .then(res => {
        res.json()
           .then(body => this.documents = body);
      })
    }
  },
  created: function() {
    this.getDocuments()
  }
}
</script>

<style>
.add_btn {
  border: 2px solid #00c58e;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    /* display: block; */
    margin: 0 auto;
    color: #2f495e;
    display: flex;
    justify-content: center;
    line-height: 1.1;
    /* text-align: center; */
    font-size: 50px;
    transition: all .3s;
    cursor: pointer;
}

.add_btn:hover{
  color:white;
  background-color:#00c58e;
  /* border: 2px solid #2f495e; */
}

.docAdd{
  height:100px;
  border:1px solid black;
  transition: all 3s;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.close {
position: relative;
/* right: 32px;
top: 32px; */
width: 26px;
height: 26px;
opacity: 0.3;
}
.close:hover {
opacity: 1;
}
.close:before, .close:after {
position: absolute;
left: 15px;
content: ' ';
height: 33px;
width: 2px;
background-color: #333;
}
.close:before {
transform: rotate(45deg);
}
.close:after {
transform: rotate(-45deg);
}
</style>
