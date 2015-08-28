class PaymentsController < ApplicationController

  def index
    if validate(params[:key])  # make sure access is authorized
      @payments = Payment.all
      render json: @payments
    else
      render json: { :message => 'invalid api key'}
    end
  end

  def show
    puts '-----------'
    puts params
    puts '-----------'
    if validate(params[:key])  # make sure access is authorized
      @payment = Payment.find(params[:id])
      render json: @payment
    else
      render json: { :message => 'invalid api key'}
    end
  end

  def new
    if validate(params[:key])  # make sure access is authorized
      @payment = Payment.new
      render json: @payment
    else
      render json: { :message => 'invalid api key'}
    end
  end

  def create
    puts params

    if validate(params[:key])  # make sure access is authorized
      render json: @payment
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
    else
      render json: { :message => 'invalid api key'}
    end

  end

  def delete

    if validate(params[:key]) # make sure access is authorized
      @payment = Payment.find(params[:id])
      @payment.destroy
      # return a friendly json-formatted confirmation message
      @message = {:message => 'A payment with the id of ' + params[:id] + ' has been deleted.'}
      render json: @message
    else
      render json: { :message => 'invalid api key'}
    end
  end

  def update

    if validate(params[:key]) # make sure access is authorized
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
    else
      render json: { :message => 'invalid api key'}
    end
  end

private
    # read in a an hidden environment variable to compare against a string
    # contained in every valid request uri
    def validate(key)
      return key == ENV["PANDACARD_API_KEY"]
    end


end
