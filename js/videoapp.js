(async function(){
    document.querySelector("video").srcObject = await navigator.mediaDevices.getUserMedia({
        video:true,
        audio:false
    });
})();