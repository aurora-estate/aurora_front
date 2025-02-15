<template>
    <div
        class="rounded-full border"
        :class="showError ? 'border-red-500' : 'border-neutral-300'"
    >
        <vue-tel-input
            ref="telInputRef"
            v-model="phone"
            @country-changed="onCountryChanged"
            :validCharactersOnly="true"
            :inputOptions="{ 'showDialCode': true }"
            :dropdownOptions="{ 'showDialCodeInSelection': false, 'showFlags': true, 'showDialCodeInList': true }"
            :mode="international"
            @validate="validatePhone"
            @blur="checkValidation"
            @focus="hideError"
        >
            <template v-slot:arrow-icon="{ open }">
                <div
                    :class="{ 'arrow-icon--open': open }"
                    class="arrow-icon"
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
                            d="m19 9l-7 6l-7-6"
                        />
                    </svg>
                </div>
            </template>
        </vue-tel-input>
    </div>
</template>

<script setup>
const telInputRef = ref(null);

const props = defineProps({
    modal: {
        type: Boolean,
        required: false,
        default: false,
    }
})
const emit = defineEmits(['set-valid-phone'])
const phone = defineModel();
const isPhoneValid = ref(false);
const showError = ref(false);
const isCountryChanged = ref(false);

const validatePhone = (phoneObject) => {
    isPhoneValid.value = phoneObject.valid; // Обновляем состояние валидности
};

const onCountryChanged = () => {
    if (isCountryChanged.value && telInputRef.value) {
        telInputRef.value.$el.querySelector('input').focus();
    }
    isCountryChanged.value = true;
};

const checkValidation = () => {
    showError.value = !isPhoneValid.value; // Показываем ошибку только после ухода из инпута
    emit('set-valid-phone', isPhoneValid.value)
}

const hideError = () => {
    showError.value = false;
}

// 🔹 Метод, который вызовет blur у vue-tel-input
const triggerBlur = () => {
    telInputRef.value?.$el.querySelector('input')?.blur();
};

defineExpose({
    triggerBlur,
    checkValidation
})
</script>

<style>
/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
/** {
  scrollbar-width: thin;
  scrollbar-color: #8E938E #FFFFFF;
}*/

/* Chrome, Edge and Safari */
.vti__dropdown-list::-webkit-scrollbar {
    height: 0px;
    width: 0px;
}

.vti__dropdown-list::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #FFFFFF;
}

.vti__dropdown-list::-webkit-scrollbar-track:hover {
    background-color: #FFFFFF;
}

.vti__dropdown-list::-webkit-scrollbar-track:active {
    background-color: #FFFFFF;
}

.vti__dropdown-list::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #8E938E;
}

.vti__dropdown-list::-webkit-scrollbar-thumb:hover {
    background-color: #696D69;
}

.vti__dropdown-list::-webkit-scrollbar-thumb:active {
    background-color: #585B58;
}

.vti__dropdown.open {
    background-color: transparent;
}

.vti__dropdown-list {
    border-radius: 20px;
    padding: 0.25rem;
}

.vti__dropdown-list.below {
    top: 58px;
}
.vti__dropdown-list.above {
    bottom: 120%;
}

.vti__dropdown-item {
    border-radius: 15px;
    padding-top: .25rem;
    padding-bottom: .25rem;
    display: flex;
    align-items: center;
    min-height: 44px;
}

.vti__dropdown-item strong {
    font-weight: regular !important;
}

.arrow-icon svg {
    width: 18px;
    color: #9ea0a3;
}

.arrow-icon--open {
    transform: rotate(180deg);
}
</style>