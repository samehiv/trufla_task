class PromotionsController < ApplicationController
  def index
    relation = Promotion.order(created_at: :desc)
    @data = paginate(relation, params[:page], params[:per_page], params[:all])
  end

  def create
    Promotion.create!(promotion_params)
    
    render_json(200, message: 'promotion created')
  end


  private

  def promotion_params
    params.permit(:code, :discount, :active)
  end

end
