<template>

    <div v-if="data" class=" container z-[99] anime2 flex items-center " :class="styleHeader">

        <div class="flex justify-between items-center w-full p-1.5 md:p-6">
            <div class="flex justify-between items-center w-full sm:w-auto px-2 md:px-0">
                <!-- <pre>{{ data.White.url }}</pre> -->
                <img :src="logoUrl"
                    alt="" class="w-[150px] md:w-[160px] h-auto min-h-10">
                <div v-if="styleHeader === 'style_white'" class="flex md:hidden items-center gap-2">
                    <div v-if="main?.Header_link" class="flex items-center 2">
                        <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                            :tg="item.isIcon ?? false" :img="item.Icon?.url ?? ''" :link="item.Link" img_only
                            nonBorder />

                    </div>
                    <button @click="openOrderModal"
                        class="border rounded-full text-[10px] px-3 h-6 flex items-center justify-center">
                        <span class="leading-4"> Оставить
                            заявку</span>
                    </button>
                </div>
            </div>

            <div class="hidden md:flex items-center gap-2 w-full justify-end">
                <div v-if="main?.Header_link" class="flex items-center gap-2">

                    <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                        :tg="item.isIcon ?? false" :img="item.Icon?.url ?? ''" :link="item.Link"
                        :white="styleHeader === 'style_white'" />

                </div>
                <ButtonsTransparent title="Оставить заявку" :tg="false" :wigth="true"
                    :white="styleHeader === 'style_white'" is-button="true" custom @event-top="openOrderModal" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { getImageUrl } from '~/utils/image'
import { useStore } from '../../store/index'
import { useFormStore } from '@/store/form'
const formStore = useFormStore();
const props = defineProps(['data', 'main'])
const store = useStore();
const scroll = ref(true)

const isVisible = computed(() => store.getVisible)
const styleHeader = computed(() => (isVisible.value ? 'style_white' : 'style_transparent'))

const logoSrc = computed(() => {
    return styleHeader.value !== 'style_white' ? props.data.White.url : props.data.Black.url
})

const logoUrl = ref(getImageUrl(logoSrc.value))

const openOrderModal = () => {
    console.log('openModal');
    
    formStore.openOrderModal()
}

watch(logoSrc, () => {
    logoUrl.value = getImageUrl(logoSrc.value);
})


</script>

<style scoped>
.style_transparent {
    @apply w-full border border-transparent bg-transparent text-white absolute top-0 left-0 right-0;
}

.style_white {
    @apply w-[calc(100%-1rem)] bg-[#fff] !text-[#212121] fixed top-3 left-0 right-0 h-[46px] md:h-[80px] border rounded-xl;

}
</style>