Rails.application.routes.draw do

  root to: 'visitors#index'
  devise_for :users
  resources :users

  resources :products do
    member do
      get :first_edit
    end
  end
  resources :images do
    collection do
      post :upload
    end
  end
end
