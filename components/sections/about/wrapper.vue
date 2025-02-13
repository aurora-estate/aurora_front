<template>
    <section class="flex flex-col gap-6">
        <UiTheTitle title="О Нас" :desc="data.Desc" />
        <div class="grid grid-cols-1 sm:grid-cols-[2fr,3fr] w-full gap-3  md:h-[376px]">
            <div class="flex flex-col gap-3">
                <BlocksDefault :key='0' title="100+" desc="Довольных клиентов" />
                <BlocksDefault :key='1' title="Все города"
                    desc="Работаем по всей Грузии и с любыми объектами недвижимости" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                <BlocksDefault :key="991" isSlider>
                    <div v-if="isMounted && data?.Slider?.length" class="w-full md:h-full">
                        <swiper-container ref="containerRef" :loop="true" :autoplay="{delay: 5000}" class="swiper-basic" :pagination="true">
                            <swiper-slide v-for="(slide, idx) in data.Slider" :key="idx" class="h-[180px] md:h-[376px]">
                                <img :src="getImageUrl(slide.url)" alt=""
                                    class="w-full h-[180px] md:h-[376px] object-cover">
                            </swiper-slide>
                        </swiper-container>
                    </div>

                </BlocksDefault>
                <BlocksDefault :key='3' title="Индивидуальный подход"
                    desc="Каждому клиенту мы подбираем недвижимость, учитывая его цели, стиль жизни и бюджет." />
            </div>
        </div>
    </section>
</template>

<script setup>
import { getImageUrl } from '~/utils/image'
// import 'swiper/css/pagination';
const props = defineProps(['data', 'slides'])
const containerRef = ref(null)

const isMounted = ref(false)

onMounted(() => {
    setTimeout(() => {
        isMounted.value = true
    }, 200);
})
</script>

<style>
swiper-container::part(bullet) {
    width: 50px !important;
    height: 4px !important;
    background-color: white !important;
    opacity: 50% !important;
    border-radius: 4px !important;
}

swiper-container::part(bullet-active) {
    width: 50px !important;
    height: 4px !important;
    background-color: white !important;
    border-radius: 4px !important;
}
</style>