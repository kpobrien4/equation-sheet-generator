class FieldsController < ApplicationController
    before_action :set_field, only: [:show, :update, :destroy]
    def index
        @fields = Field.all
        render json: @fields, status: 200
    end

    def show
        render json: @field, status: :ok
      end

      def create
        @field = Field.new(field_params)
        if @user.save
          render json: @field, status: 201
        else
          render json: { errors: @field.errors.full_messages }
        end
      end

      def update
        if @field.update(field_params)
          render json: @field
        else
          render json: { errors: @field.errors.full_messages }
        end
      end

      def destroy
        @field.destroy
        render json: { notice: "Field has been deleted" }
      end




      private
      def set_field
        @field = Field.find_by_id(params[:id])
      end
  
      def field_params
        params.require(:field).permit(:name)
      end
end
