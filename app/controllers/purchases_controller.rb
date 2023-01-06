class PurchasesController < ApplicationController
    skip_before_action :check_user, only: :index
    def index
        user = User.find(session[:user_id])
        render json: user.games
    end
    def add_to_cart
        user = User.find(session[:user_id])
        game = Game.find(params[:id])
        purchase = Purchase.create!(game_id: game.id,user_id: user.id)
        render json: purchase
    end

    def remove_from_cart
        user = User.find(session[:user_id])
        game = Game.find(params[:id])
        game.destroy
    end

    def buy_game
        user = User.find(session[:user_id])
        game = Game.find(params[:game_id])
        purchase = Purchase.create!(game_id: game.id, user_id: user.id)
        render json: game
    end
end
