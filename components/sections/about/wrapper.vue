<template>
    <section class="flex flex-col gap-6">
        <UiTheTitle title="О Нас" :desc="a" />
        <div class="grid grid-cols-1 sm:grid-cols-[2fr,3fr] w-full gap-3 md:h-[376px]">
            <div class="flex flex-col gap-3">
                <BlocksDefault :key='0' title="100+" desc="Довольных клиентов" />
                <BlocksDefault :key='1' title="Все города"
                    desc="Работаем по всей Грузии и с любыми объектами недвижимости" />
            </div>
            <div class="flex flex-col md:flex-row gap-3">
                <BlocksDefault :key='2' title="100+" desc="Довольных клиентов" />
                <BlocksDefault :key='3' title="Индивидуальный подход"
                    desc="Каждому клиенту мы подбираем недвижимость, учитывая его цели, стиль жизни и бюджет." />
            </div>
        </div>
    </section>
</template>

<script setup>
const a = `Мы — риелторское агентство в Грузии, которое ценит ваше время и безопасность. Наша команда тщательно отбирает и проверяет каждый объект недвижимости, чтобы предложить вам только лучшие варианты. Юридическая чистота, прозрачные условия и премиальный сервис — основа нашей работы.`
</script>

<style lang="scss" scoped></style>