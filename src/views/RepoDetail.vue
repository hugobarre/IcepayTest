<template>
    <div class="view">
        <h1 data-cy="title" v-if="repoInfo">{{repoInfo.name}} Repository Detail </h1>
        <p data-cy="id" v-if="repoInfo">Id: {{repoInfo.id}}</p>
        <p  data-cy="fullName" v-if="repoInfo">Full Name: {{repoInfo.full_name}}</p>
        <p  data-cy="owner" v-if="repoInfo">Owner: {{repoInfo.owner.login}}</p>
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
          .then(res => {
              console.log(res.data);
              this.repoInfo = res.data;
              })
          .catch(error => console.log(error));
    }


}
</script>