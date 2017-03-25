function TimeJS(date) {
	this.dateObj = date;
	this.time = new Date();

	function callError(condition, message) {
		if (!condition) {
			throw new Error(message);
		}
	}
	callError(date instanceof Date, "Please pass an instance of date to library");
	this.day = function() {
		alert(this.dateObj.getDate());
	};
	this.month = function() {
		alert(this.dateObj.getMonth() + 1);
	};
	this.year = function() {
		alert(this.dateObj.getFullYear());
	};
	this.hours = function() {
		alert(this.dateObj.getHours());
	};
	this.minutes = function() {
		alert(this.dateObj.getMinutes());
	};
	this.seconds = function() {
		alert(this.dateObj.getSeconds());
	};
	//   method with params
	this.format = function (dateFormat) {
		// callError(dateFormat instanceof String, "Please pass a string to format method");
		var formatDate = [
			this.dateObj.getDate() < 9 ? '0' + this.dateObj.getDate() : this.dateObj.getDate(), 
			this.dateObj.getMonth() < 9 ? '0' + this.dateObj.getMonth() : this.dateObj.getMonth(),
			this.dateObj.getFullYear() < 9 ? '0' + this.dateObj.getFullYear() : this.dateObj.getFullYear(),
			this.dateObj.getHours() < 9 ? '0' + this.dateObj.getHours() : this.dateObj.getHours(),
			this.dateObj.getMinutes() < 9 ? '0' + this.dateObj.getMinutes() : this.dateObj.getMinutes(),
			this.dateObj.getSeconds() < 9 ? '0' + this.dateObj.getSeconds() : this.dateObj.getSeconds()
		];
		var dateArr = dateFormat.split(':');
		var dArr = [];
		for (var i = 0; i < dateArr.length; i++) {
			switch (dateArr[i]) {
				case 'HH':
					dArr.push(formatDate[3]);
					break;
				case 'mm':
					dArr.push(formatDate[4]);
					break;
				case 'ss':
					dArr.push(formatDate[5]);
					break;
				case 'dd':
					dArr.push(formatDate[0]);
					break;
				case 'MM':
					dArr.push(formatDate[1]);
					break;
				case 'YY':
					dArr.push(formatDate[2]);
					break;
			}
		}
		return alert(dArr.join(':'));
	};
	//   method to add some time interval to instance
	this.add = function (addTime, dFormat) {
		switch (dFormat) {
			case 'HH':
				return this.dateObj.setHours(this.dateObj.getHours() + addTime);
			case 'mm':
				return this.dateObj.setMinutes(this.dateObj.getMinutes() + addTime);
			case 'ss':
				return this.dateObj.setSeconds(this.dateObj.getSeconds() + addTime);
			case 'dd':
				return this.dateObj.setDate(this.dateObj.getDate() + addTime);
			case 'MM':
				return this.dateObj.setMonth(this.dateObj.getMonth() + addTime);
			case 'YY':
				return this.dateObj.setFullYear(this.dateObj.getFullYear() + addTime);
		}
	};
	// method isEqualTo - compare 2 instance and return if they are equal
	this.isEqualTo = function (compDate) {
		var equal = this.dateObj.getTime() === compDate.getTime();
		return alert(equal);
	};
	// method greaterThen - compare 2 instance and return if 1 grater then other
	this.greaterThen = function (compDate) {
		return alert(this.dateObj.getTime() > compDate.getTime());
	};

	// method fromNow
	this.fromNow = function (format) {
		var differ = (this.time - date) / 1000; // in seconds
		var formatDate = [
      			Math.floor(differ / (24 * 60 * 60)),
      			Math.floor(differ / (24 * 60 * 60 * 30)),
      			Math.floor(differ / (24 * 60 * 60 * 365)),
      			Math.floor(differ / (60 * 60)),
      			Math.floor(differ / (60)),
      			differ
    		];
		var dateArr = format.split(':');
		var diffArr = [];
		for (var i = 0; i < dateArr.length; i++) {
			switch (dateArr[i]) {
				case 'HH':
					diffArr.push(formatDate[3]);
					break;
				case 'mm':
					diffArr.push(formatDate[4]);
					break;
				case 'ss':
					diffArr.push(formatDate[5]);
					break;
				case 'dd':
					diffArr.push(formatDate[0]);
					break;
				case 'MM':
					diffArr.push(formatDate[1]);
					break;
				case 'YY':
					diffArr.push(formatDate[2]);
					break;
			}
		}
		return alert(diffArr.join(':'));
	};
	// method to count instance of function
TimeJS.count++;
}

TimeJS.count = 0;
TimeJS.getInstanceCount = function () {
	alert(this.count);
	alert(this.count);
};


var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
var diff = todayTimeStamp - oneDayTimeStamp;
var yesterdayDate = new Date(diff);

var yesterday = new TimeJS(yesterdayDate); // создает экземпляр библиотеки на вчерашнюю дату

// get date, years, minutes

time.day(); 
time.year();
time.minutes();


// get time in the appropriate format

time.format("HH"); 
time.format("HH:mm"); 
time.format("HH:mm:ss");
time.format("dd:MM:YY");
time.format("YY:MM:dd");


// adds time to current time in the appropriate format

var time2 = new TimeJS();
time2.add(2, "HH"); 
time2.add(4, "MM");
time2.add(3, "YY");
time2.format("HH:mm:ss");
time2.format("dd:MM:YY");


// shows the number of instances created by TimeJS

TimeJS.getInstanceCount();


// methods to compare 2 instance

time2.isEqualTo(time); 
time2.greaterThen(time);
