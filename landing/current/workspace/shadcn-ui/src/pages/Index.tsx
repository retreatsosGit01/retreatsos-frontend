import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, DollarSign, Target, Zap, Shield } from 'lucide-react';

const categories = [
  'All Templates',
  'Yoga',
  'Meditation & Mindfulness',
  'Surf & Adventure',
  'Corporate Wellness',
  'Couples',
  'Women\'s Retreats',
  'Spiritual',
  'Creativity',
  'Detox & Longevity'
];

const templates = [
  {
    id: 1,
    name: '7-Day Surf & Soul Retreat',
    tagline: 'Flow, Ocean, Community',
    category: 'Surf & Adventure',
    image: '/assets/surf-adventure-retreat-template.jpg',
    features: ['Daily flow included', 'Pricing model included', 'Marketing angle included'],
    description: 'Perfect blend of surfing adventure and mindful connection'
  },
  {
    id: 2,
    name: 'Yoga & Mindfulness Sanctuary',
    tagline: 'Peace, Practice, Presence',
    category: 'Yoga',
    image: '/assets/yoga-mindfulness-retreat-template.jpg',
    features: ['Complete daily schedule', 'Instructor guidelines', 'Guest journey map'],
    description: 'Transform your yoga practice into a transformative retreat experience'
  },
  {
    id: 3,
    name: 'Corporate Wellness Intensive',
    tagline: 'Productivity, Balance, Growth',
    category: 'Corporate Wellness',
    image: '/assets/corporate-wellness-retreat-template.jpg',
    features: ['Team building framework', 'ROI measurement tools', 'Executive presentation kit'],
    description: 'Elevate team performance through strategic wellness programming'
  },
  {
    id: 4,
    name: 'Couples Connection Retreat',
    tagline: 'Love, Growth, Intimacy',
    category: 'Couples',
    image: '/assets/couples-retreat-template.jpg',
    features: ['Relationship exercises', 'Private session templates', 'Communication frameworks'],
    description: 'Deepen relationships through guided connection experiences'
  },
  {
    id: 5,
    name: 'Women\'s Empowerment Weekend',
    tagline: 'Strength, Sisterhood, Success',
    category: 'Women\'s Retreats',
    image: '/assets/yoga-mindfulness-retreat-template_variant_1.jpg',
    features: ['Leadership workshops', 'Networking structure', 'Personal development path'],
    description: 'Inspire and empower women through transformative experiences'
  },
  {
    id: 6,
    name: 'Creative Flow Intensive',
    tagline: 'Art, Expression, Innovation',
    category: 'Creativity',
    image: '/assets/corporate-wellness-retreat-template_variant_1.jpg',
    features: ['Creative exercises', 'Artist collaboration guide', 'Portfolio development'],
    description: 'Unlock creative potential through structured artistic exploration'
  }
];

export default function TemplatesLibrary() {
  const [activeCategory, setActiveCategory] = useState('All Templates');
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  const filteredTemplates = activeCategory === 'All Templates' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Start With a Template.<br />
              <span className="text-blue-600">Build a Retreat Today.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Retreat templates built for creators who want clarity and momentum.<br />
              Choose from professionally-crafted retreat frameworks — Yoga, Mindfulness, Surf, Couples, Corporate Wellness and more.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Explore Templates
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Start Free
              </Button>
            </div>
          </div>
          
          {/* Floating Template Thumbnails */}
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="/assets/hero-retreat-templates-overview.jpg" 
              alt="Retreat Templates Overview"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  hoveredTemplate === template.id ? 'transform -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700">
                    {template.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {template.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {template.tagline}
                  </CardDescription>
                  <p className="text-sm text-slate-600 mt-2">
                    {template.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Block */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                More than designs —<br />
                <span className="text-blue-600">Real operational frameworks.</span>
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Not generic. Not fluffy. Each template comes from real retreat strategy built to convert, organize, and deliver a full guest journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Strategic Focus</h4>
                      <p className="text-sm text-slate-600">Built for specific outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Guest Psychology</h4>
                      <p className="text-sm text-slate-600">Designed for transformation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Complete Scheduling</h4>
                      <p className="text-sm text-slate-600">Every hour planned</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Pricing Logic</h4>
                      <p className="text-sm text-slate-600">Optimized for conversion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/template-breakdown-interface.jpg"
                alt="Template Breakdown Interface"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Example Template Breakdown */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Inside the <span className="text-blue-600">Yoga & Mindfulness Template</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how our templates provide complete operational frameworks, not just pretty designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center p-6">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Daily Flow</h3>
              <p className="text-sm text-slate-600">Morning–Evening rhythm</p>
            </Card>
            
            <Card className="text-center p-6">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Marketing Positioning</h3>
              <p className="text-sm text-slate-600">Calm, nature-driven, emotional release</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Audience</h3>
              <p className="text-sm text-slate-600">Beginners + intermediate</p>
            </Card>
            
            <Card className="text-center p-6">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Pricing Logic</h3>
              <p className="text-sm text-slate-600">Tiered early-bird</p>
            </Card>
            
            <Card className="text-center p-6">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Operational Checklist</h3>
              <p className="text-sm text-slate-600">Venue, meals, equipment, instructor cadence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust and Authority Block */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Templates crafted by <span className="text-blue-600">retreat strategists.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Every template is informed by 10+ years of industry expertise, real retreat creators, and wellness professionals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Research-based</h3>
              <p className="text-sm text-slate-600">Built on proven methodologies</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Guest Psychology</h3>
              <p className="text-sm text-slate-600">Designed for transformation</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Built for Execution</h3>
              <p className="text-sm text-slate-600">Ready to implement today</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Optimized for Conversion</h3>
              <p className="text-sm text-slate-600">Tested and refined</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Build your retreat in <span className="text-blue-600">hours, not months.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            RetreatsOS gives you a head start. Instead of creating your retreat from scratch, you begin with expert-crafted templates that provide structure, clarity and a complete guest experience blueprint.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Browse All Templates
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}