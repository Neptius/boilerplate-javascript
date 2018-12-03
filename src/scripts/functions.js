export const hello = function (name) {
    //var para = document.createElement("p");
    //let htmlText = document.getElementById("app").innerHTML;
    // += `Hello ${name}! :)\n`;

    let p = document.createElement("P");                        // Create a <p> element
    var t = document.createTextNode(`Hello ${name}! :)`);       // Create a text node
    p.appendChild(t);                                                    // Append the text to <p>
    document.body.appendChild(p);                                      // Append <p> to <body>
};