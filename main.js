var SpeechRecognition=window.webkitSpeechRecognition;
var recoginition= new SpeechRecognition();

function Start(){
document.getElementById("text_box").innerHTML="";
recoginition.start();
}

recoginition.onresult=function run(event){
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML= content;
    if(content.startsWith("take my selfie")) {
    
        speak();
    }
 
}

function speak(){
    var synth=window.speechSynthesis;
    speakThis="SAY CHEESE!I AM TAKING YOUR SELFIE IN 3 SECONDS";
    var utterThis= new SpeechSynthesisUtterance(speakThis);
    synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();

},3496);
}
Webcam.set({
    width:360,
height:250,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id= 'my_selfie' src='"+data_uri+"'>";
    });
}