function hasProperty(obj, propertyName) {
  return propertyName in obj;
}
const myObj = { foo: "Hello" };
console.log(hasProperty(myObj, "foo"));
console.log(hasProperty(myObj, "Helo"));
