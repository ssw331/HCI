<template>
  <div id="app">

    <router-view />
  </div>

</template>

<script>
import request from "@/utils/request";

import {getCurrentInstance} from "vue";
import Login from "@/components/Login.vue";
import Chat from "@/components/chat.vue";
export default {
  name: 'App',
  components: {
Chat, Login,
  },
  data(){
    return{
    isCollapse:false,
      aside_width:"200px",


    }
  },

  methods:{

    doCollapse(){
      if(!this.isCollapse){
        this.isCollapse=true;
        this.aside_width="64ps"
      }
      else{
        this.isCollapse=false;
        this.aside_width="200px";
      }

    },
    open()
    {
      request.get('user/list')
          .then((response)=>{
            console.log(response)
          })
    }


  },

}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>
