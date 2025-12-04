import { UserProgress } from '../types';

const STORAGE_KEY = 'skillforge_progress';

export const storage = {
  getProgress(): UserProgress {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }

    return {
      completedLessons: [],
      currentLesson: null,
      skillProgress: {},
    };
  },

  saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  },

  completeLesson(lessonId: string, skillId: string): void {
    const progress = this.getProgress();

    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }

    progress.currentLesson = lessonId;

    const completedInSkill = progress.completedLessons.filter(id =>
      id.startsWith(skillId.split('-')[0])
    ).length;

    progress.skillProgress[skillId] = completedInSkill;

    this.saveProgress(progress);
  },

  getSkillProgress(skillId: string, totalLessons: number): number {
    const progress = this.getProgress();
    const completed = progress.skillProgress[skillId] || 0;
    return Math.round((completed / totalLessons) * 100);
  },

  isLessonCompleted(lessonId: string): boolean {
    const progress = this.getProgress();
    return progress.completedLessons.includes(lessonId);
  },

  clearProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
