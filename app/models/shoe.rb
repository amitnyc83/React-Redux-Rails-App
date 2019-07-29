class Shoe < ApplicationRecord
 before_create :set_likes


 def set_likes
   self.likes = 0
 end

 
end
