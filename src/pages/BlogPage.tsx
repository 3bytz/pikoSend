import React from 'react';
import { Navbar, Footer, SEO } from '../components';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { ArrowRight, Calendar, Clock, Search, Tag, User, Share2 } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  authorRole: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Send Money Without Hidden Fees',
    excerpt: 'Learn the best practices for sending money  while avoiding unexpected charges and getting the best exchange rates. Discover how PikoSend ensures transparent pricing.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    category: 'Guides',
    author: 'Jane Mwangi',
    authorRole: 'Payment Specialist',
    tags: ['International Payments', 'Fees', 'Money Transfer']
  },
  {
    id: '2',
    title: 'The Future of Digital Payments in Africa',
    excerpt: 'Exploring how mobile money and digital wallets are transforming financial inclusion across the African continent. Learn about the latest trends and innovations.',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 25, 2025',
    readTime: '7 min read',
    category: 'Insights',
    author: 'David Ochieng',
    authorRole: 'Fintech Analyst',
    tags: ['Digital Payments', 'Africa', 'Innovation']
  },
  {
    id: '3',
    title: 'Freelancer Guide to Getting Paid',
    excerpt: 'Essential tips for freelancers to receive payments quickly, securely, and cost-effectively. Maximize your earnings with smart payment strategies.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 22, 2025',
    readTime: '6 min read',
    category: 'Tips',
    author: 'Grace Wanjiru',
    authorRole: 'Freelance Expert',
    tags: ['Freelancing', 'Payments', 'Business Tips']
  },
  {
    id: '4',
    title: 'Understanding Cryptocurrency for Everyday Payments',
    excerpt: 'A beginner-friendly guide to using cryptocurrency for daily transactions. Learn about the benefits and risks of digital currencies.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 20, 2025',
    readTime: '8 min read',
    category: 'Technology',
    author: 'Alex Mwangi',
    authorRole: 'Blockchain Developer',
    tags: ['Cryptocurrency', 'Technology', 'Digital Currency']
  },
  {
    id: '5',
    title: 'Small Business Finance Management Tips',
    excerpt: 'Essential financial management strategies for small business owners. Learn how to optimize your cash flow and grow your business.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 18, 2025',
    readTime: '6 min read',
    category: 'Business',
    author: 'Sarah Omondi',
    authorRole: 'Business Consultant',
    tags: ['Small Business', 'Finance', 'Management']
  },
  {
    id: '6',
    title: 'Mobile Banking Security Best Practices',
    excerpt: 'Protect your financial information with these essential mobile banking security tips. Keep your transactions safe and secure.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 15, 2025',
    readTime: '4 min read',
    category: 'Security',
    author: 'Peter Maina',
    authorRole: 'Security Expert',
    tags: ['Security', 'Mobile Banking', 'Privacy']
  },
  {
    id: '7',
    title: 'Cross-Border E-commerce Payments Simplified',
    excerpt: 'Learn how to navigate international e-commerce payments with ease. Tips for merchants and buyers in global markets.',
    image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 12, 2025',
    readTime: '7 min read',
    category: 'E-commerce',
    author: 'Emily Atieno',
    authorRole: 'E-commerce Specialist',
    tags: ['E-commerce', 'International', 'Payments']
  },
  {
    id: '8',
    title: 'Financial Planning for Young Professionals',
    excerpt: 'Start your financial journey on the right foot. Essential planning tips for young professionals building their careers.',
    image: 'https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 10, 2025',
    readTime: '5 min read',
    category: 'Personal Finance',
    author: 'Brian Kamau',
    authorRole: 'Financial Advisor',
    tags: ['Financial Planning', 'Young Professionals', 'Savings']
  }
];

const categories = ['All', 'Guides', 'Insights', 'Tips', 'Technology', 'Business', 'Security', 'E-commerce', 'Personal Finance'];
const popularTags = ['Payments', 'Africa', 'Security', 'Business', 'Freelancing', 'Technology', 'Finance', 'E-commerce', 'Mobile Banking'];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog - PikoSend | Financial Insights & Payment Tips"
        description="Stay updated with the latest financial insights, payment tips, and industry trends from PikoSend experts."
        keywords="financial blog, payment tips, money transfer insights, fintech news, financial education"
      />
      <Navbar />

      {/* Blog Hero Section */}
      <Section background="purple" className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              PikoSend Blog
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Insights, tips, and updates on global payments, financial technology, and business growth
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-piko-medium-grey" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Blog Content */}
      <Section background="white" className="py-16">
        <Container>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-piko-soft-grey">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-piko-purple text-white'
                        : 'bg-piko-soft-grey text-piko-medium-grey hover:bg-piko-purple/10 hover:text-piko-purple'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-piko-black mb-4">No articles found</h3>
                  <p className="text-piko-medium-grey">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-piko-soft-grey hover:border-piko-purple hover:shadow-xl transition-all duration-300 animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

                        <h3 className="font-poppins text-xl font-bold text-piko-black mb-3 line-clamp-2 group-hover:text-piko-purple transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-piko-medium-grey text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-4 pt-4 border-t border-piko-soft-grey">
                          <div className="w-8 h-8 bg-gradient-to-br from-piko-purple to-piko-violet rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-piko-black">{post.author}</p>
                            <p className="text-xs text-piko-medium-grey">{post.authorRole}</p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-piko-soft-grey text-piko-medium-grey text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-piko-soft-grey">
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center gap-2 text-piko-purple font-medium text-sm hover:gap-3 transition-all group"
                          >
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <button className="p-2 text-piko-medium-grey hover:text-piko-purple transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-piko-purple text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-piko-soft-grey text-piko-medium-grey hover:bg-piko-purple/10 hover:text-piko-purple">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-piko-soft-grey text-piko-medium-grey hover:bg-piko-purple/10 hover:text-piko-purple">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-piko-soft-grey text-piko-medium-grey hover:bg-piko-purple/10 hover:text-piko-purple">
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* About Section */}
              <div className="bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-2xl p-6">
                <h3 className="font-poppins font-bold text-lg text-piko-black mb-4">About This Blog</h3>
                <p className="text-piko-medium-grey text-sm mb-4">
                  Welcome to the PikoSend Blog! We share insights, tips, and updates about payments, 
                  financial technology, and business growth across Africa.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-piko-soft-grey">
                  <div className="w-10 h-10 bg-gradient-to-br from-piko-purple to-piko-violet rounded-full flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-piko-black">Expert Authors</p>
                    <p className="text-xs text-piko-medium-grey">Industry professionals</p>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl border border-piko-soft-grey p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={18} className="text-piko-purple" />
                  <h3 className="font-poppins font-bold text-lg text-piko-black">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1.5 bg-piko-soft-grey text-piko-medium-grey text-xs rounded-full hover:bg-piko-purple hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-piko-purple to-piko-violet rounded-2xl p-6 text-white">
                <h3 className="font-poppins font-bold text-lg mb-4">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest articles and financial tips delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <button className="w-full px-4 py-3 bg-white text-piko-purple rounded-lg font-medium hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="soft-grey" className="py-20">
        <Container>
          <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Have a Topic Idea?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Want us to write about something specific? Let us know what financial topics interest you most.
              </p>
              <Link to="/contact" className="px-10 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Suggest a Topic
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};