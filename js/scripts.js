var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
    newName = ""

var allNames = femaleNames.concat(maleNames);

alert("Tutaj wypisane są wszystkie imiona będące na tablicy \n" + allNames.join(' | '));
console.log("Tutaj wypisane są wszystkie imiona będące na tablicy \n" + allNames.join(' | '));
newName = prompt("Wpisz nowe imię");
    while (allNames.indexOf(newName) !== -1) {
        newName = prompt("To imię jest już zapisane, podaj NOWE imię");
    };
    allNames.push(newName);

alert("Tutaj wypisane są wszystkie imiona będące na tablicy \nrazem z nowym które właśnie zostało dodane \n" + allNames.join(' | '));
console.log("Tutaj wypisane są wszystkie imiona będące na tablicy \nrazem z nowym które właśnie zostało dodane \n" + allNames.join(' | '));