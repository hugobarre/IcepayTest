<template>
   <div class="commits">
       <p>Repo commits </p>
        <ul>
            <li v-if="commits==null">No commits found</li>
            <li v-for="record in commits" v-bind:key="record.sha">
                <a  class="commit">{{ record.sha.slice(0, 7) }}</a>
                - <span class="message">{{ record.commit.message | truncate }}</span><br>
                by <span class="author"> {{ record.commit.author.name }}</span>
                at <span class="date">{{ record.commit.author.date | formatDate }}</span>
            </li>
  </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"RepoCommits",
    props: ["fullname"],
    data () {
    return {
         commits: null
    }
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
    created(){
        console.log(this.fullname);
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/repos/${this.fullname}/commits`)
          .then(res => {console.log(res.data);
          this.commits = res.data;})
          .catch(error => 
          {
                console.log(error);
          });
      }
}
</script>
<style scoped>

.commits {
   padding: 20px;
   text-align: left;
  font-family: 'Helvetica', Arial, sans-serif;
}

p {
    font-weight: bold;
    padding: 10px;
}

a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author, .date {
  font-weight: bold;
}
</style>