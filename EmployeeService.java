package com.example.CRUD_Spring_Pro.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CRUD_Spring_Pro.jpa.JpaEmpRepo;
import com.example.CRUD_Spring_Pro.model.Employee;

@Service
public class EmployeeService {
	@Autowired
	JpaEmpRepo jer;
    public Employee addEmployee(Employee emp) {
    return this.jer.save(emp);
    }
    
public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return this.jer.findAll();
	}
	public Optional<Employee> getParticularEmployee(Integer id) {
		// TODO Auto-generated method stub
		return this.jer.findById(id);
	}

	public Employee updateRecord(int id, Employee emp) {
		// TODO Auto-generated method stub
		Employee oldrecord =this.jer.findById(id).orElseThrow(()->new DataNotFoundError("Employee not found"));
		oldrecord.setEmpname(emp.getEmpname());
		oldrecord.setEmpsal(emp.getEmpsal());
		oldrecord.setDob(emp.getDob());
		oldrecord.setGender(emp.getGender());
		oldrecord.setHiredate(emp.getHiredate());
		oldrecord.setPosition(emp.getPosition());
		oldrecord.setDeptid(emp.getDeptid());
		oldrecord.setPhno(emp.getPhno());
		oldrecord.setEmail(emp.getEmail());
		oldrecord.setAddress(emp.getAddress());
		oldrecord.setStatus(emp.getStatus());
		return this.jer.save(oldrecord);
	}

	public String deleteEmp(Integer id) {
		// TODO Auto-generated method stub
		this.jer.deleteById(id);
		return "Deleted success";
	}

	public List<Employee> fetchSalbased(double sal) {
		// TODO Auto-generated method stub
		return this.jer.salFilter(sal);
	}
	
   
}
