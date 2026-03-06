var marks = [70, 45, 50, 60, 80];
var marksList = document.getElementById("marksList");
marks.forEach(function (m) {
    var li = document.createElement("li");
    li.innerText = m.toString();
    marksList.appendChild(li);
});
var mixedData = [1, "Omkar", 2, "Patil"];
var mixedList = document.getElementById("mixedList");
mixedData.forEach(function (item) {
    var li = document.createElement("li");
    li.innerText = item.toString();
    mixedList.appendChild(li);
});
var user = [1, "omkar", 2, "patil", true, false, "omkar"];
var userInfo = document.getElementById("userInfo");
mixedData.forEach(function (item) {
    var li = document.createElement("li");
    li.innerText = item.toString();
    userInfo.appendChild(li);
});
