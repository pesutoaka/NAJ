window.addEventListener('DOMContentLoaded', function () {
    
    
    var height, weight;
	//When the page structure is loaded...
    var weightInput = document.querySelector(".weight input");
    var heightInput = document.querySelector(".height input");
    var weightSpan = document.querySelector(".weight span");
    var heightSpan = document.querySelector(".height span");
    
//    console.log(weight+height);
    
    var outputSpan = document.querySelector("h1 span");
    var allHeaders = document.querySelectorAll("h1");
    var lastHeader = allHeaders[allHeaders.length-1];
    function countBMI(){
//        waga/wysokosc^2
        height = +(heightInput.value)/100;
        weight = +(weightInput.value);
        var BMI = +(weight/Math.pow(height,2))
        outputSpan.textContent = BMI;
        if(BMI>=17&& BMI<=30){
            lastHeader.className = "medium";
            if(BMI>=19&& BMI<=25)
                lastHeader.className = "ok";
        }else{
            lastHeader.className = "bad";
        }
    }
    countBMI();
    heightInput.addEventListener("change",function(changeEvent){
        countBMI();
        
    });
    weightInput.addEventListener("change",function(changeEvent){
        countBMI();
        
    });
    heightInput.addEventListener("input",function(){
        heightSpan.textContent = heightInput.value;
    });
    weightInput.addEventListener("input",function(){
        weightSpan.textContent = weightInput.value;
    });
});

