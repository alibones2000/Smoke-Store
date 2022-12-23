class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :price, :platform
end
