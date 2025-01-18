function num(a){
    document.getElementById('inp').value+=a
}
function ac(){
    document.getElementById('inp').value=' '
}
function de(){
    let getnum=document.getElementById('inp')
    getnum.value=getnum.value.slice(0,-1)
}
function eq(){
    let getvalue=document.getElementById('inp')
    getvalue.value=eval(getvalue.value)
}

let icon = document.getElementById('icon');
icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fa-solid fa-sun'; // Change the class to sun icon
    } else {
        icon.className = 'fa-solid fa-moon'; // Change the class back to moon icon
    }
};
