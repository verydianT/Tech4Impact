import { AddTodo } from '../components/helper';
import { Add } from '../Math';

test('Should add todo to the list', () => {
  // Arrange
  const defaultToDo = [{
          id: 1,
          name: 'Learn JSX',
          isComplete: false,
      },
      {
          id: 2,
          name: 'Build awasome react app',
          isComplete: false,
      },
      {
          id: 3,
          name: 'Ship it',
          isComplete: false,
      }
  ];
  const baruTodoList = {
      id: 3,
      name: "Learn login",
      isComplete: false,
  };
  const experied = [baruTodoList, ...defaultToDo]
  const expectedTrue = JSON.stringify(experied)

  // Act
  const actual = AddTodo(defaultToDo, baruTodoList)
  const result = JSON.stringify(actual)
  
  // Assert
  expect(result).toBe(expectedTrue)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const defaultToDo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awesome react app',
    isComplete: false,  
  },
];

  const newToDo = {
    id: 3,
    name: "Learn login",
    isComplete: false,
  };

  const expectedToDo = [{
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awesome react app',
      isComplete: false,  
    },
  ];

  // Act
  AddTodo(defaultToDo, newToDo)
  const actualToDo =  defaultToDo
  const nextToDo = JSON.stringify(expectedToDo) === JSON.stringify(actualToDo)

  // Assert
  expect(true).toBe(nextToDo)
})