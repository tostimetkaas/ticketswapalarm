/* Audio play function
 */
const playSound = () => {
  let audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
  //audio.crossOrigin = "anonymous";
  audio.play();
}


/* Optie 1:
 * span met "er zijn geen tickets beschikbaar", check of dit het enige element is in deze div
 * NOTE: className moet handmatig met f12 gepasted worden :c
 */
if(document.getElementsByClassName("css-y9qk84 e6fq7ah0").length < 1) playSound();

// testfunc: play sound if the div contains exactly one element (test with sold out event)
// if(document.getElementsByClassName("css-y9qk84 e6fq7ah0").length == 1) playSound();


/* Optie 2:
 * check of "Er worden op dit moment geen tickets aangeboden." op de pagina staat. Zo niet, dan zijn er tickets
 */
// const noTicketsText = "Er worden op dit moment geen tickets aangeboden.";
// if (document.body.textContent.includes(noTicketsText)) playSound();
// ==> ISSUE: vindt ook tekst als dit niet op de pagina zichtbaar is


/* Optie 3:
 * Zoek naar Beschikbare tickets heading en check of de lijst minstens 1 link bevat met de tekst "ticket",
 */
const searchHeading = "Beschikbare tickets";
const searchListing = "ticket";
const headings = Array.from(document.getElementsByTagName("h3"));
headings.forEach((heading, i) => {
  if (heading.innerHTML == searchHeading) { // Ticketlisting gevonden, check of next element link naar ticket bevat
    const ticketListing = heading.nextSibling;
    if (ticketListing)
      if (ticketListing.tagName == "A" &&
          ticketListing.innerText.includes(searchListing)) playSound();
  }
});
