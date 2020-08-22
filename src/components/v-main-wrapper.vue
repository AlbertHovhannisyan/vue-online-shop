
<template>
    <div id="v-main-wrapper" class="v-main-wrapper">
        <p>{{title}}</p>
        <v-catalog />
        <v-cart />
    </div>
</template>

<script>
    import vCatalog from './v-catalog';
    import vCart from './v-cart';

    export default {
        name: "v-main-wrapper",
        components: {
            vCatalog,
            vCart
        },
        props: {},
        data() {
            return {
                title: "main wrapper"
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log("First test")
        },
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>