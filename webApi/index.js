// function showPosition(position){
//     console.log(position)
// }

// console.log(window.navigator.geolocation.getCurrentPosition((position)=> console.log(position)));
// console.log(window.navigator.geolocation.watchPosition(showPosition));

// const myInput = document.querySelector('input');

// function submit(event){
//     event.preventDefault();
//     if(myInput.checkValidity()){
//         console.log('true')
//     }
// }

// let w;

// function showTimer(){
//     if(w == undefined){
//         w =  new Worker('./work.js');
//     }
//     w.onmessage = function(event){
//         console.log(event);
//     }
// }

// showTimer();
// console.log(w);

// setTimeout(()=> w.terminate(), 5000)

// fetch('url', {
//     method: 'GET' || 'POST' || 'DELETE' || 'PATCH' || 'PUT',
//     body: {'':""},
//     headers:{}
// })

const getPost = async () => {
  await fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
    method: "GET",
    headers: {
      authorization: "",
    },
  })
    .then((res) => res.json())
    .then((data) =>
      data.forEach((post) => {
        const newP = document.createElement("p");
        newP.innerHTML = post.title;
        document.body.appendChild(newP);
      })
    );
};

getPost();
