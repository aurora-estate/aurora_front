<template>
    <div class="bg-[#F7F7F7] w-full h-[180px]  md:h-full flex flex-col items-start justify-end gap-3 rounded-[10px] overflow-hidden"
        :class="isSlider ? '' : 'p-6'">
        <span v-if="!isSlider" class="text-4xl leading-none">{{ title }}</span>
        <span v-if="!isSlider" class="text-lg leading-none font-light">{{ desc }}</span>
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    isSlider: {
        type: Boolean,
        required: false,
        default: false,
    },
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

<style></style>