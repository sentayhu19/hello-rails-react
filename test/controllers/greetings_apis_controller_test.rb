require 'test_helper'

class GreetingsApisControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get greetings_apis_index_url
    assert_response :success
  end
end
