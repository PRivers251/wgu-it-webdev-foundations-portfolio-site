


const dateSpace = document.getElementById('date-space');
const dateObject = new Date;
const currentDate = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`

console.log(currentDate)

dateSpace.innerHTML = `<p>${currentDate}</p>`