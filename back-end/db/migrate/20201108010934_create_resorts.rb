class CreateResorts < ActiveRecord::Migration[6.0]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :image
      t.string :slogan
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
