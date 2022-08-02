p1=""
console.log("Gavin was here")
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach('#camera')







function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    })
}
console.log('dak the cereal killer ', ml5.version)
classifeor=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ciUm1kuND/model.json',modelLoaded)
function modelLoaded(){
    console.log("tyler lost fncs")
}


function  speak(){
    synth=window.speechSynthesis
    sd1="The hand symbol predicted is..."+ p1
    speakthis=new SpeechSynthesisUtterance(sd1)
    synth.speak(speakthis)
}

function check(){
    img=document.getElementById("captured_image")
    classifeor.classify(img, gotResult)
}
function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("ren").innerHTML=results[0].label
        p1=results[0].label
        speak()
        if(results[0].label=="NICE"){
            document.getElementById("update").innerHTML="&#128076;"
        }
        if(results[0].label=="V"){
            document.getElementById("update").innerHTML="&#128406;"
        }
        if(results[0].label=="L"){
            document.getElementById("update").innerHTML="&#128070;"
        }
    }
}