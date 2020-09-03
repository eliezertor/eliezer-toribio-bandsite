const comments = [
  {
    name: "Micheal Lyons",
    comment:
      "They Blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

// comments.map((obj, i) => {
//   console.log("name", obj.name);
//   console.log("comment", obj.comment);
// });

const addName = comments.map((obj, i) => {
  let name = ("name", obj.name);
  //   let comment = ("comment", obj.comment);
  return name;
});

const addComment = comments.map((obj, i) => {
  let comment = ("comment", obj.comment);
  return comment;
});

// tried turning my object into a bring, but it was all concat into one string
// let postName = addName.toString();
// let postComments = addComment.toString();

// This returns all comments as an array

let postName = () => {
  for (let i = 0; i < addName.length; i++) {
    console.log(addName[i]);
  }
};

// This returns all comments as an array
let postComments = () => {
  for (let i = 0; i < addComment.length; i++) {
    // console.log(addComment[i]);
    let pushComment = addComment;
    return pushComment;
  }
};

// for (let items of postComments()) {
//   console.log(items);
// }
