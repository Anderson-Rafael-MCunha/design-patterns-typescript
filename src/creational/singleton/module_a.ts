import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({'name':'Anderson', 'age': 28});
myDatabaseClassic.add({'name':'Luke', 'age': 3});
myDatabaseClassic.add({'name':'Maria', 'age': 75});
myDatabaseClassic.remove(2);
myDatabaseClassic.show();

export { myDatabaseClassic };