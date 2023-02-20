<template>
    <div class="menu" :class="{ active: isActive }">
        <div>
            <ul class="menu-content">
                <li>
                    <div class="menu-content-btn" @click="isActive = !isActive" :class="{ active: !isActive }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li v-for="link in links" :key="link.url">
                    <router-link :to="link.url" class="menu-content__links">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" v-if="link.title == 'About'">
                            <path fill="#A1A1A1"
                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-else-if="link.title == 'Blog'">
                            <path fill="#A1A1A1"
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" v-else-if="link.title == 'Home'">
                            <path fill="#A1A1A1"
                                d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            v-else-if="link.title == 'Portfolio'">
                            <path fill="#A1A1A1"
                                d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                            v-else-if="link.title == 'Contact'">
                            <path fill="#A1A1A1"
                                d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                        </svg>
                        <span>{{ link.title }}</span>
                    </router-link>
                </li>

            </ul>
        </div>

    </div>

</template>
<script>
export default {
    props: ['links'],
    data() {
        return {
            isActive: true,
        }
    },
}
</script>
<style lang="scss">
.menu {
    position: absolute;
    left: 40px;
    top: 40px;
    height: 360px;
    transition: 0.2s;
    border-radius: 40px;
    z-index: 1;
    // overflow: hidden;
    &.active {
        height: 60px;
        width: 60px;
        overflow: hidden;
        .menu {
            height: 360px;
            &-content {
                li {
                    a {

                        span {
                            opacity: 0;
                            left: 50px;

                        }
                    }
                }
            }
        }
    }

    &-content {
        display: flex;
        flex-direction: column;

        li {
            position: relative;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            & .router-link-exact-active {
                svg {
                    path {
                        fill: #218BE0;
                    }
                }

                span {
                    color: #218BE0;
                }
            }

            &:nth-child(2) {
                a {
                    svg {
                        transition-delay: 0.1s;
                        transform: scale(1)
                    }

                    span {
                        transition-delay: 0.1s;
                    }
                }
            }

            &:nth-child(3) {
                a {
                    svg {
                        transition-delay: 0.15s;
                        transform: scale(1)
                    }

                    span {
                        transition-delay: 0.15s;
                    }
                }
            }

            &:nth-child(4) {

                a {
                    svg {
                        transition-delay: 0.2s;
                        transform: scale(1)
                    }

                    span {
                        transition-delay: 0.2s;
                    }
                }
            }

            &:nth-child(5) {
                a {
                    svg {
                        transition-delay: 0.25s;
                        transform: scale(1)
                    }

                    span {
                        transition-delay: 0.25s;
                    }
                }
            }

            &:nth-child(6) {
                a {
                    svg {
                        transition-delay: 0.3s;
                        transform: scale(1)
                    }

                    span {
                        transition-delay: 0.30s;
                    }
                }
            }
            &:last-child{
                a{
                    border-bottom-left-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
            }
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                left: 0px;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 14px;
                width: 60px;
                height: 60px;
                color: #fff;
                cursor: pointer;
                background: #333;
                
                svg {
                    width: 14px;
                    transform: scale(0);
                    transition: 0.3s;
                }

                span {
                    position: absolute;
                    left: 80px;
                    opacity: 1;
                    transition: 0.3s;

                }
            }
        }

        &-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #333;
            width: 60px;
            height: 60px;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
            gap: 5px;
            position: relative;

            &.active {

                span {
                    &:first-child {
                        transform: rotate(-45deg);

                    }

                    &:nth-child(2) {
                        transform: scale(0);
                    }

                    &:last-child {
                        transform: rotate(45deg);
                    }
                }
            }

            span {
                position: absolute;
                width: 30%;
                height: 2px;
                transition: 0.3s;
                background: #fff;

                &:first-child {
                    transform: translateY(-7px);
                }
                &:last-child {
                    transform: translateY(7px);
                }
            }
        }
    }
}
</style>