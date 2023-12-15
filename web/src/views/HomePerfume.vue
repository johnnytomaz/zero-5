<template>
    <header>
        <div class="top-bar">
            <h7>Os melhores contratipos do Brasil!</h7>

        </div>

        <b-container class="text-center" style="padding: 0;">
            <b-row>
                <b-col style="padding: 0;">
                    <b-navbar toggleable="lg" type="light" style="background-color: white; padding: 0;">
                        <b-navbar-brand href="#" style="padding: 0;">

                            <!-- Just an image -->
                            <b-navbar variant="faded" type="light">
                                <b-navbar-brand href="/">
                                    <img class="logo"
                                        src="../assets/Imagens/Preto_Escuro_Apresentação_Simples__1_-removebg-preview.png"
                                        alt="Kitten" width="10%">
                                </b-navbar-brand>
                            </b-navbar>

                        </b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav>
                                <b-nav-item href="#">Link</b-nav-item>
                                <b-nav-item href="#" disabled>Disabled</b-nav-item>
                            </b-navbar-nav>

                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto">
                                <b-nav-form>
                                    <b-form-input size="sm" class="mr-sm-2" placeholder="..."></b-form-input>
                                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
                                </b-nav-form>

                                <b-nav-item-dropdown text="Lang" right>
                                    <b-dropdown-item href="#">EN</b-dropdown-item>
                                    <b-dropdown-item href="#">ES</b-dropdown-item>
                                    <b-dropdown-item href="#">RU</b-dropdown-item>
                                    <b-dropdown-item href="#">FA</b-dropdown-item>
                                </b-nav-item-dropdown>

                                <b-nav-item-dropdown right>
                                    <!-- Using 'button-content' slot -->
                                    <template #button-content>
                                        <em>User</em>
                                    </template>
                                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar></b-col>

            </b-row>
        </b-container>
        <!-- Menu -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="padding: 0; ">
            <div class="container-fluid" style="background-color: rgb(100, 149, 237);">
                <a class="navbar-brand" href="#" ></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- carrossel -->
        <section>
            <div>
                <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                    img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
                    <!-- Text slides with image -->
                    <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                        <h1>Hello world!</h1>
                    </b-carousel-slide>

                    <!-- Slides with image only -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                    <!-- Slides with img slot -->
                    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                    <b-carousel-slide>
                        <template #img>
                            <img class="d-block img-fluid w-100" width="1024" height="480"
                                src="../assets/Imagens/1920x700 perfume2.png" alt="image slot">
                        </template>
                    </b-carousel-slide>

                </b-carousel>


            </div>
        </section>
        <b-container class="text-center">
            <b-row>
                <b-col>1 of 3</b-col>

            </b-row>
        </b-container>
    </header>
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

