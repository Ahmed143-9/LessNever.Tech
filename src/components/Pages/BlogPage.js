import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring the latest trends and technologies shaping web development...",
      date: "Dec 15, 2023",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building large-scale React applications...",
      date: "Dec 10, 2023",
      category: "React",
      readTime: "8 min read"
    },
    {
      title: "AI Integration in Modern Web Apps",
      excerpt: "How to integrate AI capabilities into your web applications...",
      date: "Dec 5, 2023",
      category: "Artificial Intelligence",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Blog</h1>
        <p className="lead text-muted">Insights, tutorials, and news from our team</p>
      </div>

      <div className="row g-4 mb-5">
        {blogPosts.map((post, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-3">
                  <span className="badge bg-primary">{post.category}</span>
                  <span className="text-muted ms-2">{post.readTime}</span>
                </div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <small className="text-muted">{post.date}</small>
                  <button className="btn btn-sm btn-outline-primary">
                    Read More <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="mb-4">Coming Soon</h3>
        <p className="text-muted">
          We're working on more insightful content. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default BlogPage;