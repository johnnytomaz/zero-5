<template>
    <header>
        <div class="top-bar">
            <h7>Os melhores contratipos do Brasil!</h7>

        </div>

        <b-container class="text-center">
            <b-row>
                <b-col>
                    <b-navbar toggleable="lg" type="dark" variant="info">
                        <b-navbar-brand href="#">
                            
                                <!-- Just an image -->
                                <b-navbar variant="faded" type="light">
                                    <b-navbar-brand href="/">
                                        <img src="../assets/Imagens/Preto_Escuro_Apresentação_Simples__1_-removebg-preview.png" alt="Kitten" width="10%">
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
                                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
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
    background-color: cornflowerblue;
    padding: 1px;
    color: white;
    font-size: 13px;


}
</style>

