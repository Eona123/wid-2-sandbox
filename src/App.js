/*export default function App() {
  
   *
   *    JAVASCRIPT hier
   *
   
    console.log("Test2");


    * Java benötigt für die Definition einer Variable "const..."
    * früher war es var, oder let (veraltet)

      -- Übung 1 --
    //const a = "Test";
    const a = 2; 
     let a = "Test"; --> nochmals deklarieren geht nicht, da es zuvor schon deklariert wurde //
     if (typeof a === "string") {
      console.log("a ist ein String");
    }
    else if (typeof a === "number") {
      console.log("a ist eine Zahl");
    }

      -- Übung  2 -- 
    const isTheTruth = false;
    const isFalse = false;
    
    const user = "admin";


    -- Unterricht --
    function logger(x, y, z= "3"){
      const result = "Funktion!" + x + y + z;
      console.log(result);    // Nebeneffekt
    }
    logger("_1", "_2");
    const x = "a";


      -- Übung  4 -- 
    function multiply(x,y = 2){
      if (typeof x !== "number" || typeof y !== "number") {
        console.log("eine der Werte ist keine Zahl");
      }
      return x * y;
    }
    const result =multiply(2, 3);

  return (
    
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *
     
    -- Übung 2 --
    //<div>
    //  <div>Hallo Welt</div>
    //  <div> {user === "admin" ? "isAdmin" : "isNotAdmin"}
    //  </div>
    //  <div style={{ color: user === "admin" ? "blue" : "red" }} >Nun ist es blau</div>
    //</div>  


    -- Unterricht --
      //<div>
      //  <div>{logger("_1", "_2")}</div>
      //</div>
      //<div>
      //  <p style={{ color: isTheTruth ? "blue" : isTheTruth ? "red" : "green" }}>Ich teste Etwas</p>
      //  <p>{isFalse ? "TestTrue" : "TestFalse"}</p>
      //  <div>{logger("_1", "_2")}</div>
      //</div>

    /*
     *
     */
    //<div>{result}</div>
  //);
//}
/*

-- Unterricht --
export default function App() {

  const array = [1, 2, 3, "vier", false, [], undefined
, "letztes Element"];
  //const element = array[array.length - 1];
  //const nulltesElement = array[0];
  //console.log(array.length);

  const users = ["Tim", "Max", "Moritz", "Hans", "Peter"];
  const userTransformed = users.map((user) => user + "_user"); //Iteriert durch das gane Array - Prozessieren des ganzen Arrays
  console.log(userTransformed);
  console.log(users);

  const filteredUsers = users.filter(user => user != "Hans") //Filters heraus
  console.log(filteredUsers);

  // Array = Liste von Elementen / Werten
  // Arrays = geordnet
  // Arrays = Element werden über ihren Index gefunden

  const objekt = {
    name: "Max",
    alter: 20,
    hobbys: true,
    mehrereHobbys: ["Fußball", "Tennis", "Schwimmen"]
  };

  // Objekt = Liste von Schlüssel-Wert-Paaren
  // Objekte = nicht geordnet
  // Objekte = Element werden über ihren Schlüssel gefunden

    return (

    <div>
      <div>Hallo Welt</div>
      {users.map(users => (
        <li>{users}</li>
        ))}
      <div> {objekt.name}, {objekt.alter}</div>
      <div>{objekt["alter"]}</div>
    </div>

  );
}
*/

  /*  -- Übung 4.1 -- 
export default function App() {

  const einfLeerzeichen = (a, b) => {
    return a + " " + b;
  };

  console.log(einfLeerzeichen("a", "b"))

  return (
    <div>Hallo</div>
  );
}
  */


  /* -- Übung 4.2 -- 
export default function App() {

  const zeroChecker = (zahl) => {
    if (zahl < 0) {
      return console.log("Die Zahl ist kleiner 0");
    }
    else if (zahl > 0) {
      return console.log("Die Zahl ist grösser 0");
    }
    else if (zahl == 0) {
      return console.log("Die Zahl ist gleich 0")
    } 
  } 

  console.log(zeroChecker(-4))

  return (
    <div>Hallo</div>
  );
}
*/

  /* -- Übung 4.3 -- 
  export default function App() {

  const groessereZahl = (a, b) => {
    return (a > b) 
      ? "die Zahl " + a +" ist grösser" 
      : (a < b) 
        ? "die Zahl " + b +"ist grösser" 
        : "blödsinn gmacht"
  };

  console.log(groessereZahl(3,2))

  return (
    <div>Hallo</div>
  );
}
*/

  /* -- Übung 5, 5.1 -- */
  
  export default function App() {
  const array = [1,2,3,4,5,6,7,8,9,10];
  const arrayIterMul = array.map((element) => element * 3);
  console.log(arrayIterMul);

  /* weitere Möglichkeit : */
  const array2 = [1,2,3,4,5,6,7,8,9,10];
  const arrayIterMulV2 = array.map((element) => {
    const arrayResult = element * 3;
    return arrayResult;
  })

  /* -- Übung 5,2 -- */
  const users = ["Tim", "Max", "Moritz", "Hans", "Peter", "Hanna"];
  const userFilter = users.filter(username => username === "Max" || username.includes ("a"));
  console.log(userFilter);

  return (
    <div>Hallo</div>
  );
}