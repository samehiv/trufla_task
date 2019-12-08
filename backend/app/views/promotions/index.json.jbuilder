render_response(json, 200) do
  json.items do
    json.array! @data.items, partial: '/promotions/promotion', as: :promotion
  end

  json.pagination @data.pagination
end