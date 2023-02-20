<template>

    <div class="about">
        <div class="container">
            <div class="about-head">
                <h1>About <span>me</span></h1>
                <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                <div class="about-head-content">
                    <div class="about-head-content-left">
                        <div> <img src="@/./assets/img/dark-about.jpg" alt=""></div>
                    </div>
                    <div class="about-head-content-right">
                        <div class="about-head-content-right-texts">
                            <p>First Name<span>Daria</span></p>
                            <p>Last Name<span>Taylor</span></p>
                            <p>Birthdate<span>21 june 1990</span></p>
                            <p>Nationality<span>English</span></p>
                            <p>Experience<span>7 years</span></p>
                            <p>Address<span>Istanbul</span></p>
                            <p>Freelance<span>Available</span></p>
                            <p>Langages<span>English</span></p>
                            <p>Phone<span>+34 21 18 40 10</span></p>
                            <p>Email<span>you@you.com</span></p>
                            <p>Skype<span>daria.taylor</span></p>
                            <p>Dribbble<span>taylor.dribbble</span></p>
                        </div>
                        <div class="download-cv">
                            <a href="#">download my cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.about {
    padding-bottom:50px ;
    &-head {
        &>h1 {
            text-align: center;
            text-transform: uppercase;
            margin-top: 50px;
            font-size: 55px;
            font-weight: 800;
            color: #fff;

            span {
                color: #2196F3;
            }
        }

        &>p {
            margin: 0 auto;
            color: #D1D1D1;
            font-size: 15px;
            margin-top: 20px;
            width: max-content;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 30px;
                height: 3px;
                background: #2196F3;
                left: -50px;
                top: 50%;
                transform: translateY(-50%);
            }

            &::after {
                content: '';
                position: absolute;
                width: 30px;
                height: 3px;
                background: #2196F3;
                right: -50px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        &-content {
            margin-top: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 80px;

            &-left {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                &>div{
                    height: 440px;
                    width: 440px;
                    position: relative;
                    &::before {
                    content: '';
                    position: absolute;
                    top: 25px;
                    left: 25px;
                    width: 430px;
                    height: 430px;
                    border: 6px solid #2196F3;
                    z-index: -1;
                }
                }
                img {
                    width: 100%;
                    height: 100%;

                }
            }

            &-right {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                &-texts {
                    column-count: 2;
                    p{
                        margin-bottom: 30px;
                        font-size: 16px;
                        color: #B5B5B5;
                        &:nth-child(n+7){
                            margin-left: 30px;
                        }
                        span{
                            color: #fff;
                            margin-left: 20px;
                        }
                    }
                }
                .download-cv{
                    margin-top: 15px;
                    a{
                        text-transform: uppercase;
                        font-weight: 600;
                        background:#2196F3 ;
                        color: #fff;
                        padding: 15px 30px;
                        border-radius: 50px;
                    }
                }
            }
        }
    }
}
</style>