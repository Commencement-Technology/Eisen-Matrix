/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  aboutModal: undefined;
  projectEditModal: { projectKey: string; title: string };
  projectCreateModal: undefined;
  taskCreateModal: { key: string };
  taskEditModal: {
    projectKey: string;
    matrixKey: 1 | 2 | 3 | 4;
    taskKey: string;
    title: string;
  };
  projectDetail: { key: string; title: string };
  taskList: { projectKey: string; matrixKey: 1 | 2 | 3 | 4 };
  taskDetail: {
    title: string;
    projectKey: string;
    matrixKey: 1 | 2 | 3 | 4;
    taskKey: string;
  };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export interface TaskItem {
  title: string;
  emoji: string;
  description: string;
  category: string;
  urgency: number;
  importance: number;
  dueDate: Date;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Project {
  title: string;
  emoji: string;
  description: string;
  isCompleted: boolean;
  dueDate: Date;
  createdAt: Date;
  updatedAt?: Date;
  tasks: {
    //   * task priority Table
    //   * Urgent -> 4
    //   * Important -> 3
    //   * Delegate -> 2
    //   * Dump -> 1
    1: { [key: string]: TaskItem };
    2: { [key: string]: TaskItem };
    3: { [key: string]: TaskItem };
    4: { [key: string]: TaskItem };
  };
}

type PriorityTable = 1 | 2 | 3 | 4;

export interface EinsenMatrixState {
  data: {
    [key: string]: Project;
  };
  createProject: (data: Project & { key: string }) => void;
  deleteProject: (data: { key: string }) => void;
  updateProject: (data: Project & { key: string }) => void;
  toggleCompleteProject: (data: { projectKey: string }) => void;
  addTask: (
    data: {
      projectKey: string;
      priorityKey: PriorityTable;
      taskKey: string;
    } & TaskItem
  ) => void;
  updateTask: (
    data: {
      projectKey: string;
      priorityKey: PriorityTable;
      taskKey: string;
    } & TaskItem
  ) => void;
  deleteTask: (data: {
    projectKey: string;
    priorityKey: PriorityTable;
    taskKey: string;
  }) => void;
  toggleTaskComplete: (data: {
    projectKey: string;
    priorityKey: PriorityTable;
    taskKey: string;
  }) => void;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}
