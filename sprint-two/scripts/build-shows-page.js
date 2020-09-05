// BIO PAGE AND FORM

const comments = [
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    date: "11/15/2018",
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    date: "12/12/2018",
  },
  {
    name: "Micheal Lyons",
    comment:
      "They Blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    date: "12/18/2018",
  },
];

// MAKES DATE
let currentDate = new Date();
let formattedDate =
  currentDate.getMonth() +
  1 +
  "/" +
  currentDate.getDay() +
  "/" +
  currentDate.getFullYear();

// TAKES VALUE FROM FORM AND PUSHES INTO COMMENTS ARRAY
const form = document.getElementById("form");

form.onsubmit = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const comment = event.target.comment.value;
  const newComment = {
    name: name,
    comment: comment,
    date: formattedDate,
  };
  comments.push(newComment);
  document.querySelector(".comments__name").value = "";
  document.querySelector(".comments__comment").value = "";
  loadComments();
};

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
