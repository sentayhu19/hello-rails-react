Rails.application.routes.draw do
  # get 'greetings_apis/index'
  resources :static
  root 'static#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #  get '/v1/greetings', to: 'v1/greetingapis#index', as: 'v1_greetings'
  namespace :v1, default: { format: 'json'} do
    get 'greetings' => 'greetings#index'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
