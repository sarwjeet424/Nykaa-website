document.querySelector(".sidebar").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("sPwrapper");
  });
  function proceedTopay(){
    var box= document.getElementById("btnLK").innerText="Payment success! Your Order is delivered within few minutes";
         alert(box)
          window.location.href="index.html"
         
        }
      function mfunction(){
        window.location.href="index.html"
      }
   