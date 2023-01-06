Rails.application.routes.draw do
  
  resources :purchases
  resources :games
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/me', to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/games", to: "games#index"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/add_to_cart/:id", to: "purchases#add_to_cart"
  delete "/remove_from_cart/:id", to: "purchases#remove_from_cart"
  post "/buy_game", to: "purchases#buy_game"
end
