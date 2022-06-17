import { binarySearch } from './binarySearch';
import { quickSort } from './quickSort';

interface todoModel {
  name: string;
  description: string;
  id: number;
}

/*
    Form to edit the todo
*/

export const edit = () => {
  // Getting inputs
  const decEdit = document.querySelector(
    '#description-edit',
  ) as HTMLInputElement;
  const nameEdit = document.querySelector('#name-edit') as HTMLInputElement;
  //   Geting from localStorage
  const allTodos: todoModel[] = JSON.parse(localStorage.notes);
  const id = document.querySelector('#id') as HTMLInputElement;
  //   Searching
  const founded = binarySearch(allTodos, id.value);
  //   Deleting
  // @ts-ignore
  let todo: todoModel = allTodos[founded];

  todo = { ...todo, name: nameEdit.value, description: decEdit.value };
  // @ts-ignore
  allTodos.splice(founded.index, 1);
  const sorted = quickSort([...allTodos, todo]);
  //   Saving
  localStorage.notes = JSON.stringify(sorted);

  const modal = document.querySelector('#edit') as HTMLDivElement;
  modal.classList.toggle('hidden');
};
