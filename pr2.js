function calculateTriangle(side1, side2, side3) {
    // Проверка на существование треугольника
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      // Определение вида треугольника
      let type;
      if (side1 === side2 && side2 === side3) {
        type = "равносторонний";
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        type = "равнобедренный";
      } else {
        type = "разносторонний";
      }
  
      // Вычисление площади треугольника по формуле Герона
      const semiPerimeter = (side1 + side2 + side3) / 2;
      const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
  
      console.log(`Треугольник ${type}; Площадь которого: ${area}`);
    } 
    else {
      console.log("Треугольник с такими сторонами не существует");
    }
  }
  
  // Пример использования
  const result = calculateTriangle(5, 5, 5);