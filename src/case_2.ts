type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: 'Halooo',
  },
];

/**
 * Get count comments
 * @returns string
 */
export function getCountComments(): string {
  let totalComments = 0;
  const stack: IComment[] = [...comments];

  while (stack.length > 0) {
    const currentComment = stack.pop()!;
    totalComments++;

    if (currentComment.replies) {
      stack.push(...currentComment.replies);
    }
  }

  return `\n\n Jadi berdasarkan data total komentar adalah ${totalComments}`;
}
