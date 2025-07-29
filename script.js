displayData=(data)=>{

    output=document.getElementById('output')
    output.value+=data
    
}

removeLastItem=()=>{
    output=document.getElementById('output')
    output.value=output.value.slice(0,-1)
}

clearAll=()=>{
    output=document.getElementById('output')
    output.value=""
    output.placeholder=0

}
displayResult=()=>{
    output=document.getElementById('output')
try{
    console.log("inside try");
    

     output.value= eval(output.value)

}
catch{
    console.log("inside catch");
    output.value=""
    output.placeholder="invalid expression"

    
}
finally{

    console.log("expression completed");
    

}
}