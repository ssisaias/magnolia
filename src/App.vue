<template>
  <div id="app">
    <header id="header">
      <span></span>
    </header>
    <main>    
      <section class="section">
      <div class="container">
        <div class="columns">
          <h1 class="title column">
            Sistemas Quixadá - Status:
          </h1>
          <h2 class="notification is-danger column is-two-fifths" v-if="error">
            Problem connecting to backend!
          </h2>
        </div>
        
        <div v-for="status in statuses" class="notification" v-bind:class="{'is-danger': status.status=='OFFLINE', 'is-success':status.status=='ONLINE', 'is-warning':status.status=='PROBLEM'}" :key="status._id">
          Status: <strong> {{status.status}} </strong> <span> - </span>
          {{ formatDate(status.date) }} <span> - </span>
          URL: {{status.address}}
        </div>
      </div>
    </section>
    </main>
    <footer class="footer">
  <div class="container">
    <div class="content has-text-centered columns">
      <p class="column">  
        <a class="github-button" href="https://github.com/ssisaias/magnolia" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ssisaias/magnolia on GitHub">Star</a>
      </p>
      <p class="column">  
        <a href="https://twitter.com/ssisaias?ref_src=twsrc%5Etfw" 
        class="twitter-follow-button" 
        data-show-count="false">Follow @ssisaias</a>
      </p>
    </div>
  </div>
</footer>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'app',
  data () {
    return {
      loading: false,
      statuses: [],
      error: false,
    }
  },
  methods: {
    getStatuses: function(){
      this.loading  = true;
      axios.get("http://localhost:3000/status")
      .then((response) => {
        this.loading = false;
        this.statuses = response.data;
        console.log(response.data);
      }, (error) => {
        this.loading=false;
        this.error=true;
        console.log(error);
      }
      )
    },
    formatDate: function(dateValue){
      moment.locale('pt-Br');
      return moment(dateValue).format('DD/MM/YYYY, h:mm:ss');
    }
  },
  created: function(){
    this.getStatuses();
  }
}
</script>

<style lang="scss">
  
</style>
