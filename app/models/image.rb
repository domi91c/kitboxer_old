class Image < ApplicationRecord
  mount_uploader :image, ImageUploader
  attr_accessor :x, :y, :width, :height
  # after_update :crop_image


  include Rails.application.routes.url_helpers

  def cropped_image(params)
    image = MiniMagick::Image.open(self.image.path)
    crop_params = "#{params[:width]}x#{params[:height]}+#{params[:x]}+#{params[:y]}"
    image.crop(crop_params)
    image
  end



  def image_data
    {
        "name" => read_attribute(:image),
        "id" => id,
        "size" => image.size,
        "url" => image.url,
        "delete_url" => image_path(:id => id),
        "delete_type" => "DELETE"
    }
  end

  private
  def crop_image
    image.recreate_versions! if x.present?
  end
end
