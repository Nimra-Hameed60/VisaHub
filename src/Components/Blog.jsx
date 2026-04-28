import React from 'react';
import blogimg1 from '../Images/blogimg1.png'
import blogimg2 from '../Images/blogimg2.png'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: 'January 6, 2025',
      title: 'The ultimate guide to applying for a tourist visa',
      image: blogimg1
    },
    {
      id: 2,
      date: 'January 6, 2025',
      title: 'How to fast-track your business visa application',
      image: blogimg2
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Tips <span className='italic'>and</span> advice</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-3 rounded-full font-semibold transition duration-300 cursor-pointer">
          View all blog
        </button>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="overflow-hidden rounded-4xl mb-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-3">
              <p className="text-gray-500 text-lg font-medium">{blog.date}</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                {blog.title}
              </h3>
              <a
                href="#"
                className="inline-block text-blue-600 font-bold text-xl border-b-2 border-transparent hover:border-blue-600 transition-all duration-200"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
