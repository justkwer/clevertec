export const searchTextDef = 'Поиск книги или автора…';
export const localKeyText = 'text';
export const noRating = 'ещё нет оценок';

export const arrRating = [1, 2, 3, 4, 5];

export const detailedInfo = [
  ['Издательство', 'Год издания', 'Страниц', 'Переплёт', 'Формат'],
  ['Жанр', 'Вес', 'ISBN', 'Изготовитель'],
];

export const apiUrl = 'https://strapi.cleverland.by';

export const feedbackBtn = 'Оценить книгу';

export const error = 'Что-то пошло не так. Обновите страницу через некоторое время.';

export const cardDateOptions: Intl.DateTimeFormatOptions = {
  month: '2-digit',
  day: '2-digit',
};

export const feedbackDateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const errors = {
  empty: 'Поле не может быть пустым',
  login: 'Используйте для логина латинский алфавит и цифры',
  password: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  phone: 'В формате +375 (xx) xxx-xx-xx',
  mail: 'Введите корректный e-mail',
};

export const registrationForm = {
  title: 'Регистрация',
  steps: [
    {
      inputFirst: {
        name: 'login',
        title: 'Придумайте логин для входа',
        subTitle: errors.login,
        patterns: [
          { regExp: /[A-z]/, error: 'латинский алфавит' },
          { regExp: /\d/, error: 'цифры' },
        ],
        rules: {
          required: errors.empty,
          pattern: {
            value: /[A-z]+\d/,
            message: errors.login,
          },
        },
      },
      inputSecond: {
        name: 'password',
        title: 'Пароль',
        subTitle: errors.password,
        patterns: [
          { regExp: /[\D\w]{8,}/, error: 'не менее 8 символов' },
          { regExp: /^[A-Z]/, error: 'заглавной буквой' },
          { regExp: /\d/, error: 'цифрой' },
        ],
        rules: {
          required: errors.empty,
          pattern: {
            value: /^[A-Z][a-z]+\d/,
            message: errors.password,
          },
        },
      },
      buttons: {
        primary: 'следующий шаг',
        secondary: 'Есть учётная запись?',
        join: 'войти',
      },
    },
    {
      inputFirst: {
        name: 'firstName',
        title: 'Имя',
        rules: { required: errors.empty },
      },
      inputSecond: {
        name: 'lastName',
        title: 'Фамилия',
        rules: { required: errors.empty },
      },
      buttons: {
        primary: 'последний шаг',
      },
    },
    {
      inputFirst: {
        name: 'phone',
        title: 'Номер телефона',
        rules: {
          required: errors.empty,
          pattern: {
            value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/im,
            message: errors.phone,
          },
        },
      },
      inputSecond: {
        name: 'email',
        title: 'E-mail',
        rules: {
          required: errors.empty,
          pattern: {
            value: /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i,
            message: errors.mail,
          },
        },
      },
      buttons: {
        primary: 'зарегистрироваться',
      },
    },
  ],
};

export const authorizationForm = {
  title: 'Вход в личный кабинет',
  inputFirst: {
    name: 'login',
    title: 'Логин',
    rules: { required: errors.empty },
  },
  inputSecond: {
    name: 'password',
    title: 'Пароль',
    link: 'Забыли пароль?',
    rules: { required: errors.empty },
  },
  buttons: {
    primary: 'Вход',
    secondary: 'Нет учетной записи?',
    join: 'регистрация',
  },
};

export const recoveryForm = {
  bread: 'Вход в личный кабинет',
  title: 'Восстановления пароля',
  inputFirst: {
    name: 'email',
    title: 'Email',
    subTitle: 'На это email  будет отправлено письмо с инструкциями по восстановлению пароля',
    rules: { required: errors.empty },
  },
  buttons: {
    primary: 'Восстановить',
    secondary: authorizationForm.buttons.secondary,
    join: authorizationForm.buttons.join,
  },
};
