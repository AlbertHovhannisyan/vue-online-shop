
<template>
    <div id="v-catalog" class="v-catalog">
        <p>Catalog</p>
        <v-catalog-item />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        props: {},
        data()
        {
            return {}
        },
        computed: {}
    }
</script>

<style>
    .v-catalog {

    }
</style>