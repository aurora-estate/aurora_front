<template>
    <div class="w-full h-[200px] md:h-[306px] flex flex-col   rounded-[10px] relative overflow-hidden"
        :class="typeCss()">
        <span class="text-base md:text-[32px] leading-[90%] relative z-[2]">{{ title }}</span>
        <span class="text-sm md:text-lg leading-none font-light relative z-[2]">{{ desc }}</span>
        <img v-if="img?.length" :src="`https://scms.aurora-estate.ge${img}`" alt=""
            class="w-full z-[1] h-full object-cover">
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
    },
    type: {
        type: Number,
        default: 0,
    },
    img: {
        type: String,
        required: false,
        default: null,
    },
    isWhite: {
        type: Boolean,
        required: false,
        default: false,
    }
})



const typeCss = () => {
    switch (props.type) {
        case '1':
            return 'green'
        case '2':
            return 'img_only'
        case '3':
            return 'text_img'
        case '4':
            if (props.isWhite) {
                return 'isWhite'
            } else {
                return 'default'
            }

        default:
            return 'default'
    }

}

</script>

<style scoped>
.default {
    @apply p-6 gap-3 bg-[#F7F7F7] justify-end items-start text-left;
}

.isWhite {
    @apply p-6 gap-3 bg-white justify-end items-start text-left;
}

.img_only {
    @apply overflow-hidden rounded-[10px];
}

.img_only img {
    @apply min-h-full rounded-[10px];
}

.text_img {
    @apply gap-3 p-6 overflow-hidden justify-start items-end text-right bg-[#F7F7F7];
}

.text_img img {
    @apply !h-[200px] absolute bottom-0 left-0;
}

.green {
    @apply bg-[#C5FF51] p-6 gap-3 justify-start items-center text-center;
}

.green img {
    @apply !h-[130px] absolute bottom-0 left-0;
}
</style>