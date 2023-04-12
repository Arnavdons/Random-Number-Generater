max_num="";

random_num="";

function generate(){
max_num=document.getElementById("max_num").value;
if(max_num==0){
document.getElementById("warning").innerHTML="You cannot use 0";
setTimeout(function(){
document.getElementById("warning").innerHTML="";
},5000
);
}



if(max_num==""){
document.getElementById("warning").innerHTML="First Write Your Maximum Number";
setTimeout(function(){
document.getElementById("warning").innerHTML="";
},5000

);
}
}
