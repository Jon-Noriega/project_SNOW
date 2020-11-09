class PortfoliosController < ApplicationController

    def index
        @portfolios = Portfolio.all

        render json: @portfolios, include: [ :passes, :members, :resorts ]
    end

end
