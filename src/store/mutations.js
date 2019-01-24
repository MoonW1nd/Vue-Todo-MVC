/**
 * @description Добавление todo в todo лист
 * @param {State} state - глобальный стейт приложения
 * @param {Object} payload - объект задачи
 */
export function addTodo (state, payload) {
  state.todos = [...state.todos, payload]
}

/**
 * @description Удаление todo из todo листа
 * @param {State} state - глобальный стейт приложения
 * @param {Object} payload - todo id
 */
export function removeTodo (state, payload) {
  state.todos = state.todos.filter(todo => todo.id !== payload)
}

/**
 * @description Переключение состояние todo
 * @param {State} state - глобальный стейт приложения
 * @param {Object} payload - todo id
 */
export function toggleOpen (state, payload) {
  const todo = state.todos.filter(todo => todo.id === payload)[0]
  todo.isClosed = !todo.isClosed
}
