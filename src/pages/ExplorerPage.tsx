import { useState, useMemo } from 'react';
import { Clock, Filter } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SearchBar } from '../components/SearchBar';
import { ProgressBar } from '../components/ProgressBar';
import { skills, categories } from '../data/skills';
import { Skill, Category } from '../types';
import { storage } from '../utils/storage';

interface ExplorerPageProps {
  onSelectSkill: (skill: Skill) => void;
}

export function ExplorerPage({ onSelectSkill }: ExplorerPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesSearch =
        skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Skills</h1>
          <p className="text-xl text-gray-600">
            Discover lessons across programming, cloud, DevOps, data, design, and security.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onSearch={setSearchQuery}
            className="mb-6"
          />

          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-700 font-medium whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span>Filter:</span>
            </div>

            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No skills found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onClick={() => onSelectSkill(skill)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SkillCard({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  const IconComponent = (Icons as any)[skill.icon] || Icons.BookOpen;
  const progress = storage.getSkillProgress(skill.id, skill.lessons.length);

  return (
    <Card hover onClick={onClick} className="group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
            <IconComponent className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex gap-2">
            <Badge variant="category" category={skill.category}>
              {skill.category}
            </Badge>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {skill.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {skill.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{skill.duration}</span>
          </div>
          <Badge variant="difficulty" difficulty={skill.difficulty}>
            {skill.difficulty}
          </Badge>
        </div>

        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold text-blue-600">{progress}%</span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        )}
      </div>
    </Card>
  );
}
