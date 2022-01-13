<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          id="test"
          :src="
            'https://static-cdn.jtvnw.net/ttv-boxart/' +
            gameName +
            '-1920x1080.jpg'
          "
          alt=""
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ gameName }}</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: ["gameName", "imgUrl"],
};
</script>

<style lang="scss"></style>
