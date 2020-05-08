Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  resources :posts

  namespace :admin do
    resources
  end
end
