class HomeController < ApplicationController

  def index
    @payments = Payment.all
    render json: @payments
  end

  def show
    puts params
    @payment = Payment.find(params[:id])
    render json: @payment
  end

  def new
    @payment = Payment.new
    render json: @payment
  end

  def create
    puts params
    @payment = Payment.create(
      :processor_id => params[:processor_id],
      :customer_id => params[:customer_id],
      :trans_date => params[:trans_date],
      :trans_subtotal => params[:trans_subtotal],
      :trans_tax => params[:trans_tax],
      :trans_shipping => params[:trans_shipping],
      :trans_total => params[:trans_total],
      :trans_memo => params[:trans_memo.to_s]
    )

    render json: @payment
  end

  def delete

    @payment = Payment.find(params[:id])
    @payment.destroy

    @message = {:message => 'A payment with the id of ' + params[:id] + ' has been deleted.'}

    render json: @message
  end

  def update
    puts params
    @payment = Payment.find(params[:id])
    @payment.update({
      :processor_id => params[:processor_id],
      :customer_id => params[:customer_id],
      :trans_date => params[:trans_date],
      :trans_subtotal => params[:trans_subtotal],
      :trans_tax => params[:trans_tax],
      :trans_shipping => params[:trans_shipping],
      :trans_total => params[:trans_total],
      :trans_memo => params[:trans_memo.to_s]
    })

    render json: @payment
  end
end
