
package com.example.CRUD_Spring_Pro.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.CRUD_Spring_Pro.model.Employee;
@Repository
public interface JpaEmpRepo extends JpaRepository<Employee,Integer> {
	//customized query
  @Query("Select e from Employee e where e.empsal>=?1")
  List<Employee> salFilter(double salary);


}
 