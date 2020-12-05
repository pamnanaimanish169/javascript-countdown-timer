function getDifference() {
    // This is neccessary to get the time of indian standard (GMT + 0530)
    let newYear = Date.parse('01 Jan 2021 00:00:00 GMT+0530')
    let date = new Date();
    let currentDate = Date.now()

    // get total seconds between the times
    var delta = Math.abs(currentDate - newYear) / 1000;
    console.log(delta > 0)

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    console.log(days)
    document.getElementById('days').innerHTML = days

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    console.log(hours)
    document.getElementById('hours').innerHTML = hours

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    console.log(minutes)
    document.getElementById('minutes').innerHTML = minutes

    // what's left is seconds
    var seconds = delta % 60;
    console.log(parseInt(seconds))
    document.getElementById('seconds').innerHTML = parseInt(seconds)

}

setInterval(getDifference, 1000)