<template>
  <div class="navigation">
    <div class="side-header" >
      <span>4B Parser</span>
    </div>


    <!-- <div class="nav-heading">Инструменты</div> -->

    <div v-for="(link,i) in links" :key="i">
      <v-layout @click="selectLink(link)" :class="[{'select': isActive==link.title}, 'nav-submenu']" >
        <span>{{link.title}}</span>
        <v-spacer></v-spacer>
      </v-layout>

      <transition name="slide-fade">
        <ul v-show="isActive == link.title">
          <li 
            v-for="(child,j) in link.children" 
            :key="j" 
            :class="[{'select':selected==child.title},'nav-submenu']"
            @click="selectChild(child)"
          >
            {{child.title}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected:null || localStorage.childTitle,
      isActive:null || localStorage.linkTitle,
      links:[
        {
          url: "/main/decision",
          title:'Решения',
          children:[
            { title: "Сообщества",},
            { title: "Пользователи",},
            { title: "Родители",},
            { title: "Дни рождения",}
          ]
        },
        {
          url: "/main/objectList",
          title:'Встроенные объекты',
          children:[
            { title: "Array",type: 'Array'},
            { title: "String", type: 'String'},
            { title: "Object", type: 'Object'},
            { title: "Number", type: 'Number'},
            // { title: "Топ участники", icon: "mdi-new-box", url: "/main/topParticipant"},
            // { title: "Участники", icon: "mdi-new-box", url: "/main/participant"},
            // { title: "Недавно вступившие", icon: "mdi-new-box", url: "/recentlyjoin", iconColor: "red"},
            // { title: "Комментарии", icon: "mdi-human-male-boy", url: "/Comments" }
          ]
        },
        {
          url: "/main/function",
          title:'Функции',
          children:[
            { title: "Вступления", icon: "mdi-account-multiple", url: "" },
            { title: "Сообщества", icon: "mdi-account", url: "" }
          ]
        }
      ]

    }
  },
  computed:{
    type(){
      return this.$store.getters.type
    }
  },
  methods:{
    selectChild(child){
      this.$router.push(localStorage.linkUrl)
      this.selected=child.title
      this.$store.commit('setType', child.type)
      localStorage.type=child.type
      localStorage.childTitle=child.title
    },
  
    selectLink(link){
      this.isActive == link.title?this.isActive =null:this.isActive = link.title
      localStorage.linkTitle=link.title
      localStorage.linkUrl=link.url
      
    }
  },


}
</script>

<style lang="sass">
  .side-header
    font-size: 26px
    text-align: center
    height: 50px
    border-bottom: 1px solid white

  .nav-heading
    padding: 12px 20px 6px 20px
    font-size: 12px
    font-weight: 600
    text-transform: uppercase
    color: #b8b8b8

  .nav-submenu
    padding: 5px 20px
    display: block
    // margin: 10px 0
    cursor: pointer
    color: #b8b8b8
    font-size: 17px
    
    &:hover
      color: white
      background-color: #282828

    .submenu_icon
      margin-right: 15px
      color: inherit
      transition: none
      &-chevron
        margin-right: 0
        color: inherit
        transition: none

  .select
    color: white !important

  ul
    padding-left: 30px
    list-style: none
    background-color: #282828

  .slide-fade-enter-active 
    transition: all .3s ease
  .slide-fade-enter
    transform: translateX(10px)
    opacity: 0
  ::-webkit-scrollbar-button 
    background-image: url('') 
    background-repeat: no-repeat
    width: 6px
    height: 0px 


  ::-webkit-scrollbar-track 
    background-color: #eef1f07e
    /* box-shadow:0px 0px 3px #000 inset;  */


  ::-webkit-scrollbar-thumb 
    /* -webkit-border-radius: 5px;  */
    /* border-radius: 5px;  */
    background-color: #4f555e
    /* box-shadow:0px 1px 1px #fff inset;  */

    background-position: center
    background-repeat: no-repeat


  ::-webkit-resizer
    background-image: url('')
    background-repeat: no-repeat
    width: 7px
    height: 0px 
  

  ::-webkit-scrollbar
    width: 5px

</style>