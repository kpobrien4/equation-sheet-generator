class Equation < ApplicationRecord
    belongs_to :field
    validates_presence_of :name, :equation_content
    validates_uniqueness_of :name, :equation_content
end
