class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :image
      t.string :mode
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
