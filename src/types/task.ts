export interface Task {
    id: number;
    title: string;
    priority: "Low" | "Medium" | "High";
    energy: "Low" | "Normal" | "High";
    completed: boolean;
}