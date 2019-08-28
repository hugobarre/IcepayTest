<template>
    <header class="header">
        <div> 
            <vs-button type="line" v-bind:data-cy="entry.language"  v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)"> 
                       <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}    
            </vs-button>
        </div>

        <img class="logo" src="https://icepay.com/app/themes/icepay/dist/images/logos/logo_icepay.svg">
        <vs-navbar v-model="activeItem" class="nabarx nav">
            <div slot="title">
                <vs-navbar-title data-cy="menu-title">
                     {{ $t('title') }}
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0" class="tab">
                <a data-cy="tab-home" href="#/"> {{ $t('homeTab') }}</a>
            </vs-navbar-item>
            <vs-navbar-item index="1" class="tab">
                <a data-cy="tab-repo" href="#/repositories"> {{ $t('repoTab') }}</a>
            </vs-navbar-item>
            </vs-navbar>

    </header>
    
</template>

<script>

export default {
    name: "Header",
    components:{
    },
    methods: {    
        changeLocale(locale) { 
                console.log(locale);
                this.$i18n.locale = locale;
                }},

    data:()=>({
        languages: [
                        { flag: 'us', language: 'en', title: 'English' },
                        { flag: 'es', language: 'es', title: 'Español' }  
          ],
        activeItem: 0
    })  
}


</script>

<style scoped>
button {    padding: 5px;    border: 1px solid lightslategrey;    font-size: 15px;    margin: 10px; cursor: pointer;}

.logo{
    padding: 2em;
}

.tab {
    font-weight: bold;
     color:steelblue !important;
    
}

.nav {
     color:steelblue 

}

</style>