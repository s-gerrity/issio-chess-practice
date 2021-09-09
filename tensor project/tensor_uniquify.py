def transform_tensor_single_digit(data, shape):

    if data == []:
        if len(shape) > 1:
            append_zeroes = shape[0]
            iterate_lst = shape[1:]
            iterate_lst.reverse()
            zeroes = []
            result = []
            data = 0
            for i in range(append_zeroes):
                zeroes.append(data)
            
            for k in iterate_lst:
                for j in range(k):
                    result.append(zeroes)
            return result

        else:
            result = []
            data = 0

            for i in shape:
                j = 0
                while j < i:
                    result.append(data)
                    j += 1
            return result




# [[[0], [0]], [[0], [0]], [[0], [0]]] 1, 2, 3



def sum_recursive(current_number, accumulated_sum):
    # Base case
    # Return the final state
    if current_number == 11:
        return accumulated_sum

    # Recursive case
    # Thread the state through the recursive call
    else:
        return sum_recursive(current_number + 1, accumulated_sum + current_number)

sum_recursive(1, 0)

# def transform_tensor(data, shape):
#     shape.reverse()
#     items_per = shape[-1]
#     shape_repeat = shape[:-1]

#     if data == []:
    
#         main_lst = []
#         for i in shape_repeat:

#             k = 0
#             while k < i:
#                 lst = []
#                 lst = appending(lst, main_lst, items_per)
#                 k += 1
#         print(main_lst)
#         return main_lst



# def appending(lst, main_lst, items_per):
#     for j in range(items_per):
#         lst.append(0)

#         main_lst.append(lst)
#     return main_lst







data0 = []
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]


def run_test(testValue, expectedResult, description):
    print(description)
    if (testValue == expectedResult):
        print('    ✅ Test passed')
    else:
        print('    ❌ Test failed!')


run_test(transform_tensor_single_digit(data0, shape4), [0, 0, 0, 0], "Four single zeroes")
run_test(transform_tensor_single_digit(data0, shape13), [[0], [0], [0]], "Three sets of zero")
run_test(transform_tensor_single_digit(data0, shape23), [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
run_test(transform_tensor_single_digit(data0, shape123), [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")