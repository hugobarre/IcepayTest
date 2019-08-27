<template>
    <div class="view">
        <div class="add">  <vs-button   @click="isShow = !isShow" type="filled">Add Repository</vs-button></div>

        <RepositoryList v-bind:refresh="refresh" />
        
        <simple-modal v-model="isShow" title="Add new repository">
            <template slot="body">
                <div class="centerx default-input add-item">
                  <span>Name:</span>   <vs-input class="inputx" v-model="repo.name"/>
                </div>
                <div class="centerx default-input add-item">
                  <span>Description:</span>   <vs-input class="inputx" v-model="repo.description"/>
                </div>
                <div class="centerx default-input add-item">
                  <span>Home Page:</span>   <vs-input class="inputx" v-model="repo.homePage"/>
                </div>

                <div class="add" >  <vs-button  data-cy="addButton"  @click="addRepo()" type="filled">Add</vs-button></div>
            </template>
            <template slot="footer">
            </template>
        </simple-modal>
    </div>
</template>

<script>

import RepositoryList from '../components/RepositoryList'
import axios from 'axios'
import SimpleModal from 'simple-modal-vue'


export default {
    components:{
        RepositoryList,
        SimpleModal 
    },

    data() {
    return { isShow: false,
    refresh:false,
    repo: { 
        name:'',
        description:'',
        homePage:''
    } }
    },

    methods: {
       

        getAccessToken(){
             return localStorage.getItem('access-token')
        },

        addRepo(){
            var repo = {
                "name": this.repo.name,
                "description": this.repo.description,
                "homepage": this.repo.homePage,
                "private": false,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
            };
            
            var token = this.getAccessToken();

             axios.post(`https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos?${token}`,repo)
            .then(res => {
              console.log(res.data);

              this.isShow = false;
              this.refresh = true;
            })
            .catch(error => {
                console.log(error);
                         this.isShow = false;
                });
        }
    }
}
</script>

<style scoped>
 .add {
    text-align: right;
    padding: 10px;
 }
   
.add-item {
    padding: 5px;
}

.add-item span{
    padding:5px;
}

.add-item div{
    display: inline-block;
}
</style>