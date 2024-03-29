class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :first_edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /products
  # GET /products.json
  def index
    @products = Product.all
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @images = @product.images
    render json: { images: @images}, status: :created, location: @product
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)

    respond_to do |format|
      if @product.save
        format.html {redirect_to first_edit_product_path(@product), notice: 'Product was successfully created.'}
        format.json {render :show, status: :created, location: @product}
      else
        format.html {render :new}
        format.json {render json: @product.errors, status: :unprocessable_entity}
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        if params[:files]
          @images = params[:files]
          @images.each do |image|
            Image.create(image: image, product: @product)
          end
        end
        format.html {redirect_to @product, notice: 'Product was successfully updated.'}
        format.json {render :show, status: :ok, location: @product}
      else
        format.html {render :edit}
        format.json {render json: @product.errors, status: :unprocessable_entity}
      end
    end
  end

  def first_edit
    respond_to do |format|
      format.html
      format.json {render json: { product: @product }, status: :created, location: @product}
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html {redirect_to products_url, notice: 'Product was successfully destroyed.'}
      format.json {head :no_content}
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def product_params
    params.require(:product).permit(:name, :description, :user_id)
  end
end
