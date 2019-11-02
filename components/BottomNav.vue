<template>
    <div>
        <v-bottom-navigation
            :value="activeBtn"
            grow
            fixed
        >
            <v-btn>
            <span>Home</span>
            <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn>
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn>
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<style>

</style>

<script>
export default {
    name: "BottomNav"
}
</script>


