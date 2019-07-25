class AddLikesToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :likes, :integer
  end
end
