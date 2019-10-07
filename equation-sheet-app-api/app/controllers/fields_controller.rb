class FieldsController < ApplicationController
    before_action :set_field, only: [:show, :update, :destroy]
    def index
        @fields = Field.all
        render json: @fields
    end

    def show
        render json: @field
      end



      private
      def set_field
        @field = Field.find_by_id(params[:id])
      end
  
      def field_params
        params.require(:field).permit(:name)
      end
end
