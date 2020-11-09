class CreatePasses < ActiveRecord::Migration[6.0]
  def change
    create_table :passes do |t|
      t.string :name
      t.references :member, null: false, foreign_key: true
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
