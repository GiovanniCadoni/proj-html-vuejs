<script>
</script>

<template>
<div class="container-info">
    <div class="images">
        <img src="../assets/images/home-3-team-image.png" alt="home-team">
        <div class="hover-1">
            <img src="../assets/images/maxcoach-shape-07.png" alt="">
        </div>
        <div class="hover-2">
            <img src="../assets/images/maxcoach-shape-05.png" alt="">
        </div>
        <div class="hover-3">
            <img src="../assets/images/maxcoach-shape-01.png" alt="">
        </div>
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
            cursor: pointer;
        }
        button:hover{
            filter: brightness(120%);
        }
    }
    .images{
        width: calc(100% / 2);
        position: relative;
        z-index: 9999;
        .hover-1{
            position: absolute;
            bottom: -90px;
            right: 135px;
            z-index: -10;
        }
        .hover-2{
            position: absolute;
            top: 150px;
            left: -90px;
            img{
                width: 140px;
            }
        }
        .hover-3{
            position: absolute;
            bottom: 0px;
            left: -200px;
        }
    }
}
</style>