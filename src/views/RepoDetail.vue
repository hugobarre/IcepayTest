<template>
    <div class="view">
        <h1>{{repoInfo.name}} Repository Detail </h1>
        <p>Id: {{repoInfo.id}}</p>
        <p>Full Name: {{repoInfo.full_name}}</p>
        <p>Owner: {{repoInfo.owner.login}}</p>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            repoInfo:{
                owner :{}
            }
        }
    },

    methods:{
        getAccessToken(){
             return localStorage.getItem('access-token')
        }
    },

    created(){
       
        var token = this.getAccessToken();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/repos/${this.$route.params.owner}/${this.$route.params.repo}?${token}`)
          .then(res => 
              this.repoInfo = res.data)
          .catch(error => console.log(error));
    }


}
</script>