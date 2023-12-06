<script>
</script>

<template>
        <div class="container-info">
            <p>JOIN MAXCOACH AT BEST</p>
            <h2>Latest Online <i class="colored">Courses</i></h2>
            <div class="row">
                <div class="card">
                    <img src="../assets/images/course-02-480x298.jpg" alt="">
                    <div class="text">
                        <p class="price">$40.00</p>
                        <h5>Learning to Write as a Professional Author</h5>
                        <div class="info">
                            <p><i class="fa-regular fa-file-lines"></i> 20 Lessons</p>
                            <p><i class="fa-regular fa-user"></i> 50 Students</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/stock-full-hd-03-480x298.jpg" alt="">
                    <div class="text">
                        <p class="price">$0.00</p>
                        <h5>Customer-centric Info-Tech Strategies</h5>
                        <div class="info">
                            <p><i class="fa-regular fa-file-lines"></i> 24 Lessons</p>
                            <p><i class="fa-regular fa-user"></i> 769 Students</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/stock-full-hd-04-480x298.jpg" alt="">
                    <div class="text">
                        <p class="price">$19.00</p>
                        <h5>Open Programming Courses for Everyone: Python</h5>
                        <div class="info">
                            <p><i class="fa-regular fa-file-lines"></i> 17 Lessons</p>
                            <p><i class="fa-regular fa-user"></i> 62 Students</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="information">Control your personal preference settings to get notified about appropriate courses. <a href="">View all courses <i class="fa-solid fa-arrow-right"></i></a> </p>
        </div>
</template>

<style scoped lang="scss">
.container-info {
    width: 80%;
    margin: auto;
    padding: 60px 0;
    .information{
        width: 40%;
        margin: auto;
    }
    .colored{
            color: #1fad95;
            font-style: normal;
        }

    p {
        text-align: center;
        color: grey;
    }

    h2 {
        font-size: 2.8rem;
        text-align: center;
    }

    .row {
        display: flex;
        padding: 60px 0;
        gap: 30px;

        .card {
            width: calc(100% / 3);
            background-color: white;
            border-radius: 5px;
            .text{
                padding: 15px;
            }
            .price{
                color: #1fad95;
                font-weight: bolder;
                font-size: 1.6rem;
            }
            img {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            p {
                text-align: left;
                font-size: 1.2rem;
                padding: 5px 0;
            }

            h5 {
                font-size: 1.3rem;
                padding: 10px 0;
            }

            .info {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}</style>