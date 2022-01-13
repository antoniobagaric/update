<template>
  <div class="container">
    <!-- <div class="okvir">
            <p> Find the game you need!</p>
            <b-field class="trazilica">
                <b-autocomplete
                    rounded
                    :data="['League of Legends', 'Diablo', 'Diablo 2']"
                    placeholder="Find a game"
                    icon="magnify"
                    clearable
                    @select="(option) => (selected = option)">
                    <template #empty>No results found</template>
                </b-autocomplete>
            </b-field>
        </div>  -->
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
          :open-on-focus="true"
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
    <section class="hero is-large is-info">
      <div class="hero-body">
        <p class="title">{{ $route.params.name }}</p>
        <div>
          <img
            id="test"
            :src="
              'https://static-cdn.jtvnw.net/ttv-boxart/' +
              $route.params.name +
              '-800x600.jpg'
            "
            alt=""
          />
        </div>
      </div>
    </section>
    <h1>Active Streamers:</h1>

    <b-table :data="tableData">
      <b-table-column
        field="user_name"
        label="Username"
        sortable
        v-slot="props"
      >
        {{ props.row.user_name }}
      </b-table-column>
      <b-table-column
        field="viewer_count"
        label="Viewer Count"
        sortable
        v-slot="props"
      >
        {{ props.row.viewer_count }}
      </b-table-column>
      <b-table-column field="language" label="Language" sortable v-slot="props">
        {{ props.row.language }}
      </b-table-column>
    </b-table>

    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "About",
  components: {
    Footer,
  },
  data() {
    return {
      labelPosition: "on-border",
      id: this.$route.query.id,
      name: this.$route.query.name,
      tableData: [],
      filteredData: [],
      data: [],
      isFetching: false,
    };
  },
  async mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 4lenx972iu94mp93wq6i76wtcf86uc",
        "Client-ID": "ifdc6bz1c7va8de07gygej2msnzlep",
        Accept: "application/json",
      },
    };

    await fetch(
      `https://api.twitch.tv/helix/streams?game_id=${this.$route.params.id}&first=10`,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => (this.tableData = res));
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

<style scoped>
.hero.is-large .hero-body {
  padding: 25px 25px;
  background-color: #ffffffa2;
  text-align: left;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
}
.hero.is-large .hero-body p {
  color: black;
}
/* .hero-body{
        text-align: left;
        margin: 20px;
        padding: 10px;
    } */

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.okvir {
  background-color: #0077ff;
  font-size: 25px;
  padding: 30px;
  font-weight: bold;
}
.okvir p {
  padding: 10px 10px 20px 10px;
  color: black;
}
.trazilica {
  margin: auto;
  max-width: 70%;
}
.title {
  color: black;
}

.hero-body {
  padding: 10px;
}
</style>
