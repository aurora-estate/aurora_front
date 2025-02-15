<template>
    <button
        v-if="isButton && !isLoading"
        @click="event"
        class=" inter whitespace-nowrap text-center anime min-h-[42px] cursor-pointer"
        :class="[wigth ? 'px-6' : 'px-2', black ? 'button_black' : 'button_transparent', blur ? 'b_blur' : '', white ? '!text-[#212121]' : '', nonBorder ? '!border-none' : '', wFull ? 'w-full' : '']"
    >
        <img
            v-if="tg && img?.length"
            :src="getImageUrl(img)"
            alt=""
            class="w-6 h-6"
        >
        <span
            v-else-if="!img_only && title"
            :class="tg ? 'pr-1' : ''"
        >{{ title }}</span>
    </button>
    <div
        v-else-if="isLoading"
        class="spinner mx-auto h-8 w-8 border-4 border-black border-t-transparent rounded-full animate-spin my-4"
    ></div>
    <button
        v-else-if="isModalButton"
        @click="$emit('close-message-modal')"
        class=" inter whitespace-nowrap text-center anime min-h-[42px] cursor-pointer"
        :class="[wigth ? 'px-6' : 'px-2', black ? 'button_black' : 'button_transparent', blur ? 'b_blur' : '', white ? '!text-[#212121]' : '', nonBorder ? '!border-none' : '', wFull ? 'w-full' : '']"
    >
        <img
            v-if="tg && img?.length"
            :src="getImageUrl(img)"
            alt=""
            class="w-6 h-6"
        >
        <span
            v-else-if="!img_only && title"
            :class="tg ? 'pr-1' : ''"
        >{{ title }}</span>
    </button>
    <a
        v-else
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class=" inter whitespace-nowrap text-center anime min-h-[42px] cursor-pointer"
        :class="[wigth ? 'px-6' : 'px-2', black ? 'button_black' : 'button_transparent', blur ? 'b_blur' : '', white ? '!text-[#212121]' : '', nonBorder ? '!border-none' : '']"
    >
        <img
            v-if="tg && img?.length"
            :src="getImageUrl(img)"
            alt=""
            class="w-6 h-6"
        >
        <span
            v-if="!img_only"
            :class="tg ? 'pr-1' : ''"
        >{{ title }}</span>
    </a>
</template>

<script setup>
import { getImageUrl } from '@/utils/image';
const props = defineProps({
    title: String,
    tg: {
        type: Boolean,
        default: false,
        required: false
    },
    link: String,
    isButton: Boolean,
    wigth: Boolean,
    black: Boolean,
    img: String,
    custom: {
        type: Boolean,
        default: false,
        required: false
    },
    min: {
        type: Boolean,
        default: false,
        required: false
    },
    nonBorder: {
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
    },
    wFull: {
        type: Boolean,
        default: false,
        required: false
    },
    isModalButton: {
        type: Boolean,
        default: false,
        required: false
    },
    isLoading: {
        type: Boolean,
        default: false,
        required: false
    }
})


const emits = defineEmits(['eventTop', 'close-message-modal'])

function event() {
    if (!props.custom) {
        window.open(props.link, '_blank');
    } else {
        emits('eventTop')
    }
}
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

.modal .spinner {
    margin: 10px auto;
}
</style>