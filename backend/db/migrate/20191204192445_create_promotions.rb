class CreatePromotions < ActiveRecord::Migration[6.0]
  def change
    create_table :promotions do |t|
      t.string :code, null: false
      t.boolean :active, default: true
      t.float :discount, null: false

      t.timestamps

      t.index :code, unique: true
    end
  end
end
