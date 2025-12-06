import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Users, FileText, BarChart3, MessageSquare, Zap, Shield } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Complete Website',
      description: 'Your retreat brand deserves a proper digital home with beautiful, responsive design.',
      image: '/assets/feature-booking-english.jpg',
    },
    {
      icon: Users,
      title: 'Booking & Payments',
      description: 'Secure registration, Stripe payments, confirmations, and automated reminders.',
      image: '/assets/feature-participants.jpg',
    },
    {
      icon: FileText,
      title: 'CRM & Communication',
      description: 'Manage leads, updates, and waitlists - all inside one integrated system.',
      image: '/assets/feature-documents.jpg',
    },
    {
      icon: BarChart3,
      title: 'Landing Pages',
      description: 'Optimized high-converting pages for each retreat with beautiful layouts.',
      image: '/assets/feature-analytics-english.jpg',
    },
    {
      icon: MessageSquare,
      title: 'Marketing Engine',
      description: 'AI-powered content creation, SEO optimization, outreach, and advertising tools.',
      image: '/assets/feature-communication.jpg',
    },
    {
      icon: Zap,
      title: 'Full Automation',
      description: 'Let the system handle operations so you can focus on transformative experiences.',
      image: '/assets/feature-automation.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/favicon.png" 
                alt="RetreatsOS Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900">RetreatsOS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Retreats</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              What RetreatsOS Gives You
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Everything you need to create, manage, and grow your retreat business
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-6">
                  <div className="w-full">
                    <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-700" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be the first to know when RetreatsOS launches. Join our waitlist and get early access to transform your retreat business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                Notify me
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to receive emails from RetreatsOS.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/favicon.png" 
                  alt="RetreatsOS Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-semibold text-gray-900">RetreatsOS</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The operating system for retreat creators. Transform your vision into reality with clarity, growth, and effortless execution.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Templates</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Integrations</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Contact</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Support</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2024 RetreatsOS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}