Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  resources :posts
  resources :tags, only: [:show]
  namespace :admin do
    resources
  end
end
