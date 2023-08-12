<script lang="ts">

    //@ts-nocheck

    let arr = [
        { name:"빨강", class:"red", isClick:false},
        { name:"주황", class:"orange", isClick:false},
        { name:"노랑", class:"yellow", isClick:false},
        { name:"연두", class:"light-green", isClick:false},
        { name:"초록", class:"green", isClick:false},
        { name:"하늘", class:"light-blue", isClick:false},
        { name:"파랑", class:"blue", isClick:false},
        { name:"보라", class:"purple", isClick:false},
        { name:"핑크", class:"pink", isClick:false},
        { name:"남색", class:"navy", isClick:false},
        { name:"회색", class:"gray", isClick:false},
        { name:"검정", class:"black", isClick:false},
        { name:"하양", class:"white", isClick:false},
        { name:"투명", class:"glass", isClick:false},
    ];
    let value = '';
    let value1 = '';

    function click() {
      console("Hello World");
    }  
</script>

<div>
    <div class="title bg-pink">Web Name</div>
</div>
<table>
    <body>
        <tr>
            <button class="box border-L height">전체</button>
            <button class="box">정제</button>
            <button class="box">경질캡슐</button>
            <button class="box border-R height">연질캡슐</button>
        </tr>
        <tr>
            <th><input bind:value={value} placeholder="약 검색하기" class="search_bar mar"></th>
            <th><input bind:value={value1} placeholder="뒷면 문자열" class="search_bar"></th>
        </tr>
        <tr style="cursor: pointer;">
            <td class="shape">원형</td>
            <td class="shape">타원형</td>
            <td class="shape">장방형</td>
            <td class="shape">반원형</td>
            <td class="shape">마름모</td>
            <td class="shape">삼각형</td>
            <td class="shape">사각형</td>
            <td class="shape">오각형</td>
            <td class="shape">육각형</td>
        </tr>
        <tr class="top">
            {#each arr as v}
                <input type="checkbox" id={v.class} bind:checked={v.isClick} style="display:none">
                <td class="color {v.class} {v.isClick ? 'clicked' : ''}">
                    <label for={v.class}>{v.name}</label>
                </td>
            {/each}
        </tr>
        <tr>
            <td class="box top round"><button type="button" onclick="location.href='http://localhost:5173/'" class="a">메인화면</td>
            <td class="box top round"><button type="button" onclick="location.href='http://localhost:5173/search/TF'" class="a">확인여부</button></td>
        </tr>
    </body>
</table>
<style>
    *{
        user-select: none;
    }
    table{
        margin:auto
    }
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
        margin-top: 20px;
        display: inline-block;
        width: 100px;
        height: 22px;
        color: black;
        text-align: center;
        background-color: rgba(245, 183, 177, 1);
        font-weight: bold;
        border: none;
    }
    tr {
        display: block;
        border-collapse: collapse;
        text-align: center;
    }
    .border-L {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .border-R {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .message {
        font-weight: 500;
        color: rgb(119, 119, 119);
        padding-right: 120px;
        background-color: white;
        border: 2px solid rgba(245, 183, 177, 1);
        border-radius: 5px;
    }
    .shape {
        text-align: center;
        display: inline-block;
        border: 2px solid rgba(245, 183, 177, 1);
        background-color: white;
        color: black;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        margin-top: 20px;
        line-height: 170px;
    }
    .top {
        margin-top: 40px;
    }
    .color {
        display: inline-block;
        border: 2px solid gray;
        color: rgb(40, 40, 40);
        margin: 0 auto;
        border-radius: 100px;
        height: 40px;
        width: 40px;
        line-height: 40px;
    }
    label{
        display: block;
        width:100%;
        height:100%;
        cursor: pointer;
    }
    .color.clicked{
        display: inline-flex;
        color: white;
        background-color: black;
    }
    .red {
        background-color: rgb(255, 100, 100);
    }
    .orange {
        background-color: rgb(255, 127, 80);
    }
    .yellow {
        background-color: rgb(255, 222, 56);
    }
    .light-green {
        background-color: rgb(144, 222, 80);
    }
    .green {
        background-color: rgb(82, 157, 82);
    }
    .light-blue {
        background-color: skyblue;
    }
    .blue {
        background-color: rgb(91, 102, 188);
    }
    .purple {
        background-color: rgb(127, 91, 162);
    }
    .pink {
        background-color: pink;
    }
    .navy {
        color: white;
        background-color: rgb(74, 74, 121);
    }
    .gray {
        color: white;
        background-color: gray;
    }
    .black {
        color: white;
        background-color: black;
    }
    .round {
        border-radius: 10px;
        padding: 5px;
        margin-left: 10px;
    }
    .white-link {
        font-weight: 400;
        color: black;
        text-decoration: none;
    }
    .search_bar{
        display: inline;
        border: 3px solid rgba(245, 183, 177, 1);
        border-radius: 10px;
        margin-left: 40px;
        margin-top: 20px;
        transform: none;
        width: 200px;
        height: 20px;
    }
    .search_bar::marker {
        background-color: aqua;
    }
    td:hover {
        transform: scale(1.05);    
    }
    .mar {
        margin-left: 260px;
    }
    .a {
        width: 100px;
        height: 22px;
        font-weight: bold;
        font-size: 16px;
        border: none;
        background-color: rgba(245, 183, 177, 1);
    }
    input {
        outline: none;
    }
</style>