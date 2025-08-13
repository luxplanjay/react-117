export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface NewTaskData {
  text: string;
}

export interface TaskUpdateData {
  id: string;
  text?: string;
  completed?: boolean;
}

export type SortOrder = "asc" | "desc";
