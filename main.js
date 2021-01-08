Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_uri+'"/>';
    }
    );
    }
    console.log("ml5 version: ",ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/imSe87xDS//model.json',modelLoaded);
    function modelLoaded()
    {
        console.log("model loaded!!");
    }
    
    function check()
    {
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
    }
    
    function gotResult(error,results)
    {
    if(error)
    {
        console.error(error);
    }
    else
    {
    console.log("results");
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    if(results[0].label=="high five")
    {
    document.getElementById("update_emoji").innerHTML="&#9995;";
    }
    if(results[0].label=="thumbs up")
    {
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    if(results[0].label=="thumbs down")
    {
        document.getElementById("update_emoji").innerHTML=" &#128078;";
    }
    if(results[1].label=="high five")
    {
        document.getElementById("update_emoji2").innerHTML="&#9995;";
    }
    if(results[1].label=="thumbs up")
    {
        document.getElementById("update_emoji2").innerHTML="&#128077;";
    }
    if(results[1].label=="thumbs down")
    {document.getElementById("update_emoji2").innerHTML="&#128078;";}
    }
    }
    
    
    
    
    
    