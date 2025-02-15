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
            class="grid grid-cols-1  z-[49]  gap-3 items-center w-full justify-between"
            :class="[modal ? 'modal' : 'md:flex']"
        >
            <div
                v-if="!min"
                class="grid grid-cols-1  gap-3 items-center"
                :class="[modal ? '' : 'sm:grid-cols-2 md:flex md:flex-wrap']"
            >
                <InputsDropdown
                    v-model="activeType"
                    :options="types.map(x => x.Name)"
                    :key="0"
                />
                <InputsDropdown
                    v-model="activeTypeObject"
                    :options="typesObject.map(x => x.Name)"
                    :key="1"
                />
                <InputsDropdown
                    v-model="activeSity"
                    :options="cities.map(x => x.Name)"
                    :key="2"
                />
                <InputsNumber
                    v-model="selectMoney"
                    :valid="validMoney"
                    :showError="visibleError && !validMoney"
                />
                <InputsPhone
                    ref="phoneRef"
                    v-model="selectNumber"
                    :valid="validPhone"
                    :key="3"
                    @set-valid-phone="setValidPhone"
                    modal
                />
            </div>
            <ButtonsTransparent
                @eventTop="sendOrder"
                title="Оставить заявку"
                :tg="false"
                :wigth="true"
                black
                custom
                isButton
                :isLoading="isLoading"
            />
        </div>
        <Teleport
            v-if="errorMessage"
            to="body"
        >
            <div class="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center">
                <div class="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-[#212121]/50 z-[1000]"></div>
                <div
                    class="w-[600px] relative bg-white z-[1001] rounded-[10px] p-3 md:py-[30px] md:px-[40px] flex flex-col atems-start">
                    <button
                        @click="errorMessage = false"
                        class="absolute right-[30px] top-[30px]"
                    >
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
                    <div class="flex justify-between items-start">
                    </div>
                    <span class="text-[36px] md:text-[48px] leading-none">Ошибка!</span>
                    <div class="max-w-[530px] mt-[20px] text-xl font-[Inter]">
                        {{ errorMessage }}
                    </div>

                    <div class="w-[184px] mt-[20px]">
                        <ButtonsTransparent
                            @close-message-modal="errorMessage = false"
                            title="Закрыть"
                            :tg="false"
                            :wigth="true"
                            black
                            custom
                            wFull
                            isModalButton
                        />
                    </div>
                </div>
            </div>
        </Teleport>
        <Teleport
            v-if="messageModal"
            to="body"
        >
            <div class="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center">
                <div class="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-[#212121]/50 z-[1000]"></div>
                <div
                    class="w-[600px] relative bg-white z-[1001] rounded-[10px] p-3 md:py-[30px] md:px-[40px] flex flex-col atems-start">
                    <button
                        @click="closeOrderModal"
                        class="absolute right-[30px] top-[30px]"
                    >
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
                    <div class="flex justify-between items-start">
                    </div>
                    <span class="text-[36px] md:text-[48px] leading-none">Спасибо!</span>
                    <div class="max-w-[530px] mt-[20px] text-xl font-[Inter]">
                        Мы получили вашу заявку. Скоро наш менеджер с вами свяжется
                    </div>

                    <div class="w-[184px] mt-[20px]">
                        <ButtonsTransparent
                            @close-message-modal="closeOrderModal"
                            title="Закрыть"
                            :tg="false"
                            :wigth="true"
                            black
                            custom
                            wFull
                            isModalButton
                        />
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { useFormStore } from '~/store/form';
const formStore = useFormStore();

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

const emit = defineEmits(['close-order-modal'])

const data = props.data

const types = reactive(data.Service_type)
const activeType = ref(types[0].Name)

const typesObject = reactive(data.Object_category)
const activeTypeObject = ref(typesObject[0].Name)

const cities = reactive(data.City)
const activeSity = ref(cities[0].Name)

const selectNumber = ref('')
const selectMoney = ref(null)

const validPhone = ref(false)
const validMoney = ref(false)

const phoneRef = ref(null)

const visibleError = ref(false);
const messageModal = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

function closeOrderModal() {
    formStore.closeOrderModal()
    messageModal.value = false;
}

function setValidPhone(isValid) {
    validPhone.value = isValid
    console.log('validPhone', validPhone.value);
}

async function sendOrder() {
    visibleError.value = false;
    successMessage.value = '';
    errorMessage.value = '';

    phoneRef.value?.triggerBlur()
    phoneRef.value?.checkValidation()

    if (!validPhone.value || !validMoney.value) {
        visibleError.value = true;
        errorMessage.value = 'Пожалуйста, заполните все обязательные поля.';
        return;
    }


    const formData = `
            Заявка с сайта
            Тип сделки: ${activeType.value}
            Тип недвижимости: ${activeTypeObject.value}
            Город: ${activeSity.value}
            Бюджет: ${selectMoney.value}
            Номер: ${selectNumber.value}
        `.trim();

    const data = {
        text: formData
    }
    isLoading.value = true;
    console.log('isLoading.value', isLoading.value);


    try {
        const response = await $fetch(
            'https://api.telegram.org/bot8021336205:AAF2q1B9QXCRsACOdinwT1eddLL3umVRHuM/sendMessage?chat_id=-4650772536',
            {
                method: 'POST',
                body: data
            }
        )

        console.log('Ответ сервера: ', response);
        messageModal.value = true
        successMessage.value = 'Ваш запрос успешно отправлен!';
    } catch (error) {
        messageModal.value = true
        console.log('Ошибка при отправке сервера: ', error);
        errorMessage.value = 'Произошла ошибка при отправке. Попробуйте позже.';
    } finally {
        isLoading.value = false
        console.log('isLoading.value', isLoading.value);
    }
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

</script>

<style></style>