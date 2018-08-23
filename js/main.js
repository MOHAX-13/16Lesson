function getDate()
{
    var date = new Date();
    
    document.getElementById('timedisplay').innerHTML = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}
setInterval(getDate, 0);

function subm(s) {
    s.submit();
}

console.log(submit);