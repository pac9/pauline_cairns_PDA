require('minitest/autorun')
require('minitest/rg')
require_relative('../card')

class TestCard < Minitest::Test

  def setup()
    @card = Card.new("Hearts", 5)
  end

  def test_card_has_suit
    assert_equal("Hearts", @card.suit)
  end

  def test_card_has_value
    assert_equal(5, @card.value)
  end

end
