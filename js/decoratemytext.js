

    "use strict";
    var s =1;
 
 

// Q1 gettBigee updated at exercise 11 this one is updating itself


 const getBigger  = () => {
  
    document.getElementById("container").style.backgroundImage ="url('images/hundred-dollar-bill.jpg')"
    document.getElementById("container").style.backgroundRepeat = "none"
setInterval (() =>{
    let domel = document.getElementById('textArea');
    let style = window.getComputedStyle(domel, null).getPropertyValue('font-size');
    // domel.style.fontSize = parseFloat(style+2)+'px'
    let newstyle= parseInt(style)+2+'px';
    domel.style.fontSize = newstyle;
},500)
    
   

} 


 function setStyle () {
    
    alert("SDa")
   
  
    // document.getElementById("textArea").style="{color:green;text-decoration:underline;}"
}


const func = () => {alert("From Vs code")};

const bigButton = document.getElementById("bigButton");
bigButton.onclick = getBigger;

 
document.getElementById("checkBox").addEventListener("change",(event) =>{

    let status = event.target.checked;
    
        if(status)
        {
          document.getElementById("textArea").style.color = "green"
          document.getElementById("textArea").style.fontWeight = "bold"
          document.getElementById("textArea").style.textDecoration = "underline"
        }

        else {

            document.getElementById("textArea").style.color = "black"
            document.getElementById("textArea").style.fontWeight = "normal"
            document.getElementById("textArea").style.textDecoration = "none"
             

        }

});



 
