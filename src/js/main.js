const watchCdmx = (offset) => {
    let date = window.calculateTimezone.updateHour(offset);    
    document.getElementById('cdmx-hours').textContent = date[0];
    document.getElementById('cdmx-minutes').textContent = date[1];
    document.getElementById('cdmx-seconds').textContent = date[2];
};

const watchStcklm = (offset) => {
    let date = window.calculateTimezone.updateHour(offset);    
    document.getElementById('stklm-hours').textContent = date[0];
    document.getElementById('stklm-minutes').textContent = date[1];
    document.getElementById('stklm-seconds').textContent = date[2];
};

const watchBali = (offset) => {
    let date = window.calculateTimezone.updateHour(offset);    
    document.getElementById('bali-hours').textContent = date[0];
    document.getElementById('bali-minutes').textContent = date[1];
    document.getElementById('bali-seconds').textContent = date[2];
};

const watchTokio = (offset) => {
    let date = window.calculateTimezone.updateHour(offset);    
    document.getElementById('tokio-hours').textContent = date[0];
    document.getElementById('tokio-minutes').textContent = date[1];
    document.getElementById('tokio-seconds').textContent = date[2];
};


let timeMx = setInterval(watchCdmx(-5.0),1000);
let timeSt = setInterval(watchStcklm(2.0),1000);
let timeBl = setInterval(watchBali(8.0),1000);
let timeTk = setInterval(watchTokio(9.0),1000);
