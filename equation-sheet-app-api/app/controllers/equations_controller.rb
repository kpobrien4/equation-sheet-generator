class EquationsController < ApplicationController
    def index
        @equations = Equation.all
        render json: @equations
    end

    def show
        render json: @equation
      end
    
      def create
        @field = Field.find_or_create_by(name: field_params[:name])
        @equation = @field.equations.build(equation_params)
    
        if @equation.save
          render json: @equation, include: [:field], status: :created, location: @equation
        else
          render json: @equation.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @equation.update(equation_params)
          render json: @equation
        else
          render json: @equation.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @equation.destroy
      end
    
      private
        def set_equation
          @equation = Equation.find_by_id(params[:id])
        end
    
        def field_params
          params.require(:field).permit(:name)
        end
    
        def equation_params
          params.require(:equation).permit(:name, :equation_content)
        end
end
