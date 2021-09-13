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

#         return head + list_sum_recursive(smaller_list)

# # print(list_sum_recursive([1, 2, 3]))

# # def flatten(mylist):
# #     flatlist = []
# #     for element in mylist:
# #         print(element, "ele", type(element))
# #         if type(element) == list:
# #             flatlist += flatten(element)
# #         else:
# #             flatlist += element
# #     return flatlist
  
# # print(flatten(['a', ['b', ['c', ['d']], 'e'], 'f']))

data7 = [0, 89, 0.4, 37, 988887, 2, 99]
data6 = [0, 89, 0.4, 37, 988887, 2]
data5 = [44, 59, 383, 6]
shape23 = [2, 3]

def confirm_data_length(data, accumulated_total):
    data_length = len(data)

    if data_length == accumulated_total:
        return print("looks good!")
    elif data_length < accumulated_total:
        amount_of_data_needed = accumulated_total - data_length
        for i in range(amount_of_data_needed):
            data.append(0)
    else:
        amount_of_data_over =  data_length - accumulated_total
        data = data[:-amount_of_data_over]
    
    return data

    

print(confirm_data_length(data7, 6))


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

# def multiply_list(numbers):
#     # Use our recursive method to multiply each number in this list together.
#     # We pass 1 as the `accumulated_total` since that is the multiplicative
#     # identity.
#     return multiply_list_recursively(numbers, 1)

# print(multiply_list(shape23))


# def list_sum_recursive(input_list):
#     # Base case
#     print(input_list, "1 input")

#     if input_list == []:
#         return 0
#     # Recursive case
#     # Decompose the original problem into simpler instances of the same problem
#     # by making use of the fact that the input is a recursive data structure
#     # and can be deﬁned in terms of a smaller version of itself
#     else:
#         head = input_list[0]
#         print(head, "head")
#         smaller_list = input_list[1:]
#         print(smaller_list, "smaller")
#         result = list_sum_recursive(smaller_list)

#         print("head: " + str(head) + " result of recursion: " + str(result))

#         return head + result

# print(list_sum_recursive([4, 9, 10]))


# data = [8, 6, 3, 5, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7]
# shape = [2, 3, 4]


# def nesting_data(data, shape):

#     if len(shape) == 1:
#         return data

#     main_lst = []
#     head = int(shape[0])
#     i = 0
#     while len(main_lst) < (len(data)/ head):

        
#         new_lst = []
#         for item in data[i:head+i]:
#             new_lst.append(item)
#         i += head
#         main_lst.append(new_lst)

#     data = main_lst
#     shape = shape[1:]
    

#     return nesting_data(data, shape)


# print(nesting_data(data, shape))
