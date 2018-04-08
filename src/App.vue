<template>
  <div id="app">
    <header id="header">
      <span></span>
    </header>
    <main>    
      <section class="section">
      <div class="container">
        <h1 class="title">
          Sistemas Quixadá - Status:
        </h1>
        
        <div class="notification is-danger">
        AHAHAHAHA
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

<!-- <div v-for="joke in jokes" :key="joke._id">
           <div class="col-md-4 cards">
             <div>
               {{joke}}
             </div>
           </div>
         </div> -->

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      loading: false,
      statuses: [],
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
        console.log(error);
      }
      )
    }
  },
  created: function(){
    this.getStatuses();
  }
}
</script>

<style lang="scss">
  
</style>
