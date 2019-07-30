class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :img_url, :description, :likes, :price
end
