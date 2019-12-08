
class ProductsController < ApplicationController
  before_action :set_product, only: %i[remove_promotion add_promotion]
  before_action :set_promotion, only: %i[remove_promotion add_promotion]

  def index
    products = Product.find_for(params).includes(:department, :promotions)
                      .order(created_at: :desc)

    @data = paginate(products, params[:page], params[:per_page])
  end

  def create
    Product.create!(department_params)

    render_json(200, message: 'product created')
  end

  def add_promotion
    unless @product.promotions.include?(@promotion)
      @product.promotions << @promotion
    end

    render_json(200, message: 'promotion added')
  end

  def remove_promotion
    @product.promotions.delete(@promotion)

    render_json(200, message: 'promotion removed')
  end

  private

  def department_params
    params.permit(:name, :price, :department_id)
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def set_promotion
    @promotion = Promotion.find(params[:promotion_id])
  end
end
