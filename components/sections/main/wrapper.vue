<template>
    <div class="relative w-full h-[600px]">
        <img src="/Rectangle39.jpg" alt=""
            class="absolute top-o left-0 right-0 z-[1] w-full h-[600px] overflow-hidden rounded-xl object-cover">
        <div
            class="z-[2] absolute flex flex-col justify-end md:grid  md:grid-cols-[3fr,2fr] w-full h-full p-6 overflow-hidden rounded-xl">
            <h1 class="text-white text-4xl order-last md:order-first md:text-[96px] leading-none flex sm:items-end"
                v-html="data?.Main_title ?? ''">
            </h1>
            <div v-if="data?.Header_post" class="w-full flex flex-col justify-end items-start md:items-end gap-2">
                <div class="w-full hidden md:flex flex-col justify-end items-end gap-2">
                    <SectionsMainLink v-for="item, i in data.Header_post.sort(x => x.Desc > x.Desc ? 1 : -1)"
                        :key="item.id" :data="item" />
                </div>
                <div class="flex flex-nowrap gap-2 md:hidden overflow-x-auto w-full scrollbar">
                    <ButtonsTransparent v-for="(item, i) in main.Header_link" :key="item.id" :title="item.Title"
                        :tg="item.isIcon ?? false" :img="item.Icon?.url ?? ''" :link="item.Link" min :white="false" />

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data', 'main'])

</script>

<style lang="scss" scoped></style>