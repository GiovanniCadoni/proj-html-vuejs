<script>
</script>

<template>
    <div class="container">
        <h2>Subscribe <i class="colored">Newsletters</i></h2>
        <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
        <div class="email">
            <input placeholder="Enter your email: " type="text">
            <button>Subscribe</button>
        </div>
        <div class="hover-1">
            <img src="../assets/images/maxcoach-shape-02.png" alt="">
        </div>
        <div class="hover-2">
            <img src="../assets/images/maxcoach-shape-09.png" alt="">
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    width: 80%;
    margin: auto;
    padding: 120px 0;
    text-align: center;
    position: relative;
    .hover-1{
            position: absolute;
            top: 160px;
            right: -30px;
            img{
                width: 100px;
            }
        }
    .hover-2{
        position: absolute;
        top: 60px;
        right: -30px;
        img{
            width: 180px;
        }
    }
    .colored{
            color: #1fad95;
            font-style: normal;
        }
    h2{
        font-size: 2.8rem;
    }
    p{
        font-size: 1.2rem;
        padding: 25px 0;
        color: grey;
    }
    .email{
        background-color: #e2e2e0;
        width: 720px;
        margin: auto;
        border-radius: 5px;
        input{
            width: 80%;
            background-color: transparent;
            border: transparent;
            padding: 15px 20px;
        }
        button{
            width: 20%;
            padding: 15px 30px;
            background-color: #1fad95;
            color: white;
            border: transparent;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            cursor: pointer;
        }
        button:hover{
            filter: brightness(120%);
        }
    }
}
</style>