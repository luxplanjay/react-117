# Заняття 9 - Мутації з TanStack Query

<!-- GET (Read) POST (Create) DELETE (Delete) PATCH/PUT (Update) -->

<!-- GET (Read) =  axios.get -->
<!-- GET myapi.com/students Response [] -->
<!-- GET myapi.com/students/1 Response {} -->

<!-- POST (Create) = axios.post -->
<!-- POST myapi.com/students BODY {} Response {} -->

<!-- DELETE (Delete) = axios.delete -->
<!-- DELETE myapi.com/students/2 Response {} -->

<!-- PATCH/PUT (Update) = axios.patch  -->
<!-- PATCH myapi.com/students/2 BODY {} Response {} -->

## CRUD

- Postman
- https://62584f320c918296a49543e7.mockapi.io/tasks

## Мутації

- Видалення завдання
- Хук `useMutation`
  - mutationFn
  - onSuccess
  - onError
- Функція `mutate`

## Інвалідація кеша

- Хук `useQueryClient`
- Метод `invalidateQueries`

## Практика

- Створення завдання через форму в модальному вікні
- Редагування завдання. Зміна стану completed через чекбокс
