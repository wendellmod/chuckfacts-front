<template>
  <div class="home">
      <v-card-text>
          <p>{{fact.value.joke}}</p>
      </v-card-text>
  </div>
</template>

<script>

export default {

  name: 'home',
  components: {
  },
  created() {
    this.$store.dispatch('facts/fetchFact')
  },
  computed: {
    fact() {
      return this.$store.state.facts.fact.data
    }
  },
  data() {
    return {
      
    }
  }
  
}
</script>