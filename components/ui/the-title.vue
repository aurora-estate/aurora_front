<template>
    <div class="flex flex-col gap-2 md:grid w-full" :class="isLeft ? 'grid-cols-[2fr,3fr]' : 'grid-cols-[3fr,2fr]'">
        <span class="text-[48px] md:text-[64px]  items-start leading-none w-full flex"
            :class="isLeft ? 'md:order-1 justify-start' : 'md:order-2  justify-end'">{{
                title }}</span>
        <p :class="isLeft ? 'order-2' : 'order-1'" class="leading-5"> {{ desc }}</p>
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
    direction: {
        type: String,
        default: 'left',
        validator(value) {
            return ['left', 'right'].includes(value);
        }
    }
})


const isLeft = computed(() => {
    return props.direction === 'left'
})
</script>

<style lang="scss" scoped></style>