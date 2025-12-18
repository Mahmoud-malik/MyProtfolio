
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1300); // 1300ms = 1.3s
  });
// change to light moode
const btn = document.getElementById("theme-toggle");
  btn.onclick = function(){
    document.body.classList.toggle("light");
    // change icone to 🌙
    if(document.body.classList.contains("light")){
      btn.textContent = "🌙";
    }else{
      btn.textContent  = "🔆";
    }
  };

