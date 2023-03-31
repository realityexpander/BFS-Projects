import './blog-post.js';
import './blog-post-list.js';

const blogPostsElement = document.getElementById('blog-posts');



blogPostsElement.posts = [
  {
    title: 'How to become a web developer in 6 months',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
    thumbnail: 'https://picsum.photos/seed/1/300/300'
  },
  {
    title: 'Web Components will enhance Javascript libraries, not replace them',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
    thumbnail: 'https://picsum.photos/seed/2/300/300'
  },
  // {
  //   title: 'How to properly build web components to help you scale easily',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  //   thumbnail: 'https://picsum.photos/seed/3/300/300'
  // },
  // {
  //   title: 'How to build a fullstack website start to finish',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  //   thumbnail: 'https://picsum.photos/seed/4/300/300'
  // },
  // {
  //   title: 'NodeJs projects that will make you a full stack',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  //   thumbnail: 'https://picsum.photos/seed/5/300/300'
  // },
  // {
  //   title: '10 CSS tricks you need to learn for your next project',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  //   thumbnail: 'https://picsum.photos/seed/6/300/300'
  // }
]

// create a new post every 5 seconds
setInterval(() => {
  blogPostsElement.posts = [
    ...blogPostsElement.posts,
    {
      title: 'New Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
      thumbnail: `https://picsum.photos/seed/${blogPostsElement.posts.length}/300/300`
    }
  ]
}, 2500)
