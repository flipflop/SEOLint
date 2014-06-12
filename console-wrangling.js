//SEO Console Wrangling
// Assumes jQuery is available in the page for convenience

console.log("Number of HTML Tags on the page: ", document.getElementsByTagName('*').length);
console.log("Empty alt attributes on page: ", $("img[alt='']"));
console.info("Total of empty alt attributes: ", $("img[alt='']").length); 
console.log("Empty H1s on page: ", $("h1").text() == "");

// find empty H1s
($("h1").text() == "") ? console.log("found emtpy h1s"): console.log("didn't find any empty h1s")

// Get Image Height and Width
console.log("Image height for the 4th image on the page: ", $($("img")[5]).height() );
console.log("Image width for the 4th image on the page: ", $($("img")[5]).width() );