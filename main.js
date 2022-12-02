const domNumber = document.getElementById("number");

const LOCAL_NUMBER = "number";

domNumber.value = localStorage.getItem("test", LOCAL_NUMBER);

console.log(localStorage.getItem("test"));
