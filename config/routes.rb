Rails.application.routes.draw do
  resources :images
  resources :products
  root to: 'visitors#index'
  devise_for :users
  resources :users
end
