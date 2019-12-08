class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :name, null: false
      t.integer :products_count, null: false, default: 0 

      t.timestamps
    end
  end
end
