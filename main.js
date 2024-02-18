let xo=document.querySelector(".xo");

let turn ='x';
let squres=[]
;
function end(n1,n2,n3){
    xo.innerHTML=`${squres[n1]} winner`;
document.getElementById("item"+n1).style.background="rgba(80, 69, 69, 0.604)";
document.getElementById("item"+n2).style.background="rgba(80, 69, 69, 0.604)";
document.getElementById("item"+n3).style.background="rgba(80, 69, 69, 0.604)";

setInterval(function(){xo.innerHTML+="."},1000);
setTimeout(function(){location.reload()},4000)
}
function winner(){

for(let i=1;i<10;i++){
    squres[i]= document.getElementById("item"+i).innerHTML;


}
if(squres[1]==squres[2]&& squres[2]==squres[3] && squres[1]!=''){
end(1,2,3);
}else if(squres[4]==squres[5]&& squres[5]==squres[6] && squres[5]!='')
{
end(4,5,6);
}
else if(squres[7]==squres[8]&& squres[8]==squres[9] && squres[8]!='')
{
    end(7,8,9);

}
else if(squres[1]==squres[4]&& squres[4]==squres[7] && squres[1]!='')
{
    end(1,4,7);

}
else if(squres[2]==squres[5]&& squres[5]==squres[8] && squres[5]!='')
{
    end(2,5,8);

}
else if(squres[3]==squres[6]&& squres[6]==squres[9] && squres[6]!='')
{
    end(3,6,9);

}
else if(squres[1]==squres[5]&& squres[5]==squres[9] && squres[5]!='')
{
    end(1,5,9);

}else if(squres[3]==squres[5]&& squres[5]==squres[7] && squres[5]!='')
{
    end(3,5,7);

}
}

function game(id){
let  element=document.getElementById(id);
    if(turn ==='x' && element.innerHTML==''){
element.innerHTML='x';
turn='o';
xo.innerHTML='o';
}else if(turn ==='o' && element.innerHTML==''){
    element.innerHTML='o';
    turn='x';
    xo.innerHTML='x';

}
winner();
}