import {user, logout} from './index.js';

let posts = [];

async function getAllAvailablePosts() {
  await fetch("https://fragile-fox-garters.cyclic.app/posts")
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result);
      posts = res.data;
      let postDatas = "";
      posts.forEach((post) => {
        console.log(post);
        let postHtml = `<div class="card" style="width: 14rem">
        <img
          class="card-img-top"
          src=${
            post.selectedFile
              ? post.selectedFile
              : "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/187_Js-1024.png"
          }
          alt="Card image cap"
        />
        <div class="card-body">
          <h6 class="card-title">${post.title}</h6>
          <span class="card-title" style="font-size: 12px;font-weight: bold;">${post.tags.map(
            (tag) => `#${tag} `
          )}</span>
          <p class="card-text">${post.message}</p>
          <div class="cards-footer">
            <span>Like ${post.likes.length}</span>
            <button class="btn">edit</button>
          </div>
        </div>
      </div>`;

        postDatas += postHtml;
        document.getElementById("postContainer").innerHTML = postDatas;
      });
    })
    .catch((error) => console.log("error", error));
}

if(user.token){
    document.getElementById("sign-in-button").style.display = "none";
   const logoutBtn =  document.getElementById("logout-button");
   logoutBtn.style.display = "block";
   logoutBtn.addEventListener("click",logout)

}else{
    document.getElementById("logout-button").style.display = "none";

}

getAllAvailablePosts();

