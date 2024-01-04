"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountComments = void 0;
const comments = [
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
function getCountComments() {
    let totalComments = 0;
    const stack = [...comments];
    while (stack.length > 0) {
        const currentComment = stack.pop();
        totalComments++;
        if (currentComment.replies) {
            stack.push(...currentComment.replies);
        }
    }
    return `\n\n Jadi berdasarkan data total komentar adalah ${totalComments}`;
}
exports.getCountComments = getCountComments;
