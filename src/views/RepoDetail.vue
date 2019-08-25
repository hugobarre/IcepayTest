<template>
    <div class="view">
        <h1 v-if="repoInfo">{{repoInfo.name}} Repository Detail </h1>
        <p v-if="repoInfo">Id: {{repoInfo.id}}</p>
        <p v-if="repoInfo">Full Name: {{repoInfo.full_name}}</p>
        <p v-if="repoInfo">Owner: {{repoInfo.owner.login}}</p>
        <RepoCommits v-if="repoInfo" v-bind:fullname="repoInfo.full_name" />
    </div>
</template>

<script>
import axios from 'axios'
import RepoCommits from '../components/RepoCommits'
export default {
    data(){
        return{
            repoInfo: null
        }
    },
    components:{
        RepoCommits
    },
    methods:{
        getAccessToken(){
             return localStorage.getItem('access-token')
        }
    },

    created(){
       
        var token = this.getAccessToken();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/repos/${this.$route.params.owner}/${this.$route.params.repo}?${token}`)
          .then(res => this.repoInfo = res.data)
          .catch(error => console.log(error));
    }


}
</script>