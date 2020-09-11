// BIO PAGE AND FORM

const header = { headers: { "content-type": "application/json" } };
// let commenterID; FIXME:
const comments = [];

const url =
  "https://project-1-api.herokuapp.com/comments/?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40";
const deleteUrl =
  "https://project-1-api.herokuapp.com/comments/?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40&id=";

function displayComments() {
  let bio = axios
    .get(url)
    .then((res) => {
      res.data
        .sort(function (x, y) {
          return x.timestamp - y.timestamp;
        })
        .forEach((item) => {
          let currentDate = new Date(item.timestamp);
          let formattedDate =
            currentDate.getMonth() +
            1 +
            "/" +
            currentDate.getDay() +
            "/" +
            currentDate.getFullYear();

          let newComment = {
            name: item.name,
            comment: item.comment,
            date: formattedDate,
          };
          comments.push(newComment);
          loadComments();
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios
    .post(
      url,
      {
        name: form.name.value,
        comment: form.comment.value,
      },
      header
    )
    .then(function (response) {
      console.log(response.data);
      removeParent();
      makeParentDiv();
    })
    .catch(function (error) {
      console.log(error.response.message);
    });
  document.querySelector(".comments__name").value = "";
  document.querySelector(".comments__comment").value = "";
  // removeParent();
});

function removeParent() {
  document.querySelector(".comments__return").innerHTML = "";
}

// const btn = document.querySelector(".comments__btn");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   document.querySelector(".comments__return").innerHTML = "";
//   // document.querySelector(".comments__separation").innerHTML = "";
//   // makeParentDiv();
//   console.log(event);
// });

// axios
//   .delete(
//     deleteUrl,
//     {
//       params: { id: "d1abafa9-82a6-4eb7-907e-2dc12f5e0efb" },
//     }
//     // { headers: { "Content-type": "application/json" } }
//   )
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error.response);
//   });

// MAKES DATE DYNAMIC TO DATE OF UPLOADED COMMENT
let currentDate = new Date();
let formattedDate =
  currentDate.getMonth() +
  1 +
  "/" +
  currentDate.getDay() +
  "/" +
  currentDate.getFullYear();

// TAKES VALUE FROM FORM WHEN CALLED AND PUSHES INTO COMMENTS ARRAY
// MAKES PARENT CONTAINER AND LOADS COMMENTS
function makeParentDiv() {
  const commentsReturn = document.createElement("div");
  commentsReturn.classList.add("comments__return");
  let referenceNode = document.querySelector(".comments__form");
  referenceNode.parentNode.insertBefore(
    commentsReturn,
    referenceNode.nextElementSibling
  );
  displayComments();
}

// INVOKING
makeParentDiv();

// LOOPS OVER COMMENTS ARRAY AND CLEARS COMMENT SECTION
// TODO: .reverse() removed from forEach
function loadComments() {
  document.querySelector(".comments__return").innerHTML = "";
  comments.reverse().forEach((element) => makeSection(element));
}

// MAKES CHILD ELEMENTS AND APPENDS TO PARENT CONTAINER
function makeSection(comment) {
  const referenceParent = document.querySelector(".comments__return");
  const separation = document.createElement("div");
  separation.classList.add("comments__separation");
  referenceParent.appendChild(separation);
  //MAKES PICTURE
  const commentsPicture = document.createElement("div");
  commentsPicture.classList.add("comments__picture");
  separation.appendChild(commentsPicture);
  //MAKES H2
  const commenterName = document.createElement("h2");
  commenterName.classList.add("comments__commenter-name");
  separation.appendChild(commenterName);
  // MAKES DATE
  const date = document.createElement("span");
  date.classList.add("comments__date");
  separation.appendChild(date);
  // MAKES PARAGRAPH
  const commenterPara = document.createElement("p");
  commenterPara.classList.add("comments__commenter-paragraph");
  separation.appendChild(commenterPara);

  commenterName.innerText = comment.name;
  date.innerText = comment.date;
  commenterPara.innerText = comment.comment;
}
