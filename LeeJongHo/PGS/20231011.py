# 영어가 싫어요

# 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
# 문자열 numbers가 매개변수로 주어질 때, 
# numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

# numbers는 소문자로만 구성되어 있습니다.
# numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
# 1 ≤ numbers의 길이 ≤ 50
# "zero"는 numbers의 맨 앞에 올 수 없습니다.

# 입출력 예
# numbers	result
# "onetwothreefourfivesixseveneightnine"	123456789
# "onefourzerosixseven"	14067

# 입출력 예 #1
# "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.

# 입출력 예 #2
# "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

def solution(numbers):
    num_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for idx, el in enumerate(num_list):
        numbers = numbers.replace(el, str(idx))
    
    return int(numbers)

# 24줄 : "zero"부터 시작하는 문자열 배열을 만들어준다.
# 26줄 : 파이썬 enumerate()함수는 index와 element를 주는 튜플(0, zero) 형태의 값을 준다.
# 27줄 : replace()로 element를 index로 대신한다.
# 29줄 : 결과값은 문자열로 반환되기 때문에 정수로 바꿔준다.