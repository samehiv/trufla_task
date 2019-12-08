# == Schema Information
#
# Table name: promotions
#
#  id         :bigint           not null, primary key
#  active     :boolean          default(TRUE)
#  code       :string           not null
#  discount   :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_promotions_on_code  (code) UNIQUE
#

class Promotion < ApplicationRecord

  validates :code, presence: true, uniqueness: true
  validates :active, inclusion: { in: [true, false] }

  has_and_belongs_to_many :products

end
