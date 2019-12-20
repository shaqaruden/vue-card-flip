<template>
    <div class="body">
        <div class="flip-card-container" @click="flipCard()">
        <div ref="flipCard" class="flip-card">
            <div ref="front" class="front" :style="frontStyle" :class="frontClass">
                <slot name="front"><h1>Front</h1></slot>
            </div>
            <div ref="back" class="back" :style="backStyle" :class="backClass">
                <slot name="back"><h1>Back</h1></slot>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: [ 'frontStyle', 'frontClass', 'backStyle', 'backClass', 'cardStyle', 'cardClass', 'direction' ],
    mounted() {
        this.$refs.back.style.transform = this.transformValue;
    },
    computed: {
        transformValue() {
            switch(String(this.direction).toLowerCase()) {
                case 'up':
                    return 'rotateX(180deg)'
                    break;
                case 'down':
                    return 'rotateX(-180deg)'
                    break;
                case 'left':
                    return 'rotateY(-180deg)'
                    break;
                case 'right':
                    return 'rotateY(180deg)'
                    break;
                default:
                   return 'rotateY(-180deg)'
            } 
        }
    },
    data()  {
        return {
            flipped: false
        }
    },
    methods: {
        flipCard() {
            
           if (this.flipped === false) {
               this.$refs.flipCard.style.transform = this.transformValue;
               this.flipped = true;
           } else {
               this.$refs.flipCard.style.transform = '';
               this.flipped = false;
           }
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flip-card-container {
        width: 100%;
        height: 100%;
        perspective: 1000px;
    }

    .flip-card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
    }

    .front {
        background: #B50000;
        color: white;
    }

    .back {
        background: orange;
        color: white;
    }
</style>