"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockOnContainer = exports.getAmountContainer = exports.getFruits = void 0;
const fruits = [
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
function newFruits() {
    const uniqueFruits = fruits.reduce((acc, current) => {
        const exists = acc.find((fruit) => fruit.fruitId === current.fruitId);
        if (!exists) {
            acc.push(current);
        }
        return acc;
    }, []);
    return uniqueFruits;
}
/**
 * Get Fruits
 * @returns string
 */
function getFruits() {
    return newFruits()
        .map((fruits) => fruits.fruitName)
        .join(',');
}
exports.getFruits = getFruits;
/**
 * Get Amount FruitType and group FruitName by FruitType
 * @returns string
 */
function getAmountContainer() {
    const containers = {};
    newFruits().forEach((fruit) => {
        if (!containers[fruit.fruitType]) {
            containers[fruit.fruitType] = { fruits: [] };
        }
        containers[fruit.fruitType].fruits.push(fruit.fruitName);
    });
    return `\nJumlah Wadah: ${Object.keys(containers).length} (${Object.keys(containers)}),\nBuah di Masing-Masing Wadah: \n${JSON.stringify(containers, null, 2)}`;
}
exports.getAmountContainer = getAmountContainer;
/**
 * Get all stock fruit in container
 * @returns string
 */
function getStockOnContainer() {
    const containers = {};
    newFruits().forEach((fruit) => {
        if (!containers[fruit.fruitType]) {
            containers[fruit.fruitType] = { totalStock: 0 };
        }
        containers[fruit.fruitType].totalStock += fruit.stock;
    });
    return `\nTotal stock buah di Masing-Masing Wadah: \n${JSON.stringify(containers, null, 2)}`;
}
exports.getStockOnContainer = getStockOnContainer;
