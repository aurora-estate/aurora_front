<template>
    <div
        class="relative"
        v-if="status === 'success'"
    >
        <UiTheHeader
            :data="data?.header?.data"
            :main="data?.main?.data"
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
                v-if="isModalVisible"
                to="body"
            >
                <div class="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center">
                    <div class="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-[#212121]/50 z-[1000]"></div>
                    <div class="bg-white z-[1001] rounded-[10px] p-3 md:p-6 flex flex-col">
                        <div class="flex justify-between items-start">
                            <div></div>
                            <button @click="closeOrderModal">
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
import { useFormStore } from '@/store/form'
import { API } from '../composables/api'
import { useElementVisibility } from '@vueuse/core'
const store = useStore();
const formStore = useFormStore();
const { isModalVisible } = storeToRefs(formStore);

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

const headMeta = data.value.seo.data;
// Разделяем meta и link теги
const metaTags = headMeta.customMetaTags.filter(tag => tag.tag === 'meta').map(tag => tag.attributes) || [];
const linkTags = headMeta.customMetaTags.filter(tag => tag.tag === 'link').map(tag => tag.attributes) || [];

const closeOrderModal = () => {
    formStore.closeOrderModal()
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