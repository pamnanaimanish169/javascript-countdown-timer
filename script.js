function getDifference() {
    // This is neccessary to get the time of indian standard (GMT + 0530)
    let newYear = Date.parse('01 Jan 2021 00:00:00 GMT+0530')
    console.log(new Date())
    let date = new Date();
    console.log(Date.parse(date.toString()))
    let currentDate = Date.now()
    console.log(currentDate)

    // get total seconds between the times
    var delta = Math.abs(currentDate - newYear) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    console.log(days)
    console.log(delta)

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    console.log(hours)
    console.log(delta)

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    console.log(minutes)
    console.log(delta)

    // what's left is seconds
    var seconds = delta % 60;
    console.log(seconds)

}

getDifference()