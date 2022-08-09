class StaticController < ApplicationController
  before_action :set_greeting, only: %i[show edit update destroy]

  # GET /greetings or /greetings.json
  # def index
  #   @greetings = Greeting.all
  # end
  def index; end

  # GET /greetings/1 or /greetings/1.json
end
