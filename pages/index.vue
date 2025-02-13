<template>
    <div
        class="relative"
        v-if="status === 'success'"
    >
        <UiTheHeader
            :data="data?.header?.data"
            :main="data?.main?.data"
            @openModal="visibleModal = true"
        />
        <div class="container ps-0 pe-0 flex flex-col gap-3 md:gap-10">

            <SectionsMainWrapper
                :data="data?.main?.data ?? null"
                :main="data?.main?.data"
            />
            <OrderWrapper
                :key="'top'"
                :data="data?.order?.data ?? []"
                footer
                :desc="data?.order?.data?.Desc ?? ''"
            />
            <SectionsAboutWrapper :data="data?.about?.data" />
            <SectionsYourWrapper
                ref="el"
                :data="data?.your?.data ?? null"
            />

            <OrderWrapper
                :key="'bottom'"
                :data="data?.order?.data ?? []"
                footer
                :desc="data?.order?.data?.Desc ?? ''"
            />
        </div>
        <UiTheFooter :data="data?.main?.data ?? null" />
        <Transition name="fade">
            <Teleport
                v-if="visibleModal"
                to="body"
            >
                <div class="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center">
                    <div class="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-[#212121]/50 z-[1000]"></div>
                    <div class="bg-white z-[1001] rounded-[10px] p-3 md:p-6 flex flex-col">
                        <div class="flex justify-between items-start">
                            <div></div>
                            <button @click="visibleModal = false">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="max-w-[400px]">
                            <OrderWrapper
                                :key="'top'"
                                :data="data?.order?.data ?? []"
                                footer
                                :desc="data?.order?.data?.Desc ?? ''"
                                modal
                            />



                        </div>
                    </div>
                </div>
            </Teleport>
        </Transition>


    </div>
</template>

<script setup>
import { useStore } from '../store/index'
import { API } from '../composables/api'
import { useElementVisibility } from '@vueuse/core'
const store = useStore()

const visibleModal = ref(false)
const el = ref(null)
const targetIsVisible = useElementVisibility(el)

const api = new API()

watchImmediate(targetIsVisible, (res) => {
    store.setVisible(res)
})

const { data, status, error, refresh } = await useAsyncData('dataApi', async () => {
    const [header, main, about, order, your, config, seo] = await Promise.all([
        api.getHeader(),
        api.getMain(),
        api.getAbout(),
        api.getOrder(),
        api.getYour(),
        api.getConfig(),
        api.getSeoData(),
    ])
    return { header, main, about, order, your, config, seo }
})

const activeType = ref('Аренда')
const types = reactive(['Аренда', 'Продажа'])

const selectSity = ref(null)
const selectNumber = ref(null)
const selectMoney = ref(null)

const activeTypeObject = ref('Квартира')
const typesObject = reactive(['Квартира', 'Дом', 'Участок', 'Коммерческая невижимость'])

const headMeta = data.value.seo.data;
// Разделяем meta и link теги
const metaTags = headMeta.customMetaTags.filter(tag => tag.tag === 'meta').map(tag => tag.attributes) || [];
const linkTags = headMeta.customMetaTags.filter(tag => tag.tag === 'link').map(tag => tag.attributes) || [];

console.log('headMeta', headMeta);


async function sendOrder() {
    const formData =
        'Заявка с сайта' + '\n' +
        'Тип сделки: ' + activeType.value + '\n' +
        'Тип недвижимости: ' + activeTypeObject.value + '\n' +
        'Город: ' + selectSity.value + '\n' +
        'Бюджет: ' + selectMoney.value + '\n' +
        'Номер: ' + selectNumber.value

    const data = {
        text: formData
    }
    console.log(data);

    await $fetch(
        'https://api.telegram.org/bot8021336205:AAF2q1B9QXCRsACOdinwT1eddLL3umVRHuM/sendMessage?chat_id=-4650772536',
        {
            method: 'POST',
            body: data
        }
    )
}

useHead({
    title: headMeta.metaTitle || 'Aurora Estate',
    meta: [
        { name: 'description', content: headMeta.metaDescription },
        { name: 'keywords', content: headMeta.metaKeywords },
        { name: 'robots', content: 'index, follow' },
        { httpEquiv: 'Content-Language', content: 'ru' },
        { name: 'language', content: 'Russian' },
        { name: 'author', content: 'Aurora Estate Georgia' },
        ...metaTags
    ],
    link: [
        ...linkTags
    ],
})
</script>

<style scoped></style>