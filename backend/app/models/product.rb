# == Schema Information
#
# Table name: products
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  price         :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  department_id :bigint
#
# Indexes
#
#  index_products_on_department_id  (department_id)
#  index_products_on_name           (name)
#

class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true, numericality: true

  belongs_to :department, counter_cache: true
  has_and_belongs_to_many :promotions

  scope :find_for, lambda { |config|
    relation = Product

    if config[:q].present?
      relation = relation.where('products.name ilike ?', "%#{config[:q]}%")
    end

    if config[:has_promotion].present?
      relation = relation.joins(:promotions).where('promotions.active', true)
    end

    relation
  }
end
