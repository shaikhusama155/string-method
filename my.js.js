let firstName = prompt("Enter your first name!");
        let lastName = prompt("Enter your last name!");

        let fullName = firstName + " " + lastName;
        changeName = fullName.split(" ");

        let emptyString = "";
        for (let i = 0; i < changeName.length; i++) {
            var new1 = changeName[i].charAt(0).toUpperCase() + changeName[i].slice(1);
            emptyString = emptyString + new1;
            emptyString = emptyString + " ";
        }
        console.log("Hello " + emptyString.trim() + "!")

        let frvtMob = prompt("Enter your favorite mobile");

        console.log("My Favorite Mobile is: " + frvtMob);
        console.log("Length of String: " + frvtMob.length);

        let word = "Pakistani";
        let index = word.indexOf("n");

        console.log("String: 'Pakistani' ");
        console.log("Index of 'n': " + index);

        let hello = "Hello world";
        let lastIndex = hello.lastIndexOf("l");

        console.log("String: " + hello);
        console.log("Last Index of 'l': " + lastIndex);

        let city = "Pakistani";
        let wordIndex = city.charAt(3);

        console.log("String: " + city);
        console.log("Character at index 3: " + wordIndex);

        let firstName1 = prompt("Enter your First Name!")
        let lastName1 = prompt("Enter your last Name!")

        let fullName1 = firstName1.concat(" ", lastName1)
        console.log("Hello! " + fullName1 + " How are you doing Today?")

        let city1 = "Hyderabad"
        let replace = city1.replace("Hyder", "Islam")

        console.log("City name is : " + city1)
        console.log("After replacement: " + replace)

        let para = "Ali and Sami are best friends. They play cricket and football together.";
        let newPara = para.replaceAll("and", "&");

        console.log("Original message is : " + para)
        console.log("New messge is : " + newPara)

        let string = "472"
        let changeString = +string
        console.log("value: " + string)
        console.log("Type: " + typeof string)
        console.log("value: " + changeString)
        console.log("Type: " + typeof changeString)

        let userInput = prompt("Enter your frvt thing");
        let upperCase = userInput.toUpperCase();
        console.log(upperCase)

        let user = prompt("Enter your name!");
        let changeUser = user.split(" ");

        let emptyUser = "";
        for (let i = 0; i < changeUser.length; i++) {
            let new2 = changeUser[i].charAt(0).toUpperCase() + changeUser[i].slice(1).toLowerCase()
            emptyUser = emptyUser + new2;
            emptyUser = emptyUser + " ";
        }

        console.log("User Input: " + emptyUser.trim())

        let newNum = 35.36;
        let someEdit = newNum.toString().replace(".", "");
        console.log("Number: " + newNum);
        console.log("Result: " + someEdit);


        var university = "University of Karachi";

        for (var i = 0; i < university.length; i++) {
            console.log(university[i] + "\n");
        }
