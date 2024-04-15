document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan filter blur pada body
    document.body.className = 'loading';

    // Tampilkan gambar loading
    var loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'block';

    // Menghapus filter blur dan menyembunyikan gambar loading setelah halaman selesai dimuat
    window.addEventListener('load', function() {
        document.body.className = '';
        loadingContainer.style.display = 'none';
    });
});

function toggleInvertFilter() {
    const body = document.body;
    body.classList.toggle('invert-filter');
}

function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            content.classList.add('exit');
            setTimeout(() => {
                content.classList.remove('exit');
            }, 0); // Sesuaikan dengan durasi animasi fadeOutDown
        }
    });

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
        button.style.filter = 'none';
        button.style.transform = 'translateY(0)';
        button.style.fontWeight = '';
    });

    const activeButton = document.querySelector(`.menu button.${contentId}`);
    if (activeButton) {
        activeButton.style.filter = 'contrast(1.25)';
        activeButton.style.transform = 'translateY(-5px)';
        activeButton.style.fontWeight = 'bold';
    }
    
    generateCalendar(currentYear, currentMonth);
    updateCalendarHeader();
}


function updateTime() {
    const currentTime = new Date();
    document.getElementById('current-time').innerText = currentTime.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    const currentTime = new Date();
    const alarmDateTime = new Date(currentTime.toDateString() + ' ' + alarmTime);

    const timeDifference = alarmDateTime - currentTime;

    if (timeDifference <= 0) {
        alert('Please set a future time for the alarm.');
        return;
    }

    setTimeout(() => {
        alert('Alarm!');
    }, timeDifference);
}

function convertTime() {
    const inputTime = document.getElementById('converter-input').value;
    const inputDate = new Date(`January 01, 2000 ${inputTime}`);

    const convertedTime = inputDate.toLocaleTimeString();
    document.getElementById('converted-time').innerText = `Converted Time: ${convertedTime}`;
}

//First Timezone option//
//First Timezone option//
//First Timezone option//
//First Timezone option//
//First Timezone option//

document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
  });

  function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US');

    dateElement.textContent = `Date: ${formattedDate}`;
    timeElement.textContent = `Time: ${formattedTime}`;

    displayCurrentTimezone()
}

function displayCurrentTimezone() {
    const timezoneElement = document.getElementById('timezone');
    
    // Mendapatkan zona waktu dari objek Date
    const currentTime = new Date();
    const timezone = currentTime.toLocaleTimeString('en-US', { timeZoneName: 'long' });

    // Menampilkan zona waktu pada elemen HTML dengan animasi
    timezoneElement.textContent = `Current Timezone: ${timezone}`;
    timezoneElement.style.opacity = '1';
    timezoneElement.style.transform = 'translateY(0)';
}

// Panggil updateTime setiap detik untuk memperbarui waktu secara real-time
setInterval(updateTime, 1000);

// Secara default, tampilkan konten "Timezone" saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    showContent('Timezone');
    updateTime();
});

/* Add these JavaScript functions to your existing script.js */
function updateClock() {
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDeg = (360 / 60) * seconds;

    hourElement.style.transform = `translate(-50%, 50%) rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `translate(-50%, 15%) rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `translate(-50%, 5%) rotate(${secondDeg}deg)`;

    const audioPlayerF = document.getElementById('audioPlayerF')
    const audioPlayerL = document.getElementById('audioPlayerL')

    audioPlayerF.style.display = 'none';
    audioPlayerL.style.display = 'none';
}

setInterval(updateClock, 1000);

// Call updateClock when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    updateClock();
});

//Last Timezone option//
//Last Timezone option//
//Last Timezone option//
//Last Timezone option//
//Last Timezone option//

//First Calendar option//
//First Calendar option//
//First Calendar option//
//First Calendar option//
//First Calendar option//

