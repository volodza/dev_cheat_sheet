<template >
  <div class='header' >
    <ul class='menu drop'>
      <li class='menu-item'><a href="#"> </a> </li>
      <!-- <li class='menu-item'><a href="#">Поиск ЦА</a> </li> -->
      <!-- <li class='menu-item'><a href="#">Модератор</a> </li> -->
      <!-- <li class='menu-item'><a href="#">Обучение</a> </li> -->
      <!-- <li class='menu-item'><a @click='vkAuth' href="#">Магазин</a> </li> -->
    </ul>


    <ul class='menu'>
      <li class="bgn">
        <myTasks />
        <!-- <p>Мои задачи</p> -->
      </li>

      <li class="menu-item">
      </li>

      

    </ul>

    
  </div>
</template>



<style lang="sass" scoped>
  .header
    height: 50px
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    background: #fcfbf9
    border-bottom: 1px solid black
    
  .menu
    display: flex
    align-items: center
    position: relative
    background: #FAFAFA
    padding-left: 0
    margin-right: 5px
    .menu-item
      display: flex
      align-items: center
      margin-left: 5px
      border: 1px solid #d7d7d7
      border-radius: 2px
      cursor: pointer
      &:hover
        border: 1px solid #b0b0b0
        transition: 0.3s
      a,p
        padding: 5px 10px
        color: black
        text-decoration: none
        margin: 0
      .draw
        display: none

  .bgn
    display: flex
    align-items: center
    margin-left: 5px
    border-radius: 2px
    cursor: pointer

  .active
    border: 1px solid #b0b0b0 !important

  .activeTask
    background: #303030
      
  .btn-dropdown
    display: flex 
    align-items: center
    height: 29px

  .logIn
    background: #4A76A8
    border: none !important
    a
      color: white !important

  .avatar
    margin-left: 3px
    height: 23px
    width: 23px
    border-radius: 20%
    img 
      border-radius: inherit
      display: -webkit-inline-box
      display: -ms-inline-flexbox
      display: inline-flex
      height: inherit
      width: inherit
  .menu-dropdown
    position: absolute
    width: 180px
    top: 40px
    right: 5px
    background: #fff
    z-index: 800
    border: 1px solid #c5d0db
    padding: 4px 0
    border-radius: 4px
    filter: alpha(opacity=0)
    -o-transition: opacity 100ms linear, top 100ms linear, visibility 100ms linear
    transition: opacity 100ms linear, top 100ms linear, visibility 100ms linear
    ul   
      li 
        cursor: pointer
        padding: 3px 10px    
        font-size: 14px
        &:hover
          background-color: #f3f3f3   
    
  @media screen and (max-width: 820px)
    .drop 
      display: none !important
    .header
      justify-content: flex-end 
    .draw
      display: block !important

</style>