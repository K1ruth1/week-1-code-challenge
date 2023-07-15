

const speed = document.getElementById('button').addEventListener('click', calculateSpeed);
const licenseStatus = document.getElementById('licenseStatus');

function calculateSpeed(){
    
    const speed = document.getElementById('speed').value;
    const demeritPoints = Math.floor((speed - 70) / 5);
    if(speed < 70){
        licenseStatus.innerText = 'ok';
    }else if(speed <= 80){
        licenseStatus.innerText = 'ok';
    
    }else{
        licenseStatus.innerText = 'License Status: License suspended'
    }
    document.getElementById('result').innerText = `Result: ${demeritPoints} demerit points`;
}