# houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

# # Each function call represents an elf doing his work
# def deliver_presents_recursively(houses):
#     # Worker elf doing his work
#     if len(houses) == 1:
#         house = houses[0]
#         # print("Delivering presents to", house)

#     # Manager elf doing his work
#     else:
#         mid = len(houses) // 2
#         first_half = houses[:mid]
#         second_half = houses[mid:]

#         # Divides his work among two elves
#         deliver_presents_recursively(first_half)
#         deliver_presents_recursively(second_half)

# print(deliver_presents_recursively(houses))


# def factorial_recursive(n):
#     # Base case: 1! = 1
#     if n == 1:
#         return 1

#     # Recursive case: n! = n * (n-1)!
#     else:
#         return n * factorial_recursive(n-1)

# print(factorial_recursive(4))


# def sum_recursive(current_number, accumulated_sum):
#     # Base case
#     # Return the final state
#     if current_number == 11:
#         return accumulated_sum

#     # Recursive case
#     # Thread the state through the recursive call
#     else:
#         return sum_recursive(current_number + 1, accumulated_sum + current_number)

# print(sum_recursive(1, 0))

# def list_sum_recursive(input_list):
#     # Base case
#     if input_list == []:
#         return 0

#     # Recursive case
#     # Decompose the original problem into simpler instances of the same problem
#     # by making use of the fact that the input is a recursive data structure
#     # and can be deﬁned in terms of a smaller version of itself
#     else:
#         print(input_list, "input list")
#         head = input_list[0]
#         print(head, "head")
#         smaller_list = input_list[1:]
#         # print("head: " + str(head) + " result of recursion: " + str(list_sum_recursive(smaller_list)))
#         print(smaller_list, "smaller_list")

#         return head * list_sum_recursive(smaller_list)

# print(list_sum_recursive([1, 2, 3]))

# def flatten(mylist):
#     flatlist = []
#     for element in mylist:
#         print(element, "ele", type(element))
#         if type(element) == list:
#             flatlist += flatten(element)
#         else:
#             flatlist += element
#     return flatlist
  
# print(flatten(['a', ['b', ['c', ['d']], 'e'], 'f']))


# def multiply_list_recursively(current_nums, accumulated_total):
#     # Base case
#     # Return the final state
#     if len(current_nums) == 0:
#         return accumulated_total

#     # Recursive case
#     # Thread the state through the recursive call
#     else:
#         current_number = current_nums[0]
#         current_nums.remove(current_number)
#         return multiply_list_recursively(current_nums, accumulated_total * current_number)

# print(multiply_list_recursively([6, 6, 6], 1))


# def list_sum_recursive(input_list):
#     # Base case
#     if input_list == []:
#         return 0

#     # Recursive case
#     # Decompose the original problem into simpler instances of the same problem
#     # by making use of the fact that the input is a recursive data structure
#     # and can be deﬁned in terms of a smaller version of itself
#     else:
#         head = input_list[0]
#         smaller_list = input_list[1:]
#         result = list_sum_recursive(smaller_list)
#         print("head: " + str(head) + " result of recursion: " + str(result))

#         return head + result

# print(list_sum_recursive([1, 2, 3]))


# tensor shape - 2, 3
[[0, 0], [0, 0], [0, 0]]



