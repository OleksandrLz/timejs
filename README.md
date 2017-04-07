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

**hours** - get hours

**minutes** - get minutes

**seconds** - get seconds
```js
time.day(); // get todays date
```

**local** - method that get local time
```js
time.local(); // get local time
```

**utc** - method that get UTC time
```js
time.utc(); // get UTC time
```

**format** - get current time in format
```js
time.format('LT'); //get time in format: 8:30 PM
time.format('III'); //get time in format: Sep 4 1986 8:30 PM
```

| Format        | Time			 | 
| ------------- | -------------	 | 
| LT            | 8:30 PM         | 
| LTS           | 8:30:25 PM      | 
| L             | 09/04/1986      | 
| I             | 9/4/1986        | 
| LL            | September 4 1986      | 
| II            | Sep 4 1986               | 
| LLL           | September 4 1986 8:30 PM           | 
| III           | Sep 4 1986 8:30 PM            | 
| LLLL          | Thursday, September 4 1986 8:30 PM            |
| IIII          | Thu, Sep 4 1986 8:30 PM            |



**add** - method to add some time interval to instance 
```js
time.add(2, "HH"); // will add 2 hours to time state
time.add(4, "mm"); // will add 4 minutes to time state
/*
    HH - hours
    mm - minutes
    ss - seconds
    dd - day
    MM - month
    YY - year
*/
```

**isEqual** -  method to compare 2 instance and return if they are equal
```js
time1.isEqualTo(time); // returns false or true
```

**greaterThen** -  method to compare 2 instance and return if 1 grater then other
```js
time1.greaterThen(time); // returns false or true
```

**getInstanceCount** - shows the number of instances created by TimeJS
```js
TimeJS.getInstanceCount(); // returns 1
```

**toArray** - method that will returns an array that mirrors the parameters from Date
```js
time.toArray(); // returns [2013, 1, 4, 14, 40, 16, 154];
```
