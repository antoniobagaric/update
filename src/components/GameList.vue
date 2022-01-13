<template>
  <!-- <div class="container">
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
  </div> -->

  <div class="container">
    <div class="columns">
      <div
        v-for="(game, index) in players.slice(0, 3)"
        :key="index"
        class="column"
      >
        <GameCard :imgUrl="game.box_art_url" :gameName="game.name" />
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

  data() {
    return {
      // Defaultovi za sve pasmine i search. Pasmine su prazan array kojeg će kasnije response zamijenit s pravom stvari
      players: [],
      // ime: "",
    };
  },

  async mounted() {
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     // "Content-Type": "application/json",
    //     Authorization: "Bearer p2u2qy1wa8v4qclhh9qwkvarjc6hf7",
    //     "Client-ID": "ifdc6bz1c7va8de07gygej2msnzlep",
    //     Accept: "application/json",
    //   },

    //   // body: JSON.stringify({ title: "Vue POST Request Example" }),
    // };
    // let response = await fetch(
    //   "https://api.igdb.com/v4/companies",
    //   requestOptions
    // )

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 4lenx972iu94mp93wq6i76wtcf86uc",
        "Client-ID": "ifdc6bz1c7va8de07gygej2msnzlep",
        Accept: "application/json",
      },

      // body: JSON.stringify({ title: "Vue POST Request Example" }),
    };
    // let response = await fetch(
    //   "https://api.twitch.tv/helix/games/top",
    //   requestOptions
    // );

    // console.log("response", response);

    // this.players = response;

    await fetch(
      "https://api.twitch.tv/helix/games/top?after=eyJzIjoxMDEsImQiOmZhbHNlLCJ0Ijp0cnVlfQ==&&first=100",
      requestOptions
    )
      .then((res) => res.json())
      // .then((response) => response.data)
      .then((res) => {
        res.data.forEach((el) => {
          if (
            el.name != "Just Chatting" &&
            el.name != "Music" &&
            el.name != "Slots" &&
            el.name != "Pools, Hot Tubs, & Beached" &&
            el.name != "ASMR"
          ) {
            this.players.push(el);
          }
        });
      })
      .then(() => console.log(this.players));
  },

  computed: {
    /**
     * Sve što smo dobili od API i spremili gore u varijablu imena pasmine sada filtriramo. Točnije, ako pogledate što nam je API vratio (malo je neobičan) vidit ćete da imamo objekt u kojem je hrpa arrayeva (primjerice affenpinscher: []) gdje je key sam naziv jednog keya u tom objektu (ovako: { objKey: 'keyValue' }) zapravo naziv pasmine. Pa smo morali u objektu sve te keyeve pokupit i njih potom filtrirati na način da pitamo da li uključuje (includes) nešto što nam this.ime vraća odnosno nešto što search nalazi.
     */
    filtrirano() {
      let filtered = [];
      if (this.players.commonName)
        filtered = Object.keys(this.players.commonName).filter((item) =>
          item.includes(this.ime)
        );

      return filtered;
    },
  },
};
</script>

<style lang="scss"></style>
