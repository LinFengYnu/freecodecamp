function log(a){
	console.log(a);
}

function reverseString(str) {
  len = str.length;
  var arr = str.split("",len);
  // log(arr);
  arr.reverse();
  // log(arr);
  str = arr.join('');
  return str;
}

reverseString("hello");





//split移除字符串中的空格
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);
// 正则只匹配非可见字符
var re = /\s*;\s*/;
console.log(re);
var nameList = names.split(re);

console.log(nameList);


// 改变原数组的：
// pop：删除最后一个并返回，改变原数组
// push：向数组末尾添加元素，并返回新的长度，改变原数组
// unshift：向数组开头添加元素，并返回新的长度，改变原数组
// reverse：颠倒数组顺序，改变原数组
// shift：将第一个元素删除并且返回，空即为undefined，改变原数组
// splice:splice(start,length,item)新增删除替换数组元素，返回被删除数组，无删除则不返回，改变原数组
// sort：对数组排序，改变原数组
// 不改变原数组的：
// concat：连接多个数组，返回新的数组，不改变原数组
// join：将数组中所有元素以参数作为分隔符放入一个字符串，不改变原数组
// slice：slice(start,end)，返回选定元素，不改变原数组

