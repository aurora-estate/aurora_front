<template>
    <div class="link l_blur inter">
        <div class="flex justify-between w-full items-center">
            <span class="font-normal text-sm">{{ data?.Title }}</span>
            <button>
                <img src="/icons/arrow-top-rigth.svg" alt="">
            </button>
        </div>

        <span v-if="data.Desc?.length" class="font-medium">{{ data?.Desc }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style scoped>
.link {
    @apply text-white flex flex-col w-[200px] border border-[#F5F5F5]/5 rounded-[6px] p-2;
}

.l_blur {
    backdrop-filter: blur(7.4px);
}
</style>