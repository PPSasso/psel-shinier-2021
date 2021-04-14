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
                <group-cards groupName="Super Admin"    
                             groupDescription="Todos os usuarios com todas as permissoes..."
                             >
                </group-cards>    
                <group-cards groupName="Técnicos"    
                             groupDescription="Todos os usuarios que sao desenvovedores..."
                             >
                </group-cards>    
            </div>
        </section>
        <div class="pag">
            <nav class="pagination is-small is-right" role="navigation" aria-label="pagination">
                <ul class="pagination-list">
                    <li> <a class="pagination-link is-current"><i class="fas fa-angle-left"></i></a></li>
                    <li> <a class="pagination-link is-current"><i class="fas fa-angle-double-left"></i></a></li>
                    <li><a class="pagination-link is-current" aria-label="Goto page 1">1</a></li>
                    <li><a class="pagination-link is-current" aria-label="Goto page 2">2</a></li>
                    <li><a class="pagination-link is-current" aria-label="Page 3" aria-current="page">3</a></li>
                    <li><a class="pagination-link is-current" aria-label="Goto page 5">5</a></li>
                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                    <li><a class="pagination-link is-current" aria-label="Goto page 20">20</a></li>
                    <li><a class="pagination-link is-current"><i class="fas fa-angle-right"></i></a></li>
                    <li><a class="pagination-link is-current"><i class="fas fa-angle-double-right"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import GroupCards from './GroupCards.vue'

export default {
    name: "MainDiv",
    components:{
        GroupCards
    },
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
        height: 700px;
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

    .pag{
        margin-top: 400px;
        position: relative;
        right: -10px;
    }

</style>