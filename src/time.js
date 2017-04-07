function TimeJS(date) {
	this.dateObj = date;
	this.time = new Date();

	function callError(condition, message) {
		if (!condition) {
			throw new Error(message);
		}
	}
	callError(date instanceof Date, "Please pass an instance of date to library");
	this.day = function () {
		alert(this.dateObj.getDate());
	};
	this.month = function () {
		alert(this.dateObj.getMonth() + 1);
	};
	this.year = function () {
		alert(this.dateObj.getFullYear());
	};
	this.hours = function () {
		alert(this.dateObj.getHours());
	};
	this.minutes = function () {
		alert(this.dateObj.getMinutes());
	};
	this.seconds = function () {
		alert(this.dateObj.getSeconds());
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
		var equal = this.dateObj.getTime() === compDate.dateObj.getTime();
		return alert(equal);
	};
	
	// method greaterThen - compare 2 instance and return if 1 grater then other
	this.greaterThen = function (compDate) {
		return alert(this.dateObj.getTime() > compDate.dateObj.getTime());
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
	
	// method local
	this.local = function () {
		alert(this.time.toLocaleTimeString());
	};
	
	// method utc
	this.utc = function () {
		var timeUtc = this.time.toUTCString();
		alert(timeUtc.match(/\d+\:\d+\:\d+/));
	};
	
	//   method format
	this.format = function (dateFormat) {
		// callError(dateFormat instanceof String, "Please pass a string to format method");
		var optionsNum = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		};
		var regNum = /(\d{1,2})\/(\d{1,2})\/(\d{4}).\s(\d{1,2}\:\d{1,2})\:(\d{1,2})(\s\w+)/;
		var optionsLong = {};
		for (var key in optionsNum) {
			optionsLong[key] = optionsNum[key];
		}
		optionsLong.month = 'long';
		optionsLong.weekday = 'long';
		var regLong = /(\w+).\s(\w+)\s(\d{1,2}).\s(\d{4}).+(\d{1,2}\:\d{1,2}).(\d{1,2})(\s\w+)/;
		var optionsShort = {};
		for (var keys in optionsNum) {
			optionsShort[keys] = optionsNum[keys];
		}
		optionsShort.month = 'short';
		optionsShort.weekday = 'short';
		var optionsDigit = {};
		for (var j in optionsNum) {
			optionsDigit[j] = optionsNum[j];
		}
		optionsDigit.month = '2-digit';
		optionsDigit.day = '2-digit';
		var formatDate = [
		    date.toLocaleString("en-US", optionsNum).replace(regNum, "$4 $6"),
		    date.toLocaleString("en-US", optionsNum).replace(regNum, "$4:$5 $6"),
		    date.toLocaleString("en-US", optionsDigit).replace(regNum, "$1/$2/$3"),
		    date.toLocaleString("en-US", optionsNum).replace(regNum, "$1/$2/$3"),
		    date.toLocaleString("en-US", optionsLong).replace(regLong, "$2 $3 $4"),
		    date.toLocaleString("en-US", optionsShort).replace(regLong, "$2 $3 $4"),
		    date.toLocaleString("en-US", optionsLong).replace(regLong, "$2 $3 $4 $5 $7"),
		    date.toLocaleString("en-US", optionsShort).replace(regLong, "$2 $3 $4 $5 $7"),
	  	    date.toLocaleString("en-US", optionsLong).replace(regLong, "$1, $2 $3 $4 $5 $7"),
		    date.toLocaleString("en-US", optionsShort).replace(regLong, "$1, $2 $3 $4 $5 $7")
		];
		switch (dateFormat) {
			case 'LT':
				alert(formatDate[0]);
				break;
			case 'LTS':
				alert(formatDate[1]);
				break;
			case 'L':
				alert(formatDate[2]);
				break;
			case 'I':
				alert(formatDate[3]);
				break;
			case 'LL':
				alert(formatDate[4]);
				break;
			case 'II':
				alert(formatDate[5]);
				break;
			case 'LLL':
				alert(formatDate[6]);
				break;
			case 'III':
				alert(formatDate[7]);
				break;
			case 'LLLL':
				alert(formatDate[8]);
				break;
			case 'IIII':
				alert(formatDate[9]);
				break;
		}
	};
	
	//   method toArray
	this.toArray = function () {
		var arr = [];
		var arrTime = arr.concat(date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
		arr = arr.concat(date.getFullYear(), date.getMonth() + 1, arrTime);
		console.log(arr);
	};
}
TimeJS.count = 0;
TimeJS.getInstanceCount = function () {
	alert(this.count);
};
