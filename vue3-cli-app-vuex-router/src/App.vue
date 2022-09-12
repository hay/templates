<script setup>
    import { ref } from 'vue';
    import { useStore } from '@/store.js';

    const msg = ref('Hello!');
    const store = useStore();
</script>

<template>
    <h1>{{msg}}</h1>
</template>

<style lang="scss" src="./scss/style.scss"></style>