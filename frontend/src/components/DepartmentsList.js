import React from 'react';

function DepartmentsList({ departments }) {
  return (
    <div>
      {departments.map(department => (
        <div key={department.id} className="row mb-3">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="text-muted"> Name: {department.name} </div>
                <div className="text-muted"> Products count: {department.products_count} </div>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
}

export default DepartmentsList