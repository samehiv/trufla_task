
module Pagination
  
  def paginate(relation, page = 1, per_page = 15, all = false)
    page = (page || 1).to_i
    per_page = (per_page || 15).to_i
    per_page = relation.count if all.present?
  
    paginated = relation.page(page).per(per_page)

  
    OpenStruct.new(
      items: paginated,
      pagination: { total_pages: paginated.total_pages,
                    total_items: paginated.total_count,
                    current_page: paginated.current_page,
                    first_page: paginated.first_page?,
                    last_page: paginated.last_page?,
                    next_page: paginated.next_page,
                    prev_page: paginated.prev_page,
                    per_page: per_page }
    )
  end
end
