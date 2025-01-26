<template>
    <div class="wrapper inter">
        <div class="flex items-center justify-between gap-6">
            <input type="text" placeholder="Номер телефона" v-model="selected" class="placeholder:text-[#212121]">

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