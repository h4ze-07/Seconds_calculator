let hours = prompt('Введіть кількість годин: ');
let strHours = hours.toString();

const secondsInHour = 3600;

let result = hours * secondsInHour;

if (strHours.endsWith('11')) {
    alert(`Секунд у ${hours} годинах: ${result}`);
} else if  (strHours.charAt(strHours.length - 1) === '1') {
    alert(`Секунд у ${hours} годині: ${result}`);
}
else {
    alert(`Секунд у ${hours} годинах: ${result}`);
}