package com.example.CRUD_Spring_Pro.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CRUD_Spring_Pro.Service.EmployeeService;
import com.example.CRUD_Spring_Pro.model.Employee;

@RestController
@RequestMapping("/Employees")
@CrossOrigin(origins="http://localhost:3000")
public class EmployeeController {
	@Autowired
	EmployeeService emps;
   @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee emp) {
	   return this.emps.addEmployee(emp);
}
   @GetMapping("/fetchEmployees")
   public List<Employee> getEmployee(){
	   return this.emps.getAllEmployees();
   }
   @GetMapping("/profile/{id}")
   public Optional<Employee> fetchoneRecord(@PathVariable(value="id") int id){
	   return this.emps.getParticularEmployee(id);
   }
   @PutMapping("/profileupdate/{id}")
   public Employee updateRecord(@PathVariable(value="id") int id,@RequestBody Employee emp) {
	   return this.emps.updateRecord(id,emp);
   }
   @DeleteMapping("/delemp/{id}")
   public String deleteRecord(@PathVariable(value="id")int id) {
	   return this.emps.deleteEmp(id);
   }
   @PostMapping("/empsalfilter")
   public List <Employee>fetchSalrec(@RequestBody Employee emp){
	   return this.emps.fetchSalbased(emp.getEmpsal());
   }
}