# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140726084724) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "indian_specific_details", force: true do |t|
    t.string   "verification_id_proof"
    t.string   "verification_id_number"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "non_indian_specific_details", force: true do |t|
    t.string   "passport_number"
    t.string   "passport_city_of_issue"
    t.string   "passport_country_of_issue"
    t.date     "passport_date_of_issue"
    t.date     "passport_valid_till"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "personal_details", force: true do |t|
    t.text     "address"
    t.string   "state"
    t.string   "city"
    t.string   "pincode"
    t.string   "country"
    t.string   "mobile_number"
    t.boolean  "gender"
    t.date     "date_of_birth"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "photo_original_url"
    t.string   "photo_medium_url"
    t.string   "photo_thumb_url"
    t.string   "photo_small_url"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", force: true do |t|
    t.string   "role_description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "nationality"
    t.integer  "role_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "dependent_user_id",      default: 0
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "visa_details", force: true do |t|
    t.string   "visa_number"
    t.string   "visa_city_of_issue"
    t.string   "visa_country_of_issue"
    t.date     "visa_date_of_issue"
    t.date     "visa_valid_till"
    t.integer  "visa_type"
    t.string   "visa_other_type"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
