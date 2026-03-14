function calculate(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    if(!(weight) || weight=="0" || weight<=0 ){
            document.getElementById("bmiresult").innerHTML="Enter valid weight";
            document.getElementById("weight").focus();
            return;
    }
    if(!(height) || height=="0" || height<=0){
            document.getElementById("bmiresult").innerHTML="Enter valid height";
            document.getElementById("height").focus();
            return;
    }
    height/=100;
    let BMI=weight/(height**2);
    document.getElementById("bmiresult").innerHTML="Your BMI is "+BMI.toFixed(2);
    let crt1=18.5*(height**2);
    let crt2=24.9*(height**2);
    document.getElementById("crtweight").innerHTML="Your weight must be "+crt1.toFixed(2)+" - "+crt2.toFixed(2)+" (kg) ";
    if (BMI < 18.5) {
        document.getElementById("condition").innerHTML="You are Underweight";
    }
    else if (BMI < 25) {
        document.getElementById("condition").innerHTML="You are Normal weight";
    }
    else if (BMI < 30) {
        document.getElementById("condition").innerHTML="You are Overweight";
    }
    else {
        document.getElementById("condition").innerHTML="You are Obese";
    }


}
