<template>
    <section>
        <div>
            <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="../assets/Imagens/1920x700 perfume2.png" alt="image slot">
                    </template>
                </b-carousel-slide>

                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="../assets/Imagens/piramide-olfativa-1920x700.jpg" alt="image slot">
                    </template>
                </b-carousel-slide>


                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="../assets/Imagens/imagemperfume1.png" alt="image slot">
                    </template>
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="../assets/Imagens/perf1 1800x600.png" alt="image slot">
                    </template>
                </b-carousel-slide>

            </b-carousel>


        </div>
        <b-container class="text-center">
            <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3">
                <b-col v-for="produto in produtos" :key="produto.id"><b-card-group>

                        
                        <b-card>

                            <template #img>
                                <img class="d-block img-fluid w-100" src="../assets/Imagens/logo2.jpeg" alt="image slot">

                                <!-- <img class="d-block img-fluid w-100" :src="produto.imagensProduto" alt="Imagem do produto"> -->
                            </template>
                            <b-card-title>{{ produto.nomeProduto }}</b-card-title>
                            <b-card-text>
                                {{ produto.descricaoProduto }}
                            </b-card-text>
                            <b-card-text class="small text-muted">
                                Última atualização: {{ produto.updatedAt }}</b-card-text>
                        </b-card>


                    </b-card-group></b-col>

            </b-row>
        </b-container>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            produtos: []
        };
    },
    mounted() {
        this.carregarProdutos();
    },
    methods: {
        carregarProdutos() {
            axios.get('http://localhost:4000/produto/all')
                .then(response => {
                    this.produtos = response.data;
                })
                .catch(error => {
                    console.error("Erro ao carregar os produtos:", error);
                });
        }
    }
}
</script>

<style>
*,
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 8px;

}

.top-bar {
    background-color: rgb(100, 149, 237);
    padding: 1px;
    color: white;
    font-size: 13px;
}

.logo {
    display: flex;
    width: 120px;
    padding: 0;
    margin: 0;
}
</style>

