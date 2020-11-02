function textChanger() {
    document.getElementById('textChange').innerHTML='And this is the changed text!!'
}

function attributeChanger() {
    document.getElementById('attributeChange').src='img/ch.png'
}

function styleChanger() {
    document.getElementById('styleChange').style.color='red'
}

function popup() {
    window.alert("This is how pop-ups are made")
}

d = new Date()
function viewdate() {
    document.getElementById('datetext1').style.display='block';
    document.getElementById('viewdate1').innerHTML=d.toString()
    document.getElementById('datetext2').style.display='block';
    document.getElementById('viewdate2').innerHTML=d.toUTCString()
    document.getElementById('datetext3').style.display='block';
    document.getElementById('viewdate3').innerHTML=d.toDateString()
    document.getElementById('datetext4').style.display='block';
    document.getElementById('viewdate4').innerHTML=d.toISOString()
}