<template>
    <h1>Home</h1>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$store.state.test);
        }
    }
</script>