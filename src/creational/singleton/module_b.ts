import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const mydatabase1 = MyDatabaseClassic.instance;
mydatabase1.add({ age: 22, name: 'Pedro' });
mydatabase1.add({ age: 23, name: 'Hiago' });
mydatabase1.add({ age: 24, name: 'Samuel' });
mydatabase1.remove(1);
mydatabase1.show();
