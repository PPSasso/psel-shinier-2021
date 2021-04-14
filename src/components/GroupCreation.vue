<template>
    <div class="main-box">
        <section>
            <div>
                <div class="upper-div">
                    <div>
                        <div class="border">
                            <h3>Key*</h3>
                            <h5>-------------------------------</h5>
                        </div>
                        <b-input placeholder="Palavra que identifica o grupo"
                            type="search"
                            class="inpt">
                        </b-input>
                    </div>
                    <div>
                        <div class="border">
                            <h3>Tipo*</h3>
                            <h5>----------------------</h5>
                        </div>
                        <b-field>
                        <b-select placeholder="Selecione um grupo">
                            <option
                                v-for="option in data"
                                :value="option.id"
                                :key="option.id">
                                {{ option.user.first_name }}
                            </option>
                        </b-select>
                    </b-field>
                    </div>
                    <div>
                        <div class="border">
                            <h3>Descrição*</h3>
                            <h5>------------------------------------------------------------------------------------</h5>
                        </div>
                        <b-input placeholder="Coloque uma descrição completa para o grupo"
                            type="search"
                            class="desc">
                        </b-input>
                    </div>
                </div>
                <div class="bottom-div">
                    <div class="border">
                        <h3>Group Master*</h3>
                        <h5>----------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
                    </div>
                    <b-field>
                        <b-select placeholder="Super Admin - cargo -  Pessoas responsáveis com todas as funcionalidades"
                            expanded>
                            <option
                                v-for="option in data"
                                :value="option.id"
                                :key="option.id">
                                {{ option.user.first_name }}
                            </option>
                        </b-select>
                    </b-field>
                </div>
                <div class="flex">
                    <div class="flex-son">
                        <i class="fas fa-filter"></i>
                        <h2 style="padding-left: 15px;">Filtros</h2>
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
                        <b-tab-item label="Key"></b-tab-item>
                        </b-tabs>
                    </div>
                </div>
                <div class="checkboxes-dif">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h2>Key</h2>
                    <h2 class="spacing">Descrição</h2>
                </div>
                <div class="checkboxes">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h4>index.dynamo.api</h4>
                    <p>Funcionalidade que permite um usuário ver todos os dados chegando no dynamo</p>
                </div>
                <div class="checkboxes">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h4>index.dynamo.api</h4>
                    <p>Funcionalidade que permite um usuário ver todos os dados chegando no dynamo</p>
                </div>
                <div class="checkboxes">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h4>index.dynamo.api</h4>
                    <p>Funcionalidade que permite um usuário ver todos os dados chegando no dynamo</p>
                </div>
                <div class="checkboxes">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h4>index.dynamo.api</h4>
                    <p>Funcionalidade que permite um usuário ver todos os dados chegando no dynamo</p>
                </div>
                <div class="checkboxes">
                    <b-field class="checkbox">
                        <b-checkbox></b-checkbox>
                    </b-field>
                    <h4>index.dynamo.api</h4>
                    <p>Funcionalidade que permite um usuário ver todos os dados chegando no dynamo</p>
                </div>
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
    export default {
        name: "GroupCreation"
    }
</script>

<style scoped>
h2{
    font-family: Manrope;
    font-size: 17px;
    
    color: #9EA7AC;
}

h3{
    font-family: Manrope;
    font-size: 17px;
    line-height: 23px;
    position: relative;
    top: -8px;

    color: #9EA7AC;
}

h4{
    color: #9EA7AC;
}

h5{
    font-size: 15px;
    color: #25292D;
    position: relative;
    top: -5px;
    margin-left: 10px;
}

p{
    color: #9EA7AC;
    margin-left: 64px;
}

.border{
    display: flex;
}

.spacing{
    margin-left: 155px;
}

.upper-div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.inpt{
    color: #90A1AC;
    width: 240px;
}

.main-box{
    height: 700px;
    width: 1110px;
    padding: 40px 26px;
    margin-left: 13rem;
    margin-top: 1rem;
    border-radius: 8px;
    background-color: #171819;
    position: absolute;
        
}

.flex{
    font-family: Manrope;
    font-size: 17px;
    color: #9EA7AC;
    display: flex;
    justify-content: space-between;
    border-bottom: dashed;
    border-width: 1.5px;
    border-color: #25292D;

}

.flex-son{
    display: flex;
    position: relative;
    bottom: -10px;
}

.rectangle{
    margin-left: 20px;
    margin-right: 5px;
    position: relative;
    top: -4px;
    
}

.checkboxes{
    display: flex;

    margin: 6px 0;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 8px;
    align-content: center;
    background-color: #131414;
}

.checkboxes-dif{
    display: flex;

    margin: 6px 0;
    padding-top: 10px;
    padding-left: 10px;
    border-radius: 8px;
    align-content: center;
}

.checkbox{
    position: relative;
    bottom: -2px;
}

.desc{
    width: 610px;
}

.bottom-div{
    margin-bottom: 60px;
}

.pag{
    margin-top: 30px;
    position: relative;
    right: -10px;
}

</style>