function generateCalendar(year, month) {
    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement('td');
                cell.textContent = date;
                cell.id = `day-${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }

    tdCurrentDay()
}

// Call the function with current year and month
const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
generateCalendar(currentYear, currentMonth);

function tdCurrentDay() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentDay = currentDate.getDate();

    const tdCurrentDayElement = document.getElementById(`day-${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`);
    
    if (tdCurrentDayElement) {
        tdCurrentDayElement.classList.add('tdCurrentDay');

        const tdCurrentDay = document.querySelector('.tdCurrentDay');
    } else {
        console.error('Element not found:', `day-${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`);
    }
}

// Tambahkan fungsi ini pada bagian JavaScript (scripts.js)

let currentCalendarMonth = currentMonth;
let currentCalendarYear = currentYear;

function updateCalendarHeader() {
    const calendarMonthYearElement = document.getElementById('calendarMonthYear');
    calendarMonthYearElement.textContent = `${getMonthName(currentCalendarMonth)} ${currentCalendarYear}`;
}

function prevMonth() {
    if (currentCalendarMonth === 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
    } else {
        currentCalendarMonth--;
    }
    generateCalendar(currentCalendarYear, currentCalendarMonth);
    updateCalendarHeader();
}

function nextMonth() {
    if (currentCalendarMonth === 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
    } else {
        currentCalendarMonth++;
    }
    generateCalendar(currentCalendarYear, currentCalendarMonth);
    updateCalendarHeader();
}

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

// Pemanggilan fungsi ini pada bagian JavaScript yang ada
updateCalendarHeader();
generateCalendar(currentCalendarYear, currentCalendarMonth);

function showMonthYearSelection() {
    const monthYearForm = document.getElementById('monthYearForm');
}

function changeMonthYear() {
    const selectedMonth = document.getElementById('selectMonth').value;
    const selectedYear = document.getElementById('inputYear').value;

    if (selectedYear && !isNaN(selectedYear)) {
        currentCalendarMonth = parseInt(selectedMonth);
        currentCalendarYear = parseInt(selectedYear);

        updateCalendarHeader();
        generateCalendar(currentCalendarYear, currentCalendarMonth);
        showMonthYearSelection(); // Hide the form after changing month and year
    } else {
        alert('Please enter a valid year.');
    }
}

function setToDefaultDate() {
    const currentDate = new Date();
    currentCalendarMonth = currentDate.getMonth();
    currentCalendarYear = currentDate.getFullYear();

    updateCalendarHeader();
    generateCalendar(currentCalendarYear, currentCalendarMonth);
    showMonthYearSelection(); // Sembunyikan formulir setelah mengatur ke tanggal default
}

document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    tdCurrentDay(); // Pindahkan panggilan ini ke sini
    setInterval(updateTime, 1000);
    showContent('Timezone');
});

//5 tahun untuk dihari yang sama dan tanggal yang sama// 

//Last Calendar option//
//Last Calendar option//
//Last Calendar option//
//Last Calendar option//
//Last Calendar option//

//First Timer option//
//First Timer option//
//First Timer option//
//First Timer option//
//First Timer option//

let intervalId;
let secondsRemaining;

const bttnTimer = document.querySelector('.bttnTimer')

const turnoffN0W = document.querySelector('.turnoffN0W')
const turnoffTA = document.querySelector('.turnoffTA')

const uploadAudioButtonS = document.querySelector('.uploadAudioS');
const uploadAudioButtonE = document.querySelector('.uploadAudioE');

const audioDfltArray = Array.from(document.querySelectorAll('.audioDflt'));

const audioInputBSF = document.getElementById('audioInputBSF');
const audioInputBEL = document.getElementById('audioInputBEL');

const rsmT = document.querySelector('.rsmT');
const psdT = document.querySelector('.psdT');

const startsTimer = document.getElementById('startTimer');
const resetsTimer = document.getElementById('resetTimer');

const audioPlayerF = document.getElementById('audioPlayerF')
const audioPlayerL = document.getElementById('audioPlayerL')

audioPlayerF.style.display = 'none';
audioPlayerL.style.display = 'none';

dsbldRP()

function startTimer() {
    startsTimer.disabled = true;
    resetsTimer.disabled = false;

    uploadAudioButtonS.disabled = true;
    uploadAudioButtonE.disabled = true;

    audioDfltArray.forEach((element) => {
        element.disabled = true;
    });

    rsmT.disabled = true;
    psdT.disabled = false;

    const timerInput = document.getElementById('timer-input').value;
    secondsRemaining = parseInt(timerInput, 10);

    if (isNaN(secondsRemaining)) {
        alert('Please enter a valid number for seconds.');
        dsbldRP();
        return;
    }

    audioPlayerF.play();

    bttnTimer.style.display = '';

    rsmT.style.display = '';
    psdT.style.display = 'inline-block';
    
    startsTimer.style.display = 'none';
    resetsTimer.style.display = 'inline-block';

    turnoffN0W.style.display = 'inline-block';

    const timerOutput = document.getElementById('timer-output');
    timerOutput.innerText = `Timer: ${secondsRemaining} seconds`;

    intervalId = setInterval(() => {
        secondsRemaining--;
        timerOutput.innerText = `Timer: ${secondsRemaining} seconds`;

        if (secondsRemaining <= 0) {
            clearInterval(intervalId);
            timerOutput.innerText = 'Timer expired!';
            Timerleft();
        }
    }, 1000);
}

function Timerleft() {
    audioPlayerF.pause();
    audioPlayerF.currentTime = 0;
    
    audioPlayerL.play();

    bttnTimer.style.display = 'none';

    turnoffTA.style.display = 'inline-block';
}

function t0NW() {
    bttnTimer.style.display = '';

    startsTimer.style.display = '';
    resetsTimer.style.display = '';

    audioPlayerF.pause();
    audioPlayerF.currentTime = 0;

    clearInterval(intervalId);
    const timerOutput = document.getElementById('timer-output');
    timerOutput.innerText = 'Timer expired!';

    const rsmT = document.querySelector('.rsmT');
    const psdT = document.querySelector('.psdT');

    if (rsmT && psdT) {
        rsmT.style.display = 'none';
        psdT.style.display = '';
    } else {
        console.error('ERROR CLICK');
    }

    Timerleft();

    uploadAudioButtonS.disabled = true;
    uploadAudioButtonE.disabled = true;
    
    audioDfltArray.forEach((element) => {
        element.disabled = true;
    });
}

function psdTimer() {
    turnoffN0W.style.display = 'inline-block';

    bttnTimer.style.display = '';

    startsTimer.style.display = 'none';
    resetsTimer.style.display = 'inline-block';

    audioPlayerF.pause();

    uploadAudioButtonS.disabled = true;
    uploadAudioButtonE.disabled = true;
    
    audioDfltArray.forEach((element) => {
        element.disabled = true;
    });

    startsTimer.disabled = true;
    resetsTimer.disabled = false;

    rsmT.disabled = false;
    psdT.disabled = true;

    clearInterval(intervalId);
    const timerOutput = document.getElementById('timer-output');
    timerOutput.innerText = `Timer paused at ${secondsRemaining} seconds`;

    if (psdT && rsmT) {
        psdT.style.display = '';
        rsmT.style.display = 'inline-block';
    } else {
        console.error('ERROR CLICK');
    }
}

function rsmTimer() {
    turnoffN0W.style.display = 'inline-block';
    
    bttnTimer.style.display = '';

    startsTimer.style.display = 'none';
    resetsTimer.style.display = 'inline-block';

    audioPlayerF.play();

    uploadAudioButtonS.disabled = true;
    uploadAudioButtonE.disabled = true;
    
    audioDfltArray.forEach((element) => {
        element.disabled = true;
    });

    startsTimer.disabled = true;
    resetsTimer.disabled = false;

    rsmT.disabled = true;
    psdT.disabled = false;
    
    if (secondsRemaining > 0) {
        const timerOutput = document.getElementById('timer-output');
        timerOutput.innerText = `Timer: ${secondsRemaining} seconds`;

        intervalId = setInterval(() => {
            secondsRemaining--;
            timerOutput.innerText = `Timer: ${secondsRemaining} seconds`;
    
            if (secondsRemaining <= 0) {
                clearInterval(intervalId);
                timerOutput.innerText = 'Timer expired!';
                Timerleft();
            }
        }, 1000);

        if (rsmT && psdT) {
            rsmT.style.display = '';
            psdT.style.display = 'inline-block';
        } else {
            console.error('ERROR CLICK');
        }
    } else {
        alert('Timer has not been started or has already expired.');
    }
}

function rstTimer() {
    turnoffN0W.style.display = '';
    
    bttnTimer.style.display = '';

    startsTimer.style.display = '';
    resetsTimer.style.display = '';

    audioPlayerF.pause();
    audioPlayerF.currentTime = 0;

    clearInterval(intervalId);
    const timerOutput = document.getElementById('timer-output');
    timerOutput.innerText = 'Timer reset';
    document.getElementById('timer-input').value = '';

    const rsmT = document.querySelector('.rsmT');
    const psdT = document.querySelector('.psdT');

        if (rsmT && psdT) {
            rsmT.style.display = 'none';
            psdT.style.display = '';
        } else {
            console.error('ERROR CLICK');
        }
        
    tORst()

    uploadAudioButtonS.disabled = false;
    uploadAudioButtonE.disabled = false;
    
    audioDfltArray.forEach((element) => {
        element.disabled = false;
    });
}

const nameFileAudioS = document.querySelector('.nameFileAudioS');
const nameFileAudioE = document.querySelector('.nameFileAudioE');

function tORst() {
    const timerOutput = document.getElementById('timer-output');
    // Set a timeout to clear the timer output after 2 seconds
    setTimeout(() => {
        timerOutput.innerText = '';
        turnoffN0W.style.display = '';    
        turnoffTA.style.display = '';
        
        dsbldRP()

        audioPlayerL.pause();
        audioPlayerL.currentTime = 0;
    }, 0);
}

function dsbldRP() {
    bttnTimer.style.display = '';

    startsTimer.style.display = '';
    resetsTimer.style.display = '';
    
    psdT.style.display = '';
    psdT.style.display = '';

    startsTimer.disabled = false;
    resetsTimer.disabled = true;

    uploadAudioButtonS.disabled = false;
    uploadAudioButtonE.disabled = false;
    
    audioDfltArray.forEach((element) => {
        element.disabled = false;
    });

    rsmT.disabled = true;
    psdT.disabled = true;
}

//Timer Start//

if (uploadAudioButtonS && audioInputBSF && audioPlayerF) {
    uploadAudioButtonS.addEventListener('click', function () {
        audioInputBSF.click(); // Trigger the file input click when the button is clicked
    });

    audioInputBSF.addEventListener('change', function () {
        const selectedFile = audioInputBSF.files[0];

        if (selectedFile) {
            // Mengganti src dari audioPlayerL dengan URL file yang baru
            const objectURL = URL.createObjectURL(selectedFile);
            audioPlayerF.src = objectURL;

            // Menampilkan nama file yang dipilih
            const nameFileAudioS = document.querySelector('.nameFileAudioS');
            nameFileAudioS.innerHTML = selectedFile.name;

        } else {
            // Jika pengguna membatalkan pemilihan file audio
            nameFileAudioS.innerHTML = 'Default-Timer-Start.mp3';
            audioPlayerF.src = 'First_timer-clock-ticking-60-second-countdown-118231.mp3';
        }
    });
} else {
    console.error('upldAd() ERROR');
}

function audioSDefault() {

    if (nameFileAudioS && audioPlayerF) {

        nameFileAudioS.innerHTML = 'Default-Timer-Start.mp3';
        audioPlayerF.src = 'First_timer-clock-ticking-60-second-countdown-118231.mp3';

        } else {
        audioSDefault()
    }
}

//Timer Expired//

if (uploadAudioButtonE && audioInputBEL && audioPlayerL) {
    uploadAudioButtonE.addEventListener('click', function () {
        audioInputBEL.click(); // Trigger the file input click when the button is clicked
    });

    audioInputBEL.addEventListener('change', function () {
        const selectedFile = audioInputBEL.files[0];

        if (selectedFile) {
            // Mengganti src dari audioPlayerL dengan URL file yang baru
            const objectURL = URL.createObjectURL(selectedFile);
            audioPlayerL.src = objectURL;

            // Menampilkan nama file yang dipilih
            const nameFileAudioE = document.querySelector('.nameFileAudioE');
            nameFileAudioE.innerHTML = selectedFile.name;

        } else {
            // Jika pengguna membatalkan pemilihan file audio
            nameFileAudioE.innerHTML = 'Default-Timer-Expired.mp3';
            audioPlayerL.src = 'Last_timer-(normal)microwave-timer-117077.mp3';
        }
    });
} else {
    console.error('upldAd() ERROR');
}

function audioEDefault() {

    if (nameFileAudioS && audioPlayerF) {

        nameFileAudioE.innerHTML = 'Default-Timer-Expired.mp3';
        audioPlayerL.src = 'Last_timer-(normal)microwave-timer-117077.mp3';

        } else {
        audioEDefault()
    }
}

// Tambahkan panggilan ini setelah Anda memastikan kalender sudah di-generate
generateCalendar(currentYear, currentMonth);
updateCalendarHeader();