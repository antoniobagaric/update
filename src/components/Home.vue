<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <p class="title">Game database</p>
        <p class="subtitle">Find the game you need!</p>
      </div>
      <b-field label="Find a game" :label-position="labelPosition">
        <b-autocomplete
          @typing="getData"
          rounded
          :data="filteredData"
          :loading="isFetching"
          field="el.name"
          placeholder="e.g. League of Legends"
          icon="magnify"
          clearable
          @select="(option) => onSelect(option)"
        >
          <template #empty
            >No results found, please type at least 2 letters</template
          >
        </b-autocomplete>
      </b-field>
    </section>
    <br />
    <GameList />
    <Footer />
  </div>
</template>

<script>
import GameList from "./GameList.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {
    GameList,
    Footer,
  },
  data() {
    return {
      labelPosition: "on-border",
      filteredData: [],
      data: [],
      isFetching: false,
    };
  },
  methods: {
    async getData(value) {
      if (value.length >= 2) {
        this.filteredData = [];
        this.data = [];
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 4lenx972iu94mp93wq6i76wtcf86uc",
            "Client-ID": "ifdc6bz1c7va8de07gygej2msnzlep",
            Accept: "application/json",
          },
        };
        this.isFetching = true;
        await fetch(
          `https://api.twitch.tv/helix/search/categories?query=${value}`,
          requestOptions
        )
          .then((res) => res.json())
          .then((res) => res.data)
          .then((res) => {
            res.forEach((el) => {
              if (
                el.name != "Just Chatting" &&
                el.name != "Music" &&
                el.name != "Slots" &&
                el.name != "Pools, Hot Tubs, & Beached" &&
                el.name != "ASMR"
              ) {
                this.filteredData.push(el.name);
                this.data.push(el);
              }
            });
          })
          .then(() => console.log(this.filteredData))
          .finally(() => (this.isFetching = false));
      }
    },

    onSelect(option) {
      this.selected = option;
      console.log(option);
      let selectedOption = this.data.filter((el) => el.name == option);
      this.$router.push({
        path: `/About/${selectedOption[0].id}/${selectedOption[0].name}`,
      });
    },
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
