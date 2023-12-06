<script>
</script>

<template>
<div class="container-info">
    <div class="images">
        <img src="../assets/images/stock-full-hd-11-670x450.jpg" alt="stock-11">
        <div class="hover-1">
            <img src="../assets/images/icon-youtube-play.png" alt="">
        </div>
        <div class="hover-2">
            <img src="../assets/images/maxcoach-shape-07.png" alt="">
        </div>
        <div class="hover-3">
            <img src="../assets/images/maxcoach-shape-05.png" alt="">
        </div>
    </div>
    <div class="text">
        <p>HOW WE WORK</p>
        <h2>Upgrade Your Skills <i class="colored">Upgrade Your Life</i></h2>
        <p>Opening up more oppurtunities in front of you to get the ticket to more enjoyable door in life. Getting equipped with new skills for new sets of insights into your career. MaxCoach accompany learners in every stage of learning.</p>
        <a href="">Download free guidebook <i class="fa-solid fa-arrow-right"></i></a>
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
        a{
            color: black;
            font-weight: bolder;
        }
    }
    .images{
        width: calc(100% / 2);
        position: relative;
        z-index: 9999;
        img{
            border-radius: 5px;
        }
        .hover-1{
            position: absolute;
            top: calc(50% - 35px);
            left: calc(50% - 50px);
            cursor: pointer;
        }
        .hover-1:hover{
            filter: brightness(120%);
        }
        .hover-2{
            position:absolute;
            bottom:-70px;
            right: -30px;
            z-index: -10;
            img{
                width: 120px;
            }
        }
        .hover-3{
            position:absolute;
            top: 20px;
            left: -70px;
            z-index: -10;
            img{
                width: 120px;
            }
        }
    }
}
</style>