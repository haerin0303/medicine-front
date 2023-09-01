<script lang="ts">
 import search from 'svelte/store'
</script>

<html lang="en">
    <body>
        <div>{search}</div>
        <div>
            <div class="bg-pink title">Web Name</div>
        </div>
        <div class="box"></div>
        <div class="TF2">
            <div class="TF margin-left"><button type="button" class="a">맞습니다</button></div>
            <div class="TF"><button type="button" class="a">아닙니다</button></div>
        </div>
    </body>
</html>
<style>
    .title {
        display: block;
        background-color: rgba(236, 112, 99, 1);
        padding: 1rem;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        color: white;
    }
    .box {
        display: block;
        border: 2px solid black;
        width: 500px;
        height: 400px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .TF  {
        display: inline-block;
        font-size: 25px;
        font-weight: bold;
        width: 150px;
        text-align: center;
        border-radius: 5px;
        height: 35px;
        margin-top: 35px;
    }
    .TF2 {
        display: block;
        text-align: center;
        margin: 0 auto;
    }
    .margin-left {
        margin-right: 50px;
    }
    .a {
        width: 150px;
        height: 30px;
        font-size: 20px;
        font-weight: bold;
        border: none;
        background-color: rgba(245, 183, 177, 1);
        border-radius: 10px;
    }
</style>