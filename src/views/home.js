import { createPost } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');
  const post = document.createElement('input');
  post.id = 'inputPost';
  post.type = 'text';
  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.textContent = 'Post';
  section.append(post, buttonPost);
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  buttonPost.addEventListener('click', () => {
    const comment = document.querySelector('#inputPost').value;
    console.log('Sirve el click', comment);
    createPost(comment);
  });

  return section;
}
