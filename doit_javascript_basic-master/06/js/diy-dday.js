var firstDay = new Date();
var now = new Date();

var toFirst = firstDay.getTime();
var toNow = now.getTime();

var PassedTime = toNow - toFirst;
var passedDay = Math.round(PassedTime /(24 * 60 * 60 * 1000));

document.querySelector('#accent').innerTEXT = passedDay + "일";

