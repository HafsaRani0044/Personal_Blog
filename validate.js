import { blogPosts } from './src/data/blogData.js';

console.log('Total posts:', blogPosts.length);

// Check for duplicate IDs
const ids = blogPosts.map(post => post.id);
const uniqueIds = [...new Set(ids)];
console.log('Unique IDs:', uniqueIds.length);

if (ids.length !== uniqueIds.length) {
  console.log('DUPLICATE IDs FOUND!');
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  console.log('Duplicate IDs:', duplicates);
} else {
  console.log('✅ All IDs are unique');
}

// Check for duplicate titles
const titles = blogPosts.map(post => post.title);
const uniqueTitles = [...new Set(titles)];
console.log('Unique titles:', uniqueTitles.length);

if (titles.length !== uniqueTitles.length) {
  console.log('DUPLICATE TITLES FOUND!');
  const duplicateTitles = titles.filter((title, index) => titles.indexOf(title) !== index);
  console.log('Duplicate titles:', duplicateTitles);
} else {
  console.log('✅ All titles are unique');
}

// Show category distribution
const categories = blogPosts.reduce((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1;
  return acc;
}, {});
console.log('Category distribution:', categories);
