class MembersController < ApplicationController

    # before_action :verify_auth, only: [:index, :show, :update, :destroy]

    def index
        @members = Member.all

        render json: @members, include: [ :passes, :portfolios, :resorts ]
    end

    def create
        @member = Member.create(
            name: params[:name],
            image: params[:image],
            mode: params[:mode],
            username: params[:username],
            password: params[:password]
            )
            
        render json: { member: @member }
    end

end
