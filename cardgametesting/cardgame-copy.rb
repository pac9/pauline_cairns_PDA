require_relative('card.rb')
#indexation has been fixed to make the code easier to read
class CardGame
#should set up a constructor to allow the setup of a cards array
#and an attr-reader to allow access to the array

	def checkforAce(card)
	  if card.value = 1
	    return true
	  else
	    return false
	  end
	end
#Ruby convention to name methods in snake_case hence should change
#method name to check_for_ace
#in row 9 should use '==' as looking to do a comparison rather than change a value

	dif highest_card(card1 card2)
	  if card1.value > card2.value
	    return card.name
	  else
	    card2
	  end
	end
	end
	#row 19 should change 'dif' to 'def' and put a comma after card1
	#row 21 should change 'name' to 'suit' as that is description used in Card class
	#and should change 'card' to 'card1'
	#row 23 should change to 'card2.suit' and put in 'return' to be consistent
	#row 26 move 'end' to end of Class, currently row 41

	def self.cards_total(cards)
	  total
	  for card in cards
	    total += card.value
	    return "You have a total of" + total
	  end
	end
	#don't need the word 'self' as method already in this class and cards_total
	#not being used elsewhere in app
	#row 35 'total' should be set to an initial value
	#row 38 return statement should be moved outside the for loop
	#in return statement(currently in row 38) 'total' should be converted to a string
