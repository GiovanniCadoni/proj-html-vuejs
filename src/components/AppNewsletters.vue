<script>
</script>

<template>
    <div class="container">
        <h2>Subscribe Newsletters</h2>
        <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
        <div class="email">
            <input placeholder="Enter your email: " type="text">
            <button>Subscribe</button>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    width: 80%;
    margin: auto;
    padding: 120px 0;
    text-align: center;
    h2{
        font-size: 2.8rem;
    }
    p{
        font-size: 1.2rem;
        padding: 25px 0;
    }
    .email{
        background-color: grey;
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
            background-color: green;
            color: white;
            border: transparent;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
        }
    }
}
</style>