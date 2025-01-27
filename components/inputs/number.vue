<template>
    <div class="wrapper inter"
        :class="[focus ? 'border-neutral-800' : 'border-neutral-300', showError ? '!border-red-500' : '']">
        <div class="flex items-center justify-between gap-2 w-full">
            <input type="number" ref="inputMoney" placeholder="Бюджет" @keypress="isNumber($event, selected)"
                v-model="selected" class="w-full md:w-[160px] placeholder:text-[#6C6C6C] ">
            <span class="text-[#212121]">$</span>
        </div>
    </div>
</template>

<script setup>
import { useFocus } from '@vueuse/core'
const selected = defineModel()
const props = defineProps(['valid', 'showError'])
const inputMoney = ref(null)
const focus = ref(false)
const { focused } = useFocus(inputMoney)


function isNumber(event, message) {
    if (!/\d/.test(event.key) &&
        (event.key !== "." || /\./.test(message))
    )
        return event.preventDefault();
}

watch(focused, (focused) => {
    console.log('focused', focused);

    if (focused) {
        focus.value = true
    }
    else {
        focus.value = false
    }
})
</script>

<style scoped>
.wrapper {
    @apply relative bg-transparent rounded-full border h-[52px] flex items-center px-4 cursor-pointer text-[#212121] text-base;
}
</style>