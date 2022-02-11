/*  Как работает принцип работы отлова ошибок с помощью throw, try, catch 
с учетом вызова ряда функций?*/

// Выполняется код внутри блока try. Если нет ошибок, блок catch игнорируется. 
// Если есть ошибка, то выполнение блока try прерывается и выполняется catch с переменной error,
//  которая указываeт, какая ошибка произошла. При использовании try catch наш код не падает, 
//  обрабатывается ошибка и код выполняется дальше. С помощью оператора throw мы используем 
//  конструктор new Error и создаём ошибку.


/*  Отличие instanceOf от typeof

typeof передает тип данных, а instanceof вернёт true или fslse , проверяет,
 принадлежит ли object определенному классу с учётом наследования, присутствует ли object в цепочке прототипов*/