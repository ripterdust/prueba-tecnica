interface saveParamsModel {
  name: string;
  description: string;
}

interface todoModel {
  name: string;
  description: string;
  id: number;
}

/*
  Save function
  @param object : saveParamsModel
  @return boolean
*/
export const save = ({ name, description }: saveParamsModel) => {
  const elements = localStorage.notes;

  if (!elements) {
    const todo: todoModel = {
      name,
      description,
      id: Date.now(),
    };

    localStorage.notes = JSON.stringify([todo]);
    return true;
  }
  let data: todoModel[] = JSON.parse(elements);
  data = [
    ...data,
    {
      name,
      description,
      id: Date.now(),
    },
  ];

  localStorage.notes = JSON.stringify(data);
  return false;
};
