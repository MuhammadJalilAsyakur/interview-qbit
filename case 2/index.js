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

function countTotalComments(comments) {
    let result = 0;

    for(let counter = 0; counter < comments.length; counter++) {
        result++;
        if(comments[counter].replies) {
            result += countTotalComments(comments[counter].replies);
        }
    }

    return result;
}

console.log(countTotalComments(comments));