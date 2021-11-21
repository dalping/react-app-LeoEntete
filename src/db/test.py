from collections import deque

def solution(places):
    answer = []
    
    for i in places:
        place = []
        
        #대기실 2차원 배열 생성
        for j in i:
            place.append(list(j))
        
        #응시자 좌표
        if Result(place) == False:
            answer.append(0)
        else:
            answer.append(1)
    
    return answer

def Result(place):
    for r in range(5):
        for c in range(5):
            if place[r][c] == 'P':
                if BFS(place, r, c) == False:
                    return False
    
    return True
    
def BFS(place, r, c):
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    
    queue = deque([(r,c,0)])
    place[r][c] = 'X'
    
    while queue:
        x, y, d = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            nd = d + 1
            
            if nx < 0 or nx > 4 or ny < 0 or ny > 4:
                continue
            
            if nd > 2:
                continue
                
            if place[nx][ny] == 'O':
                place[nx][ny] = 'X' #방문 표시
                queue.append((nx, ny, nd))

            # 거리두기 지키지 않음
            if place[nx][ny] == 'P':
                print(nx, ny)
                return False
        
    return True

print(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))