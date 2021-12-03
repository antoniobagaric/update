<template>
    <section>
        <div class="signin">
            <b-field label="Name">
                <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email"
                type="is-danger"
                message="This email is invalid">
                <b-input type="email"
                    value="john@"
                    maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Username"
                type="is-success"
                message="This username is available">
                <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                    value="iwantmytreasure"
                    password-reveal>
                </b-input>
            </b-field>

            <b-field label="Description">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>
        </div>
        <div class="buttons">
            <b-button tag="input"
                    native-type="submit"
                    value="Submit input" />
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
</script>

<style scoped>
.signin{
    margin:auto;
    max-width: 30%;
    padding: 40px;
}
.buttons{
    all:unset;
   align-items: center;
}
</style>