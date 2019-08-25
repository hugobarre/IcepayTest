<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import axios from 'axios'
import router from 'vue-router'
export default {
  name: 'app',
  components:{
    Header
  },
  data () {
    return {
      msg: 'Welcome to a Vue.js frontend assignment'
    }
  },
   beforeCreated () {
     console.log("before");
   },

  created(){

      this.authorize();      
      
  },
  methods:{
    authorize(authCode) {
        authCode = authCode || this.getAuthCode()
        console.log(authCode);
        if(!authCode) {
            window.location.replace(`https://github.com/login/oauth/authorize?client_id=14c13dbddc3c629cb068&redirect_uri=http://localhost:8080/home`)
            const code =  window.location.search.substring(window.location.search.indexOf('=') + 1);
            this.setAuthCode(code)
        }
        else{
             var codenew = window.location.search.substring(window.location.search.indexOf('=') + 1);
            axios.post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=14c13dbddc3c629cb068&redirect_uri=http://localhost:8080/home&client_secret=eba91738d0cb7bff93b101e59dccd5715152fa91&code=${codenew}`)
            .then(res => 
              this.setAccessToken(res.data))
            .catch(error => console.log(error));
        }
        

        
    },

    getAuthCode() {
        return localStorage.getItem('auth-code')
    },

    setAuthCode(authCode) {
        localStorage.setItem('auth-code', authCode);
    },

    setAccessToken(accessToken) {
        localStorage.setItem('access-token', accessToken);
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;
  margin-top: 0px;*/
}

h1, h2 {
  font-weight: normal;
}

.view {
  margin-top: 20px;
  padding: 20px;
}
</style>
