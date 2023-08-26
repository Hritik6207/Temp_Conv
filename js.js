let cel=document.getElementById("cel");
let far=document.getElementById("far");
let kel=document.getElementById("kel");

cel.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    let k=(parseInt(c)+273.15);
    far.value=f;
    kel.value=k;
})

far.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)*5/9;
    let k=(f-32)*1.8+273.15;
    cel.value=c;
    kel.value=k;
})

kel.addEventListener('input',function(){
    let k=this.value;
    let c=k-273.15;
    let f=(k-273.15)*1.8+32;
    cel.value=c;
    far.value=f;
})
function clearInput1(){
    var getValue= document.getElementById("cel")
      if (getValue.value !="") {
          getValue.value = "";
      }
}
function clearInput2(){
    var getValue= document.getElementById("far")
      if (getValue.value !="") {
          getValue.value = "";
      }
}
function clearInput3(){
    var getValue= document.getElementById("kel")
      if (getValue.value !="") {
          getValue.value = "";
      }
}