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
        </div>  --> <section class="hero">
      <div class="hero-body">
        <p class="title">Game database</p>
        <p class="subtitle">Find the game you need!</p>
      </div>
      <b-field  label="" :label-position="labelPosition">
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
        <section class="hero is-large is-info">
            <div class="hero-body">
                <p class="title">
                League of legends
                </p>
                <p class="subtitle">
                This weeks best
                </p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                    in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.
                    10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renai
                    ssance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in sect
                    ion 1.10.32
                </p>
                <img
          id="test"
          src="../assets/league-of-legends-champions-i102252.jpg"
          alt=""
        />
            </div>
        </section>
        <br>
    <Footer/>
    </div>
</template>

<script>
import Footer from "./Footer.vue"
        export default {
        name: "About",
        components:{
            Footer
        }
        };
</script>

<style scoped>
    .hero.is-large .hero-body{
        padding: 25px 25px;
        background-color:#ffffffa2;
        text-align: left;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);

        }
    .hero.is-large .hero-body p{
        color:black;
        }
    /* .hero-body{
        text-align: left;
        margin: 20px;
        padding: 10px;
    } */

    img {
        display: block;
        margin-left:auto;
        margin-right: auto;
        margin-top:40px;
    }
    .okvir {
        background-color: #0077ff;
        font-size: 25px;
        padding: 30px;
        font-weight: bold;
    }
    .okvir p{
        padding:10px 10px 20px 10px;
        color:black;

    }
    .trazilica{
        margin:auto;
        max-width: 70%;
    }
    .title{
        color:black;
        }

    .hero-body{
        padding:10px;
    }
    
</style>