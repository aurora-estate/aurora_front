<template>
    <div class="wrapper inter" ref="target">
        <div class="flex h-full items-center justify-between gap-6" @click="open = !open">
            <span class="truncate">{{ selected ?? 'Выберите' }}</span>
            <img src="/icons/chevron-bottom.svg" alt="" class="w-[14px]" :class="open ? 'rotate-180' : ''">
        </div>
        <Transition name="fade" mode="out-in">

            <ul v-if="open"
                class="absolute z-[99] top-14 left-0 bg-white border rounded-[20px] p-1 flex flex-col w-full min-w-[200px] inter">
                <li @click="selectItem(item)" v-for="(item, i) in options" :key="i"
                    class="hover:text-[#212121] hover:bg-[#F5F5F5] min-h-[44px] flex items-center rounded-[15px] pl-3 py-1 anime">
                    {{
                        item
                    }}
                </li>
            </ul>
        </Transition>

    </div>


</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
const props = defineProps(['options'])
const selected = defineModel()
const open = ref(false)

function selectItem(item) {
    selected.value = item
    open.value = false
}



const target = ref(null)

onClickOutside(target, event => {
    console.log(event)
    open.value = false
})

</script>

<style scoped>
.wrapper {
    @apply relative bg-transparent rounded-full border border-neutral-800 h-[52px] flex items-center px-4 cursor-pointer text-[#6C6C6C];
}
</style>