export interface Skill {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  duration: string;
  icon: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  order: number;
}

export type Category = 'programming' | 'cloud' | 'devops' | 'data' | 'design' | 'security';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface UserProgress {
  completedLessons: string[];
  currentLesson: string | null;
  skillProgress: Record<string, number>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
