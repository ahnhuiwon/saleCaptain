**cheerio와 node JS를 사용해 할인 품목을 보기 편하게 스크랩해 정리해놓은 사이트**

- [배포주소 바로가기](http://54.173.147.234:3000/)

- 토이프로젝트

    ## 🛠 기술 스택
    
    ### **📚 Frameworkes & Libraries**
    
    - FRONTEND
      - react.js@^17.0.2
      - react-bootstrap@^2.0.2
      - react-router-dom@^6.0.2
      - bootstrap@^^5.1.3
      - axios@^1.2.1
      - node-sass@^4.14.1
      
    - BACKEND
      - express@^4.18.2
      - cheerio@^1.0.0-rc.12
      - cors@^2.8.5

    <br>

    ## 🧐 프로젝트 빌드 및 실행 방법

    1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

    ```
    $ git clone https://github.com/ahnhuiwon/saleCaptain.git
    ```

    2. 패키지를 설치합니다.

    ```
    $ npm install
    ```

    3. node JS를 실행합니다.

    ```
    $ node ./server/server.js
    ```
    
    3. React 를 실행합니다.

    ```
    $ npm start
    ```
    
    <br>

    ## 🙆‍♀️ 구현
    
    ### 필수 구현 사항
    
    - [x] aws EC2 생성 및 배포
    - [x] node js, axios와 cheerio를 사용해 뽐뿌게시판(모니터) 스크랩 및 api 구현
    - [x] React로 프론트단 화면 구현 및 api 연동
    - [x] Bootstrap을 통해 모바일 반응형 화면 적용

    ### 추가 구현 사항
    
    **2023-01-12**

    - 로딩 컴포넌트 구현 및 적용
    - 뽐뿌게시판, 식품/건강탭 스크랩 적용
    - 모바일 환경시 스와이프 적용

    <br>

    ## 📈 디렉토리 구조
