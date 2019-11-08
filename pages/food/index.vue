<template>
    <v-container fluid>
        <v-row no-gutters dense>
            <v-col cols="10">
                <v-card
                    color="#385F73"
                    dark
                    style="border-radius: 5px 0px 0px 5px"
                >
                    <v-card-title class="headline">2 créditos</v-card-title>
                    <v-card-subtitle v-text="test"></v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="2">
                 <v-row
                    class="flex-column fill-height"
                    justify="center"
                    style="border-radius: 0px 5px 5px 0px; background-color: #000"
                >
                    <v-col
                        style="display:flex"
                        class="flex-column justify-center"
                    >
                        <v-btn icon>
                            <v-icon size="45" style="color: #FFF">mdi-refresh</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <!-- <v-card
                    color="#000"
                    dark
                    style="border-radius: 0px 5px 5px 0px"
                >
                    <v-btn icon>
                        <v-icon size="45">mdi-refresh</v-icon>
                    </v-btn>
                </v-card> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'menu',
    data: () => ({
        test: "Última atualização: 20 de Março, às 22:00"
    })
}
</script>

<style>

</style>
