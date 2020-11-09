class Portfolio < ApplicationRecord
    has_many :passes
    has_many :members, through: :passes
    has_many :resorts    
end
