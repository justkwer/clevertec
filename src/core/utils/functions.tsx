import { RulesType } from '@core/types';

export const getDate = (str: string, options: Intl.DateTimeFormatOptions) =>
  new Date(str).toLocaleString('ru', options).replace(/\s*г\./, '');

export const searchRegExp = (str: string) => {
  const escapeRegExp = str.replace(/[[()\\]/g, '\\$&');

  return new RegExp(escapeRegExp, 'gi');
};

export const customValidate = (value: string, rules?: RulesType) => {
  const test = rules?.map((el) => el.regExp.test(value) || el.error);

  return test?.filter((el) => el !== true);
};

export const spanSeparator = (text?: string, searchText?: Array<string | true>) =>
  searchText?.map((separator) => {
    const regex = new RegExp(`(${separator})`, 'g');

    return text?.split(regex).map((el, index) => {
      const keys = index.toString();

      return regex.test(el) ? <span key={keys}>{el}</span> : el;
    });
  });
