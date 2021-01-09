// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.ADMIN) {
  console.log('管理者ユーザ')
}