import { MyDatabaseClassic } from './db/my-database-classic';

const mydatabase1 = MyDatabaseClassic.instance;
mydatabase1.add({ age: 22, name: 'Maria' });
mydatabase1.add({ age: 23, name: 'Jorge' });
mydatabase1.add({ age: 24, name: 'Joaquina' });
mydatabase1.remove(1);
