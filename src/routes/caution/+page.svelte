<script lang="ts">
  import type { iPill } from '$lib/pill.d.ts';

  let search = "";
  let loading = false;
  let result: iPill;

  async function searchPill() {
    loading = true;
    export let answer = {search};

    let url = new URL(
      "http://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01"
    );
    let serviceKey = '0BMJYebktqDGdhWtTzCnatgdn751MbX/ja2an50vT6IyNJjFgKAcPJ3ScrRt7uar7rhrrDg0B3QOzuNQ6XoKYw==';
    let item_name = search;
    url.searchParams.append("serviceKey", serviceKey);
    url.searchParams.append("item_name", item_name);
    url.searchParams.append("entp_name", "");
    url.searchParams.append("item_seq", "");
    url.searchParams.append("img_regist_ts", "");
    url.searchParams.append("pageNo", "1");
    url.searchParams.append("numOfRows", "3");
    url.searchParams.append("", "3");
    url.searchParams.append("edi_code", "");
    url.searchParams.append("type", "json");

    const res = await fetch(url);
    result = await res.json();

    loading = false;
    console.log(result);

    //배열 반복
    for (const pill of result.body.items) {
      console.log("약 이름:", pill.ITEM_NAME);
      console.log("약 사진: ", pill.ITEM_IMAGE);
      console.log("약 제조사: ", pill.ENTP_NAME);
    }
  }
</script>

<body>
  <div>
    <div class="title bg-pink">Web Name</div>
    <div on:click {anwser}></div>
  </div>  
  <input bind:value={search} placeholder="약 검색하기" class="search_bar" />
  <button on:click={searchPill} class="search">약 검색하기</button>
  {#if result?.body?.items}
    {#each result.body.items as pill}
      <div class="picture">
      <div class="border">
        <img src= {pill.ITEM_IMAGE} width= "250px" height= "150px" alt="" class="picture"> 
        <div class="picture">약 이름 : {pill.ITEM_NAME}</div>
        <div class="picture">제조사 : {pill.ENTP_NAME}</div>
      </div>
      </div>
    {/each}
  {:else if loading}
    <p>Loading...</p>
  {/if}
  <div></div>
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
  input {
    margin: 0 auto;
    margin-top: 30px;
    width: 400px;
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
  button {
    display: flex;
    margin: 0 auto;
    background-color: rgba(245, 183, 177, 1);
    border: none;
    border-radius: 5px;
  }
  .picture {
    display: inline-flex;
    margin: 0 auto;
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
  }
  .search {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
    height: 30px;
    font-size: 15px;
    font-weight: bold;
  }
  .border {
    display: flex;  
    flex-direction: column;
    align-items: center;
    border: 5px solid rgba(245, 183, 177, 1);
    border-radius: 10px;
    width: 300px;
    height: 400px;
    margin-left: 142px;
  }
</style>
