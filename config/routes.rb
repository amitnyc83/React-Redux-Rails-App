Rails.application.routes.draw do
  namespace :api do
   resources :shoes, except: [:new, :edit]
  end
end
