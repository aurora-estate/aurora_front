<template>
    <div class="flex flex-col gap-6">
        <div v-if="!min" class="flex md:flex-row flex-col justify-between items-start w-full">
            <span class="text-[48px] leading-none">Оставить заявку</span>
            <span v-if="footer" class="pt-2">{{ desc }}</span>
        </div>
        <div class="grid grid-cols-1 md:flex  gap-3 items-center w-full justify-between">
            <div v-if="!min" class="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 items-center">
                <InputsDropdown v-model="activeType" :options="types" :key="0" />
                <InputsDropdown v-model="activeTypeObject" :options="typesObject" :key="1" />
                <InputsDropdown v-model="selectSity" :options="data.map(x => x.Name)" :key="2" />
                <InputsNumber v-model="selectMoney" />
                <vue-tel-input v-model="selectNumber" @validate="validPhone"
                    :placeholder="'Номер телефона'"></vue-tel-input>
                <!-- <InputsPhone v-model="selectNumber" /> -->
            </div>
            <ButtonsTransparent @click="sendOrder" title="Оставить заявку" :tg="false" link="/" :wigth="true" black />
        </div>
    </div>
</template>

<script setup>

defineProps({
    data: {
        type: Array,
        required: false,
        default: [],
    },
    footer: {
        type: Boolean,
        required: false,
        default: false,
    },
    desc: {
        type: String,
        required: false,
        default: '',
    },
    min: {
        type: Boolean,
        required: false,
        default: false,
    },
})
const activeType = ref('Аренда')
const types = reactive(['Аренда', 'Продажа'])

const selectSity = ref(null)
const selectNumber = ref(null)
const selectMoney = ref(null)

const activeTypeObject = ref('Квартира')
const typesObject = reactive(['Квартира', 'Дом', 'Участок', 'Коммерческая невижимость'])

function validPhone(event) {
    console.log('validPhone', event.valid);

}

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

<style lang="scss" scoped></style>