class PurchasesController < ApplicationController
    skip_before_action :check_user, only: :index
    def index
        render json: Purchase.all
    end

end
