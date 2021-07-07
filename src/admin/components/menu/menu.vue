<template lang="pug">
    .menu
        .container
            .menu-list
                router-link( tag="a" to='/admin/').menu-item О нас
                router-link( tag="a" to='/admin/works/').menu-item Работы
                router-link( tag="a" to='/admin/reviews/').menu-item Отзывы
                router-link( tag="a" to='/admin/login/').menu-item Отзывы
</template>

<script>

export default {

}
</script>

<style lang="postcss" scoped src="./menu.pcss"></style>