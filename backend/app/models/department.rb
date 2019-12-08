# == Schema Information
#
# Table name: departments
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  products_count :integer          default(0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#


class Department < ApplicationRecord
  validates :name, presence: true
  
  has_many :products
end
