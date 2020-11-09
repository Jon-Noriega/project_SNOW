class ApplicationController < ActionController::API

    def verify_auth
        if !request.headers["Authorization"]
            render json: { message: "Unauthorized"},
                status: :unauthorized
        else
            token = request.headers["Authorization"].split(" ")[1]
            secret = Rails.application.secrets.secret_key_base

            begin
                decoded_token = JWT.decode(token, secret)
                payload = decoded_token.first
                member_id = payload["member_id"]
                @member = Member.find(member_id)
            rescue
                render json: { message: "Unauthorized"},
                status: :unauthorized
            end
        end
    end

end
