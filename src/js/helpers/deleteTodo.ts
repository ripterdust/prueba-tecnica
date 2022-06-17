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
  const founded = binarySearch(sorted, id);
  // @ts-ignore
  sorted.splice(founded.index);

  localStorage.notes = JSON.stringify(sorted);
};
