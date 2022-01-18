interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (this._instance === null) {
      console.log('aqui');
      this._instance = new MyDatabaseClassic();
    }
    return this._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
