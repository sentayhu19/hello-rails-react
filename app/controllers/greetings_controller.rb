class GreetingsController < ApplicationController
  before_action :set_greeting, only: %i[ show edit update destroy ]

  # GET /greetings or /greetings.json
  # def index
  #   @greetings = Greeting.all
  # end
  def index
    id = rand(1..Greeting.count)
    if id.nil?
      render json: { error: 'opps! not found' }.to_json, status: 404
    else
      @greetings = Greeting.find(id)
      render json: @greetings
    end
  end

  # GET /greetings/1 or /greetings/1.json
  end
