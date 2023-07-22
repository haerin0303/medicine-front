<body>
    <div>
        <div class="bg-pink title">Web Name</div>
    </div>
    <div class="chartA">
        <div class="chart bg-wpink"><a href="/scan/camera/TF2/division/picture" class="white-link">사진</a></div>
        <div class="chart bg-wpink"><a href="/scan/camera/TF2/division/many" class="white-link">복용량</a></div>
        <div class="chart bg-wpink"><a href="/scan/camera/TF2/division/effect" class="white-link">효과</a></div>
        <div class="chart bg-wpink"><a href="/scan/camera/TF2/division/side-effect" class="white-link">부작용</a></div>
        <div class="chart bg-pink"><a href="/scan/camera/TF2/division/else" class="white-link">기타</a></div>
    </div>
    <div class="else m30"></div>
    <div class="else bwp"></div>
    <div class="else bp"></div>
    <div class="else bwp"></div>
    <div class="else bp"></div>
    <div class="else bwp"></div>
    <div class="back"><a href="/scan/camera/TF2/division" class="black-link">돌아가기</a></div>
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
        margin-top: 70px;
    }
    .black-link {
        font-weight: bold;
        font-size: 20px;
        color: black;
        text-decoration: none;
    }
    .else {
        display: block;
        margin: 0 auto;
        height: 40px;
        width: 1200px;
        border-radius: 5px;
        margin-top: 5px;
    }
    .m30 {
        margin-top: 40px;
    }
    .bwp {
        border: 3px solid rgba(245, 183, 177, 1);
    }
    .bp {
        border: 3px solid rgba(236, 112, 99, 1);
    }
</style>