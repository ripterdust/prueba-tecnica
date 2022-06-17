/*
  Sort function
  @param array : todoModel
*/

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

  let lArr: todoModel[] = [];
  let rArr: todoModel[] = [];

  array.map((todo: todoModel) => {
    if (todo.id === pivotId) return true;
    if (todo.id < pivotId) return lArr.push(todo);

    return rArr.push(todo);
  });

  lArr = quickSort(lArr);
  rArr = quickSort(rArr);

  return [...lArr, pivot, ...rArr];
};
