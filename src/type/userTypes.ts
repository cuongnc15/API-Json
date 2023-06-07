export interface IUser {
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
          lat: string,
          lng: string,
        }
    }
    id: number,
    name: string,
    username: string,
    email: string,
    phone:  number,
    website:    string,
    company: {
    name: string,
        catchPhrase:  string,
        bs:  string,
    }
}

export interface IRequestUpdate {
    email: string,
    telephone:  string,
    website:    string,  
}

export interface IReponseUpdate extends IRequestUpdate{
    id: number,
}

