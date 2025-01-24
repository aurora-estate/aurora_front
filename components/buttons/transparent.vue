<template>
    <button class="b_blur inter whitespace-nowrap"
        :class="[wigth ? 'px-6' : 'px-2', black ? 'button_black' : 'button_transparent']">
        <img v-if="tg" src="/icons/tg.svg" alt="" class="w-6 h-6">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String,
    tg: Boolean,
    link: String,
    wigth: Boolean,
    black: Boolean,
    min: {
        type: Boolean,
        default: false,
        required: false
    },
    white: {
        type: Boolean,
        default: false,
        required: false
    }
})
</script>

<style scoped>
.button_transparent {
    @apply w-full flex min-w-fit items-center text-white gap-2 border border-[#EEEEEE]/50 rounded-full py-2 font-medium text-sm sm:text-[15px];
}

.button_black {
    @apply flex items-center bg-[#212121] !text-white rounded-full h-[52px] font-medium text-base;
}

.b_blur {
    backdrop-filter: blur(7.4px);
}
</style>