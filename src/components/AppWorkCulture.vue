<script>
</script>

<template>
<div class="container">
    <div class="text">
        <p>EVERYTHING IN MAXCOACH</p>
        <h2>Learn about our Work Culture at MaxCoach</h2>
        <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
        <p>Have question? Get free Guide -></p>
    </div>
    <div class="images">
        <img src="../assets/images/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="stock-10">
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
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;
    .text{
        width: 410px;
        h2{
            font-size: 2.8rem;
            padding: 15px 0;
        }
        p{
            padding-bottom: 10px;
        }
    }
    .images{
        width: calc(100% / 2);
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
        }
    }
}
</style>