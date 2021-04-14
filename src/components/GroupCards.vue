<template>
    <div class="group-card">
        <div class="upper-card">
            <h3>{{ groupName }}</h3>
            <div>
                <span class="dot" style="background-color:#BD1B24;"></span>
                <span class="dot" style="background-color:#FFC700;"></span>
            </div>
        </div>
        <div class="lower-card">
            <div>
                <h4>{{ groupDescription }}</h4>
                <h5>2 hours ago</h5>
            </div>
            <div>
                <button class="btn">Ver mais</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GroupCards",
    props: ["groupName", "groupDescription"]
}
</script>

<style scoped>
h3{
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 23px;
    color: #4472C4;
}
h4{
    position: absolute;
    width: 337px;
    height: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #9EA7AC;
}

h5{
    position: relative;
    height: 20px;
    bottom: -20px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;

    color: #9EA7AC;
}

.group-card{
    background-color: #131414;
    height: 140px;
    width: 500px;
    border-radius: 8px;
    padding: 20px;

}

.upper-card{
    display: flex;
    justify-content: space-between;
    border-bottom: dashed;
    border-width: 1.5px;
    border-color: #25292D;
}

.lower-card{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}

.dot{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    top: -10px;
    right: -10px;
    margin: 0px 10px;
}

.btn{
    height: 40px;
    width: 113px;
    border-radius: 20px;
    background-color: #171819;
    color: white;
}
</style>