<script>
</script>

<template>
    <div class="background">
        <div class="container">
            <p>READ FOR MORE JOYMENT</p>
            <h2>Latest From <i class="colored">Our Blogs</i></h2>
            <div class="row">
                <div class="card">
                    <img src="../assets/images/artist-blog-03-480x325.jpeg" alt="">
                    <p>Artist</p>
                    <h5>Brush Strokes Energize Trees in Painting</h5>
                    <div class="info">
                        <p><i class="fa-regular fa-calendar"></i> May 15, 2020</p>
                        <p><i class="fa-regular fa-eye"></i> 688 views</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/artist-blog-01-480x325.jpg" alt="">
                    <p>Artist</p>
                    <h5>Pocket-Sized Notebooks Hold Miniature Paintings</h5>
                    <div class="info">
                        <p><i class="fa-regular fa-calendar"></i> May 15, 2020</p>
                        <p><i class="fa-regular fa-eye"></i> 603 views</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/artist-blog-02-480x325.jpg" alt="">
                    <p>Artist</p>
                    <h5>Connection Between Self-Portraits and Identity</h5>
                    <div class="info">
                        <p><i class="fa-regular fa-calendar"></i> May 15, 2020</p>
                        <p><i class="fa-regular fa-eye"></i> 397 views</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.background{
    background-color: #ededed;
}
.container {
    width: 80%;
    margin: auto;
    padding: 120px 0;
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
            cursor: pointer;

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
        .card:hover{
            filter: brightness(80%);
        }
    }
}</style>