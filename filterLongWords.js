var longWords = ["AJ", "Joe", "John", "Jason"];
var maxLength = 4;
var newList = [];
for (i = 0; i < longWords.length; i+= 1) {

	if (longWords[i].length < maxLength) {
		newList.push(longWords[i])
	}
}
console.log(newList)