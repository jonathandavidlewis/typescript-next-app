type StateCode =
  | "AL"
  | "AK"
  | "AZ"
  | "AR"
  | "CA"
  | "CO"
  | "CT"
  | "DE"
  | "FL"
  | "GA"
  | "HI"
  | "ID"
  | "IL"
  | "IN"
  | "IA"
  | "KS"
  | "KY"
  | "LA"
  | "ME"
  | "MD"
  | "MA"
  | "MI"
  | "MN"
  | "MS"
  | "MO"
  | "MT"
  | "NE"
  | "NV"
  | "NH"
  | "NJ"
  | "NM"
  | "NY"
  | "NC"
  | "ND"
  | "OH"
  | "OK"
  | "OR"
  | "PA"
  | "RI"
  | "SC"
  | "SD"
  | "TN"
  | "TX"
  | "UT"
  | "VT"
  | "VA"
  | "WA"
  | "WV"
  | "WI"
  | "WY";

type FormattedAddress = `${string}, ${string}, ${string} ${number}`;

type FullName = `${string} ${string}`;

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: number;
};

interface User {
  name: string;
  age: number;
  email: string;
  address: Address;
}

class AddressImpl implements Address {
  constructor(
    public street: string,
    public city: string,
    public state: StateCode,
    public zipCode: number
  ) {}

  getFormattedAddress(): FormattedAddress {
    return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
  }
}

type UserFetcher = (userId: number) => Promise<User>;

export interface UserCardProps {
  user: User;
}

export interface UserCardListProps {
  users: User[];
}
