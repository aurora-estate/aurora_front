<template>
    <div class="bg-[#F7F7F7] w-full h-full flex flex-col items-start justify-end gap-3 rounded-[10px] p-6">
        <span class="text-4xl leading-none">{{ title }}</span>
        <span class="text-lg leading-none font-light">{{ desc }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Не указано',
    },
    desc: {
        type: String,
        required: true,
        default: 'Не указано',
    }
})
</script>

<style lang="scss" scoped></style>