import math, random

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
# print(get_tax_in_cents(10, .1)) # OUTPUT [100]
# print(get_tax_in_cents(546, .5)) # OUTPUT [27300]

# Problem 2:
# Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that 
# shuffles the deck using the randint function. 
# The random module includes a basic function randint(a, b) that returns a 
# uniformly random integer from a to b (including both endpoints). 
# Example: 
# Input deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'].
# Output = ['Q','K',2,3,4,5,6,7,8,9,10,1,'A','J'] or can be in any shuffled order

# pseudocode
# get the len of deck
# make a counter
# while i is less than len
# randint a num of len start end
# pop that index deck into new list
# increment counter
# if item is already in new list, continue
#

# Function shuffle_deck
# Takes in list
# Returns list
# Use randint from the random library to randomly select items from a list
# and return them in the new order. Duplicates of the items are not allowed. 
def shuffle_deck(deck):

    length_of_deck = len(deck)
    i = 0
    shuffled_deck = []

    while i < length_of_deck:
        rand_int = random.randint(0, int(length_of_deck))

        # To prevent from adding the same element into the shuffled list twice we
        # check to see if it already exists in there
        if deck[rand_int-1] not in shuffled_deck:

            # We take one from the rand_int for proper indexing
            shuffled_deck.append(deck[rand_int-1])
            i += 1

    return shuffled_deck
    

shuffle_deck(['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'])

# Problem 3:
# Given a string s, return the sum of the vowels in the string if each 
# vowel's weight increases by 1 according to the vowels order. 

# Example:  
# Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5  
# Output = 22 (1 a's = 1*1 = 1 +  3 e's = 3*2 = 6 +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)


# pseudocode
# make var counters for each vowel
# make sum total var
# loop over each item in the string
# if the item in string is in vowel string
# if the item is a, increase counter and add the weight sum to total sum
# loop and return sum total


# Function sum_lower_vowels_in_string
# Takes in string and 5 integers
# Returns interger
# We check each letter in the string to sum a total of how many lowercase vowels there 
# according to that vowels specified weight in the argument 
def sum_lower_vowels_in_string(string, a_weight, e_weight, i_weight, o_weight, u_weight):

    sum_total = 0

    for letter in string:

        if letter in 'aeiou':
            if letter == 'a':
                sum_total += 1 * a_weight
            if letter == 'e':
                sum_total += 1 * e_weight
            if letter == 'i':
                sum_total += 1 * i_weight
            if letter == 'o':
                sum_total += 1 * o_weight
            if letter == 'u':
                sum_total += 1 * u_weight

    return sum_total


# print(sum_lower_vowels_in_string("Welcome to Indonesia", 1, 2, 3, 4, 5)) # OUTPUT 22

# Function recursively_sum_lower_vowels_in_string
# Takes in string and 6 integers (Added parameter for `sum_total`)
# Returns integer
# We check the first letter in the string. If it is a vowel, we sum a total of how many lowercase vowels there 
# according to that vowels specified weight in the argument. When the first letter has been checked, we 
# move down the string recursively to check the next first letter. 
def recursively_sum_lower_vowels_in_string(string, a_weight, e_weight, i_weight, o_weight, u_weight, sum_total):

    if len(string) == 0:
        return sum_total

    head = string[0]
    if head in'aeiou':
        if head == 'a':
            sum_total += 1 * a_weight
        if head == 'e':
            sum_total += 1 * e_weight
        if head == 'i':
            sum_total += 1 * i_weight
        if head == 'o':
            sum_total += 1 * o_weight
        if head == 'u':
            sum_total += 1 * u_weight
    # Move to start with next letter in the string
    string = string[1:]


    return recursively_sum_lower_vowels_in_string(string, a_weight, e_weight, i_weight, o_weight, u_weight, sum_total)


# print(recursively_sum_lower_vowels_in_string("Welcome to Indonesia", 1, 2, 3, 4, 5, 0)) # OUTPUT 22


# Problem 5:
# Write a regular expression to find any word between 4 and 9 letters long and containing either “odoo”, “code” or “work”?



# FrontEnd Challange (JS/TS/CSS)
# ========================================

# Problem 6:
# https://gist.github.com/sna-odoo/70229f8bc4c3a232324b3c70ca9d2e6b
# Create a 3*3 box using flex property, For each box it should display zero as the count in the center

# Problem 7:
# Extend the above feature by implementing the counter feature, the count has to be incremented only for the clicked box .

# Problem 8:
# Extend the above feature by creating a "click here" button and upon clicking the button the count of all the boxes has to increment by 1 with 1 second gap for each increment.

# Problem 9:
# Find count of 'odoo.sh' word in all sections of https://www.odoo.sh/faq webpage including collapsible divs using jquery.



# Problem 10:
# Write SQL statements to create database tables to store the details of users of a basic ecommerce website.
# 10.1) Each user has a first name, last name, address and city id to store parent reference. City table has id and name column.

# With the Fact that these tables are populated with 10000 users and 30 cities.
# 10.2) Write a SQL query to find cities with highest number of users and reutrn city id,name and number users in descending order.
# 10.3) How would you populate the tables with ramdon test datas for a tables created at problem 1.


CREATE TABLE cities (
  city_id SERIAL INT NOT NULL PRIMARY KEY,
  city VARCHAR(20) NOT NULL,

);

# Each user has a 
# first name, 
# last name, address and 
# city id to store parent reference

CREATE TABLE users (
  user_id SERIAL INT PRIMARY KEY,
  address VARCHAR(20) NOT NULL,
  fname VARCHAR(20) NOT NULL
  lname VARCHAR(20) NOT NULL
  city_id INT
    REFERENCES(Cities)
  
);
