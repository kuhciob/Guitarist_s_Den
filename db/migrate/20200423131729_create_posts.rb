class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :author
      t.string :date
      t.string :imgsrc
      t.text :body

      t.timestamps
    end

    
  end
end
