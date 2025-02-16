
// components/BlogList.js

import blogs from '@/data';
import Image from 'next/image';
import React from 'react';


const BlogList = () => {
    return (
      <div className=" bg-neutral-700 flex flex-wrap gap-6 justify-center p-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-64 border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 bg-white"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={100}
              height={100}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-900">{blog.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{blog.description}</p>
            <span className="block mt-4 text-xs text-gray-600">{blog.date}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;