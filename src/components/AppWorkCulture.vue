<script>
</script>

<template>
<div class="container-info">
    <div class="text">
        <p>EVERYTHING IN MAXCOACH</p>
        <h2>Learn about our <i class="colored">Work Culture</i> at MaxCoach</h2>
        <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
        <a href=""> Have question? Get free Guide <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class="images">
        <img src="../assets/images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="stock-10">
        <div class="hover-1">
            <img src="../assets/images/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="">
        </div>
        <div class="hover-2">
            <img src="../assets/images/maxcoach-shape-02.png" alt="">
        </div>
        <div class="hover-3">
            <img src="../assets/images/maxcoach-shape-07.png" alt="">
        </div>
    </div>
</div>
<div class="stats">
    <div>
        <h2>129+</h2>
        <p>ENROLLED LEARNERS</p>
    </div>
    <div>
        <h2>80</h2>
        <p>FINISHED SESSIONS</p>
    </div>
    <div>
        <h2>4%</h2>
        <p>SATISFACTION RATE</p>
    </div>
</div>
</template>

<style scoped lang="scss">
.container-info{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 80px;
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
            color:#1fad95;
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
            position:absolute;
            top:-100px;
            right: -100px;
            img{
                border-radius: 10px;
            }
        }
        .hover-2{
            position:absolute;
            bottom:-80px;
            right: 80px;
        }
        .hover-3{
            position:absolute;
            top:-90px;
            right: 90px;
            z-index: -10;
            img{
                width: 100px;
            }
        }
    }
}
.stats{
    display: flex;
    justify-content: center;
    gap: 100px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            font-size: 2.2rem;
            color: #1fad95;
        }
    }
}
</style>