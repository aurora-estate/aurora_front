<template>
    <div class="w-full container z-[99] anime2 flex items-center " :class="styleHeader">
        <div class="flex justify-between items-center w-full p-6">
            <div class="flex justify-between items-center w-full sm:w-auto">
                <img src="/logo-white.svg" alt="" class="w-[52px] md:w-[160px] h-auto min-h-10">
                <div v-if="styleHeader === 'style_white'" class="flex md:hidden items-center gap-2">
                    <div v-if="main?.Header_link" class="flex items-center gap-2">
                        <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                            :tg="true" link="/" img_only />

                    </div>
                    <button @click="$emit('openModal')"
                        class="border rounded-full text-[10px] px-3 h-6 flex items-center justify-center">
                        <span class="leading-4"> Оставить
                            заявку</span>
                    </button>
                </div>
            </div>

            <div class="hidden md:flex items-center gap-2 w-full justify-end">
                <div v-if="main?.Header_link" class="flex items-center gap-2">
                    <pre>{{ }}</pre>
                    <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                        :tg="true" link="/" :white="styleHeader === 'style_white'" />

                </div>
                <ButtonsTransparent @click="$emit('openModal')" title="Оставить заявку" :tg="false" link="/"
                    :wigth="true" :white="styleHeader === 'style_white'" />
            </div>
        </div>

    </div>
</template>


<script setup>
import { useStore } from '../../store/index'
const props = defineProps(['data', 'main'])
const store = useStore()
const scroll = ref(true)



const styleHeader = computed(() => {
    if (!store.getVisible) {
        return 'style_transparent'
    } else {
        return 'style_white'
    }
})



</script>

<style scoped>
.style_transparent {
    @apply bg-transparent text-white absolute top-0 left-0 right-0;
}

.style_white {
    @apply bg-[#fff] !text-[#212121] fixed top-3 left-0 right-0 h-[46px] md:h-[80px] border rounded-xl;
}
</style>