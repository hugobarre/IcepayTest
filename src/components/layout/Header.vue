<template>
    <header class="header">
        <img class="logo" src="https://icepay.com/app/themes/icepay/dist/images/logos/logo_icepay.svg">
         
        <vs-navbar v-model="activeItem" class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                     Icepay Vue.js App
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <a href="#/">Home</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#/repositories">Repositories</a>
            </vs-navbar-item>
            </vs-navbar>

    </header>
    
</template>

<script>
export default {
    name: "Header",
    data:()=>({
    activeItem: 0
    })  
}


</script>

<style scoped>

.logo{
    padding: 2em;
}

</style>