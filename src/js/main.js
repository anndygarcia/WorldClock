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


watchCdmx(-5.0);
watchStcklm(2.0);
watchBali(8.0);
watchTokio(9.0);

let interMex = setInterval(watchCdmx, 1000, -5.0);
let interStklm = setInterval(watchStcklm, 1000, 2.0);
let interBali = setInterval(watchBali, 1000, 8.0);
let interTokio = setInterval(watchTokio, 1000, 9.0@);
