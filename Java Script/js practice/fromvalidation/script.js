//click event
function clickfrom(){
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    if(fname==""||fname== null){
        document.getElementById("msg1").innerText="Enter fist name";
        return false;
    }else if(lname==""||lname==null){
        document.getElementById("msg2").innerText="Enter last name"
        return false;
    }else{
        document.getElementById("msg1").innerText="";
        document.getElementById("msg2").innerText=""
    }  
}

// blur event
function blankcheck(blnk,spanid){
    if(blnk.value=="" || blnk.value == null){
        document.getElementById(spanid).innerText="Please fill this field"
        return false
    }
}

// name validation 
function regexname(inputex,spanid){
    let regex=/^[a-zA-Z]*$/
    if((regex.test(inputex.value)) || (inputex.value.length < 2)){
         document.getElementById(spanid).innerText="Enter Valid name"
         return false
    }else{
        document.getElementById(spanid).innerText=""
        return false
    }
}