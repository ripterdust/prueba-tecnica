/*
    Binary Search
    @param arr : TodoModel
    @param id : number

    @return TodoModel[]
*/
interface todoModel {
  name: string;
  description: string;
  id: number;
}

interface foundTodo {
  found: boolean;
  index?: number;
}
export const binarySearch = (arr: todoModel[], search: number): foundTodo => {
  let start: number = 0;
  let end = Math.round(arr.length / 2);

  while (start <= end) {
    const midd = Math.round((start + end) / 2);
    const middElement: todoModel = arr[midd];
    const todoId: number = middElement.id;

    if (todoId === search) return { index: midd, found: true };
    if (search < todoId) end = midd - 1;
    if (search > todoId) start = midd + 1;
  }
  return { found: false };
};
