<script>
    //@ts-nocheck

    let search = '';
</script>
<body>
    <div>
        <div class="title bg-pink">Web Name</div>
    </div>
    <input bind:value={search} placeholder="약 검색하기" class="search_bar">
    <button type="button" onclick="location.href='http://localhost:5173/scan/camera/TF2'" class="a">검색하기</button>
</body>
<style>
    .a:hover {
        background-color: rgba(236, 112, 99, 1);
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
    input {
        margin: 0 auto;
        margin-top: 30px;
        width: 800px;
        height: 30px;
        font-size: 18px;
        outline: none;
        border: 5px solid rgba(245, 183, 177, 1);
        border-radius: 10px;
    }
    .search_bar {
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        border-radius: 5px;
    }
    .a {
        width: 150px;
        height: 40px;
        font-size: 20px;
        font-weight: 600;
        border: none;
        background-color: rgba(245, 183, 177, 1);
        border-radius: 5px;
    }
    button {
        display: block;
        margin: 0 auto;
        margin-top: 400px;
    }
</style>