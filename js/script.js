// declare our elements
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const dateStatus = document.getElementById("date-status");

// initialise datepicker
const datepickerContainer = document.getElementById('custom-datepicker');

// insitialiseoing AOS
AOS.init();

const rangepicker = new DateRangePicker(datepickerContainer, {
    // config 
    format: "dd/mm/yyyy"
});

function handleDateChange() {

    // get dates from datepicker
    let dates = rangepicker.getDates();
    // calculate difference between the dates
    let difference = dates[1].getTime() - dates[0].getTime();
    // convert the enormous amount of milliseconds into an amount of days
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    // console.log("The day difference is: " + totalDays);
    // display the date difference on screen
    if (totalDays > 0) {
        dateStatus.classList.add("active");
        dateStatus.innerHTML = `
        Amount of days selected: ${totalDays}
        `;
    }
}

// check if a date has been changed
startDate.addEventListener("changeDate", handleDateChange);
endDate.addEventListener("changeDate", handleDateChange);
