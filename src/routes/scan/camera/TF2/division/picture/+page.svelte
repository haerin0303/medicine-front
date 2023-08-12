<script>
    //@ts-nocheck
</script>
<body>
    <div>
        <div class="bg-pink title">Web Name</div>
    </div>
    <div class="chartA">
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/picture'" class="a bg-pink">사진</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/many'" class="a bg-wpink">복용량</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/effect'" class="a bg-wpink">효과</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/side-effect'" class="a bg-wpink">부작용</button></div>
        <div class="chart bg-wpink"><a href="/scan/camera/TF2/division/else" class="white-link">기타</a></div>
    </div>
    <div class="box"></div>
    <div class="back"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division'" class="a bg-pink">돌아가기</button></div>
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
    .bg-wpink {
        background-color: rgba(245, 183, 177, 1);
        color: white;
    }
    .bg-pink {
        background-color: rgba(236, 112, 99, 1);
        color: white;
    }
    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
        margin: 0 auto;
        width: 160px;
        height: 40px;
        text-align: center;
        border-radius: 7px;
    }
    .chartA {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .box {
        margin: 0 auto;
        margin-top: 50px;
        width: 800px;
        height: 350px;
        border: 2px solid black;
    }
    .back {
        display: flex;
        width: 150px;
        height: 40px;
        background-color: rgba(245, 183, 177, 1);
        font-weight: 500;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 5px;
    }
    .white-link {
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
    .a {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        color: white;
        font-size: 20px;
    }
</style>