<template>
    <v-container fluid>
        <v-row justify="end mb-n12">
            <v-app-bar-nav-icon class="mr-2" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-navigation-drawer
                v-model="drawer"
                absolute
                bottom
                temporary
            >
                <v-list
                    subheader
                    class="mt-2"
                >
                    <v-subheader>Olá João Carlos Martins!</v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list
                    subheader
                    two-line
                    flat
                >
                    <v-subheader>Configuração</v-subheader>

                    <v-list-item-group
                        v-model="settings"
                        multiple
                    >
                        <v-list-item>
                            <template v-slot:default="{ active, toggle }">
                                <v-list-item-action>
                                    <v-checkbox
                                        v-model="active"
                                        color="primary"
                                        @click="toggle"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>Notificações</v-list-item-title>
                                    <v-list-item-subtitle>Permitir notificações</v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-subheader>Outros</v-subheader>
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-help</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Quem somos?</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Sair</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-row>
        <v-row justify="center" class="mt-12">
            <v-avatar color="primary" size="196">
                <span>
                    <v-btn icon>
                        <v-icon size="72">mdi-account</v-icon>
                    </v-btn>
                </span>
            </v-avatar>
        </v-row>
        <v-row class="mt-12">
            <v-col cols="6">
                <v-card
                    color="primary darken-3"
                    dark
                    style="border-radius: 5px 5px 5px 5px"
                >
                    <v-card-title>Atestado</v-card-title>
                    <v-card-text class="text-center">
                        <v-btn icon>
                            <v-icon size="36">mdi-file-document</v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="light-blue lighten-4"
                        >
                            Baixar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card
                    color="primary darken-3"
                    dark
                    style="border-radius: 5px 5px 5px 5px"
                >
                    <v-card-title>Histórico</v-card-title>
                    <v-card-text class="text-center">
                        <v-btn icon>
                            <v-icon size="36">mdi-file-document</v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="light-blue lighten-4"
                        >
                            Baixar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-8" align="center">
            <v-col cols="6">
                <div class="text-center">
                    <v-progress-circular
                        :rotate="360"
                        :size="100"
                        :width="15"
                        :value="70"
                        color="teal"
                    >
                        70%
                    </v-progress-circular>
                </div>
            </v-col>
            <v-col cols="6">
                Ciência da Computação
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'menu',
    data: function() {
        return {
            lastUpdate: "Última atualização: 20 de Março, às 22:00",
            drawer: false,
            settings: []
        }
    }
}
</script>

<style></style>
