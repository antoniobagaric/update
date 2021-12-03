<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <p class="title">Game database</p>
        <p class="subtitle">Find the game you need!</p>
      </div>
      <b-field label="Find a game" :label-position="labelPosition">
        <b-autocomplete
          rounded
          :data="['League of Legends', 'Diablo', 'Diablo 2']"
          placeholder="League of Legends"
          icon="magnify"
          clearable
          @select="(option) => (selected = option)"
        >
          <template #empty>No results found</template>
        </b-autocomplete>
      </b-field>
    </section>
    <br>
    <GameList />
    <Footer />
  </div>
</template>

<script>
import GameList from './GameList.vue'
import Footer from './Footer.vue'

export default {
  name: "Home",
  components: {
    GameList,
    Footer,
  },
  data() {
    return {
      labelPosition: "on-border",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  overflow: hidden;
  padding: 20px;
  background: #f0efef;
  border-radius: 5px;
}

p {
  margin-top: 20px;
}
</style>
