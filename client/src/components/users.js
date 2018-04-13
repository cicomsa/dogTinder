const usersArray = [
  {name: 'wouter', likes: 1},
  {name: 'henk', likes: 5},
  {name: 'mimi', likes: 6},
  {name: 'arno', likes: 8},
  {name: 'jan', likes: 2},
  {name: 'piet', likes: 3},
  {name: 'abbas', likes: 9},
  {name: 'ioana', likes: 10},
  {name: 'gersom', likes: 4},
  {name: 'emeline', likes: 7},
  {name: 'david', likes: 9}

]

export const usersSorted = usersArray.sort((a, b) => b.likes - a.likes)
