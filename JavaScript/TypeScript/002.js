var stud = {
    id: 1,
    name: "omkar",
    marks: 85
};
stud.marks = 20;
var basicOut = document.getElementById("basicInterface");
basicOut.innerText = "".concat(stud.id, " -  ").concat(stud.name, " - ").concat(stud.marks);