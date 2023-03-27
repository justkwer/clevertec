export interface BookItems {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image:
    | {
        url: string;
      }
    | undefined;
  categories: string[];
  id: number;
  booking: BookingProp | null;
  delivery: DeliveryProp | null;
  histories: HistoriesProp[] | null;
}

export interface BookItem {
  id: number;
  title: string;
  issueYear: string;
  rating: number | null;
  authors: string[];
  categories: string[];
  description: string;
  publish: string;
  images: Array<{
    url: string;
  }>;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  comments: CommentsProp[] | null;
  booking: BookingProp | null;
  delivery: DeliveryProp | null;
  histories: HistoriesProp[] | null;
}

export interface Categories {
  name: string;
  path: string;
  id: number;
}

type BookingProp = {
  id: number;
  order: boolean;
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
};

type HistoriesProp = {
  id: number;
  userId: number;
};

type DeliveryProp = {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
};

export type CommentsProp = {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
};

export interface RegistryRequest {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface RegisterResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
}

export interface RegisterError {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
}

export interface AuthRequest {
  identifier: string;
  password: string;
}

export interface PasswordResetRequest {
  password: string;
  passwordConfirmation: string;
  code: string;
}
