<template>
  <div id="app">
    <header id="header">
      <span>-></span>
    </header>
    <main>    
      
    </main>
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
      jokes: [],
    }
  },
  methods: {
    getJokes: function(){
      this.loading  = true;
      axios.get("http://localhost:3000/status")
      .then((response) => {
        this.loading = false;
        this.jokes = response.data;
        console.log(response.data);
      }, (error) => {
        this.loading=false;
        console.log(error);
      }
      )
    }
  },
  created: function(){
    this.getJokes();
  }
}
</script>

<style lang="scss">
  body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}


button {
  background: #51B767;
  color: #ffffff;
  padding: 15px;
  border-radius: 0;
  font-weight: bold;
  font-size: 15px;
  border: 0;
}

.cards {
  background: #F5F5F5;
  height:400px;
}
 .cards:hover {
  transform: translateY(-0.5em);
  background: #EBEBEB;
}


.cards {
   column-count: 1;
  column-gap: 1em;
    margin-top: 70px;

} 
</style>
