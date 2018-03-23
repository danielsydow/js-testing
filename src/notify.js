/*
function notify(string){
    var date;
    heute = new Date();

return window.alert(string +" "+ heute);
}

function notifyWithDependency(string,fenster){
    var heute;
    heute = new Date();

    return fenster.alert(string + heute);
}
*/

function notify(value) {
    const date = (new Date()).toUTCString();
    alert(date + ' ' + value);
}

function notifyWithDependency(dependencyWindow, value) {
    const date = (new Date()).toUTCString();
    dependencyWindow.alert(date + ' ' + value);
}
