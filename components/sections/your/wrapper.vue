<template>
    <section class="flex flex-col gap-6">
        <UiTheTitle title="Все для вас" :desc="data.Desc ?? ''" direction="right" />
        <div v-if="data.blocks_yours?.length"
            class="grid grid-cols-[repeat(auto-fill,_minmax(306px,_1fr))] w-full gap-3">
            <BlocksCustom v-for="(item, i) in data.blocks_yours" :key="i" :title="item.Title" :desc="item.Desc"
                :type="item.Type.replace('t-', '')" :img="item.Main_img?.url ?? ''" :isWhite="item.White_bg" />
        </div>
    </section>
</template>

<script setup>

const props = defineProps(['data'])





const blocks = ref([
    {
        title: 'Тщательный отбор',
        desc: `Предлагаем только проверенные и безопасные объекты`,
        type: 1,
        isWhite: false,
        img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png/778px-%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png'
    },
    {
        title: '',
        desc: '',
        type: 2,
        isWhite: false,
        img: 'https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg'
    },
    {
        title: 'Прозрачность',
        desc: `Открыто предоставляем всю информацию об объекте`,
        type: 3,
        isWhite: false,
        img: '/image1.png'
    },
    {
        title: 'Личный эксперт isWhite',
        desc: `Закрепляем персонального менеджера за каждым клиентом`,
        type: 4,
        isWhite: true,
        img: ''
    },
    {
        title: 'Актуальная база',
        desc: 'Довольных клиентов',
        type: 4,
        isWhite: false,
        img: ''
    },
    {
        title: '100+',
        desc: 'Довольных клиентов',
        type: 2,
        isWhite: false,
        img: ''
    }
])

</script>

<style lang="scss" scoped></style>