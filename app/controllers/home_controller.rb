class HomeController < ApplicationController
  def index
    @payments = Payment.all
  end

  def new
    @payment = Payment.new
  end

  def create
    @payments.create(
      :processor_id => 1234,
      :customer_id => 5678,
      :trans_date => '2015-8-15',
      :trans_subtotal => 50.00,
      :trans_tax => 8.00,
      :trans_shipping => 12.00,
      :trans_total => 70.00
    )
  end

  def delete

    @payment.find(1).destroy

  end

  def update
  end
end
