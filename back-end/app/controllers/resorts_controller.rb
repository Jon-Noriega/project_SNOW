class ResortsController < ApplicationController

    def index
        @resorts = Resort.all
        
        render json: @resorts, include: [ :portfolio ]
    end

end
