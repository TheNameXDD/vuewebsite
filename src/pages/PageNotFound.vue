<template>
    <dev>
        404PAGE
    </dev>
</template>

<script>


export default {
    data() {
        return {
            TextFor404: '',
        };
    },
    mounted() {
        this.printText("Hello! If you see this text, you are looking for a page " + 
        "that does not exist on this website. I can not help you right now, " + 
        "because I'm following instructions from my creator. But I can help you come back, " + 
        "use the button BACK please. Have a nice day!");
    },
    methods: {
        printText(text) {
            if (text.length > 0) {
                this.$data.TextFor404 += text[0];
                setTimeout(() => this.printText(text.slice(1)), 100);
            }
        }
    },
}
</script>

<style lang="scss">

</style>