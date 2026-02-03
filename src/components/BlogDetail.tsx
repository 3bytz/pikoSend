import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from './Container';
import { ArrowLeft, Calendar, Clock, User, MessageCircle, Tag } from 'lucide-react';

interface BlogPostDetail {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const blogPostsDetail: BlogPostDetail[] = [
  {
    id: '1',
    title: 'How to Send Money Internationally Without Hidden Fees',
    excerpt: 'Learn the best practices for sending money across borders while avoiding unexpected charges and getting the best exchange rates.',
    content: `
      <p class="lead-text">Sending money internationally has become essential in our global economy, but hidden fees can significantly reduce the amount your recipient gets. In this comprehensive guide, we'll explore expert strategies to ensure you get maximum value from every international transfer.</p>
      
      <div class="highlight-box">
        <h3>💰 Key Takeaway</h3>
        <p>Traditional banks often charge up to 8% in hidden fees on international transfers. Specialized services like PikoSend can reduce this to less than 1%.</p>
      </div>
      
      <h2>Understanding International Transfer Fees</h2>
      <p>Most banks and traditional money transfer services charge multiple types of fees that aren't always transparent:</p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">3-5%</div>
          <div class="stat-label">Exchange Rate Margin</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">$25-50</div>
          <div class="stat-label">Transaction Fee</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">$15-30</div>
          <div class="stat-label">Correspondent Fees</div>
        </div>
      </div>
      
      <h2>Choosing the Right Service Provider</h2>
      <p>When selecting a money transfer service, consider these critical factors:</p>
      
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">
            🔒
          </div>
          <h4>Security First</h4>
          <p>Look for providers with bank-level encryption and regulatory compliance in both sending and receiving countries.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            📈
          </div>
          <h4>Real Exchange Rates</h4>
          <p>Check if they use real mid-market rates without hidden margins in the conversion.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            ⚡
          </div>
          <h4>Transfer Speed</h4>
          <p>Balance between speed and cost. Some transfers can be instant, while others take 1-3 business days.</p>
        </div>
      </div>
      
      <h2>Practical Tips to Minimize Fees</h2>
      <div class="tip-box">
        <h3>💡 Pro Tip</h3>
        <p>Always compare the total amount your recipient will receive, not just the transfer fee. This includes all hidden costs.</p>
      </div>
      
      <h3>Step-by-Step Guide:</h3>
      <ol>
        <li><strong>Check mid-market rates</strong> on XE or Google before transferring</li>
        <li><strong>Use comparison tools</strong> to find the best service for your route</li>
        <li><strong>Time your transfers</strong> when exchange rates are favorable</li>
        <li><strong>Bundle transfers</strong> to reduce per-transaction fees</li>
        <li><strong>Set rate alerts</strong> to transfer at optimal times</li>
      </ol>
      
      <div class="success-story">
        <h3>📈 Success Story: Sarah's Experience</h3>
        <p>"I used to lose $50 every time I sent money to my family in Kenya. Switching to PikoSend saved me over $600 last year!"</p>
      </div>
      
      <h2>Digital Solutions Changing the Game</h2>
      <p>Modern fintech platforms are revolutionizing international money transfers:</p>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Traditional Banks</th>
              <th>PikoSend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Average Fee</td>
              <td>5-8%</td>
              <td>0.5-1.5%</td>
            </tr>
            <tr>
              <td>Transfer Speed</td>
              <td>3-5 days</td>
              <td>Instant - 24 hours</td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>Poor (high margin)</td>
              <td>Real mid-market rate</td>
            </tr>
            <tr>
              <td>Transparency</td>
              <td>Low</td>
              <td>Full fee breakdown</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="cta-box">
        <h3>Ready to Save on Your Next Transfer?</h3>
        <p>Join thousands who are already enjoying low-cost international transfers with PikoSend.</p>
        <button class="primary-btn">Start Saving Now</button>
      </div>
    `,
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    category: 'Guides',
    author: {
      name: 'Alex Johnson',
      role: 'Financial Expert',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    tags: ['Money Transfer', 'International Payments', 'Fees', 'Fintech', 'Saving Money']
  },
  {
    id: '2',
    title: 'The Future of Digital Payments in Africa',
    excerpt: 'Exploring how mobile money and digital wallets are transforming financial inclusion across the African continent.',
    content: `
      <p class="lead-text">Africa is at the forefront of a digital payments revolution that is reshaping economies and bringing financial services to millions of previously unbanked individuals. This transformation is not just changing how people pay, but who can participate in the formal economy.</p>
      
      <div class="highlight-box">
        <h3>🌍 Key Insight</h3>
        <p>Africa leads the world in mobile money adoption, with transaction volumes exceeding $700 billion annually - more than the GDP of most African countries.</p>
      </div>
      
      <h2>The Mobile Money Phenomenon</h2>
      <p>What started as a simple SMS-based money transfer system in Kenya has evolved into a comprehensive financial ecosystem:</p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">50%+</div>
          <div class="stat-label">Adult Population Using Mobile Money</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">700M+</div>
          <div class="stat-label">Mobile Money Accounts</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">$2.5B</div>
          <div class="stat-label">Daily Transactions</div>
        </div>
      </div>
      
      <h2>Key Innovations Driving Adoption</h2>
      <p>Several groundbreaking innovations are accelerating digital payment growth across Africa:</p>
      
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">
            🌐
          </div>
          <h4>Cross-Border Solutions</h4>
          <p>Platforms like PikoSend are making regional transfers seamless, affordable, and instantaneous across African countries.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            📱
          </div>
          <h4>USSD & Feature Phones</h4>
          <p>Solutions that work without smartphones or internet access, reaching rural and underserved populations.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            🔗
          </div>
          <h4>Interoperability</h4>
          <p>Systems allowing transfers between different mobile money providers and traditional bank accounts.</p>
        </div>
      </div>
      
      <h2>Regional Success Stories</h2>
      <div class="tip-box">
        <h3>🏆 Spotlight: Kenya's M-Pesa</h3>
        <p>With over 50 million users across 7 countries, M-Pesa processes more transactions than all Kenyan banks combined, demonstrating the power of mobile-first finance.</p>
      </div>
      
      <h3>Country-by-Country Progress:</h3>
      <ul>
        <li><strong>Ghana:</strong> 70% mobile money penetration with government integration for payments</li>
        <li><strong>Nigeria:</strong> NIBSS instant payments processing ₦126 trillion annually</li>
        <li><strong>Egypt:</strong> Government-led digital transformation reaching 40 million users</li>
        <li><strong>South Africa:</strong> Fintech innovation hub with 300+ digital payment startups</li>
      </ul>
      
      <div class="success-story">
        <h3>💼 Business Transformation: Mama Mboga's Story</h3>
        <p>"Before mobile money, I kept cash in a box under my bed. Now I receive payments, save digitally, and even get small loans to grow my vegetable business. My daily sales have tripled!"</p>
      </div>
      
      <h2>The Next Frontier: What's Coming in 2026-2030</h2>
      <p>Emerging technologies set to revolutionize African payments:</p>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Current State</th>
              <th>Future Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Central Bank Digital Currencies (CBDCs)</td>
              <td>Pilot phases in Nigeria, Ghana</td>
              <td>Nationwide adoption expected by 2027</td>
            </tr>
            <tr>
              <td>AI-Powered Fraud Detection</td>
              <td>Basic implementations</td>
              <td>Real-time prevention saving billions</td>
            </tr>
            <tr>
              <td>Blockchain Settlements</td>
              <td>Limited cross-border use</td>
              <td>Instant, low-cost international transfers</td>
            </tr>
            <tr>
              <td>Biometric Payments</td>
              <td>Fingerprint authentication</td>
              <td>Facial recognition & voice payments</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Challenges and Opportunities</h2>
      <div class="warning-box">
        <h3>⚠️ Key Challenges</h3>
        <ul>
          <li><strong>Regulatory Fragmentation:</strong> Different rules across 54 countries</li>
          <li><strong>Digital Literacy:</strong> Bridging the education gap in rural areas</li>
          <li><strong>Infrastructure:</strong> Power and internet connectivity issues</li>
          <li><strong>Security:</strong> Rising sophistication of digital fraud</li>
        </ul>
      </div>
      
      <div class="opportunity-box">
        <h3>🎯 Growth Opportunities</h3>
        <ul>
          <li><strong>Micro-Insurance:</strong> Reaching 500 million underserved</li>
          <li><strong>Agri-Fintech:</strong> $1 trillion agricultural market</li>
          <li><strong>Remittances:</strong> $100 billion annual market with high fees</li>
          <li><strong>SME Financing:</strong> 40 million small businesses needing capital</li>
        </ul>
      </div>
      
      <div class="cta-box">
        <h3>Be Part of Africa's Digital Future</h3>
        <p>Whether you're a consumer, business, or developer, now is the time to embrace Africa's digital payments revolution.</p>
        <button class="primary-btn">Explore PikoSend Africa</button>
      </div>
    `,
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Nov 25, 2025',
    readTime: '7 min read',
    category: 'Insights',
    author: {
      name: 'Sarah Chen',
      role: 'Fintech Analyst',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    tags: ['Digital Payments', 'Africa', 'Fintech', 'Mobile Money', 'Financial Inclusion']
  },
  {
    id: '3',
    title: 'Freelancer Guide to Getting Paid',
    excerpt: 'Essential tips for freelancers to receive payments quickly, securely, and cost-effectively.',
    content: `
      <p class="lead-text">In today's borderless digital economy, freelancers have unprecedented access to global clients. However, getting paid efficiently across borders remains a significant challenge. This comprehensive guide covers everything you need to know about receiving international payments as a freelancer.</p>
      
      <div class="highlight-box">
        <h3>💼 The Freelancer Reality</h3>
        <p>The average freelancer loses 5-15% of their income to payment processing fees and poor exchange rates. With the right strategies, you can reduce this to under 1%.</p>
      </div>
      
      <h2>Understanding Your Payment Options</h2>
      <p>Different payment methods have varying costs, speeds, and accessibility. Here's what you need to know:</p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">3-5%</div>
          <div class="stat-label">PayPal Average Fee</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">5-7 days</div>
          <div class="stat-label">Bank Transfer Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">0.5-2%</div>
          <div class="stat-label">Specialized Platform Fee</div>
        </div>
      </div>
      
      <h2>Payment Method Comparison</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Best For</th>
              <th>Fees</th>
              <th>Speed</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Traditional Bank Transfer</td>
              <td>Large payments, EU clients</td>
              <td>$15-50 + 3-5%</td>
              <td>3-7 days</td>
              <td>⭐️⭐️</td>
            </tr>
            <tr>
              <td>PayPal</td>
              <td>Small businesses, US clients</td>
              <td>2.9% + $0.30 + 4% FX</td>
              <td>Instant</td>
              <td>⭐️⭐️⭐️</td>
            </tr>
            <tr>
              <td>Wise (TransferWise)</td>
              <td>Multiple currencies, mid-sized</td>
              <td>0.5-2%</td>
              <td>1-2 days</td>
              <td>⭐️⭐️⭐️⭐️</td>
            </tr>
            <tr>
              <td>PikoSend Business</td>
              <td>Africa focus, low-cost</td>
              <td>0.5-1.5%</td>
              <td>Instant - 24h</td>
              <td>⭐️⭐️⭐️⭐️⭐️</td>
            </tr>
            <tr>
              <td>Cryptocurrency</td>
              <td>Tech clients, large sums</td>
              <td>0.1-1%</td>
              <td>10 min - 1h</td>
              <td>⭐️⭐️⭐️</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Essential Tools for Freelancers</h2>
      <p>Build your financial toolkit with these essential resources:</p>
      
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">
            📄
          </div>
          <h4>Smart Invoicing</h4>
          <p>Use tools like FreshBooks or Wave to create professional invoices with automatic payment reminders and multi-currency support.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            💱
          </div>
          <h4>Multi-Currency Wallets</h4>
          <p>Maintain balances in USD, EUR, GBP to avoid frequent conversions. PikoSend offers 12+ currency wallets with no maintenance fees.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            📊
          </div>
          <h4>Tax Tracking</h4>
          <p>Automated tools to track international income, calculate tax obligations, and generate reports for multiple jurisdictions.</p>
        </div>
      </div>
      
      <h2>Pro Tips from Successful Freelancers</h2>
      <div class="tip-box">
        <h3>🎯 Maria's Pricing Strategy</h3>
        <p>"I quote all my projects in USD, even for European clients. This protects me from currency fluctuations and makes accounting simpler." - Maria, UI/UX Designer</p>
      </div>
      
      <h3>Essential Checklist for Every Project:</h3>
      <ol>
        <li><strong>Clear Payment Terms:</strong> Specify currency, method, and schedule in your contract</li>
        <li><strong>Upfront Deposit:</strong> Request 30-50% for new clients or large projects</li>
        <li><strong>Milestone Payments:</strong> Break large projects into 3-4 payment stages</li>
        <li><strong>Late Fee Policy:</strong> Include 2-5% monthly interest for overdue payments</li>
        <li><strong>Payment Method Flexibility:</strong> Offer 2-3 options to accommodate client preferences</li>
      </ol>
      
      <div class="success-story">
        <h3>🚀 From $500 to $10,000 Monthly: David's Journey</h3>
        <p>"I started freelancing part-time while working my 9-5 job. By optimizing my payment systems and focusing on international clients, I grew my monthly income from $500 to over $10,000 in 18 months. The key was finding the right payment platforms that minimized fees and maximized convenience for my clients."</p>
      </div>
      
      <h2>Tax Considerations for International Freelancers</h2>
      <div class="warning-box">
        <h3>⚠️ Important Tax Notes</h3>
        <ul>
          <li><strong>Residency Rules:</strong> Many countries tax worldwide income if you're a resident</li>
          <li><strong>Double Taxation Treaties:</strong> Check if your country has agreements with client countries</li>
          <li><strong>VAT/GST:</strong> May apply for services to clients in certain countries</li>
          <li><strong>Record Keeping:</strong> Maintain 7 years of payment records and contracts</li>
        </ul>
      </div>
      
      <h2>Building Your Financial Infrastructure</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">
            🏦
          </div>
          <h4>Business Bank Account</h4>
          <p>Separate personal and business finances. Look for accounts with low international transfer fees.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            📱
          </div>
          <h4>Payment Dashboard</h4>
          <p>Use a single dashboard to track all incoming payments across different platforms and currencies.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            💳
          </div>
          <h4>Business Debit Card</h4>
          <p>Access your earnings instantly with cards that offer good exchange rates and low ATM fees worldwide.</p>
        </div>
      </div>
      
      <div class="cta-box">
        <h3>Ready to Optimize Your International Payments?</h3>
        <p>Join 50,000+ freelancers who use PikoSend Business to save on fees, get paid faster, and focus on what they do best.</p>
        <button class="primary-btn">Get Started with PikoSend Business</button>
      </div>
    `,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Nov 22, 2025',
    readTime: '6 min read',
    category: 'Tips',
    author: {
      name: 'Michael Rodriguez',
      role: 'Freelance Consultant',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    tags: ['Freelancing', 'Global Payments', 'Tips', 'Business', 'Remote Work']
  }
];

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsDetail.find(p => p.id === id);

  if (!post) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-piko-purple via-piko-violet to-piko-purple">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-piko-violet/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-piko-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <Container>
          <div className="relative z-10 text-center py-32">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">404</h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-piko-purple via-piko-violet to-piko-purple">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="absolute top-10 left-5 w-64 h-64 bg-piko-violet/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-80 h-80 bg-piko-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <Container>
          <div className="relative z-10">
            <div className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-all duration-300"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">{post.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Published</div>
                      <div className="font-semibold text-white">{post.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Read Time</div>
                      <div className="font-semibold text-white">{post.readTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Author</div>
                      <div className="font-semibold text-white">{post.author.name}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full border-2 border-white/30"
                      />
                      <div>
                        <h4 className="font-bold text-lg text-white">{post.author.name}</h4>
                        <p className="text-white/80 text-sm">{post.author.role}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                 
                      
                 
                    </div>
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <h5 className="text-white font-semibold mb-4">📚 Table of Contents</h5>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        Understanding International Transfer Fees
                      </li>
                      <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        Choosing the Right Service Provider
                      </li>
                      <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        Practical Tips to Minimize Fees
                      </li>
                      <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        Digital Solutions Changing the Game
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

  
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div className="mb-12">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              <div className="lg:hidden mt-12 bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="text-2xl font-bold text-piko-black">{post.author.name}</h4>
                    <p className="text-piko-medium-grey">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-piko-medium-grey">
                  Financial expert with over 10 years of experience in international banking and fintech. 
                  Passionate about helping people save money on global transactions.
                </p>
              </div>

              {/* Comments Section */}
              <div className="mt-16 pt-12 border-t border-piko-light-grey">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="text-piko-purple" size={24} />
                  <h3 className="text-2xl font-bold text-piko-black">Comments & Discussion</h3>
                </div>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((comment) => (
                    <div key={comment} className="bg-piko-purple/5 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-piko-purple/20 flex items-center justify-center">
                          <User size={20} className="text-piko-purple" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-piko-black">User {comment}</h5>
                          <p className="text-sm text-piko-medium-grey">2 days ago</p>
                        </div>
                      </div>
                      <p className="text-piko-medium-grey">
                        This article was incredibly helpful! I've been overpaying for years without realizing it.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

           
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
          
                <div className="bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-3xl p-8">
                  <div className="text-center mb-6">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold text-piko-black">{post.author.name}</h4>
                    <p className="text-piko-medium-grey text-sm">{post.author.role}</p>
                  </div>
                  <p className="text-piko-medium-grey text-center">
                    Financial expert with over 10 years of experience in international banking and fintech.
                  </p>
                </div>

              
                <div className="bg-white border border-piko-light-grey rounded-3xl p-8 shadow-lg">
                  <h5 className="text-xl font-bold text-piko-black mb-6 flex items-center gap-2">
                    <Tag className="text-piko-purple" size={20} />
                    Related Articles
                  </h5>
                  <div className="space-y-6">
                    {[1, 2, 3].map((related) => (
                      <div key={related} className="group cursor-pointer">
                        <h6 className="font-semibold text-piko-black group-hover:text-piko-purple transition-colors">
                          The Complete Guide to Digital Wallets in 2025
                        </h6>
                        <p className="text-sm text-piko-medium-grey mt-1">5 min read • Nov 15, 2025</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-piko-purple to-piko-violet rounded-3xl p-8 text-white">
                  <h5 className="text-xl font-bold mb-4">💌 Stay Updated</h5>
                  <p className="text-white/90 mb-6">
                    Get weekly insights on finance, technology, and money-saving tips.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60"
                    />
                    <button className="w-full px-4 py-3 bg-white text-piko-purple font-semibold rounded-xl hover:bg-white/90 transition-colors">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-piko-purple/5 to-piko-violet/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-piko-black mb-6">
              Ready to Start Saving on Transfers?
            </h2>
            <p className="text-xl text-piko-medium-grey mb-10 max-w-2xl mx-auto">
              Join over 500,000 users who trust PikoSend for fast, secure, and affordable money transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-piko-purple text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-piko-purple/90 hover:scale-105 hover:shadow-2xl">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white text-piko-purple border-2 border-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:bg-piko-purple/5">
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};