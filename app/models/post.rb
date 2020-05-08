class Post < ApplicationRecord
    mount_uploader :image, ImageUploader
    validates :title, :author, :body,  presence: true
end
