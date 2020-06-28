

    "use strict";
    var s =1;
 
// (function() {
    
//     document.getElementById("container").style.display="none";
    
//     setTimeout(()=>{
//         document.getElementById("loader").style.display="none"
//         document.getElementById("container").style.display="block";
//     },2000)
    
// }())


 const getBigger = () => {
    
    if(document.getElementById("textArea").value!="")
    document.getElementById("textArea").style.fontSize="4em";
    else 
       alert("text area is empty nothing to enlarge")
    console.log("fsd")

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



 