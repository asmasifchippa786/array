document.write("<h1>Array</h1><hr>");

var studentName = [];

studentName.push("Anas");

console.log(studentName);

var string = ["string1" , "string2" , "string3"];

var number = [2 , 12 , 34];

var boolean = [false , true , false];

var mixed = ["string1" , false , 234];

console.log(string);

console.log(number);

console.log(boolean);

console.log(mixed);

var networkInPakistan = ["Zong" , "Telenor" , "Uphone" , "Warid"];

console.log(networkInPakistan);

var qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"]

document.write("<h1>Qualification</h1><hr><h2><ol><li>" + qualification[0] + "</li><li>" + qualification[1] + "</li><li>" + qualification[2] + "</li><li>" + qualification[3] + "</li><li>" + qualification[4] + "</li><li>" + qualification[5] + "</li><li>" + qualification[6] + "</li><li>" + qualification[7] + "</li></ol></h2><hr>");

var movie = ["Avengers: Age Of Ultron" , "Spectre" , "Jurasssic World" , "Inside Out" , "The Spongebob"];

document.write("<h1>Top Movies Of 2015</h1><br>");

document.write("<h3><ol><li>" + movie[0] + "</li><li>" + movie[1] + "</li><li>" + movie[2] + "</li><li>" + movie[3] + "</li><li>" + movie[4] + "</li></h3>")

document.write("<h1>Length Of The Array: " + movie.length + "</h1><hr>")

var car = ["crolla" , "city" , "civic" , "Audi"]

document.write("<h1>Favorite Cars</h1><br>")

document.write("<h1>" + car + "</h1><br>")

document.write("<h1>First Index Of The Array: 0</h1>")

document.write("<h1>Car At First Index Of The Array: " + car[0] + "</h1>")

document.write("<h1>First Index Of The Array: 3</h1>")

document.write("<h1>Car At First Index Of The Array: " + car[3] + "</h1><hr>")

studentName.push("Ali")

studentName.push("Ahmed")

var prcentage = [(480/500)*100 , 320/500*100 , 230/500*100]

document.write("<h1>Score Of " + studentName[0] + " is 480. Prcentage: " + prcentage[0] + "%</h1>")

document.write("<h1>Score Of " + studentName[1] + " is 480. Prcentage: " + prcentage[1] + "%</h1>")

document.write("<h1>Score Of " + studentName[2] + " is 480. Prcentage: " + prcentage[2] + "%</h1><hr>")

var colour = ["Red" , "Pink" , "Yellow"]

document.write("<h1>" + colour + "</h1>")

var input1 = prompt("Enter Any Colour That You Want To Add Into Beginig")


colour.unshift(input1)

document.write("<h1>after Upate : " + colour + "</h1>")

var input2 = prompt("Enter Any colour That You Want To Add In The End")

colour.push(input2)

document.write("<h1>After More update : " + colour + "</h1>")

colour.unshift("Pink" , "green" )

document.write("<h1>After More Update : " + colour + "</h1>")

colour.shift()

document.write("<h1>After More Update : " + colour + "</h1>")

colour.pop()

document.write("<h1>After More Update : " + colour + "</h1>")

var input3 = prompt("Enter Which Index Did You Want To Delete")

var input4 = prompt("Enter How Many Colour You Want To Delete")

colour.splice(input3 , input4)

document.write("<h1>After More Update : " + colour + "</h1><hr>")

var number = [1 , 2 , 3 , 4 , 5]

document.write("<h1>" + number + "</h1>")

document.write("<h1>After Update : " + number[4] + "," + number[3] + "," + number[2] + "," + number[1] + "," + number[0]  + "</h1><hr>")

var fruits = ['strawberry', 'apple', 'orange', 'banana']

document.write("<h1>Fruits List : <br>" + fruits + "</h1><br>")

document.write("<h1>Ordered Fruits List: <br>" + fruits[1] + "," + fruits[3] + "," + fruits[2] + "," + fruits[0] + "</h1><hr>")

var city = ["karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]

document.write("<h1>Cities list: <br>" + city + "</h1><br>")

document.write("<h1>Selected Cities List: <br>" + city[0] + "," + city[1] + "</h1><hr>")

var arr = ["This" , "is" , "my" , "cat"];

document.write("<h1>Araay : <br> " + arr)

document.write("<h1>String : <br>" + arr[0] +" "+ arr[1] +" "+ arr[2] +" "+ arr[3] + ".</h1>")

var array = []

array.unshift("Keyboard" , "Mouse" , "Printer" , "Moniter")

document.write("<h1>Device:<br>" + array + "</h1><br>")

document.write("<h1>Out:<br>" + array.pop() + "</h1>")

document.write("<h1>Out:<br>" + array.pop() + "</h1>")

document.write("<h1>Out:<br>" + array.pop() + "</h1>")

document.write("<h1>Out:<br>" + array.pop() + "</h1><hr>")

var mobile = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"]

document.write('<h1><select><option value="Apple">'+ mobile[0] + '</option><option value="Samsung">' + mobile[1] + '</option><option value="Motorola">' + mobile[2] + '</option><option value="Nokia">' + mobile[3] + '</option><option value="Sony">' + mobile[4] + '</option><option value="Haier">' + mobile[5] +  '</option></select></h1><hr>')

var emtpyarray = []

var matrix = [0 , 1 , 2 , 3 , 1 , 0 , 1 , 2 , 2 , 1 , 0 , 1]

document.write("<h1>" + matrix[0] + " " + matrix[1] + " " + matrix[2] + " " + matrix[3] + "<br>" + matrix[4] + " " + matrix[5] + " " + matrix[6] + " " + matrix[7] + "<br>" + matrix[8] + " " + matrix[9] + " " + matrix[10] + " " + matrix[11] + "</h1>")