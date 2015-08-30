class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.string :processor_name
      t.string :customer_name
      t.string :trans_date
      t.decimal :trans_subtotal, precision: 10, scale: 2
      t.decimal :trans_tax, precision: 10, scale: 2
      t.decimal :trans_shipping, precision: 10, scale: 2
      t.decimal :trans_total, precision: 10, scale: 2
      t.string :trans_memo

      t.timestamps null: false
    end
  end
end
