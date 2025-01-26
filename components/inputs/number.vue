<template>
    <div class="wrapper inter">
        <div class="flex items-center justify-between gap-2 w-full">
            <input type="text" placeholder="Бюджет" v-model="selected" class="md:w-[160px] placeholder:text-[#212121]">
            <span class="text-[#212121]">$</span>
        </div>
    </div>
</template>

<script setup>
const selected = defineModel()
</script>

<style scoped>
.wrapper {
    @apply relative bg-transparent rounded-full border border-neutral-400 h-[52px] flex items-center px-4 cursor-pointer text-[#212121] text-base;
}
</style>