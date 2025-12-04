import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.state";

const getCoursesState = createFeatureSelector<CoursesState>('courses');

const getCourses = createSelector(getCoursesState, (state: CoursesState) => state.courses);