# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


department = Department.create(name: 'department')

50.times do |i|
  department.products.create(department: department, price: 100, name: "product_#{i}")
end

10.times do
  Promotion.create(code: SecureRandom.hex(3), discount: 25, active: true)
end