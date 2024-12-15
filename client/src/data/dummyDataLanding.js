import postImage1 from "../assets/post/postImage1.avif";
import postImage2 from "../assets/post/postImage2.png";
// import postImage3 from "../assets/post/postImage3.avif";
import postImage4 from "../assets/post/postImage4.avif";

import userImage1 from "../assets/users/userImage1.jpg";
import userImage2 from "../assets/users/userImage2.jpg";
// import userImage3 from "../assets/users/userImage3.jpg";
import userImage4 from "../assets/users/userImage4.jpg";

import borderlandsImage from "../assets/borderlandsImg.jpg"
import newsIcon from "../assets/newsIcon.jpeg"

export const Posts = [
  {
    id: 3,
    desc: "BORDERLANDS 4 IS COMING!!! LET'S GO VAULT HUNTERS! WE RIDE AT DAWN!",
    photo: borderlandsImage,
    date: "4 hours ago",
    userId: 103,
    like: 7696,
    comment: 12783,
  },

  {
    id: 2,
    desc: "Starting to build my empire with flower honey.",
    photo: postImage2,
    date: "3 days ago",
    userId: 102,
    like: 43,
    comment: 5,
  },
  {
    id: 1,
    desc: "Liara is ride or die. Change my mind.",
    photo: postImage1,
    date: "30 minutes ago",
    userId: 101,
    like: 75,
    comment: 30,
  },
  {
    id: 4,
    desc: "I finally played Bioshock. Didn't know I shouldn't sacrifice the little demon girls...",
    photo: postImage4,
    date: "7 days ago",
    userId: 104,
    like: 238,
    comment: 126,
  },


];

export const Users = [
  {
    id: 101,
    profilePicture: userImage1,
    username: "gaming_god",
  },
  {
    id: 102,
    profilePicture: userImage2,
    username: "gaming_chief",
  },
  {
    id: 103,
    profilePicture: newsIcon,
    username: "breaking_news",
  },
  {
    id: 104,
    profilePicture: userImage4,
    username: "gaming_noob",
  },

];

// export const Friends = [
//   {
//     id: 101,
//     profilePicture: userImage1,
//     username: "Kwaku Sam",
//   },
//   {
//     id: 102,
//     profilePicture: userImage2,
//     username: "Ama Serwaa",
//   },
//   {
//     id: 103,
//     profilePicture: userImage3,
//     username: "Samuel Asante",
//   },
//   {
//     id: 104,
//     profilePicture: userImage4,
//     username: "Derrick Kello",
//   },
//   {
//     id: 105,
//     profilePicture: userImage1,
//     username: "Henry Crentsil",
//   },
//   {
//     id: 106,
//     profilePicture: userImage2,
//     username: "Richard Arthur",
//   },
//   {
//     id: 107,
//     profilePicture: userImage3,
//     username: "Emmanuel Boateng",
//   },
//   {
//     id: 108,
//     profilePicture: userImage4,
//     username: "Denis Owusu",
//   },
// ];