# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_08_010934) do

  create_table "members", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "mode"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "passes", force: :cascade do |t|
    t.string "name"
    t.integer "member_id", null: false
    t.integer "portfolio_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["member_id"], name: "index_passes_on_member_id"
    t.index ["portfolio_id"], name: "index_passes_on_portfolio_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "resorts", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "slogan"
    t.integer "portfolio_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["portfolio_id"], name: "index_resorts_on_portfolio_id"
  end

  add_foreign_key "passes", "members"
  add_foreign_key "passes", "portfolios"
  add_foreign_key "resorts", "portfolios"
end
