<template>
    <b-row>
        <!-- <b-col cols="5"> -->
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Serviços</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Sobre</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Zero 5</h3>
                            <p>Somos uma empresa focada em produzir os melhores perfumes contra-tipos do Brasil.</p>
                        </div>
                        <div class="col item social">
                            <a href="#"><i class="icon ion-social-facebook"></i></a>
                            <a href="#"><i class="icon ion-social-twitter"></i></a>
                            <a href="#"><i class="icon ion-social-snapchat"></i></a>
                            <a href="#"><i class="icon ion-social-instagram"></i></a>
                        </div>
                    </div>
                    <p class="copyright">Zero 5 © 2024</p>
                </div>
            </footer>
        </div>
        <!-- </b-col> -->
    </b-row>
</template>
<script>
export default {
    name: "FirstComponent",
};
</script>
<style>
.footer-dark {
    padding: 50px 0;
    color: #f0f9ff;
    background-color: rgb(114, 163, 250);
}

.footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
}

.footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
}

.footer-dark ul a {
    /* color: inherit; */
    color: white;
    text-decoration: none;
    opacity: 0.8;
}

.footer-dark ul a:hover {
    opacity: 0.8;
}

@media (max-width:767px) {
    .footer-dark .item:not(.social) {
        text-align: center;
        padding-bottom: 20px;
    }
}

.footer-dark .item.text {
    margin-bottom: 36px;
}

@media (max-width:767px) {
    .footer-dark .item.text {
        margin-bottom: 0;
    }
}

.footer-dark .item.text p {
    opacity: 0.8;
    margin-bottom: 0;
}

.footer-dark .item.social {
    text-align: center;
}

@media (max-width:991px) {
    .footer-dark .item.social {
        text-align: center;
        margin-top: 20px;
    }
}

.footer-dark .item.social>a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
}

.footer-dark .item.social>a:hover {
    opacity: 0.9;
}

.footer-dark .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.8;
    font-size: 13px;
    margin-bottom: 0;
}
</style>