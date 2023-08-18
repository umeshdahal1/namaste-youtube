import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Tulasa Paudel",
    text: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    replies: [
      {
        name: "Umesh Dahal",
        email: "umeshdahal@gmail.com",
        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        replies: [
          {
            name: "Kalpana Ghimire",
            email: "kalpanaghimire@gmail.com",
            text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            replies: [
              {
                name: "Chhabilal Regmi",
                email: "chhabilalghimire@gmail.com",
                text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sachida Pokhrel",
    email: "sachidapokhrel@gmail.com",
    text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    name: "Kiran Shakya",
    email: "kiranshakya@gmail.com",
    text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    name: "Utsav Adhikari",
    email: "utsavadhikari@gmail.com",
   text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    replies: [
      {
        name: "Nirmlada Mishra",
        email: "bhaskarbhattrai@gmail.com",
       text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        replies: [
          {
            name: "Shakti Oli",
            email: "shaktioli@gmail.com",
           text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
