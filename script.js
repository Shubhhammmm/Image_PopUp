const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    // console.log("chala");
    let div = document.createElement("div");
    div.classList.add("imagediv");

    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src" ,"https://images.unsplash.com/photo-1702719796532-13c5bfbb741e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    div.appendChild(img);


    document.body.appendChild(div);

    gsap.to(img , {
       y : "0",
      ease:  Power1,
      duration: .6
    })

    gsap.to(img , {
        y : "100%",
        delay: .6,
       ease:  Power2,
      
     })



    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400)
);
