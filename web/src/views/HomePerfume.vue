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
                <b-col><b-card-group>

                        <b-card>
                            <template #img>
                                <img class="d-block img-fluid w-100" src="../assets/Imagens/logo2.jpeg"
                                    alt="image slot">
                            </template>
                            <b-card-title>Title</b-card-title>
                            <b-card-text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </b-card-text>
                            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                        </b-card>




                    </b-card-group></b-col>

            </b-row>
        </b-container>
    </section>
</template>

<script>

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

