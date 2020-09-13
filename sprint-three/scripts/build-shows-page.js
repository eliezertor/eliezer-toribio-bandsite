// BIO PAGE AND FORM

const header = { headers: { "content-type": "application/json" } };
let commentId = "";
let comments = [];

const url =
  "https://project-1-api.herokuapp.com/comments/?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40";
const deleteUrl = "https://project-1-api.herokuapp.com/comments/";
const apiKey = "?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40";

function displayComments() {
  let bio = axios
    .get(url)
    .then((res) => {
      comments = [];
      res.data
        .sort(function (x, y) {
          return y.timestamp - x.timestamp;
        })
        .forEach((item) => {
          let currentDate = new Date(item.timestamp);
          let formattedDate =
            currentDate.getMonth() +
            1 +
            "/" +
            currentDate.getDate() +
            "/" +
            currentDate.getFullYear();

          let newComment = {
            name: item.name,
            comment: item.comment,
            date: formattedDate,
            id: item.id,
          };

          comments.push(newComment);
        });
      loadComments();
      // console.log(comments);
    })
    .catch((err) => {
      console.log(err);
    });
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  if (form.name.value === "" && form.comment.value === "") {
    console.log(
      "Please enter your name and a comment so we know you support us."
    );
    form.name.style.backgroundColor = "#fec7c7";
    form.name.placeholder = "Don't forget your name";
    form.comment.style.backgroundColor = "#fec7c7";
    form.comment.placeholder = "Let us know what you think";
    setTimeout(() => {
      form.name.style.backgroundColor = "#fafafa";
      form.name.placeholder = "Mohan Muruge";
      form.comment.style.backgroundColor = "#fafafa";
      form.comment.placeholder = "Add a new comment";
    }, 4000);
  } else if (form.name.value === "") {
    form.name.style.backgroundColor = "#fec7c7";
    form.name.placeholder = "Don't forget your name";
    setTimeout(() => {
      form.name.style.backgroundColor = "#fafafa";
      form.name.placeholder = "Mohan Muruge";
    }, 4000);
    console.log("Hi my name is Mohan and you are ?");
  } else if (form.comment.value === "") {
    form.comment.style.backgroundColor = "#fec7c7";
    form.comment.placeholder = "Let us know what you think";
    setTimeout(() => {
      form.comment.style.backgroundColor = "#fafafa";
      form.comment.placeholder = "Add a new comment";
    }, 4000);
    console.log("Please leave us a comment. WE love feedback.");
  } else {
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
        displayComments();
      })
      .catch(function (error) {
        console.log(error.response.message);
      });
  }

  document.querySelector(".comments__name").value = "";
  document.querySelector(".comments__comment").value = "";
  // removeParent();
});

function removeParent() {
  document.querySelector(".comments__return").innerHTML = "";
}

// add event listener/ delete in the event L
// if state
// pickup the id from the comment.
// displaycomment() in the after the event.

// axios
//   .delete(deleteUrl + commentId + apiKey, {
//
//   })
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
  comments.forEach((element) => makeSection(element));
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

  const commentLike = document.createElement("img");
  commentLike.classList.add("comments__like");
  separation.appendChild(commentLike);

  const commentDelete = document.createElement("img");
  commentDelete.classList.add("comments__delete");
  separation.appendChild(commentDelete);

  document.querySelector(".comments__like").src =
    "../Assets/Icons/SVG/thumb_up-24px.svg";
  document.querySelector(".comments__delete").src =
    "../Assets/Icons/SVG/delete-24px.svg";

  // MAKES PARAGRAPH
  const commenterPara = document.createElement("p");
  commenterPara.classList.add("comments__commenter-paragraph");
  separation.appendChild(commenterPara);

  commenterName.innerText = comment.name;
  date.innerText = comment.date;
  commenterPara.innerText = comment.comment;
}
