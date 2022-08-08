Rails.application.routes.draw do
  resources :greetings
  root 'greetings#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/greetings', to: 'greetings#index'
end
