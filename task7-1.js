function ownProperties(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop + obj[prop]);
    }
  }
}
let myObj = {
  name: "Artur",
  age: 35,
  city: "Kazan",
};

ownProperties(myObj);
