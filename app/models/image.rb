class Image < ApplicationRecord
  mount_uploader :image, ImageUploader


  include Rails.application.routes.url_helpers

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
end
