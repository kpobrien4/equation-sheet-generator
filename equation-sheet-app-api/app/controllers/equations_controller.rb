class EquationsController < ApplicationController
  before_action :set_equation, only: [:show, :update, :destroy]
    def index
        @equations = Equation.all
        render json: @equations, include: [:field]
    end

    def show
        render json: @equation, include: [:field], status: :ok
      end
    
      def create
        @equation = Equation.new(equation_params)
    
        if @equation.save
          render json: @equation, include: [:field], status: :created, location: @equation
        else
          render json: @equation.errors, status: :unprocessable_entity
        end
      end
    
      def update
        if @equation.update(equation_params)
          render json: @equation, include: [:field], status: :created, location: @equation
        else
          render json: @equation.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @equation.destroy
        render json: @equation
      end
    
      private
        def set_equation
          @equation = Equation.find_by_id(params[:id])
        end
    
        def field_params
          params.require(:field).permit(:name)
        end
    
        def equation_params
          params.require(:equation).permit(:name, :equation_content, :field_id)
        end
end
