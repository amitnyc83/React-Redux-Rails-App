class CreateSoccerShoe < ActiveRecord::Migration[5.2]
  def change
    create_table :soccer_shoe do |t|
      t.string :name
      t.string :brand
      t.integer :price
      t.string :img_url
      t.string :description

      t.timestamps
    end
  end
end
