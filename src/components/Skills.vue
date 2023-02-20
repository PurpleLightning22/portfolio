<template>
    <div class="skills">
        <div class="container">
            <h1 class="skills__title">Skills</h1>
            <div class="skills-content">
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>Javascript</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">60%</span>
                    </div>
                </div>
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>JQuery</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">80%</span>

                    </div>
                </div>
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>Vue js</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">75%</span>
                    </div>
                </div>
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>Vue js</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">75%</span>
                    </div>
                </div>
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>Vue js</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">75%</span>
                    </div>
                </div>
                <div class="skills-content-item">
                    <div class="skills-content-item__title">
                        <h2>Vue js</h2>
                    </div>
                    <div class="skills-content-item__percent">
                        <span class="skills-content-item__percent_numb">75%</span>
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
.skills {
    padding: 50px 0;
    color: #fff;
    &__title{
        text-transform: uppercase;
        margin: 30px 0;   
    }
    &-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2em;
        row-gap: 2em;
        &-item {

            display: flex;
            flex-direction: column;
            
            &__title {
                margin-bottom: 20px;

                h2 {
                    text-transform: uppercase;
                    font-family: sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            &__percent {

                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                height: 3px;
                background: #c2c2c2;

                &::before {
                    content: '';
                    position: absolute;
                    height: 3px;
                    width: 100%;
                    background: #2196F3;
                }

                &_numb {
                    position: absolute;
                    top: -40px;
                    left: calc(100% - 26px);
                    border: 1px solid #2196F3;
                    padding: 5px 8px;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #2196F3;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, 50%) rotate(45deg);
                        bottom: -1px;
                        width: 10px;
                        height: 10px;
                        background: rgb(34, 34, 34);
                        border: transparent;
                        border-bottom: 1px solid #2196F3;
                        border-right: 1px solid #2196F3;
                    }
                }

            }

            &:nth-child(1) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 60%;
                        }
                        &_numb {
                            left: calc(60% - 26px);
                        }

                    }
                }

            }
            &:nth-child(2) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 80%;
                        }
                        &_numb {
                            left: calc(80% - 26px);
                        }

                    }
                }

            }
            &:nth-child(3) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 75%;
                        }
                        &_numb {
                            left: calc(75% - 26px);
                        }

                    }
                }

            }
            &:nth-child(4) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 75%;
                        }
                        &_numb {
                            left: calc(75% - 26px);
                        }

                    }
                }

            }
            &:nth-child(5) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 75%;
                        }
                        &_numb {
                            left: calc(75% - 26px);
                        }

                    }
                }

            }
            &:nth-child(6) {
                .skills-content-item {
                    &__percent {
                        &::before {
                            width: 75%;
                        }
                        &_numb {
                            left: calc(75% - 26px);
                        }

                    }
                }

            }
        }
    }
}
</style>