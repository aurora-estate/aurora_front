<template>
    <div class="phone-input-wrapper">
        <vue-tel-input
            ref="telInputRef"
            v-model="hiddenPhone"
            @country-changed="onCountryChanged"
            :validCharactersOnly="true"
            :inputOptions="{ 'showDialCode': true }"
            :dropdownOptions="{ 'showDialCodeInSelection': false, 'showFlags': true, 'showDialCodeInList': true }"
            :mode="international"
        >
            <template v-slot:arrow-icon="{ open }">
                <div :class="{'arrow-icon--open': open}" class="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9l-7 6l-7-6"/></svg>
                </div>
            </template>
        </vue-tel-input>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const telInputRef = ref(null);
const hiddenPhone = ref('');
const selectedCountry = ref(null);
const selectedCountryCode = ref('');
const displayPhone = ref('');

const onCountryChanged = (country) => {
    selectedCountry.value = country;
    selectedCountryCode.value = country.dialCode;
    updateDisplayPhone();
};

const openCountrySelect = () => {
    telInputRef.value?.focusInput();
};

const handleInput = (event) => {
    const rawValue = event.target.value;
    const numbers = rawValue.replace(/[^0-9]/g, '');

    if (selectedCountryCode.value) {
        hiddenPhone.value = numbers;
        updateDisplayPhone();
    }
};

const updateDisplayPhone = () => {
    if (hiddenPhone.value && selectedCountryCode.value) {
        displayPhone.value = `+${selectedCountryCode.value} ${hiddenPhone.value}`;
    } else {
        displayPhone.value = hiddenPhone.value;
    }
};

// Если нужно экспортировать значение наружу
const phoneValue = computed(() => {
    return hiddenPhone.value ? `+${selectedCountryCode.value}${hiddenPhone.value}` : '';
});
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

.vti__dropdown-item {
    border-radius: 15px;
    padding-top: .25rem;
    padding-bottom: .25rem;
    display: flex;
    align-items: center;
    min-height: 44px;
}

.arrow-icon svg {
    width: 18px;
    color: #9ea0a3;
}
.arrow-icon--open {
    transform: rotate(180deg);
}
</style>