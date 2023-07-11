import { createContext, useContext } from "react";

/\*\* CONTEXT API

- CREATECONTEXT : STORE THE APPLICATION DATA.
- PROVIDER: PROVIDE THE DATA FROM THE STORE WHO NEEDS IT.
- CONSUMER: INSTEAD OF CONSUMER WE USE USECONTEXT HOOK
-
- USECONTEXT REACT HOOK, USED IN CONTEXT API TO CONSUME
-
- THE CONTEXT STATE OR OBJECT.
- \*/

// CREATING CUSTOM TYPES USING TYPE DECLARATIONS.

export type TodosProviderProps = {
children: ReactNode;
};

export type Todo = {
id: string;
task: string;
completed: boolean;
createdAt: Date;
};

export type TodosContext = {
todos: Todo[];
handleAddToDo: (task: string) => void;
};

// createContext.
export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
const [todos, setTodos] = useState<Todo[]>([]);

const handleAddToDo = (task: string) => {
setTodos((prev) => {
const newTodos:Todo[] = [
{
id: Math.random().toString(),
task: task,
completed: false,
createdAt: new Date(),
},
...prev,
];
return newTodos;
});
};

return (
<todosContext.Provider value={{ todo, handleAddToDo }}>
{children}
</todosContext.Provider>
);
};

// consumer customhook useTodos

export const useTodos = () => {
const todosConsumer = useContext(todosContext);

if (!todosConsumer) {
throw new Error("useTodos used outside of Provider");
}

return todosConsumer;
};
