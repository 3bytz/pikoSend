import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Send Money Internationally Without Hidden Fees',
    excerpt: 'Learn the best practices for sending money across borders while avoiding unexpected charges and getting the best exchange rates.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    category: 'Guides',
  },
  {
    id: '2',
    title: 'The Future of Digital Payments in Africa',
    excerpt: 'Exploring how mobile money and digital wallets are transforming financial inclusion across the African continent.',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Nov 25, 2025',
    readTime: '7 min read',
    category: 'Insights',
  },
  {
    id: '3',
    title: 'Freelancer Guide to Getting Paid Globally',
    excerpt: 'Essential tips for freelancers to receive international payments quickly, securely, and cost-effectively.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'Nov 22, 2025',
    readTime: '6 min read',
    category: 'Tips',
  },
];

export const Blog: React.FC = () => {
  return (
    <Section background="soft-grey" id='blog'>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Stay informed with insights, tips, and updates on global payments and financial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-piko-purple text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-piko-medium-grey mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-poppins text-lg font-bold text-piko-black mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-piko-medium-grey text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-piko-purple font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More
                    <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-piko-purple text-piko-purple rounded-full font-medium transition-all duration-300 hover:bg-piko-purple hover:text-white">
            View All Articles
          </button>
        </div>
      </Container>
    </Section>
  );
};
