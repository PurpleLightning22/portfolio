<template>
    <div class="home">
        <div class="home-left">
            <img src="../assets/img/minephoto.jpg" alt="">
        </div>
        <div class="home-right">
            <h3>HI There!</h3>
            <h1>I'm a Web Developer</h1>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and
                beautiful web applications through carefully crafted code and user-centric design.</p>
            <div class="home-right-links">
                <router-link class="about" to="/about">More about me</router-link>
                <router-link class="portfolio" to="/portfolio">Portfolio</router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    props: {
        links: Object,
    }
}
</script>
<style lang="scss">
.home {
    height: 100vh;
    width: 100vw;
    background: url('../assets/img/home-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    color: #fff;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        z-index: -1;
        height: 100%;
        background: rgba(0, 0, 0, 0.85)
    }

    &-left {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        img {
            border-radius: 50%;
            width: 320px;
            height: 320px;
            border: 10px solid rgba(255, 255, 255, 0.1);
        }
    }

    &-right {
        flex: 1;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3 {
            text-transform: uppercase;
            font-weight: 400;

        }

        h1 {
            text-transform: uppercase;
            font-size: 40px;
        }

        p {
            max-width: 530px;
            line-height: 30px;
        }

        .about {
            padding: 15px 30px;
            background: rgb(0, 128, 248);
            border-radius: 30px;
            text-transform: uppercase;
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            margin-right: 30px;
            cursor: pointer;
        }

        .portfolio {
            padding: 15px 30px;
            background: transparent;
            border: 2px solid rgb(0, 128, 248);
            border-radius: 30px;
            text-transform: uppercase;
            color: rgb(0, 128, 248);
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
        }
    }
}
</style>