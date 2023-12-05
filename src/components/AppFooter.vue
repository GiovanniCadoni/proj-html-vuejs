<script>
</script>

<template>
    <div class="background">
        <div class="container">
            <div class="address">
                <h5>Address</h5>
                <p>382 NE 191st St # 87394 Miami,FL 33179-3899</p>
                <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                <p>support@maxcoach.com</p>
                <ul>
                    <li>Icon</li>
                    <li>Icon</li>
                    <li>Icon</li>
                    <li>Icon</li>
                </ul>
            </div>
            <div class="navigation">
                <div>
                    <h5>Explore</h5>
                    <ul>
                        <li>Start here</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div class="space">
                    <ul>
                        <li>Success story</li>
                        <li>Courses</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h5>Information</h5>
                    <ul>
                        <li>Membership</li>
                        <li>Purchase guide</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="rights">2020 Maxcoach. All rights Reserved</p>
    </div>
</template>

<style scoped lang="scss">
.background{
    background-color: black;
}
.rights{
        color: white;
        font-size: 0.8rem;
        text-align: center;
        padding: 30px 0;
    }
.container{
    width: 80%;
    margin: auto;
    padding-top: 60px;
    color: white;
    display: flex;
    justify-content: space-between;

    h5{
        font-size: 1.2rem;
        padding: 10px 0;
    }
    p{
        padding: 5px 0;
    }
    ul{
        li{
            list-style: none;
            padding: 5px 0;
        }
    }
    .space{
        padding-top: 43px;
    }
    .address{
        ul{
        display: flex;
        gap: 35px;
        padding: 25px 0;
            li{
                list-style: none;
            }
        }
    }
    .navigation{
        display: flex;
        gap: 50px;
    }
}

</style>