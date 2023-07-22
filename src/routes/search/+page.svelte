<body>
    <div>
        <div class="title bg-pink">Web Name</div>
    </div>
    <tr>
        <td class="box border-L height">전체</td>
        <td class="box">정제</td>
        <td class="box">경질캡슐</td>
        <td class="box border-R height">연질캡슐</td>
    </tr>
    <tr>
        <td class="box message">앞면 문자열</td>
        <td class="box message">뒷면 문자열</td>
    </tr>
    <tr>
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
        <td class="color red">빨강</td>
        <td class="color orange">주황</td>
        <td class="color yellow">노랑</td>
        <td class="color light-green">연두</td>
        <td class="color green">초록</td>
        <td class="color light-blue">하늘</td>
        <td class="color blue">파랑</td>
        <td class="color purple">보라</td>
        <td class="color navy">남색</td>
        <td class="color gray">회색</td>
        <td class="color black">검정</td>
        <td class="color white">하양</td>
        <td class="color glass">투명</td>
    </tr>
    <tr>
        <td class="box top round"><a href="/" class="white-link">메인화면</a></td>
        <td class="box top round"><a href="/search/TF" class="white-link">확인 여부</a></td>
    </tr>
</body>
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
        margin-top: 20px;
        display: inline-block;
        width: 100px;
        height: 22px;
        color: black;
        text-align: center;
        background-color: rgba(245, 183, 177, 1);
        font-weight: bold;
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
    td:hover {
        transform: scale(1.05);    
    }   
</style>