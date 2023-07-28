import React from "react";

const commentsData = [
  {
    name: "Umesh Dahal",
    text: "Lorem ispsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Umesh Dahal",
        text: "Lorem ispsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Umesh Dahal",
            text: "Lorem ispsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Umesh Dahal",
                text: "Lorem ispsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Umesh Dahal",
    text: "Lorem ispsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Umesh Dahal",
        text: "Lorem ispsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Umesh Dahal",
            text: "Lorem ispsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Umesh Dahal",
                text: "Lorem ispsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Umesh Dahal",
    text: "Lorem ispsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Umesh Dahal",
        text: "Lorem ispsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Umesh Dahal",
            text: "Lorem ispsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Umesh Dahal",
                text: "Lorem ispsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className=" flex shadow-lg bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <div className="px-3 ">
        <p className=" font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer :Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className=" pl-5 border border-l-black ml-5">
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
         <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className=" text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
