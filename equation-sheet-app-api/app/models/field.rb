class Field < ApplicationRecord
    has_many :equations
    validates_presence_of :name, :description
    validates_uniqueness_of :name, :description
end
