type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: 'IMPORT' | 'LOCAL';
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];

/**
 * New data fruits without ducplicate data by ID
 * @returns IFruit
 */
function newFruits(): IFruit[] {
  const uniqueFruits: IFruit[] = fruits.reduce(
    (acc: IFruit[], current: IFruit) => {
      const exists = acc.find((fruit) => fruit.fruitId === current.fruitId);
      if (!exists) {
        acc.push(current);
      }
      return acc;
    },
    []
  );
  return uniqueFruits;
}

/**
 * Get Fruits
 * @returns string
 */
function getFruits(): string {
  return newFruits()
    .map((fruits) => fruits.fruitName)
    .join(',');
}

/**
 * Get Amount FruitType and group FruitName by FruitType
 * @returns string
 */
function getAmountContainer(): string {
  const containers: {
    [key: string]: { fruits: string[] };
  } = {};
  newFruits().forEach((fruit) => {
    if (!containers[fruit.fruitType]) {
      containers[fruit.fruitType] = { fruits: [] };
    }
    containers[fruit.fruitType].fruits.push(fruit.fruitName);
  });
  return `\nJumlah Wadah: ${Object.keys(containers).length} (${Object.keys(
    containers
  )}),\nBuah di Masing-Masing Wadah: \n${JSON.stringify(containers, null, 2)}`;
}

/**
 * Get all stock fruit in container
 * @returns string
 */
function getStockOnContainer(): string {
  const containers: {
    [key: string]: { totalStock: number };
  } = {};
  newFruits().forEach((fruit) => {
    if (!containers[fruit.fruitType]) {
      containers[fruit.fruitType] = { totalStock: 0 };
    }
    containers[fruit.fruitType].totalStock += fruit.stock;
  });

  return `\nTotal stock buah di Masing-Masing Wadah: \n${JSON.stringify(
    containers,
    null,
    2
  )}`;
}

export { getFruits, getAmountContainer, getStockOnContainer };
