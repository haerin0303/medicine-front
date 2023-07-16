<!-- <nav>
    <ul>
        <li>
            <a href="/search">검색하기</a>
        </li>
        <li>
            <a href="/scan">스캔하기</a>
        </li>
        <li>
            <a href="/caution">주의 사항</a>
        </li>
    </ul>
</nav>

<h1>Home(main) Page</h1> -->
<body>
    <div>
        <div class="title bg-pink">Web Name</div>
    </div>

        <div class="box bg-wpink">
            <div class="text"><a href="/search" class="white-link">모양 찾기</a></div>
            <div class="line"></div>
            <div class="ex">
                약의 모양을 알고 계신가요?<br>
                약 검색하기로 모양과 색깔 별로 약을 찾아보세요. 
                위에 모양찾기를 눌러 시작해 보세요!
            </div>
        </div>
        <div class="box bg-wpink">
            <div class="text"><a href="/scan" class="white-link">스캔하기</a></div>
            <div class="line"></div>
            <div class="ex">
                약을 찍어보시는 건 어떨까요?<br>    
                약을 카메라로 찍는다면 찍힌 약의 정보가 나와요. 
                위에 스캔하기를 눌러 시작해 보세요!
            </div>
        </div>
        <div class="box bg-wpink">
            <div class="text"><a href="/caution" class="white-link">검색하기</a></div>
            <div class="line"></div>
            <div class="ex">
                약의 이름을 아시나요?<br>
                약의 이름만 알면 약의 정보를 알수 있어요.
                위에 검색하기를 눌러 시작해보세요!
            </div>
        </div>
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
        border-radius: 20%;
        display: inline-block;
        width: 18rem;
        height: 18em;
        margin: 6rem;
    }
    div {
        transition: all 0.5s;
    }
    .box:hover {   
        transform: scale(1.1);
        background-color: rgba(236, 112, 99, 1);
    }
    .text {
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
    .line {
        margin-top: 20px;
        padding: 3px 10px 3px 10px;
        background-color: white;
    }
    .ex {
        font-weight: bold;
        text-align: center;
        margin: 20px 5px 0px 5px;
        color: white;
    }
    .white-link {
        color: white;
        text-decoration: none;
    }
    .bg-pink {
        background-color: rgba(236, 112, 99, 1);
    }
    .bg-wpink {
        background-color: rgba(245, 183, 177, 1);
    }
</style>