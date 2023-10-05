# 옹알이

# 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
# 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
# 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

# 제한사항
# 1 ≤ babbling의 길이 ≤ 100
# 1 ≤ babbling[i]의 길이 ≤ 15
# babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
# 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
# 문자열은 알파벳 소문자로만 이루어져 있습니다.

# 입력값 1
# ["aya", "yee", "u", "maa", "wyeoo"]

# 결과값 1
# 1

# 입력값 2
# ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]

# 결과값 2
# 3

def solution(babbling):
    says = ["aya", "ye", "woo", "ma"]
    result = 0
    
    for i in range(len(babbling)):
        for say in says:
            # 예) ayaye는 aya, ye이므로 "~~" 변경
            babbling[i] = babbling[i].replace(say, "~")
        
        if all(char == "~" for char in babbling[i]):
            result += 1
            
    return result

# 조카의 할 수 있는 말 ["aya", "ye", "woo", "ma"]
# 입력값 배열에 하나씩 들어가는지를 확인하는 문제이므로 loop 돌리기

# 30번 줄 : 입력값 배열의 길이만큼 loop
# 31번 줄 : 조카가 할 수 있는 말 loop
# 32번 줄 : 입력값과 조카가 할 수 있는 말이 같으면 "~" 치환한다.
# 34번 줄 : 모든 단어가 "~"인 단어는 result의 값을 += 1 해준다.
