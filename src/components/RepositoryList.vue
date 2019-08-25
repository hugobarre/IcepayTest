<template>
    <div>
        <div v-bind:key="repository.id" v-for="repository in repositories" class="repos">
            <a v-bind:href="'#/repodetail/' + repository.owner.login + '/' + repository.name" >{{repository.name}}</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"RepositoryList",
    data () {
    return {
      repositories: [
        ]
    }
  },

  methods:{
        getAccessToken(){
             return localStorage.getItem('access-token')
        }
    },

    created(){
        console.log('get data');
        var token = this.getAccessToken();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos?${token}`)
          .then(res => this.repositories = res.data)
          .catch(error => console.log(error));
    }
}
</script>

<style scoped>
.repos{
    text-align: left;
    background:lightslategrey;
    border-block-end-style: solid;
    padding: 10px;
    color: white;

}

.repos a {
    color: white;
    font-weight: bold;
}
</style>