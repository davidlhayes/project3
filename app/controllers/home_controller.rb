class HomeController < ApplicationController

  def index
    @payments = Payment.all
    if validate(params[:key])
      render json: @payments
    else
      render json: { :message => 'invalid api key'}
    end
  end

  def show

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



private

    def validate(key)
      puts 'Stuff'
      puts "@@ " + key.to_s + " @@"
      valid_api_key = File.open("api_key", "r"){ |file| file.read }
      puts "@@ " + valid_api_key.to_s + " @@"
      if key.to_s == valid_api_key.to_s
        puts 'equal'
      else
        puts 'not equal'
      end
    end


end
