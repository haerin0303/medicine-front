<script>
    //@ts-nocheck
</script>
<body>
    <div>
        <div class="bg-pink title">Web Name</div>
    </div>
    <div class="chartA">
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/picture'" class="a bg-wpink">사진</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/many'" class="a bg-wpink">복용량</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/effect'" class="a bg-wpink">효과</button></div>
        <div class="chart bg-wpink"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/side-effect'" class="a bg-wpink">부작용</button></div>
        <div class="chart bg-pink"><a href="/scan/camera/TF2/division/else" class="white-link">기타</a></div>
    </div>
    <div class="else m30 bp">부과적인 정보가 쓰일 예정</div>
    <div class="else bwp"></div>
    <div class="else bp"></div>
    <div class="else bwp"></div>
    <div class="else bp"></div>
    <div class="else bwp"></div>
    <div class="else bwp"></div>
    <div class="back"><button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division'" class="a bg-pink">돌아가기</button></div>
</body>

<style>
    .bg-wpink {
        background-color: rgba(245, 183, 177, 1);
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
    .white-link {
        color: white;
        text-decoration: none;
        font-size: 20px;
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
        margin-top: 40px;
    }
    .else {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        height: 40px;
        width: 1200px;
        border-radius: 5px;
        text-align: left;
        font-weight: 400px;
        font-size: 20px;
        margin-top: 5px;
    }
    .m30 {
        margin-top: 50px;
    }
    .bwp {
        border: 3px solid rgba(245, 183, 177, 1);
    }
    .bp {
        border: 3px solid rgba(236, 112, 99, 1);
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