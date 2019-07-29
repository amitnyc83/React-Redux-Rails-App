class Api::ShoesController < ApplicationController

  before_action :set_shoe, only: [:show, :update, :destroy]

  def index
    render json: Shoe.all
  end

  def create
    @shoe = Shoe.new(shoe_params)
    if @shoe.save
      render json: @shoe
    else
      render json: {message: shoe.errors }, status: 400
    end
  end

  def show
    render json: @shoe
  end


  def update
    if @shoe.update(shoe_params)
      render json: @shoe
    else
      render json: {message: @shoe.errors }, status: 400
    end
  end

  def destroy
    if @shoe.destroy
      render status: 204
    else
      render json: { message: "unable to delete shoe" }, status: 400
    end
  end

  private

  def set_shoe
    @shoe = Shoe.find_by(id: params[:id])
  end

  def shoe_params
    params.require(:shoe).permit(:id, :name, :brand, :img_url, :price, :description, :likes, :created_at, :updated_at)
  end

end
