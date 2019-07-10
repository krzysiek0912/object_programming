function Phone(brand, price, color, camera, IMEI) {
  this.brand = brand;
  //by using this, the "brand" property of the object we create will assume the value of the brand argument
  this.price = price;
  this.color = color;
  this.camera = camera;
  this.IMEI = IMEI;
}
Phone.prototype.printInfo = function() {
  console.log(
    "The phone brand is " +
      this.brand +
      ", color is " +
      this.color +
      ", camera is " +
      this.camera +
      " and the price is " +
      this.price +
      "."
  );
};
Phone.prototype.printIMEI = function() {
  console.log("The phone IMEI is " + this.IMEI + ".");
};
Phone.prototype.compare = function(otherPhone) {
  console.log(
    "The phone brand is " +
      this.brand +
      ". Other phone brand is" +
      otherPhone.brand +
      " The phone color is " +
      this.color +
      ". Other phone color is" +
      otherPhone.color +
      " The phone camera is " +
      this.camera +
      ". Other phone camera is" +
      otherPhone.camera
  );
};

var samsungS6 = new Phone(
  "Samsung",
  1250,
  "black",
  "16Mpx/f1.9",
  "544106718738394"
);
var iPhone6S = new Phone(
  "Apple",
  2250,
  "silver",
  "12Mpx/f2.2",
  "015355168248871"
);
var onePlusOne = new Phone(
  "OnePlus",
  1999,
  "blue",
  "13Mpx/f2.0",
  "507187557392886"
);

samsungS6.printInfo();
samsungS6.printIMEI();
iPhone6S.printInfo();
iPhone6S.printIMEI();
onePlusOne.printInfo();
onePlusOne.printIMEI();
samsungS6.compare(iPhone6S);
iPhone6S.compare(onePlusOne);

function Button(text) {
  this.text = text || "Hello";
}
Button.prototype = {
  create: function() {
    var self = this;
    this.element = document.createElement("button");
    this.element.innerText = this.text;

    this.element.addEventListener("click", function() {
      alert(self.text);
    });
    document.body.appendChild(this.element);
  }
};

var btn1 = new Button("Hello!");
btn1.create();
