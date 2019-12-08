class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.references :department
      t.string :name, null: false
      t.float :price, null: false

      t.timestamps

      t.index :name
    end
  end
end
