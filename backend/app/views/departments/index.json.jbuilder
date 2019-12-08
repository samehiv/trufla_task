render_response(json, 200) do
  json.items do
    json.array! @data.items, :id, :name, :products_count
  end

  json.pagination @data.pagination
end
