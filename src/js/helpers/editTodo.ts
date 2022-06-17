/*

    Edit a todo
    @param e : Event
*/
export const editTodo = (e: Event) => {
  const editModal = document.querySelector('#edit') as HTMLDivElement;
  editModal.classList.toggle('hidden');
  // @ts-ignore
  const nameTodo: HTMLDivElement = e.target;
  // @ts-ignore
  const id: number = nameTodo.getAttribute('todoid');
  const title = document.querySelector(`#title-${id}`) as HTMLInputElement;
  const description = document.querySelector(
    `#description-${id}`,
  ) as HTMLInputElement;
  // @ts-ignore
  document.querySelector('#name-edit').value = title.innerHTML;
  const desc = document.querySelector('#description-edit');
  // @ts-ignore
  desc.value = description.innerHTML;
};
