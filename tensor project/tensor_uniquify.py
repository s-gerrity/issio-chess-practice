def transform_tensor(data, shape):
    shape.reverse()
    items_per = shape[-1]
    shape_repeat = shape[:-1]

    if data == []:
    
        main_lst = []
        for i in shape_repeat:

            k = 0
            while k < i:
                lst = []
                lst = appending(lst, main_lst, items_per)
                k += 1
        print(main_lst)
        return main_lst



def appending(lst, main_lst, items_per):
    for j in range(items_per):
        lst.append(0)

        main_lst.append(lst)
    return main_lst

# def new_dat(shape):
#     total = 0
#     k = 0
#     zero_datas = []
    
#     for i in shape:
#         if k < len(shape)-1:
#             print(len(shape)-1, "bye")
#             print(k, "k")

#             print(i, "i")
#             total += (i * int(shape[k+1]))
#             print(total, "hi")
#             k += 1
    
#     for i in range(total):
#         zero_datas.append(0)

#     return print(zero_datas, "zero_datas")

#pseudocode
# three times add a zero once

# shape 1, 3    
# [[0], [0], [0]]

        # for i in shape:
        #     lst = []
        #     # print(i)
        #     j = 0
        #     # appended_lst = appending_to_lst(lst)

        #     while j < i:
        #         print(j, "j")
        #         lst.append(0)
        #         j += 1
    

    # for i in shape:
    #     j = 0
    #     lst = []
    #     def add_data(j, lst):
    #         while j <= i: 
    #             lst.append(0)
    #             j += 1
    #             add_data(j, lst)
            
def transform_tensor_single_digit(data, shape):

    if data == []:

        lst = []
        for i in shape:
            j = 0
            while j < i:
                lst.append(0)
                j += 1
        return lst



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


# run_test(transform_tensor_single_digit(data0, shape4), [0, 0, 0, 0], "Four single zeroes")
run_test(transform_tensor(data0, shape13), [[0], [0], [0]], "Three sets of zero")
# run_test(transform_tensor(data0, shape23), [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
# run_test(transform_tensor(data0, shape123), [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")