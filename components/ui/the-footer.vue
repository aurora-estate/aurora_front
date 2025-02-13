<template>
    <footer class=" container mt-10 ps-0 pe-0">
        <div
            class="bg-[#212121] rounded-[10px] p-6 text-white flex gap-6 md:gap-0 flex-col md:flex-row justify-between w-full h-auto md:h-[200px]">
            <div class="flex flex-col  md:justify-between">
                <div class="flex flex-col gap-2 justify-center items-center md:items-start w-full">
                    <img src="/logo-white.svg" alt="" class="w-[210px]">
                    <span class="font-light text-center md:text-left">Риелторское агентство в Грузии.</span>
                </div>
                <span class="font-light md:flex hidden">aurora-estate.ge</span>
            </div>
            <div class="flex flex-col justify-between">
                <div class="flex flex-wrap flex-row justify-center items-center gap-2 w-full">
                    <ButtonsTransparent v-for="(item, i) in data.Header_link" :key="item.id" :title="item.Title"
                        :tg="item.isIcon ?? false" :img="item.Icon?.url ?? ''" :link="item.Link" />

                </div>
                <span
                    class="text-lg font-light w-full text-center md:text-right mt-6 md:mt-0">contact@aurora-estate.ge</span>
                <span class="text-lg font-light w-full  block text-center md:hidden ">aurora-estate.ge</span>
            </div>
        </div>

    </footer>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style lang="scss" scoped></style>