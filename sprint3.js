// Zadania ze zmiennych//

// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.//
let number = 5 
    console.log(number)

// b) Utwórz zmienną typu string przechowującą twoje imię.//
    const text = 'Winter is comming'
        console.log(text)

// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst. //
     let myOpinion;
        myOpinion = 'Highly recommended'
        console.log(myOpinion)

// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).//
    const carModel= {
        name: 'Alfa Romeo Spider Junior' , 
        age: 1972
    }
    console.log(carModel)

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.//
    let needSugar= false
    const healthlife = true
    console.log(needSugar | healthlife)

// f) ) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.//
    const dailyConsumption = 4+2
    console.log(dailyConsumption)

// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.//
    const userName = 'Patrycja Janiszewska'
    console.log(userName)

// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.//
    const protonMass= (1,67)
    console.log(protonMass)

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego 
    const sum = 6; 
    {
            sum = 24-18
    }
        console.log(sum)
    
// j) Stwórz zmienną przechowującą Twoje miasto jako ciąg znaków//
    const myCity ='Ostrów Wielkopolski'
        console.log(myCity)

//Zadania z prostych i złożonych typów dannych//


// a) utwórz tablice zawierającą trzy różne typy danych.//
    const tab = [1,miesiąc,true]
    console.log(table)

// b) Stwórz obiekt car z właściwościami make, model i year.//
        let car = {
            make: Germany,
            model: "Mercedes 190",
            year: 1987,
        }
        console.log(car)

// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.//
        const tabtree = [1,2,3]
            console.log(tabtree)

// d)Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent(boolean).//
        const person1= {
            name: 'Lily',
            age: 20,
            isStudent: false,
        }        
        console.log(person1)
//e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z zawartością typu string.//
       
        let myWall;
        myWall.color = 'green'
        console.log(myWall)

// f) Stwórz tablice obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name(string) i age(number).//
        const pets=[cat,mouse,hamster] 
        { name:"Lady" , age; 6 }
        {name: "George", age; 3 }
        {name:'Daisy', age; 1 }
        cosnole.log(tabObject)

// g) Utwórz zmienną przechowującą tablicę z fróżnymi wartościami boolean.//

         const conditions =[true,false, false,]
         console.log(tab2)

// h)Stwórz obiekt student z kluczami name(string), grades (tablica liczb) i isActive.//
        let studentPersonalinformation = 
        {
            name: "Carl",
            grades : [5,4,5.6,3,6],
            isActive: true,
        }
        console.log(studentPersonalinformation)

// i)Zadeklaruj tablicę zawierającą różne typy danych , w tym conajmniej jeden obiekt.//
        const buyers =[
        {   name: 'Monika',
            age: 23,
            model:{
                model:'Kelly 35',
                brand: 'Hermes',
                price: 65000,
            }
        },
        {   name:'Katarzyna',
            age: 34,
            model:{
                modelname:'Bolid',
                brand: 'Hermes',
                price: 29000,
            }

        }]
        console.log(buyers)

        // j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.//
        let book = {
            title: 'Anna Karenina',
            author: 'Lew Tołstoj',
            yearPublish: 1878
        }
        console.log(book)

// Zadania z Warunków i Operatorów Trójargumentowych//

// a) Napisz warunek if, który sprawdzi czy zmienna typu number jest większa od 10. //

       const number2 = 5
        if (number2 > 10){
            console.log(true)
        }else{
            console.log(false)
        }
// b) Stwórz warunek  if, który sprawdzi czy zmienna tekstowa jest równa "Hello".//
      const  welcome = "Good Morning !";
       if (welcome === 'Hello!'){
         console.log(true)}

        else if (welcome=== 'Good Morning'){
            console.log(false)};
     
// c) Uzyj operatora ternarnego do przypisania do zmiennej wartości i w zależności od innego warunku logicznego.//
                let points = 160; 
                let result = (points < 100) ? 'more then 100': 'less than or equal to 100';
                console.log(result);

// d) Napisz warunek, który sprawdzi czy zmienna age jest większa lub równa 18.//

        const age = 34;
        if ( age < 18)
            {
                console.log('Liczba jest mniejsza od 18')
            }
        else if (age >= 18)
        { 
            console.log('Liczba jest większa lub równa 18') 
        }

// e) Stwórz warunek if-else, ktory sprawdzi czy tablica jest pusta.//
        const emptyObject= {};

        if (emptyObject == 0) {
            console.log('Tablica jest pusta')
        }
        else(emptyObject != 0) 
        {
            console.log ('Tablica nie jest pusta')}
    
// f) Użyj operatora ternarnego do sprawdzenia czy zmienna isMember jest prawdziwa i na jej podstawie przypisz rabat.//
            let shoppingHere = 'yes'
            let months = 3
            let isMember= (months >=3)? true : false;
                console.log (isMember)

                let bills = 150; //najniżyszy paragon ze zniżką//
                if ( bills ==150) {
                    console.log ('nalicz zniżkę')
                }
                else if (bills >= 150) {
                    console.log( 'nalicz zniżkę')
                } 
                else ( bills <= 150 ) 
                    console.log('nie naliczaj zniżki')
                
// g) Napisz warunek if, ktory sprawdzi czy długość ciągu znaków w zmiennej jest większa niz 5. //
                const txt ='JavaScript to obecnie jeden z najpopularniejszych języków programowania, który jest wykorzystywany we frontendzie (graficznej warstwie aplikacji internetowych) oraz backendzie (logice działającej po stronie serwera'
                 console.log(txt.length);
                 if (txt.length < 5 ) {
                    console.log( false)
                    }
                    else if (txt.length > 5) {
                        console.log(true)
                    }

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieprarzysta.//
            let a = 5
             if ( a % 2== 0) {
                console.log('parzysta')
             } else (a %2)
                console.log('nieparzysta')

// i ) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku. 
       const b= 'left'
       const r= 'right'
       const e= (b || r)? 'Gdzie jest apteka?': 'Idź tam';
        console.log(e)


// j) Napisz warunek if, który sprawdzi czy obiekt ma określony klucz.    
        const myStudent = {
                name:  'Penelope',
                field : 'Physics',
                year :2
             };
        const check = 'field';

             if ( myStudent.hasOwnProperty(check)){
                    console.log('Contains key')
             } else  {
                console.log('Does not inclue a key')
             }
////////////////////////////////////////////////////////////////////////////