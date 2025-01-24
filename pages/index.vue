<template>
    <div>
        <UiTheHeader :data="data.header?.data" :main="data.main?.data" />
        <div class="container flex flex-col gap-10">
            <SectionsMainWrapper :data="data.main?.data ?? null" :main="data.main?.data" />
            <OrderWrapper :key="'top'" :data="data.sities?.data ?? []" />
            <SectionsAboutWrapper />
            <pre>{{ store.getVisible }}</pre>
            <SectionsYourWrapper ref="el" :data="data.your?.data ?? null" />

            <OrderWrapper :key="'bottom'" :data="data.sities?.data ?? []" footer :desc="data.order?.data?.Desc ?? ''" />
        </div>
        <UiTheFooter />
    </div>
</template>

<script setup>
import { useStore } from '../store/index'
import { API } from '../composables/api'
import { useElementVisibility } from '@vueuse/core'
const store = useStore()

const el = ref(null)
const targetIsVisible = useElementVisibility(el)

const api = new API()

watchImmediate(targetIsVisible, (res) => {
    store.setVisible(res)
})

const { data, status, error, refresh } = await useAsyncData('dataApi', async () => {
    const [header, main, order, your, sities, config] = await Promise.all([
        api.getHeader(),
        api.getMain(),
        api.getOrder(),
        api.getYour(),
        api.getSities(),
        // api.getConfig()

    ])
    return { header, main, order, your, sities, config }
})



</script>

<style scoped></style>