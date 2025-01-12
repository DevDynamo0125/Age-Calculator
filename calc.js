let searchBar=document.querySelector(".enter");
let calc=document.querySelector(".butt");
let res=document.querySelector(".result");


function calculator() {
    let dob=document.getElementById("dat");
    const DateTime= luxon.DateTime;
    const Bday=DateTime.fromISO(dob.value);
    const now=DateTime.now();
    const age=now.diff(Bday,'years').years;
    
    res.innerText=`YOU ARE ${Math.floor(age)} YEARS OLD`;

}