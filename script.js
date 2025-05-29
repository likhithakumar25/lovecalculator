document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const yourName=document.getElementById('yourName').value.trim();
    const crushName=document.getElementById('crushName').value.trim();
    const result=document.getElementById('result');
    if(!yourName||!crushName){
        alert('Please fill the box with name');
        return;
    }
    const lovepercent=Math.floor(Math.random()*100);
    let message=" ";
    if(lovepercent>=90){
        message="Match made in heaven!";
    }else if(lovepercent>=75){
        message="There is something working.Please keep on trying!";
    }
    else{
        message="You got saved,enjoy.";
    }
    result.classList.remove('d-none');
    result.innerHTML=`${yourName} & ${crushName}=${lovepercent}% - ${message}`;
})