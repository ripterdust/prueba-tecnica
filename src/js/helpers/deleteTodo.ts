/*
    Delete funciton
    @param id: number
*/

import { quickSort } from './quickSort';

interface todoModel {
  name: string;
  description: string;
  id: number;
}

export const deleteTodo = (id: number) => {
  console.log(id);

  const array: todoModel[] = JSON.parse(localStorage.notes);
  const sorted: todoModel[] = quickSort(array);
  console.log(sorted);
};
