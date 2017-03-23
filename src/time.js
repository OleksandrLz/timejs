function TimeJS(date){
	this.dateObj = date;

	/**
	 * потом зачем выносить error в другой файл оно же тебе нужно здесь чтобы внутри методов
	 * обрабывать ошибки
	 */

	// callError 9-15
	function callError(condition, message) {
		if (!condition) {
			throw new Error(message);
		}
	}

	/**
	 * Здесь проверяем что передаваемый параметр date есть датой если нет возвращаем юзер ошибку
	 */
	callError(date instanceof Date, "Please pass an instance of date to library");

	/** смотри твоя первая ошибка в том что твой конструктор всегда создает дату сегодняшнюю а я в примере например
	 показвала что я могу создать дату например вчераншюю

	 var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
	 var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
	 var diff = todayTimeStamp - oneDayTimeStamp;
	 var yesterdayDate = new Date(diff);


	 var yesterday = new TimeJS(yesterdayDate);

	 но он у тебя все равно создаст дату все равно сегодняшнюю потому что ты написал что

	 var dateObj = new Date(); - а это всегда создает теперешнюю дату
	 */

	/**
	 * return можно не писать просто alert
	 */
	this.day = function(){
		alert(this.dateObj.getDate());
	};
	this.month = function(){
		alert(this.dateObj.getMonth()+1);
	};
	this.year = function(){
		alert(this.dateObj.getFullYear());
	};
	this.hours = function(){
		alert(this.dateObj.getHours());
	};
	this.minutes = function(){
		alert(this.dateObj.getMinutes());
	};
	this.seconds = function(){
		alert(this.dateObj.getSeconds());
	};


	this.format = function(myDate) {
		/**
		 * myDate - не совсем корректное название папрметра который передаеться в эту функцию потому что
		 *    в нее передаеться не дата а формат даты логичнее было бы назвать ее dateFormat
		 */

		/**
		 * тут у тебя нету проверки что например месяц или день меньше 9 то тогда добавляем 0 спереди если
		 * больше то не добавляем ты ко всему добавляешь я на примере дня покажу
		 */
		var formatDate = [
			/*
			 вот так сделать для всего нужно
			 */
			this.dateObj.getDate() < 9 ? '0' + this.dateObj.getDate() : this.dateObj.getDate(),
			'0' + (this.dateObj.getMonth() + 1),
			'' + this.dateObj.getFullYear(),
			'0' + this.dateObj.getHours(),
			'0' + this.dateObj.getMinutes(),
			'0' + this.dateObj.getSeconds()
		];

		/**
		 * зачем это здесь вообще не понимаю???
		 */
		for (var i = 0; i < formatDate.length; i++) {
			formatDate[i] = formatDate[i].slice(-2);
		}

		var  dateArr = myDate.split(':');
		var dArr = [];
		/** тут как раз сразу и делаем проверку на то что myDate это строка потому что если нет что то не так */

		callError(myDate instanceof String, "Please pass a string to format method");

		for (var j=0; j < dateArr.length; j++ ){
			/** в даном случае лучше использовать кострукцию switch case и 3 равно === */
			if (dateArr[j] == 'HH'){
				dArr.push(formatDate[3]);
			}
			if (dateArr[j] == 'mm'){
				dArr.push( formatDate[4]);
			}
			if (dateArr[j] == 'ss'){
				dArr.push(formatDate[5]);
			}
			if (dateArr[j] == 'dd'){
				dArr.push(formatDate[0]);
			}
			if (dateArr[j] == 'MM'){
				dArr.push(formatDate[1]);
			}
			if (dateArr[j] == 'YY'){
				dArr.push(formatDate[2]);
			}
		}
		return alert(dArr.join(':'));
	};

	//   method to add some time interval to instance

	this.add = function(addTime, form){
		/**
		 * тоже название form не совсем корректное название будет для переменной которая содержит формат
		 */

		/**
		 * в даном случае лучше использовать кострукцию switch case
		 */

		if (form == 'HH'){
			return this.dateObj.setHours(this.dateObj.getHours() + addTime);
		}
		if (form == 'mm'){
			return this.dateObj.setMinutes(this.dateObj.getMinutes() + addTime);
		}
		if (form == 'ss'){
			return this.dateObj.setSeconds(this.dateObj.getSeconds() + addTime);
		}
		if (form == 'dd'){
			return this.dateObj.setDate(this.dateObj.getDate() + addTime);
		}
		if (form == 'MM'){
			return this.dateObj.setMonth(this.dateObj.getMonth() + addTime);
		}
		if (form == 'YY'){
			return this.dateObj.setFullYear(this.dateObj.getFullYear() + addTime);
		}
	};

	this.time = new Date();
	// method isEqualTo - compare 2 instance and return if they are equal
	this.isEqualTo = function(compDate){
		var equal = this.time.getTime() === compDate.time.getTime();
		return alert(equal);
	};

	// method greaterThen - compare 2 instance and return if 1 grater then other
	/** тут смысл был в том чтобы ты сравнивал свою дату тоесть this.dateObj с датой которую передадут в саму функцию
	 * а ты сравниваешь сегодня с той датой которую передадут */
	this.greaterThen = function(compDate){
		/**
		 * и этот момент можно же упростить
		 */
		return alert(this.time.getTime() > compDate.time.getTime());
	};
	// method to count instance of function
	TimeJS.count++;

	// method fromNow ??? 103-132
	this.fromNow = function(format){
		var nowTime = +new Date();
		/**
		 * такой глобальной переменной как createTimeStamp - не существует и тут у тебя явно ошибка будет
		 * хотя оно превращаеться в false и отнимаентся 0 все равно фигня получаеться
		 */
		var differ = nowTime - createTimeStamp; // in milliseconds

		var sec=differ/1000;
		var days=Math.floor(sec/60/60/24);
		sec-=days*24*60*60;
		var hours=Math.floor(sec/60/60);
		sec-=hours*60*60;
		var min=Math.floor(sec/60);
		sec-=min*60;

		var dateDiff = format.split(':');
		var diffArr = [];
		/**
		 * тебе нужно было бы создать такой же массив как в методе format - formatDate
		 * тогда у тебя был бы массив с отформатированными датами и потом ты отуда бы брал необходимое значение например
		 * у тебя спрашивают this.fromNow("HH");
		 *
		 * значит нужно вернуть сколько часов прошло от той даты с которой конструктор был создан до сейчас
		 * и тебе нужно создать ноую дату у тебя она есть this.time да потом взять дату this.dateObj
		 * их в милисикундах отнять и узнать сколько прошло дней поделив милисикунды которые получились на
		 * 24*60*60
		 *
		 * и тут же не полный список еще есть: 
		 * MM - month
		 * YY - year
		 */
		for (var i=0; i < dateDiff.length; i++ ){
			if (dateDiff[i] == 'HH'){
				diffArr.push(hours);
			}
			if (dateDiff[i] == 'mm'){
				diffArr.push(min);
			}
			if (dateDiff[i] == 'ss'){
				diffArr.push(sec);
			}
			if (dateDiff[i] == 'dd'){
				diffArr.push(days);
			}
		}
		return alert(diffArr.join(':'));
	};

}

TimeJS.count = 0;
TimeJS.getInstanceCount = function(){
	alert(this.count);
};
