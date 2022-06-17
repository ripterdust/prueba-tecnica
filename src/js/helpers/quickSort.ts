interface todoModel {
  name: string;
  description: string;
  id: number;
}
export const quickSort = (array: todoModel[]): todoModel[] => {
  if (array.length === 0) return [];

  const midd: number = Math.floor(array.length / 2);
  const pivot: todoModel = array[midd];
  const pivotId: number = pivot.id;

  array.map((todo: todoModel) => {
    if (todo.id !== pivotId) {
      console.log('hola');
    }

    return true;
  });

  return [{ name: 'hola', description: 'hola', id: 13 }];
};
