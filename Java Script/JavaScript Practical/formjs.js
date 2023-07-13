
function checkemty(){
let fname =document.getElementById("fname").value;
let mname=document.getElementById("mname").value;
let lname= document.getElementById("lname").value;
let adr= document.getElementById("adr").value;
let bdate =document.getElementById("bdate").value;
let male =document.getElementById("male").checked;
let female =document.getElementById("female").checked;
let exp =document.getElementById("exp").value;
let mbo =document.getElementById("mbo").value;
let mail =document.getElementById("mail").value;
let pass=document.getElementById("pass").value;
let cpass=document.getElementById("cpass").value;
// let mbo = document.getElementById("mbo").value;
     
    if(fname=="" || fname==null){
        document.getElementById("msg").innerText="Enter Frist Name";
        return false;
    }else if(mname == "" || mname == null){
          document.getElementById("msg1").innerText="Enter Middle Name";
          return false;
    }else if(lname== "" || lname== null){
        document.getElementById("msg2").innerText="Enter Last Name";
        return false;
    }else if(adr ==""||adr == null ){
        document.getElementById("msg3").innerText="Enter Address"
        return false;
    }else if(bdate==""||bdate==null ){
        document.getElementById("msg4").innerText="Enter brith date";
        return false;

    }else if(male==false && female==false){
         document.getElementById("msg5").innerText="select Gender";
         return false;
    }else if(exp == "-1" ){
          document.getElementById("msg6").innerText="select city";
          return false;
    }
    else if(mbo== ""||mbo== null ){
         document.getElementById("msg7").innerText="Enter Mobile Number";
         return false;
    }else if(mail=="" || mail== null ){
          document.getElementById("msg8").innerText="Enter email"; 
          return false;
    }else if(pass=="" || pass== null){
        document.getElementById("msg9").innerText="Enter password";
        return false;
    }else if(cpass==""|| cpass== null){
        document.getElementById("msg10").innerText="Enter confirm password";
          return false;
    }
    else{
        document.getElementById("msg").innerText=""; 
        document.getElementById("msg1").innerText="";
        document.getElementById("msg2").innerText="";
        document.getElementById("msg3").innerText="";
        document.getElementById("msg4").innerText="";
        document.getElementById("msg5").innerText="";
        document.getElementById("msg6").innerText="";
        document.getElementById("msg7").innerText="";
        document.getElementById("msg8").innerText="";
        document.getElementById("msg9").innerText="";
        document.getElementById("msg10").innerText="";
        return false
    }
}


// on blur

function checkfild(blnk,spanid){
    if(blnk.value== "" || blnk.value== null){
        document.getElementById(spanid).innerText="Please fill this filled";
        return false;
    }else{
        document.getElementById(spanid).innerText="";
        return false;
    }

}

function gendercheck(gender,spanide){
    if(gender.checked == false  && gender.checked == false){
        document.getElementById(spanide).innerText="Select Gender";
        return false;
    }
    else{
        document.getElementById(spanide).innerText="";
        return false;
    }
}
function selection(selectv,space){
    if(selectv.value == "-1"){
        document.getElementById(space).innerText="Selet Experiance ";
        return false;
    }else{
        document.getElementById(space).innerText="";
        return false;
    }
}
//   on key

function namecheck(name,colam ){
    let expname=/^[A-Za-z]*$/;
    if(!(expname.test(name.value)) || (name.value.length < 2)){
        document.getElementById(colam).innerText="Enter proper name";
        return false;
    }else{
        document.getElementById(colam).innerText=""
         return false;
    }
}
function addcheck(){
    let adr =document.getElementById("adr").value
   if(adr<2){
    document.getElementById("msg3").innerText="Enter Proper Address";
    return false
   }else{
    document.getElementById("msg3").innerText="";
    return false
   }
}
function mobilcheck(){
    let mbo = document.getElementById("mbo").value
    let expmobile=/^[0-9]*$/
    let exmon =/^[6-9]/
    if(!(expmobile.test(mbo)) || (!(exmon.test(mbo)))){
        document.getElementById("msg7").innerText="Enter proper Number";
        return false
    }else{
        document.getElementById("msg7").innerText="";
        return false
    }
}

function emailcheck(){
    let mail= document.getElementById("mail").value;
    let rexpmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if(!(rexpmail.test(mail))){
         document.getElementById("msg8").innerText="Enter Proper Email"
         return false
    }else{
       document.getElementById("msg8").innerText=""
       return false
    }
}
function passcheck(){
    let pass = document.getElementById("pass").value;
    let expass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!(expass.test(pass))){
        document.getElementById("msg9").innerText="Enter Proper Password"
         return false
    }else{
       document.getElementById("msg9").innerText=""
       return false
    }
    
}
function matchpass(){
    let pass =document.getElementById("pass").value
    let cpass=document.getElementById("cpass").value
    if( pass !=cpass){
        document.getElementById("msg10").innerText="Invalid Entery"
        return false
    }else{
        document.getElementById("msg10").innerText=""
        return false
    }
}
function showpass(){
    let pass =document.getElementById("pass")
    let cpass=document.getElementById("cpass")
    if(pass.type=="password" || cpass.type =="password"){
        pass.type="text"
        cpass.type="text"
    }else{
        pass.type="password"
        cpass.type="password"
    }
}