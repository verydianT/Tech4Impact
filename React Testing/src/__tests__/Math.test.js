import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 3;
  const b = 5;
  const result = 8;

  // Act
  const actual = Add(a, b);

  // Assert
  expect(actual).toBe(result)
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 8;
  const b = 4;
  const result = 4;

  // Act
  const actual = Substract(a, b);

  // Assert
  expect(actual).toBe(result)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const result =25;

  // Act
  const actual = Multiplication(a, b);

  // Assert
  expect(actual).toBe(result)
})