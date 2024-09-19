let seryals = document.querySelector("#seryals");
let parentDiv = document.querySelector(".parent");
parentDiv.addEventListener("click", function () {
  seryals.classList.toggle("hidden");
  parentDiv.classList.toggle("bg-[#2b2b2b]");
  parentDiv.classList.toggle("rounded-[35px]");
});
async function fetchSeryal() {
  try {
    let response = await fetch(
      "https://amyrali18.github.io/filimo-api/movies.json"
    );
    let seryal = await response.json();
    console.log(seryal);

    seryal.map((img) => {
      seryals.insertAdjacentHTML(
        "afterbegin",
        `
              <a href="#"
                ><div>
                  <img
                    class="rounded-[8px]"
                    src="${img.banner}"
                  />
                  </div
              ></a>`
      );
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};
fetchSeryal();
