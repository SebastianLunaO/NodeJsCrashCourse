//Array structure
const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
];

// Method 1 to get export
const getPosts = () => posts; 

//Method 2 to get export (as an object)
/*export{
    getPosts
}; */

export default getPosts;

export const getPostLenght = () => posts.length;