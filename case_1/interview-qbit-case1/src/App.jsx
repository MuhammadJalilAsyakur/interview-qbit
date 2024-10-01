import React from 'react';

const fruits = [
  { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
  { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
  { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
  { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
  { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
  { fruitId: 5, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
  { fruitId: 5, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
];

const FruitApp = () => {
  const fruitNames = fruits.map(fruit => fruit.fruitName);

  const importFruits = fruits.filter(fruit => fruit.fruitType === 'IMPORT');
  const localFruits = fruits.filter(fruit => fruit.fruitType === 'LOCAL');

  const totalImportStock = importFruits.reduce((acc, fruit) => acc + fruit.stock, 0);
  const totalLocalStock = localFruits.reduce((acc, fruit) => acc + fruit.stock, 0);

  return (
    <div>
      <h1>Inventaris Buah</h1>
      <h2>1. Buah yang dimiliki Andi</h2>
      <ul>
        {fruitNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      
      <h2>2. Wadah yang dibutuhkan</h2>
      <p>Jumlah wadah: 2</p>
      <p>IMPORT: {importFruits.map(fruit => fruit.fruitName).join(', ')}</p>
      <p>LOCAL: {localFruits.map(fruit => fruit.fruitName).join(', ')}</p>

      <h2>3. Total stok per wadah</h2>
      <p>Total stok IMPORT: {totalImportStock}</p>
      <p>Total stok LOCAL: {totalLocalStock}</p>
    </div>
  );
};

export default FruitApp;
