<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <GameCard />
      </div>
      <div class="column">
        <GameCard />
      </div>
      <div class="column">
        <GameCard />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <GameCard />
      </div>
      <div class="column">
        <GameCard />
      </div>
      <div class="column">
        <GameCard />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  name: "GameList",
  components: {
    GameCard,
  },
};
</script>

<style lang="scss"></style>
