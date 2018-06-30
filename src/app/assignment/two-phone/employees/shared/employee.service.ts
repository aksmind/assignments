import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model'; 

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.employeeList = this.db.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee){
    this.employeeList.push({
      name: employee.name,
      phone: employee.phone,
      address:employee.address,
    });
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        phone: employee.phone,
        address:employee.address,
      } 
    );
  }

  deleteKey($key: string){
    this.employeeList.remove($key);
  }

}
