import React from "react";
import CommentCard from "./CommentCard";
import CommentsList from "./CommentsList";

/**
 * Comment Data would look like:
 *
 *
 */
const commentData = [
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [
          {
            name: "Negimox",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            replies: [],
          },
        ],
      },
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [
          {
            name: "Negimox",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            replies: [
              {
                name: "Negimox",
                text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                replies: [],
              },
            ],
          },
          {
            name: "Negimox",
            text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
    ],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [],
  },
  {
    name: "Negimox",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
      {
        name: "Negimox",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="my-4 mx-6 col-span-12">
      <h1 className="font-bold text-2xl text-white">Comments</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
