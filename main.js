function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");

  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}

function getDate() {
  // var d = new Date();
  // document.getElementById("date").innerHTML = d.toLocaleDateString();

  var d = new Date(document.lastModified);
  document.getElementById("date").innerHTML = d.toLocaleDateString();

  // var date = new Date();
  // const getDate = document.querySelector("date");

  // getDate.addEventListener("ready", () => {
  //   document.getElementById("date").innerHTML = new Date().toString();
  // });
}
// var date = document.lastModified;
// "#datetime".text("Some text and work good!" + date);
