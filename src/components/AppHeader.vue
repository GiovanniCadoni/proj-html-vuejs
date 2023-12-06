<script>
</script>

<template>
    <div class="container-header">
        <header class="header-app">
            <ul class="navigation-header">
                <li>Home <i class="fa-solid fa-chevron-down"></i></li>
                <li>Pages <i class="fa-solid fa-chevron-down"></i></li>
                <li>Courses <i class="fa-solid fa-chevron-down"></i></li>
                <li>Features <i class="fa-solid fa-chevron-down"></i></li>
                <li>Blog <i class="fa-solid fa-chevron-down"></i></li>
                <li>Shop <i class="fa-solid fa-chevron-down"></i></li>
            </ul>
            <div class="image-header">
                <img src="../assets/images/dark-logo.png" alt="image-header">
            </div>
            <div class="options-header">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-circle-user"></i>
                <div class="search-bar-header">
                    <input type="text" placeholder="Search...">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
.container-header{
    .header-app{
        height: 80px;
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .navigation-header{
            display: flex;
            gap: 18px;
            li{
                list-style: none;
                display: flex;
                align-items: center;
                gap: 5px;
                color: #3f3a64;
                i{
                    font-size: 0.7em;
                }
            }
        }
        .image-header{
            width: calc(100% / 3);
            padding: 0 125px;
            img{
                width: 160px;
                color: black;
            }
        }
        .options-header{
            width: calc(100% / 3);
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 15px;
            i{
                color: #3f3a64;
            }
            .search-bar-header{
                background-color: #e2e2e0;
                padding: 10px;
                border-radius: 5px;
                input{
                    background-color: transparent;
                    border: transparent;
                }
                i{
                    color: #1fad95;
                }
            }
        }
    }
}
</style>