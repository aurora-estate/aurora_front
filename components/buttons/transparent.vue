<template>
    <button class=" inter whitespace-nowrap text-center anime"
        :class="[wigth ? 'px-6' : 'px-2', black ? 'button_black' : 'button_transparent', blur ? 'b_blur' : '', white ? '!text-[#212121]' : '']">
        <img v-if="tg" src="/icons/tg.svg" alt="" class="w-6 h-6">
        <span v-if="!img_only">{{ title }}</span>
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
    },
    blur: {
        type: Boolean,
        default: true,
        required: false
    },
    img_only: {
        type: Boolean,
        default: false,
        required: false
    }
})
</script>

<style scoped>
.button_transparent {
    @apply flex min-w-fit sm:w-auto items-center text-white gap-2 border border-[#EEEEEE]/30 rounded-full py-2 font-medium text-sm sm:text-[15px];
}

.button_black {
    @apply flex items-center justify-center bg-[#212121] !text-white rounded-full h-[52px] font-medium text-base;
}

.b_blur {
    backdrop-filter: blur(7.4px);
}
</style>