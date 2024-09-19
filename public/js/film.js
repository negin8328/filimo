let films = document.querySelector("#Movie");
let parentDiv1 = document.querySelector(".parent1");
parentDiv1.addEventListener("click", function () {
  films.classList.toggle("hidden");
  parentDiv1.classList.toggle("bg-[#2b2b2b]");
  parentDiv1.classList.toggle("rounded-[35px]");
});
let fetchmovie = async () => {
  try {
    let response = await fetch("https://amyrali18.github.io/filimo-api/movies.json");
    let film = await response.json();
    
    film.map((image) => {
      films.insertAdjacentHTML(
        "afterbegin",
        `
              <a href="#"
                ><div>
                  <img
                    class="rounded-[8px]"
                    src="${image.banner}"
                  />
                  </div
              ></a>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
fetchmovie();
