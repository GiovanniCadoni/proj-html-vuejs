<script>
</script>

<template>
<div class="container-info">
    <div class="images">
        <img src="../assets/images/home-3-team-image.png" alt="home-team">
    </div>
    <div class="text">
        <p>EVERYTHING IN MAXCOACH</p>
        <h2>We're Here to <i class="colored">Transform</i> You!</h2>
        <p>As learners, people can enjoy great companionship from MaxCoach mentors and educators. We can help you develop and grow at your best.</p>
        <button>Get free Guide</button>
    </div>
</div>
</template>

<style scoped lang="scss">
.container-info{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 80px;
    .text{
        width: 410px;
        .colored{
            color: #1fad95;
            font-style: normal;
        }
        h2{
            font-size: 2.8rem;
            padding: 15px 0;
        }
        p{
            padding-bottom: 10px;
            color: grey;
        }
        button{
            margin-top: 20px;
            padding: 10px 30px;
            background-color: #1fad95;
            color: white;
            font-weight: bolder;
            border: transparent;
            border-radius: 5px;
        }
    }
    .images{
        width: calc(100% / 2);
    }
}
</style>