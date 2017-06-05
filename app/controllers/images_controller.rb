class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /images
  # GET /images.json
  def index
    @images = Image.last(4)

    @images = @images.map {|image| image.image_data}
    render json: { images: @images }, status: :created, location: @images.last
  end

  # GET /images/1
  # GET /images/1.json
  def show
  end

  # GET /images/new
  def new
    @image = Image.new
  end

  # GET /images/1/edit
  def edit
  end

  # POST /images
  # POST /images.json
  def create
    @image = Image.new(image_params)

    respond_to do |format|
      if @image.save
        format.html {redirect_to @image, notice: 'Image was successfully created.'}
        format.json {render json: { files: [@image.to_jq_upload] }, status: :created, location: @image}


      else
        format.html {render :new}
        format.json {render json: @image.errors, status: :unprocessable_entity}
      end
    end
  end

  # PATCH/PUT /images/1
  # PATCH/PUT /images/1.json
  def update
    respond_to do |format|
      if @image.update(image_params)
        format.html {redirect_to @image, notice: 'Image was successfully updated.'}
        format.json {render :show, status: :ok, location: @image}
      else
        format.html {render :edit}
        format.json {render json: @image.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    @image.destroy
    # respond_to do |format|
    #   format.json {head :no_content}
    # end
  end

  def upload
    @images = []
    params[:images].each do |image|
      @images << Image.create(image: image).image_data
    end
    render json: { images: @images }, status: :created, location: @images.last
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_image
    @image = Image.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def image_params
    params.require(:images).permit()
  end

end
