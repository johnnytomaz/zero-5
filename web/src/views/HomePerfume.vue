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
                <b-col v-for="produto in produtos" :key="produto.id">
                    <b-card-group class="swiper product-swiper">


                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="product-card position-relative">
                                    <div class="image-holder">
                                        <b-img :src= "getImagemPerfume(produto.imagensProduto)" fluid
                                            alt="product-item"></b-img>

                                    </div>
                                    <div class="cart-concern position-absolute">
                                        <div class="cart-button d-flex">
                                            <!-- <a href="#" class="btn btn-medium btn-black">Add to Cart<svg
                                                    class="cart-outline">
                                                    <use xlink:href="#cart-outline"></use>
                                                </svg></a> -->
                                        </div>
                                    </div>
                                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                        <h3 class="card-title text-uppercase">
                                            <a href="#">{{ produto.nomeProduto }}</a>
                                        </h3>
                                        <span class="item-price text-primary">R${{ produto.preco }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- <b-card style="margin:20px">


                            <template #img>
                                <img class="d-block img-fluid w-100" src="../assets/Imagens/logo2.jpeg" alt="image slot">

                                <img class="d-block img-fluid w-100" :src="produto.imagensProduto" alt="Imagem do produto">
                            </template>
                            <b-card-title>{{ produto.nomeProduto }}</b-card-title>
                            <b-card-text>
                                {{ produto.descricaoProduto }}
                            </b-card-text>
                            <b-card-text class="small text-muted">
                                Última atualização: {{ produto.updatedAt }}</b-card-text>
                        </b-card> -->


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
        getImagemPerfume(imagensProduto) {
            return "@/assets/Imagens/" + imagensProduto;

        },
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

Product

/*----------------------------------------------*/
.product-store .product-card .cart-concern {
    bottom: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease-out;
    opacity: 0;
}

.product-store .product-card:hover .cart-concern {
    bottom: 90px;
    opacity: 1;
}

.product-card .cart-concern svg {
    width: 16px;
    height: 16px;
    fill: var(--light-color);
    margin-left: 9px;
}

.product-card .card-detail span {
    font-size: 1.5em;
}

@media only screen and (max-width: 575px) {
    .product-store .product-card .card-detail {
        padding: 10px;
    }

    /* 10. Cart Page
-----------------------------------------------------*/
    .shopify-cart .card-price .money {
        font-size: 1.5em;
    }

    .shopify-cart .total-price .money {
        font-size: 2.9em;
    }

    .total-price .cart-totals {
        font-size: 1.5em;
    }

    .shopify-cart .table th {
        width: 30%;
    }

}
</style>

