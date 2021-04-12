<template>
    <section>
    <div class="navbar">
        <div class="divs">
        <img src="../assets/logo_an.png" alt="App logo">
        <b-field class="search-bar">
            <b-input placeholder="Buscar Funcionalidade"
                type="search"
                icon-pack="fas"
                icon="search">
            </b-input>
        </b-field>
        </div>
        <div class="divs">
            <img class="pfp" src="../assets/gray.jpg" alt="gray">
            <div>
                <p>Super Admin</p>
                <p class="par">Super Admin</p>
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
    .search-bar{
        margin-top: 0.5rem;
        background: #171819;
        border-radius: 8px;
        width: 300px;
        height: 10px;
    }

    p{
        font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
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
        margin-right: 3rem;
        margin-top: 1rem;
    }

    .navbar{
        background-color: black;
        margin-top: 0%;
        height: 5rem;
        justify-content: space-between;
        padding-left: 20px;
        
    }

    .pfp{
        height: 3rem;
        width: 3rem;
        border-radius: 8px;
        margin-right: 1rem;
    }

    *{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
</style>