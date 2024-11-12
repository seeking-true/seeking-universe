function start() {
    bnumt1.innerHTML= "Hacking In Progress";
    bnumt2.innerHTML= "Decrypting";
}

function starthack(){
    setInterval(() => {
        bnum1.innerHTML= bnum1.innerHTML +"1011001";
    }, 47);
}
    
function dehack(){
    setInterval(() => {
        bnumt1.innerHTML= bnumt1.innerHTML+".";
        bnumt2.innerHTML= bnumt2.innerHTML+".";
    }, 600);
    
    setInterval(() => {
        bnumt1.innerHTML= "Hacking In Progress";
        bnumt2.innerHTML= "Decrypting";
        bnum1.innerHTML="";
    }, 1980);
}
    
function decrypt(){
    setInterval(() => {
        bnum2.innerHTML= bnum2.innerHTML +"1011";
    }, 90);
    
    setInterval(() => {
        bnum2.innerHTML="";
    }, 6800);
}
 



   

function steps(){
    let a= document.getElementById('uname').value;
    let arr=[ "Searching For " + a +"...",
    "<br>User Found...",
    "<br>Uploading Tools...",
    "<br>Fetching Keylogger...",
    "<br>Decrypting Files...",
    "<br>Initiating Brute Force...",
    "<br>Testing Passwords...",
    "<br>Failed...",
    "<br>Retrying...",
    "<br>Failed...",
    "<br>Retrying...",
    "<br>Password Cracked...",
    "<br>You Recieved 500tk!!"
   ]
    mpara.innerHTML = arr[0];
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[1];
    }, 1500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[2];
        start();
    }, 2500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[3];
    }, 3000);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[4];
        dehack();
        decrypt();
    }, 3500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[5];
        starthack();
    }, 6000);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[6];
    }, 10500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[7];
    }, 12500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[8];
    }, 12800);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[9];
    }, 15000);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[10];
    }, 15200);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[11];
    }, 16500);
    setTimeout(() => {
        mpara.innerHTML =  mpara.innerHTML + arr[12];
        
    }, 18000);
   
}


async function hack(){
    const initialize = await steps();
}


