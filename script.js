var disp = document.getElementById("display")

function display(input){
    disp.value += input
    
}
function calculate(){
    try {
        disp.value = eval(disp.value)
    
    } catch (error) {
       disp.value = "Error!!" 
    }
}  
function back(){
    disp.value = disp.value.slice(0,-1)
}
function clearDisplay(){
    disp.value = ""
}