import { ArrowRight, BookOpen, Zap, Target, Users, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { testimonials, categories } from '../data/skills';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-2xl">
            <BookOpen className="h-16 w-16 text-blue-600" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Master Technical Skills
          <br />
          <span className="text-blue-600">One Lesson at a Time</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          SkillForge delivers AI-generated, bite-sized lessons designed for busy professionals.
          Learn programming, cloud, DevOps, data science, and more at your own pace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => onNavigate('explore')}
            className="group"
          >
            Start Learning
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <StatCard number="50+" label="Skills" />
          <StatCard number="200+" label="Lessons" />
          <StatCard number="10k+" label="Learners" />
          <StatCard number="4.9" label="Rating" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Learning',
      description: 'Short, focused lessons that fit into your busy schedule. Learn in 15-minute sessions.',
    },
    {
      icon: Target,
      title: 'Practical Content',
      description: 'Real-world examples and production-ready code you can use immediately.',
    },
    {
      icon: BookOpen,
      title: 'AI-Generated',
      description: 'Fresh, relevant content generated to match current industry best practices.',
    },
    {
      icon: Users,
      title: 'Self-Paced',
      description: 'Learn at your own speed. No pressure, no deadlines. Just steady progress.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why SkillForge?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The modern way to learn technical skills, designed for professionals who want results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of technical skills across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              hover
              className="p-6 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-gray-600">{category.count} skills available</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Developers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals advancing their careers with SkillForge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Join SkillForge today and take the first step towards mastering new technical skills.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => onNavigate('explore')}
          className="bg-white text-blue-600 hover:bg-gray-50 shadow-xl"
        >
          Browse Skills
          <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
