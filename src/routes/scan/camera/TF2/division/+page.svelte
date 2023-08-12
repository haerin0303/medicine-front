<script>
    // @ts-nocheck
</script>


<body class="big">
    <div>
        <div class="title bg-pink">Web Name</div>
    </div>
    <div class="center"> 
        <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/picture'" class="a">사진 
        <div class="line"></div>
        <div class="letter"><br>여기서 약의 <br>사진을 볼 수 있어요</div>
        </button>
        <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/effect'" class="a">효과
        <div class="line"></div>
        <div class="letter"><br>여기서 약의 <br>효과에 대해 볼 수 있어요</div>
        </button>
        <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/many'" class="a">복용량
        <div class="line"></div>
        <div class="letter"><br>여기서 약의 복용량을 나이별로 볼 수 있어요</div>
        </button>
        <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/side-effect'" class="a">부작용
        <div class="line"></div>
        <div class="letter"><br>여기서 약의 <br>부작용을 볼 수 있어요</div>
        </button>
        <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2/division/else'" class="a">기타
        <div class="line"></div>
        <div class="letter"><br>여기서 약의 <br>부과적인 정보를 볼 수 있어요</div>
        </button>
    </div>
    <button type="button" onclick="location.href='http://localhost:5173'" class="b">돌아가기</button>
</body>

<style>
    button {
        transition: all 0.5s;
    }
    .a:hover {   
        transform: scale(1.1);
        background-color: rgba(236, 112, 99, 1);
    }
    .line {
        margin-top: 20px;
        padding: 3px 10px 3px 10px;
        background-color: white;
    }
    .a {
        display: inline;
        background-color: rgba(245, 183, 177, 1);
        border: none;
        margin: 0 auto;
        border-radius: 10px;
        height: 300px;
        color: white;
        margin-top: 100px;
        cursor: pointer;
        width: 150px;
        margin-left: 8.3%;
        font-size: 25px;
        font-weight: bold;
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
    .bg-pink {
        background-color: rgba(236, 112, 99, 1);
    }
    .big {
        height: 100%;
        width: 100%;
    }
    .letter {
        font-size: 20px;
    }
    .b {
        display: block;
        margin: 0 auto;
        margin-top: 50px;
        width: 150px;
        height: 32px;
        font-weight: bold;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        background-color: rgba(236, 112, 99, 1);
    }
    .center {
        margin: 0 auto;
    }
</style>