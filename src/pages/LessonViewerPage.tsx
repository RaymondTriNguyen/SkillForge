import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Circle, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { Skill, Lesson } from '../types';
import { storage } from '../utils/storage';

interface LessonViewerPageProps {
  skill: Skill;
  onBack: () => void;
}

export function LessonViewerPage({ skill, onBack }: LessonViewerPageProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const progress = storage.getProgress();
    setCompletedLessons(progress.completedLessons);
  }, []);

  const currentLesson = skill.lessons[currentLessonIndex];
  const progress = storage.getSkillProgress(skill.id, skill.lessons.length);

  const handleCompleteLesson = () => {
    storage.completeLesson(currentLesson.id, skill.id);
    setCompletedLessons([...completedLessons, currentLesson.id]);

    if (currentLessonIndex < skill.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handleGenerateLesson = () => {
    alert('AI Lesson Generation is a mocked feature. In production, this would generate a new lesson based on your learning patterns!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Skills</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{skill.title}</h1>
          <p className="text-gray-600 mb-4">{skill.description}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Course Progress</span>
              <span className="font-semibold text-blue-600">{progress}%</span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <LessonSidebar
              lessons={skill.lessons}
              currentLessonIndex={currentLessonIndex}
              completedLessons={completedLessons}
              onSelectLesson={setCurrentLessonIndex}
            />
          </div>

          <div className="lg:col-span-3">
            <Card className="p-8 mb-6">
              <LessonContent lesson={currentLesson} />
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCompleteLesson}
                disabled={completedLessons.includes(currentLesson.id)}
                className="flex-1"
              >
                {completedLessons.includes(currentLesson.id) ? (
                  <>
                    <CheckCircle className="inline-block mr-2 h-5 w-5" />
                    Completed
                  </>
                ) : (
                  <>
                    Mark as Complete
                    <ChevronRight className="inline-block ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={handleGenerateLesson}
                className="flex-1"
              >
                <Sparkles className="inline-block mr-2 h-5 w-5" />
                Generate Another Lesson
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonSidebar({
  lessons,
  currentLessonIndex,
  completedLessons,
  onSelectLesson,
}: {
  lessons: Lesson[];
  currentLessonIndex: number;
  completedLessons: string[];
  onSelectLesson: (index: number) => void;
}) {
  return (
    <Card className="p-4 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4">Lesson Outline</h3>

      <div className="space-y-2">
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isCurrent = index === currentLessonIndex;

          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(index)}
              className={`w-full text-left p-3 rounded-lg transition-all ${
                isCurrent
                  ? 'bg-blue-50 border-2 border-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">Lesson {lesson.order}</div>
                  <div
                    className={`text-sm font-medium ${
                      isCurrent ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {lesson.title}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

function LessonContent({ lesson }: { lesson: Lesson }) {
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLanguage = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"
            >
              <code className={`language-${codeBlockLanguage}`}>
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          );
          codeBlockContent = [];
          codeBlockLanguage = '';
        } else {
          codeBlockLanguage = line.slice(3).trim();
        }
        inCodeBlock = !inCodeBlock;
      } else if (inCodeBlock) {
        codeBlockContent.push(line);
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-4">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.slice(2, -2);
        if (text.includes(':')) {
          const [bold, rest] = text.split(':');
          elements.push(
            <p key={index} className="mb-3 leading-relaxed">
              <strong className="font-semibold text-gray-900">{bold}:</strong>
              {rest}
            </p>
          );
        } else {
          elements.push(
            <p key={index} className="mb-3 leading-relaxed">
              <strong className="font-semibold text-gray-900">{text}</strong>
            </p>
          );
        }
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-6 mb-2 text-gray-700 leading-relaxed">
            {line.slice(2)}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-2" />);
      } else if (line.includes('`')) {
        const parts = line.split('`');
        elements.push(
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <code
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600"
                >
                  {part}
                </code>
              ) : (
                part
              )
            )}
          </p>
        );
      } else {
        elements.push(
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(lesson.content)}
    </div>
  );
}
