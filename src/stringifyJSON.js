// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = '';
  // case 0:
  //   obj is null
  //     -return "null"
  if(obj === null) {
    return 'null';
  }

  // else if (typeof (obj) === 'function') {
  //   return;
  // }
  //
  // else if (typeof(obj) === 'undefined') {
  //   return;
  // }
  // case 1:
  //   obj is boolean
  //     -return "boolean"
  else if(obj === true) {
    return 'true';
  }
  else if(obj === false) {
    return 'false';
  }
  //
  // case 2:
  //   obj is array
  //     - start with "["
  //   iterate through array
  //     for each item
  //       -if it is primitive value, add it to string
  //       -if not, then call recursively
  //       -if not last item, add ','
  //       -if last item, add ']'
  else if(Array.isArray(obj)) {
    if(obj.length === 0) {
      str += '[]';
    } else {
      str += '[';
      for(var i = 0; i < obj.length; i++) {
        if(typeof (obj[i]) === 'string') {
          str += '"' + obj[i] + '"';
        }
        else if(typeof (obj[i]) === 'number') {
          str += obj[i];
        }
        else {
          str += stringifyJSON(obj[i]);
        }
        if(i !== obj.length-1) {
          str += ',';
        }
      }
      str += ']';
    }
  }
  // case 3:
  //   obj literal
  //     -start with "{"
  //     iterate through object
  //       -add key into result string with '' and :
  //       - if value is primitive, add it to strings
  //       -if not, then call recursively
  //       -if not last key, add ','
  //       -if last key, add '}'
  else if(typeof (obj) === 'object') {
    console.log(obj);
    str += '{';
    if(Object.keys(obj).length === 0) {
      str += '}';
    }
    for(var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        str += '"' + key + '":';
        if(typeof (obj[key]) === 'string') {
          str += '"' + obj[key] + '"';
        }
        else if(typeof (obj[key]) === 'number') {
          str += '"' + obj[key] + '"';
        } else {
          str += stringifyJSON(obj[key]);
        }
        if ((Object.keys(obj)[Object.keys(obj).length-1]) === key) {
          str += '}';
        } else {
          str += ',';
        }
      } else {
        if ((Object.keys(obj)[Object.keys(obj).length-1]) === key) {
          str += '}';
        }
      }
    }
  }
  // case 4:
  //   primitive values
  //     -add to string
  else if(typeof (obj) === 'string'){
    str += '"' + obj + '"';
  }

  else {
    str += obj;
  }

  return str;
};
