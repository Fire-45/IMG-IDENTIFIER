//https://teachablemachine.withgoogle.com/models/gd0HPviDM/


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
Webcam.attach("#camera")


function ImgTake(){
    Webcam.snap(function (data_uri){
        document.getElementById("RESULT").innerHTML = "<img src = '"+data_uri+"' id = 'Screenshot'>"
    });
}

console.log(ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gd0HPviDM/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded works")
}
function IdentifyImg(){
    img = document.getElementById("Screenshot");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("object_name").innerHTML = result[0].label;
    document.getElementById("Accuracy_object").innerHTML = result[0].confidence.toFixed(2);
}
}