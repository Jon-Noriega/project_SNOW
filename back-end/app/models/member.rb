class Member < ApplicationRecord
    has_secure_password
    
    has_many :passes
    has_many :portfolios, through: :passes
    has_many :resorts, through: :portfolios
end
