Webcam.set ({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

Webcam.snap(function(data_uri) {
    document.getElementById("result1").innerHTML = '<img id = "capture_image" src="'+data_uri+'"/>'
});

console.log('ml5version:', ml5.version);
classfier = ml5.imageClassfier(  modelLoaded);

function modelLoaded()
console.log( 'Model Loaded!' );

function check()
{
    img = document.getElementById('Captured_Image');
     classfier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = " The first prediction is " + prediction_1;
    speak_data_2 = " And the second  prediction is " + prediction_2;
    var utterThis = new speechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = " The first prediction is " + prediction_1;
    speak_data_2 = " And the second  prediction is " + prediction_2;
    var utterThis = new speechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error, result){
    if (error){
        console.error(error);
     } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = result[0].label;
    document.getElementById("result_emotion_name2").innerHTML = result[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;
    speak();
    if(results[0].label == "victory")
    {
        document.getElementById("udate_emoji").innerHTML = "&#9996;";
    }

    if(results[0].label == "best")
    {
        document.getElementById("udate_emoji").innerHTML = "&#128077";
    }

    if(results[1].label == "amazing")
    {
        document.getElementById("udate_emoji2").innerHTML = "&#128076";
    }