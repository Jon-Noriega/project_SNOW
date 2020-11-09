class PassesController < ApplicationController

    def index
        @passes = Pass.all

        render json: @passes,  include: [ :member, :portfolio ]
    end

end
