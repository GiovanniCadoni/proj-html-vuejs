<script>
</script>

<template>
    <div class="container-header">
        <header class="header-app">
            <ul class="navigation-header">
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
            </ul>
            <div class="image-header">
                <img src="../assets/images/dark-logo.png" alt="image-header">
            </div>
            <div class="options-header">
                <i>icon</i>
                <i>icon</i>
                <div class="search-bar-header">
                    <input type="text" placeholder="Search...">
                    <i>icon</i>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
.container-header{
    //DEBUG
    border: 2px solid black;
    .header-app{
        height: 80px;
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .navigation-header{
            width: calc(100% / 3);
            display: flex;
            gap: 10px;
            li{
                list-style: none;
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
            .search-bar-header{
                background-color: lightgrey;
                padding: 10px;
                border-radius: 5px;
                input{
                    background-color: transparent;
                    border: transparent;
                }
                input:focus-visible{
                    
                }
            }
        }
    }
}
</style>