function TimeJS(){
  var dateObj = new Date();

//   method to add some time interval to instance 
 
  this.add = function(addTime, form){
    
  // callError 9-14
  function callError(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
  var type = typeof addTime;
  callError(type === "number", "time interval is not a number");
  
    if (form == 'HH'){
      return dateObj.setHours(dateObj.getHours() + addTime);
    }
    if (form == 'mm'){
      return dateObj.setMinutes(dateObj.getMinutes() + addTime);
    }
    if (form == 'ss'){
      return dateObj.setSeconds(dateObj.getSeconds() + addTime);
    }
    if (form == 'dd'){
      return dateObj.setDate(dateObj.getDate() + addTime);
    }
    if (form == 'MM'){
      return dateObj.setMonth(dateObj.getMonth() + addTime);
    }
    if (form == 'YY'){
      return dateObj.setFullYear(dateObj.getFullYear() + addTime);
    }
  };  
}

var time = new TimeJS(); 
time.add(4, "HH");
time.add("ikjh", "HH");
