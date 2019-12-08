class CreateJoinTableProuductPromotion < ActiveRecord::Migration[6.0]
  def change
    create_join_table :products, :promotions do |t|
      t.index [:product_id, :promotion_id], unique: true
      t.index [:promotion_id, :product_id], unique: true
    end
  end
end
