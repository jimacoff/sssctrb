SSSCTRoomBooking::Application.routes.draw do
  #get "user_details/save_personal_details"
  get "login/signin"
  post "login/signin"

  get "login/signout"
  get "login/remember_me"

  devise_for  :users  ,
              :controllers => {
                  :sessions  => "users/sessions",
                  :registrations => "users/registrations",
                  :confirmations => 'users/confirmations'
              }             #path_names: {sign_in: "login", sign_out: "logout"}

  #post "user_details#save_personal_details"

  get 'user_details/:id', to:'user_details#get_user_details', as:'get_user_details'

  get 'user_profile_details/:id', to:'user_details#get_personal_details', as:'get_profile_details'
  post 'user_profile_details/:id', to:'user_details#save_personal_details', as:'save_profile_details'

  get 'user_non_indian_specific_details/:id', to:'user_details#get_non_indian_specific_details', as:'get_non_indian_specific_details'
  post 'user_non_indian_specific_details/:id', to:'user_details#save_non_indian_specific_details', as:'save_non_indian_specific_details'

  devise_scope :user do
    namespace :users do
      get 'check_for_duplicate_user', to:"registrations"
    end
  end

  # ================  Address Book Routes   ==================

  get 'address_book', to:'address_book#index', as: 'address_book'
  get 'get_users_for_address_book', to:'address_book#get_users_for_address_book'

  post 'save_member_details/:id', to:'address_book#save_member_details', as:'save_member_details'

  # ==========================================================


  #namespace :users do
  #  get 'check_for_duplicate_user', to:"registrations"
  #end

  get "home/index"
  get "home/sample"

  get 'get_all_users', to:'home#all_users'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
