Rails.application.routes.draw do
  resources :departments, only: %i[create index]
  resources :products, only: %i[create index] do 
    member do
      post :add_promotion
      delete :remove_promotion
    end
  end
  resources :promotions, only: %i[create index]

end
