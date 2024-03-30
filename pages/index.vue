<template>
    <div>
       <h1>Home</h1>
       <h3>{{ searchkey }}</h3>
    </div>
</template>

<script setup>

const searchkey = ref(inject('search'));

</script>

<style lang="scss" scoped>

</style>