<template>
    <div class="container z-[999] anime2" :class="styleHeader">
        <div class="flex justify-between items-center w-full p-6">
            <button>
                <img src="/logo-white.svg" alt="">
            </button>
            <div class="hidden sm:flex items-center gap-2">
                <div v-if="main?.Header_link" class="flex items-center gap-2">
                    <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                        :tg="true" link="/" />

                </div>
                <ButtonsTransparent title="Оставить заявку" :tg="false" link="/" :wigth="true" />
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
    @apply bg-[#fff] !text-[#212121] fixed top-0 left-0 right-0;
}
</style>