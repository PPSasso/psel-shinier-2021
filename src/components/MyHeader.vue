<template>
    <section>
    <div class="navbar">
        <div class="divs">
            <img src="../assets/logo_an.png" alt="App logo">
            <div>
                <b-field class="search-bar">
                    <b-input placeholder="Buscar Funcionalidade"
                        type="search"
                        icon-pack="fas"
                        icon="search">
                    </b-input>
                </b-field>
                <h1>Grupos com acesso a plataforma</h1>
            </div>
        </div>
        <div>
            <div class="divs">
                <img class="pfp" src="../assets/gray.jpg" alt="gray">
                <div>
                    <p>Super Admin</p>
                    <p class="par">Super Admin</p>
                </div>
            </div>
            <div class="btn-div">
                <b-button>Novo grupo</b-button>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: "MyHeader"
}
</script>

<style scoped>
    
    *{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    img{
        max-height: 4rem;
        max-width: 12rem;
    }

    h1{
        position: absolute;
        height: 40px;
        left: 15.97%;
        right: 43.6%;
        top: 70%;

        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;

        color: #9EA7AC;
    }

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    .btn-div{
        margin-top: 1.5rem;
        margin-left: 6rem;
    }

    .search-bar{
        margin-top: 0.5rem;
        margin-left: 1rem;
        background: #171819;
        border-radius: 8px;
        width: 500px;
        height: 10px;
    }


    .par{
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 20px;
    }

    .divs{
        display: flex;
        margin-right: 6rem;
        margin-top: 1.5rem;
    }

    .navbar{
        background-color: black;
        margin-top: 0%;
        height: 8rem;
        justify-content: space-between;
        padding-left: 20px;
        
    }

    .pfp{
        height: 2.5rem;
        width: 2.5em;
        border-radius: 8px;
        margin-right: 1rem;
    }

</style>