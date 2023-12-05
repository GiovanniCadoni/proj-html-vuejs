<script>
</script>

<template>
        <div class="container-info">
            <p>JOIN MAXCOACH AT BEST</p>
            <h2>Latest Online Courses</h2>
            <div class="row">
                <div class="card">
                    <img src="../assets/images/course-02-480x298.jpg" alt="">
                    <p>$40.00</p>
                    <h5>Learning to Write as a Professional Author</h5>
                    <div class="info">
                        <p>20 Lessons</p>
                        <p>50 Students</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/stock-full-hd-03-480x298.jpg" alt="">
                    <p>$0.00</p>
                    <h5>Customer-centric Info-Tech Strategies</h5>
                    <div class="info">
                        <p>24 Lessons</p>
                        <p>769 Students</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/stock-full-hd-04-480x298.jpg" alt="">
                    <p>$19.00</p>
                    <h5>Open Programming Courses for Everyone: Python</h5>
                    <div class="info">
                        <p>17 Lessons</p>
                        <p>62 Students</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
.container-info {
    width: 80%;
    margin: auto;
    padding: 60px 0;
    p {
        text-align: center;
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

            img {
                border-radius: 5px;
            }

            p {
                text-align: left;
                font-size: 1.2rem;
                padding: 5px 0;
            }

            h5 {
                font-size: 1.5rem;
                padding: 10px 0;
            }

            .info {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}</style>