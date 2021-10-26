import { promises as fsp } from 'fs';

type ItemType = {
  id: string,
  title: string,
}

const fileName = 'category.json';
const filePath = `${__dirname}/${fileName}`;

const readFileStorage = async ():Promise<ItemType[]> => {
  let list:ItemType[] = [];

  try {
    const contents = await fsp.readFile(filePath, 'utf8');

    const parseList:ItemType[] = JSON.parse(contents);

    if(!Array.isArray(parseList)) {
      throw new TypeError();
    }

    list = parseList;
  } catch (e) {
    if(e instanceof Error) {
      console.warn(`There was error: ${e.message}`);
    }
  }

  return list;
}

const writeFileStorage = async (list: ItemType[]):Promise<void> => {
  const stringifiedList = JSON.stringify(list);

  await fsp.writeFile(filePath, stringifiedList, 'utf8')
}

export const getAllCategories = async ():Promise<ItemType[]> => readFileStorage();

export const getById = async (id: string): Promise<ItemType | undefined> => {
  const list = await readFileStorage();

  return list.find((item) => item.id === id);
}

export const createCategory = async (item: ItemType): Promise<ItemType | undefined> => {
  const list = await readFileStorage();

  list.push(item);

  await writeFileStorage(list);

  return item;
}

export const updateCategory = async (item: ItemType): Promise<ItemType> => {
  const list = await readFileStorage();

  const index = list.findIndex((el) => el.id === item.id);

  if( index !== -1) {
    throw new Error();
  }

  list[index] = item;

  await writeFileStorage(list);

  return item;
}

export const removeCategory = async (id: string): Promise<void> => {
  const list = await readFileStorage();

  const index = list.findIndex((el) => el.id === id);

  list.splice(index, 1);

  await writeFileStorage(list);
}
