<template>
    <div class="wrapper inter">
        <div class="flex items-center justify-between gap-6">
            <input type="text" placeholder="Бюджет" v-model="selected">
            <span class="text-[#212121]">$</span>
        </div>
    </div>
</template>

<script setup>
const selected = defineModel()
</script>

<style scoped>
.wrapper {
    @apply relative bg-transparent rounded-full border border-neutral-800 h-[52px] flex items-center px-4 cursor-pointer text-[#6C6C6C] text-base;
}
</style>