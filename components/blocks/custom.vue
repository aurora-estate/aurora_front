<template>
    <div
        class="w-full h-[200px] md:h-[306px] flex flex-col   rounded-[10px] relative overflow-hidden"
        :class="[typeCss(), title?.length || desc?.length ? 'p-6' : '']"
        :style="{backgroundColor: isWhite}"
    >
        <span class="text-base md:text-[32px] leading-[90%] relative z-[2]">{{ title }}</span>
        <span class="text-sm md:text-lg leading-none md:leading-none font-light relative z-[2]">{{ desc }}</span>
        <img
            v-if="img?.length"
            :src="`https://scms.aurora-estate.ge${img}`"
            alt=""
            class="w-full z-[1] h-full object-cover"
        >
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
        type: String,
        required: false,
        default: '#F7F7F7',
    }
})



const typeCss = () => {
    switch (props.type) {
        case '1':
            if (props.type?.length && props.desc?.length) {
                return 't1'
            } else {
                return ''
            }

        case '2':
            if (props.type?.length && props.desc?.length) {
                return 't2'
            } else {
                return ''
            }

        case '3':
            if (props.type?.length && props.desc?.length) {
                return 't3'
            } else {
                return ''
            }

        case '4':
            if (props.type?.length && props.desc?.length) {
                return 't4'
            } else {
                return ''
            }

        default:
            return 't1'
    }

}

</script>

<style scoped>
.t1 {
    @apply gap-3 justify-start items-center text-center;
}

.t1 img {
    @apply absolute bottom-0 left-0;
}

.t2 {
    @apply gap-3 justify-end items-start text-left;
}

.t2 img {
    @apply absolute bottom-0 left-0;
}

.t3 {
    @apply gap-3 overflow-hidden justify-start items-end text-right;
}

.t3 img {
    @apply absolute bottom-0 left-0;
}

.t4 {
    @apply gap-3 justify-start items-start text-left;
}

.t5 {
    @apply gap-3 justify-end items-start text-left;
}
</style>