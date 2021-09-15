import math

# Problem 1:
# Given an amount in dollars and a tax percentage. Return an array with the tax amount in cents.

# take in dollars
# multiply dollars and tax perc
# return amout 
# to convert to cents, multiply by 100
# add it to a list

# example
# dollars = 10
# tax per = 10%
# return [100]

# Function get_tax_in_cents
# Takes in integer and float
# Returns list
# Calculate the tax of a dollar amount in cents
def get_tax_in_cents(dollars, tax_percentage):
    
    tax_in_dollars = dollars * tax_percentage
    # Multiplying by 100 converts dollars to cents
    tax_in_cents = tax_in_dollars * 100
    
    return [math.floor(tax_in_cents)]
    
    
# Tests
print(get_tax_in_cents(10, .1)) # OUTPUT [100]
print(get_tax_in_cents(546, .5)) # OUTPUT [27300]

# Problem 2:
# Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that shuffles the deck using the randint function. 
# The random module includes a basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints). 