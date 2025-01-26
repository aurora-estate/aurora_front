<template>
    <div class="relative" v-if="status === 'success'">
        <UiTheHeader :data="data.header?.data" :main="data.main?.data" @openModal="visibleModal = true" />
        <div class="container flex flex-col gap-3 md:gap-10">
            <SectionsMainWrapper :data="data.main?.data ?? null" :main="data.main?.data" />
            <OrderWrapper :key="'top'" :data="data.sities?.data ?? []" footer :desc="data.order?.data?.Desc ?? ''" />
            <SectionsAboutWrapper :data="data.about?.data" />
            <!-- <pre>{{ store.getVisible }}</pre> -->
            <SectionsYourWrapper ref="el" :data="data.your?.data ?? null" />

            <OrderWrapper :key="'bottom'" :data="data.sities?.data ?? []" footer :desc="data.order?.data?.Desc ?? ''" />
        </div>
        <UiTheFooter :data="data.main?.data ?? null" />
        <Transition name="fade">
            <Teleport v-if="visibleModal" to="body">
                <div class="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center">
                    <div class="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-[#212121]/50 z-[1000]"></div>

                    <div class="bg-white z-[1001] rounded-[10px] p-6 flex flex-col gap-6">
                        <div class="flex justify-between items-start">
                            <span class="md:text-[48px] leading-none">Оставить заявку</span>
                            <button @click="visibleModal = false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"
                                        d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                                </svg>
                            </button>
                        </div>
                        <div
                            class="grid grid-cols-1 md:flex  gap-3 items-center  justify-between w-full max-w-[830px] drop-shadow-2xl">
                            <div class="grid grid-cols-1 md:grid-cols-6  gap-3 items-center">
                                <InputsDropdown class="md:col-span-2" v-model="activeType" :options="types" :key="0" />
                                <InputsDropdown class="md:col-span-2" v-model="activeTypeObject" :options="typesObject"
                                    :key="1" />
                                <InputsDropdown class="md:col-span-2" v-model="selectSity"
                                    :options="data.sities?.data?.map(x => x.Name)" :key="2" />
                                <InputsNumber class="md:col-span-3" v-model="selectMoney" />
                                <InputsPhone class="md:col-span-3" v-model="selectNumber" />
                                <div class="md:col-span-6 flex w-full">

                                    <ButtonsTransparent @click="sendOrder" title="Оставить заявку" :tg="false" link="/"
                                        :wigth="true" black :blur="false" />
                                </div>

                            </div>



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
    const [header, main, about, order, your, sities, config] = await Promise.all([
        api.getHeader(),
        api.getMain(),
        api.getAbout(),
        api.getOrder(),
        api.getYour(),
        api.getSities(),
        // api.getConfig()

    ])
    return { header, main, about, order, your, sities, config }
})



const activeType = ref('Аренда')
const types = reactive(['Аренда', 'Продажа'])

const selectSity = ref(null)
const selectNumber = ref(null)
const selectMoney = ref(null)

const activeTypeObject = ref('Квартира')
const typesObject = reactive(['Квартира', 'Дом', 'Участок', 'Коммерческая невижимость'])



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


</script>

<style scoped></style>