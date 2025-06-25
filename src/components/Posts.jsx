import React, { useState } from 'react';
import Button from './Button';

const samplePosts = [
  {
    id: 1,
    title: 'Welcome to PLP Task Manager',
    body: 'This app helps you track your tasks and stay organized with ease.',
  },
  {
    id: 2,
    title: 'Built with React & Tailwind CSS',
    body: 'We use React for building UI components and Tailwind CSS for fast styling.',
  },
  {
    id: 3,
    title: 'Learn by Doing',
    body: 'Practice fetching data, managing state, and building responsive apps.',
  },
];

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = samplePosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={() => setSearchTerm('')} variant="secondary" size="sm">
          Clear
        </Button>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredPosts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
