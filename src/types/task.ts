export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export type TaskId = Task["id"];
