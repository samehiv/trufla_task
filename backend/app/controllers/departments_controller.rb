class DepartmentsController < ApplicationController
  def index
    relation = Department.order(:name)
    
    @data = paginate(relation, params[:page], params[:per_page], params[:all])
  end

  def create
    Department.create!(department_params)
    
    render_json(200, message: 'department created')
  end


  private

  def department_params
    params.permit(:name)
  end

end
