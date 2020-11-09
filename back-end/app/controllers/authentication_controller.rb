class AuthenticationController < ApplicationController

    def login
        @member = Member.find_by username: params[:username]

        if !@member
            render json: { message: "incorrect username" },
                status: :unauthorized
        else
            if !@member.authenticate(params[:password])
                render json: { message: "incorrect password" },
                status: :unauthorized
            else
                secret = Rails.application.secrets.secret_key_base
                payload = { member_id: @member.id } 
                token = JWT.encode(payload, secret)

                render json: { token: token }
            end
        end
    end

end 
