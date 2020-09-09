// BIO PAGE AND FORM

// const axios = require("axios");

// // 20200908065750
// https://project-1-api.herokuapp.com/register

// {
//   "api_key": "c726f312-dedb-4aeb-83d4-cabd1a93db40"
// }

const form = document.getElementById("form");

form.addEventListener(
  "submit",
  (displayComments = () => {
    event.preventDefault();
    // const name = event.target.name.value;
    // const comment = event.target.comment.value;
    // // const newComment = {
    //   name: name,
    //   comment: comment,
    //   date: formattedDate,
    // };
    // comments.push(newComment);
    // console.log(name);
    // console.log(comment);

    const Post = () => {
      axios({
        method: "post",
        url: url,
        // headers: { "Content-Type": "application/json" },
        data: {
          name: event.target.name.value,
          comment: event.target.comment.value,
        },

        headers: { "Content-Type": "application/json" },
      }).then(
        (success = (response) => {
          console.log(response);
        }).catch(
          (error = (error) => {
            console.log(error.status);
          })
        )
      );
    };
    document.querySelector(".comments__name").value = "";
    document.querySelector(".comments__comment").value = "";
    // loadComments();
  })
);

const url =
  "https://project-1-api.herokuapp.com/comments/?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40";

// const Post = () => {
//   axios({
//     method: "post",
//     url: url,
//     // headers: { "Content-Type": "application/json" },
//     data: {
//       name: name,
//       comment: comment,
//     },

//     headers: { "Content-Type": "application/json" },
//   }).then(
//     (success = (response) => {
//       console.log(response);
//     }).catch(
//       (error = (error) => {
//         console.log(error.status);
//       })
//     )
//   );
// };

let bio = axios
  .get(url)
  .then((res) => {
    res.data.reverse().forEach((item) => {
      let currentDate = new Date(
        parseFloat(JSON.stringify(item.timestamp).replace(/"/g, "").substr(3))
      );
      let formattedDate =
        currentDate.getMonth() +
        1 +
        "/" +
        currentDate.getDay() +
        "/" +
        currentDate.getFullYear();

      let newComment = {
        name: JSON.stringify(item.name).replace(/"/g, ""),
        comment: JSON.stringify(item.comment).replace(/"/g, ""),
        date: formattedDate,
      };
      comments.push(newComment);
      loadComments();
    });
  })
  .catch((err) => {
    console.log(err);
  });

const comments = [];

// MAKES DATE DYNAMIC TO DATE OF UPLOADED COMMENT
// let currentDate = new Date();
// let formattedDate =
//   currentDate.getMonth() +
//   1 +
//   "/" +
//   currentDate.getDay() +
//   "/" +
//   currentDate.getFullYear();

// TAKES VALUE FROM FORM WHEN CALLED AND PUSHES INTO COMMENTS ARRAY
// const form = document.getElementById("form");

// form.addEventListener(
//   "submit",
//   (displayComments = () => {
//     event.preventDefault();
//     // const name = event.target.name.value;
//     // const comment = event.target.comment.value;
//     // const newComment = {
//     //   name: name,
//     //   comment: comment,
//     //   date: formattedDate,
//     // };
//     // comments.push(newComment);
//     document.querySelector(".comments__name").value = "";
//     document.querySelector(".comments__comment").value = "";
//     loadComments();
//   })
// );

// form.onsubmit = (event) => {
//   event.preventDefault();
//   const name = event.target.name.value;
//   const comment = event.target.comment.value;
//   const newComment = {
//     name: name,
//     comment: comment,
//     date: formattedDate,
//   };
//   comments.push(newComment);
//   document.querySelector(".comments__name").value = "";
//   document.querySelector(".comments__comment").value = "";
//   loadComments();
// };

// MAKES PARENT CONTAINER AND LOADS COMMENTS
function makeParentDiv() {
  const commentsReturn = document.createElement("div");
  commentsReturn.classList.add("comments__return");
  let referenceNode = document.querySelector(".comments__form");
  referenceNode.parentNode.insertBefore(
    commentsReturn,
    referenceNode.nextElementSibling
  );
  loadComments();
}

// INVOKING
makeParentDiv();

// LOOPS OVER COMMENTS ARRAY AND CLEARS COMMENT SECTION
function loadComments() {
  document.querySelector(".comments__return").innerHTML = "";
  comments
    .slice()
    .reverse()
    .forEach((element) => makeSection(element));
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
