render_response(json, 200) do
  json.items do
    json.array! @data.items do |product|
      json.id product.id
      json.name product.name
      json.price product.price
      json.department product.department.name
      json.promotions do 
        json.array! product.promotions, partial: '/promotions/promotion', as: :promotion
      end
    end

  end

  json.pagination @data.pagination
end
