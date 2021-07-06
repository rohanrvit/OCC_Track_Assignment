function mycolor()
{
    if(document.getElementById('blue').checked) { 
        
        document.getElementById("div3").style.backgroundColor=document.getElementById("blue").value;
    } 
    else if(document.getElementById('red').checked) { 
      
        document.getElementById("div3").style.backgroundColor=document.getElementById("red").value;
    } 
    else if(document.getElementById('green').checked) { 
        document.getElementById("div3").style.backgroundColor=document.getElementById("green").value;
    } 
    
}
function myfontfamily()
{
    if(document.getElementById('blue1').checked) { 
        
        document.getElementById("div3").style.fontFamily="Brush Script MT, Brush Script Std, cursive";
    } 
    else if(document.getElementById('red1').checked) { 
      
        document.getElementById("div3").style.fontFamily="Brush Script MT, Brush Script Std, cursive";
    } 
    else if(document.getElementById('green1').checked) { 
        document.getElementById("div3").style.fontFamily="Brush Script MT, Brush Script Std, cursive";
    } 
}