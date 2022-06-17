/*
    Delete funciton
    @param id: number
*/

import { binarySearch } from './binarySearch';
import { quickSort } from './quickSort';

interface todoModel {
  name: string;
  description: string;
  id: number;
}

export const deleteTodo = (id: number) => {
  const array: todoModel[] = JSON.parse(localStorage.notes);
  const sorted: todoModel[] = quickSort(array);
  binarySearch(sorted, id);
};
