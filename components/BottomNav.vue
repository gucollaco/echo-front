<template>
    <div>
        <v-bottom-navigation
            :value="activeBtn"
            grow
            fixed
            dark
            background-color="teal darken-4"
            color="teal lighten-5"
        >
            <v-btn to="/food" nuxt>
                <span>Food</span>
                <v-icon>mdi-food</v-icon>
            </v-btn>

            <v-btn to="/calendar" nuxt>
                <span>Calendar</span>
                <v-icon>mdi-calendar-blank</v-icon>
            </v-btn>

            <v-btn to="/home" nuxt>
                <span>Home</span>
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn to="/classes" nuxt>
                <span>Classes</span>
                <v-icon>mdi-book-variant</v-icon>
            </v-btn>

            <v-btn to="/profile" nuxt>
                <span>Profile</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<style>

</style>

<script>
export default {
    name: "BottomNav",
    data () {
        return {
            activeBtn: 2,
        }
    }
}
</script>


