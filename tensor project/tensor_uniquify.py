def transform_tensor(data, shape):

    if data == []:

        lst = []
        for i in shape:
            print(i)
            j = 0
            while j < i:
                lst.append(0)
                j += 1
        print(lst)
        return lst
    

    

    # for i in shape:
    #     j = 0
    #     lst = []
    #     def add_data(j, lst):
    #         while j <= i: 
    #             lst.append(0)
    #             j += 1
    #             add_data(j, lst)
            



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


run_test(transform_tensor(data0, shape4), [0, 0, 0, 0], "Four single zeroes")
# run_test(transform_tensor(data0, shape13), [[0], [0], [0]], "Three sets of zero")
# run_test(transform_tensor(data0, shape23), [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
# run_test(transform_tensor(data0, shape123), [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")