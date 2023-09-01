<script>
    //@ts-nocheck
    let videoSource = null;
  let loading = false;
  const obtenerVideoCamara = async () => {
    try {
      loading = true;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoSource.srcObject = stream;
      videoSource.play();
      loading = false;
    } catch (error) {
      console.log(error);
    }
  };
</script>
    <div class="title bg-pink">Web Name</div>
<div>
    {#if loading}
      <h1>LOADING</h1>
    {/if}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoSource} class="video"/>
    <button on:click={obtenerVideoCamara} class="bg-pink">알약</button>
  </div>
  <div class="gg">약 검색하기</div>
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
    .bg-pink {
        background-color: rgba(236, 112, 99, 1);
    }
    button {
        border: none;
        color: white;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .video {
        width: 100%;
        height: 100%;
        margin: auto;
    }
</style>