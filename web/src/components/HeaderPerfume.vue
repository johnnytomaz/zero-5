<template>
  <header>
    <div class="top-bar">
      <h7>Os melhores contratipos do Brasil!</h7>
    </div>

    <!-- Nav bar e pesquisa do header -->
    <b-container class="text-center" style="padding: 0;">
      <b-row>
        <b-col style="padding: 0;">
          <b-navbar toggleable="lg" type="light" style="background-color: white; padding: 0; ">
            <b-navbar-brand href="#" style="padding: 0;" class="col-3 p-3 mb-2">

              <!-- Just an image -->
              <b-navbar variant="faded" type="light">
                <b-navbar-brand href="/">
                  <img class="logo" src="../assets/Imagens/Preto_Escuro_Apresentação_Simples__1_-removebg-preview.png"
                    alt="Kitten" width="10%">
                </b-navbar-brand>
              </b-navbar>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav style="list-style:none;">
              <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav> -->

              <!-- Right aligned nav items -->
              <!-- <b-navbar-nav class="ml-auto" > -->
              <b-nav-form style="display:inline-block;" class="col-5 p-3 mb-2">
                <b-input-group v-for="size in ['sm']" :key="size" :size="size" class="mb-3" >
                  <b-form-input placeholder="..."></b-form-input>
                  <b-input-group-append>
                    <b-button size="sm" text="Button" variant="success">Pesquisar</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-nav-form>

              <b-navbar-brand href="/" style="padding: 0;" class="col-2 p-3 mb-2" right>
                <img class="login" src="../assets/Imagens/login icon.png" width="20%" />
              </b-navbar-brand>

              <!-- <b-nav-item-dropdown text="Minha conta" right>
                <b-dropdown-item href="#">Login</b-dropdown-item> -->
              <!-- </b-nav-item-dropdown> -->

              <b-nav-item-dropdown class="col-2 p-3 mb-2" right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Carrinho</em>
                </template>
                <b-dropdown-item href="#">Minhas compras</b-dropdown-item>
              </b-nav-item-dropdown>

              <!-- </b-navbar-nav> -->
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>

    <!-- Menu -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary " style="padding:0;">
      <div class="container-fluid" style="background-color: rgb(100, 149, 237);">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNavDropdown"
          style="list-style:none; margin: 6px;">
          <!-- <ul class="navbar-nav"> -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" style=" color:white;" href="#">Feminino</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style=" color:white;" href="#">Masculino</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style=" color:white;" href="#">Notas Aromáticas</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style=" color:white;" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <!-- </ul> -->
        </div>
      </div>
    </nav>

    <!-- carrossel -->


  </header>
</template>
  
<script>
export default {
  // sua lógica de componente
};
</script>
  
<style></style>
  
  