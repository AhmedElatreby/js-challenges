function analyzeCarMileage(cars) {
  const totalMillages = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMillages / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (highest.mileage > car.mileage ? highest : car),
    cars[0]
  );

  const lowestMillages = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: +averageMileage.toFixed(2),
    highestMileageCar,
    lowestMileageCar: lowestMillages,
    totalMillages,
  };
}

module.exports = analyzeCarMileage;
