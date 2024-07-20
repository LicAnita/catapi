
const imgs = document.querySelectorAll("img");

function loadImages(){
    const URL = "https://api.thecatapi.com/v1/images/search";
    imgs.forEach((img) => {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            img.src = data[0].url;
          })
          .finally(window.scrollTo({ top: 0, behavior: 'smooth' }))
          .catch((error) => {
            console.log("Error fetching cat image", error);
          });
      });
}

function scrollToBottom() {
  // Get the footer element
  const footer = document.querySelector('footer');
  // Scroll to the footer element smoothly
  footer.scrollIntoView({ behavior: "smooth" });
}
 

loadImages();

