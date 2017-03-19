# TimeJS
TimeJS is a JavaScript library for make possible to output different time formats, depending on the method call. The entire library is created using the TimeJS constructor function, it will have all methods and properties.

### Getting Started
Load the file manually
```html
<script src="path/to/time.js"></script>
```
### Basic Usage
```js
var time = new TimeJS();  // creates an instance of the library with the current date
```
### Methods, properties and examples


**day** - get day

**month** - get month

**year** - get year

**hours** - get year

**minutes** - get year

**seconds** - get year
```
time.day(); // get todays date
```

**format** - get current time in format with colons (":"). Regardless of the order in which the parameters are passed, they separated by ":".
```
time.format('HH:mm'); //get current time: hours and minutes
time.format('MM:YY'); //get current time: month and year

    HH - hours
    mm - minutes
    ss - seconds
    dd - day
    MM - month
    YY - year
```

**add** - method to add some time interval to instance 
```
time.add(2, "HH"); // will add 2 hours to time state
time.add(4, "mm"); // will add 4 minutes to time state

    HH - hours
    mm - minutes
    ss - seconds
    dd - day
    MM - month
    YY - year
```

**isEqual** -  method to compare 2 instance and return if they are equal
```
time1.isEqualTo(time); // returns false or true
```

**greaterThen** -  method to compare 2 instance and return if 1 grater then other
```
time1.greaterThen(time); // returns false or true
```
