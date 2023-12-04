<script>

</script>

<template>
    <div class="container-section">
        <section>
            <p>Commence Business</p>
            <h2>Distant mentoring program</h2>
            <button>Download free guidebook</button>
            <div class="options">
                <ul>
                    <li>Icon</li>
                    <li>Icon</li>
                    <li>Icon</li>
                    <li>Icon</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.container-section{
    width: 100%;
    background-image: url(../assets/images/home-3-hero-bg.jpg);
    //DEBUG
    height: 680px;
    section{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        position: relative;
        p{
            font-size: 2.2rem;
            color: white;
        }
        h2{
            font-size: 3.5rem;
            color: white;
        }
        button{
            padding: 10px 30px;
            background-color: white;
            border-radius: 5px;
            border: transparent;
        }
        .options{
            background-color: white;
            padding: 10px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            position: absolute;
            right: 0;
            top: 150px;
            li{
                list-style: none;
            }
        }
    }
}
</style>