import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
}

const STORAGE_KEY = 'enrolledCourseIds';

const loadSavedIds = (): number[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [1, 2];
  } catch {
    return [1, 2];
  }
};

const saveIds = (ids: number[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Error persisting state to localStorage', e);
  }
};

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: loadSavedIds()
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,
  on(EnrollmentActions.enrollInCourse, (state, { courseId }) => {
    const newIds = state.enrolledCourseIds.includes(courseId)
      ? state.enrolledCourseIds
      : [...state.enrolledCourseIds, courseId];
    saveIds(newIds);
    return { ...state, enrolledCourseIds: newIds };
  }),
  on(EnrollmentActions.unenrollFromCourse, (state, { courseId }) => {
    const newIds = state.enrolledCourseIds.filter(id => id !== courseId);
    saveIds(newIds);
    return { ...state, enrolledCourseIds: newIds };
  }),
  on(EnrollmentActions.setEnrolledCourses, (state, { courseIds }) => {
    saveIds(courseIds);
    return { ...state, enrolledCourseIds: courseIds };
  })
);
