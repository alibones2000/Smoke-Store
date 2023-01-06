class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.decimal :price
      t.string :platform
      t.string :img_url

      t.timestamps
    end
  end
end
