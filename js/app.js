(async function(){
    // 获取本机的全部设备
    // 隐藏了groupId
    // 输入设备 InputDeviceInfo {deviceId: "", kind: "audioinput", label: "", groupId: ""}
    // 输入设备 InputDeviceInfo deviceId: "",kind: "videoinput"
    // 输出设备 deviceId: "" groupId: "" kind: "audiooutput"  label: ""
    let deviceInfos =await navigator.mediaDevices.enumerateDevices();
    console.log(deviceInfos);

    // 使用本机可以使用的麦克风
    let userMedia =await navigator.mediaDevices.getUserMedia({video:false,audio:true});
    // 使用本机可以使用的摄像头，但是没打开
    let videoMedia =await navigator.mediaDevices.getUserMedia({  video: {
            width: { min: 1024, ideal: 1280, max: 1920 },
            height: { min: 576, ideal: 720, max: 1080 }
        },audio:true});
    document.querySelector("audio").srcObject=userMedia;
    // document.querySelector("video").srcObject=videoMedia;
})();