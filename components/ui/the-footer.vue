<template>
    <footer class=" container mt-10">
        <div class="bg-[#212121] rounded-[10px] p-6 text-white flex justify-between w-full h-[200px]">
            <div class="flex flex-col justify-between">
                <div class="flex flex-col gap-2">
                    <img src="/logo-white.svg" alt="" class="w-[210px]">
                    <span class="font-light">Риелторское агентство в Грузии.</span>
                </div>

                <span class="font-light">aurora-estate.ge</span>
            </div>
            <div class="flex flex-col justify-between">
                <div class="flex items-center gap-2">
                    <ButtonsTransparent title="Telegram" :tg="true" link="/" />
                    <ButtonsTransparent title="Telegram" :tg="true" link="/" />
                    <ButtonsTransparent title="Telegram" :tg="true" link="/" />
                </div>
                <span class="font-light w-full text-right">contact@aurora-estate.ge</span>
            </div>
        </div>

    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>