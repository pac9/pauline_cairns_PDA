require('minitest/autorun')
require('minitest/rg')
require_relative('../cardgame.rb')
require_relative('../card')

class TestCardGame < Minitest::Test

  def setup()
    @card1 = Card.new("Hearts", 1)
    @card2= Card.new("Spades", 2)
    cards = [@card1, @card2]
    @cardgame = CardGame.new(cards)

  end

  def test_cardgame_has_cards
    assert_equal(2, @cardgame.cards().length())
  end

  def test_check_for_ace__true
    result = @cardgame.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace__false
    result = @cardgame.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal("Spades", result)
  end

  def test_cards_total
    cards = [@card1, @card2]
    result = @cardgame.cards_total(cards)
    assert_equal("You have a total of 3", result)
  end

end
