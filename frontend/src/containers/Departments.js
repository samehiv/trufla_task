import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import http from '../http'
import DepartmentsList from '../components/DepartmentsList'
import Pagination from '../components/Pagination'


function Departments(props) {
  const [departments, setDepartments] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    http.get(`departments${props.location.search}`)
      .then(res => {
        setDepartments(res.data.data.items)
        setPagination(res.data.data.pagination)
      })

  }, [props])

  return (
    <div>
      <h5>Departments</h5>
      <Link to='/departments/new' className="mb-3 d-block">New department</Link>
      <DepartmentsList departments={departments} />
      { (pagination && departments.length > 0)  && 
        <Pagination pagination={pagination} />
      }
    </div>
  );
}

export default Departments