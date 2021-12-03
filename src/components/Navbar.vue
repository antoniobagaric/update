<template>
    <div>
        <b-navbar class="navbar">
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                    <img
                        src="../assets/logo-social.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item href="#">
                <router-link to="/home">Home</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="/about">About</router-link>
                </b-navbar-item>
                <b-navbar-dropdown label="More">
                    <b-navbar-item href="#">
                        <router-link to="/Top20">Top 20</router-link>
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>

            <template #end>
                <b-navbar-item tag="router-link" :to="{ path: '/Signup' }">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>
