function TimeJS(date) {
	this.dateObj = date;
	this.time = new Date();

	this.day = function () {
		console.log(this.dateObj.getDate());
	};
	this.month = function () {
		console.log(this.dateObj.getMonth() + 1);
	};
	this.year = function () {
		console.log(this.dateObj.getFullYear());
	};
	this.hours = function () {
		console.log(this.dateObj.getHours());
	};
	this.minutes = function () {
		console.log(this.dateObj.getMinutes());
	};
	this.seconds = function () {
		console.log(this.dateObj.getSeconds());
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
		default:
			console.log('Enter the correct format');		
		}
	};
	
	// method isEqualTo - compare 2 instance and return if they are equal
	this.isEqualTo = function (compDate) {
		var equal = this.dateObj.getTime() === compDate.dateObj.getTime();
		return console.log(equal);
	};
	
	// method greaterThen - compare 2 instance and return if 1 grater then other
	this.greaterThen = function (compDate) {
		return console.log(this.dateObj.getTime() > compDate.dateObj.getTime());
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
		
		switch (format) {
			case 'HH':
				console.log(formatDate[3]);
				break;
			case 'mm':
				console.log(formatDate[4]);
				break;
			case 'ss':
				console.log(formatDate[5]);
				break;
			case 'dd':
				console.log(formatDate[0]);
				break;
			case 'MM':
				console.log(formatDate[1]);
				break;
			case 'YY':
				console.log(formatDate[2]);
				break;
			default:
				console.log('Enter the correct format');
			}
	};
	
	// method to count instance of function
	TimeJS.count++;
	
	// method local
	this.local = function () {
		console.log(this.time.toLocaleTimeString());
	};
	
	// method utc
	this.utc = function () {
		var timeUtc = this.time.toUTCString();
		console.log(timeUtc.match(/\d+\:\d+\:\d+/));
	};
	
	//   method format
	this.format = function (dateFormat) {
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
				console.log(formatDate[0]);
				break;
			case 'LTS':
				console.log(formatDate[1]);
				break;
			case 'L':
				console.log(formatDate[2]);
				break;
			case 'I':
				console.log(formatDate[3]);
				break;
			case 'LL':
				console.log(formatDate[4]);
				break;
			case 'II':
				console.log(formatDate[5]);
				break;
			case 'LLL':
				console.log(formatDate[6]);
				break;
			case 'III':
				console.log(formatDate[7]);
				break;
			case 'LLLL':
				console.log(formatDate[8]);
				break;
			case 'IIII':
				console.log(formatDate[9]);
				break;
			default:
				console.log('Enter the correct format');
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
	console.log(this.count);
};
