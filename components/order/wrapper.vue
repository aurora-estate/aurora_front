<template>
    <div class="flex flex-col gap-6">
        <div
            v-if="!min"
            class="flex  flex-col justify-between items-start w-full"
            :class="[modal ? 'md:flex-col' : 'md:flex-row']"
        >
            <span class="text-[36px] md:text-[48px] leading-none">Оставить заявку</span>
            <span
                v-if="footer"
                class="pt-2"
            >{{ desc
                }}</span>
        </div>
        <div
            class="grid grid-cols-1  z-[100]  gap-3 items-center w-full justify-between"
            :class="[modal ? '' : 'md:flex']"
        >
            <div
                v-if="!min"
                class="grid grid-cols-1  gap-3 items-center"
                :class="[modal ? '' : 'sm:grid-cols-2 md:flex md:flex-wrap']"
            >
                <InputsDropdown
                    v-model="activeType"
                    :options="types"
                    :key="0"
                />
                <InputsDropdown
                    v-model="activeTypeObject"
                    :options="typesObject"
                    :key="1"
                />
                <InputsDropdown
                    v-model="selectSity"
                    :options="data.map(x => x.Name)"
                    :key="2"
                />
                <InputsNumber
                    v-model="selectMoney"
                    :valid="validMoney"
                    :showError="visibleError && !validMoney"
                />

                <div
                    class="rounded-full border"
                    :class="visibleError && !validPhone ? 'border-red-500' : 'border-neutral-300'"
                >
                    <InputsPhone />
                </div>


                <!-- <InputsPhone v-model="selectNumber" /> -->
            </div>
            <ButtonsTransparent
                @eventTop="sendOrder"
                title="Оставить заявку"
                :tg="false"
                :wigth="true"
                black
                custom
            />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
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
    modal: {
        type: Boolean,
        required: false,
        default: false,
    }
})
const activeType = ref('Аренда')
const types = reactive(['Аренда', 'Продажа'])

const selectSity = ref(null)
const selectNumber = ref('')
const selectMoney = ref(null)

const activeTypeObject = ref('Квартира')
const typesObject = reactive(['Квартира', 'Дом', 'Участок', 'Коммерческая невижимость'])

const visibleError = ref(false)
const validPhone = ref(false)
const validMoney = ref(false)
function setValidPhone(event) {
    validPhone.value = event.valid
}
watch(selectNumber, (res) => {
    visibleError.value = false
})

watch(selectMoney, (res) => {
    if (res.length === 0) {
        validMoney.value = false
    } else {
        validMoney.value = true
        visibleError.value = false
    }

})




async function sendOrder() {
    if (!validPhone.value) {
        console.log('error');
        visibleError.value = true
    }
    else if (!validMoney.value) {
        visibleError.value = true
    }
    else {
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

}


onMounted(() => {
    setTimeout(() => {
        selectSity.value = props.data[0]?.Name
    }, 0);
})


</script>

<style></style>