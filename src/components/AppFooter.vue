<script>
import { Transition } from "vue";
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        toBack() {
            window.scrollTo(0,0);
            console.log("ritorno")
        }
    }
};
</script>

<template>
    <div class="background">
        <div class="container">
            <div class="address">
                <h5>{{ store.footer[0].title }}</h5>
                <p v-for="(voices) in store.footer[0].info">{{ voices }}</p>
                <!-- <p>382 NE 191st St # 87394 Miami,FL 33179-3899</p>
                <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                <p>support@maxcoach.com</p> -->
                <ul>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-brands fa-square-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
            <div class="navigation">
                <div>
                    <h5>{{ store.footer[1].title }}</h5>
                    <ul>
                        <li v-for="(voices) in store.footer[1].info"><a href="">{{ voices }}</a></li>
                        <!-- <li>Start here</li>
                        <li>Blog</li>
                        <li>About us</li> -->
                    </ul>
                </div>
                <div class="space">
                    <ul>
                        <li v-for="(voices) in store.footer[2].info"><a href="">{{ voices }}</a></li>
                        <!-- <li>Success story</li>
                        <li>Courses</li>
                        <li>Contact us</li> -->
                    </ul>
                </div>
                <div>
                    <h5>{{ store.footer[3].title }}</h5>
                    <ul>
                        <li v-for="(voices) in store.footer[3].info"><a href="">{{ voices }}</a></li>
                        <!-- <li>Membership</li>
                        <li>Purchase guide</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li> -->
                    </ul>
                </div>
            </div>
        </div>
        <p class="rights"><i class="fa-regular fa-copyright"></i> 2020 Maxcoach. All rights Reserved</p>
        <div @click="toBack" class="to-back">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.background{
    background-color: black;
    position: relative;
    .to-back{
        position: absolute;
        bottom: 35px;
        right: 40px;
        color: white;
        font-size: 1.2rem;
        background-color: #1fad95;
        padding: 15px 20px;
        border-radius: 50%;
        cursor: pointer;
    }
}
.rights{
        color: grey;
        font-size: 0.8rem;
        text-align: center;
        padding: 30px 0;
    }
.container{
    width: 80%;
    margin: auto;
    padding-top: 60px;
    color: white;
    display: flex;
    justify-content: space-between;

    h5{
        font-size: 1.2rem;
        padding: 10px 0;
    }
    p{
        padding: 5px 0;
        color: grey;
    }
    ul{
        li{
            list-style: none;
            padding: 5px 0;
            color: grey;
        }
    }
    .space{
        padding-top: 43px;
    }
    .address{
        ul{
        display: flex;
        gap: 35px;
        padding: 25px 0;
            li{
                list-style: none;
                font-size: 1.6rem;
            }
        }
    }
    .navigation{
        display: flex;
        gap: 50px;
        a{
            text-decoration: none;
            color: inherit;
        }
    }
}

</style>