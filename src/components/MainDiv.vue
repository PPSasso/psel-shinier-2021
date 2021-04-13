<template>
    <div class="main-box">
        <section>
            <div class="flex">
                <div class="flex-son">
                    <i class="fas fa-filter"></i>
                    <h2>Filtros</h2>
                    <div class="rectangle">
                        <svg width="3" height="40">
                            <rect width="1" height="35" style="fill:#9EA7AC;"/>
                        </svg>
                    </div>
                    <h2>Ordenar por</h2>
                </div>
                <div>
                    <b-tabs type="is-toggle">
                    <b-tab-item label="Data"></b-tab-item>
                    <b-tab-item label="Nome"></b-tab-item>
                    <b-tab-item label="Atualização"></b-tab-item>
                    </b-tabs>
                </div>
            </div>
            <h3>GRUPOS</h3>
        </section>
        <section>
            <div class="cards">
                <group-cards></group-cards>    
                <group-cards></group-cards>     
            </div>
        </section>
    </div>
</template>

<script>
import GroupCards from './GroupCards.vue'

export default {
    name: "MainDiv",
    components:{
        GroupCards
    }
}
</script>

<style scoped>
    h2{
        padding-left: 15px;
    }

    h3{
        font-family: Rubik;
        font-size: 12px;
        color:#9EA7AC;
        background-color: #171819;

        position: relative;
        top: -12px;
        right: -33px;
        max-width: 55px;
    }

    .main-box{
        height: 580px;
        width: 1110px;
        padding: 26px;
        margin-left: 13rem;
        margin-top: 1rem;
        border-radius: 8px;
        background-color: #171819;
        position: absolute;
        
    }

    .flex{
        font-family: Manrope;
        color: #9EA7AC;
        display: flex;
        padding-top: 4px;
        justify-content: space-between;
        border-bottom: dashed;
        border-width: 1.5px;
        border-color: #25292D;

    }

    .flex-son{
        display: flex;
    }

    .rectangle{
        margin-left: 20px;
        margin-right: 5px;
        position: relative;
        top: -4px;
        
    }

    .cards{
        display: flex;
        justify-content: space-evenly;
    }

</style>