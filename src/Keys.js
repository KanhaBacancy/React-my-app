import React from 'react';

function Keys() {
  const employees = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Doe', age: 24 },
  ];
  const listItems = employees.map((employee, index) =>
    <li key={index}>{employee.name} - {employee.age}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default Keys;


