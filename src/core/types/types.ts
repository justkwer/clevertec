import { MouseEvent, MouseEventHandler } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BookItem, BookItems, Categories } from '@core/types';

export type SubPageProp = {
  title: string;
  paragraph: PageGeneratorProp[];
};

export type PageGeneratorProp = {
  item: string;
  id: string;
  paragraph?: PageGeneratorProp[];
};

export type FeedbackProp = {
  id: number;
  avatar: string;
  name: string;
  data: string;
  rating: number;
  text?: string;
};

export type SearchBarProp = {
  visible: boolean;
  setVisible: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

export type ButtonCircleProp = {
  isActive: boolean;
  dataTestId?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProp = {
  active?: boolean;
  typeButton?: 'submit';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type BookInfoProp = {
  img: BookItem['images'];
  name: BookItem['title'];
  author: BookItem['authors'];
  booking: BookItem['booking'];
  about: BookItem['description'];
};

export type FormState = {
  text: string;
  filter: boolean;
  list: boolean;
};

export type BooksState = {
  books?: BookItems[];
  categories?: Categories[];
  error: boolean;
  loading: boolean;
};

export type BookState = {
  book: BookItem | object;
};

export type BookContentProp = {
  publish: BookItem['publish'];
  pages: BookItem['pages'];
  cover: BookItem['cover'];
  weight: BookItem['weight'];
  format: BookItem['format'];
  ISBN: BookItem['ISBN'];
  producer: BookItem['producer'];
  categories: BookItem['categories'];
  issueYear: BookItem['issueYear'];
};

export type DateOptions = {
  day: 'numeric' | '2-digit' | string;
  month: 'long' | '2-digit' | string;
  year?: 'numeric' | string;
};

export type AuthState = {
  error: FormMessageProp | undefined;
};

export type RegistrationInputProp = {
  inputProp: {
    name: string;
    title: string;
    subTitle?: string;
    link?: string;
    patterns?: RulesType;
    rules: {
      required: string;
      pattern?: {
        value: RegExp;
        message: string;
      };
    };
  };
  hidden?: boolean;
  isLink?: boolean;
  inputForm: {
    register: UseFormRegister<InputValues>;
    errors: FieldErrors;
  };
};

export type InputValues = {
  identifier?: string;
  login?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

export type InputProp = {
  inputProp: RegistrationInputProp['inputProp'];
  type: string;
  register: RegistrationInputProp['inputForm']['register'];
};

export type ButtonEyeProp = {
  hidden: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type RegistrationButtonsProp = {
  stepButton: string;
  subTitle?: string;
  subButton?: string;
  redirect: string;
};

export type RulesType = Array<{
  regExp: RegExp;
  error: string;
}>;

export type FormMessageProp = {
  title: string;
  subTitle: string;
  button: {
    title: string;
    url: string;
  };
};
