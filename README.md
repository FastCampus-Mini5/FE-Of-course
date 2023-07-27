## index.ts

### 1. named export

- react snippet 사용시 rafc 사용 후 최상단 import react from 'React' 제거해주신 후 컴포넌트 작업하시면 됩니다!

### 2. index.ts 파일 내에 export 경로 작성

- export \* from 'components(경로별칭 적용)/App(index.ts와 동일 폴더에 위치한 파일명, tsx생략)'
- export \* from 'components(경로별칭 적용)/common(하위 폴더 입력시, 하위 폴더의 index.ts를 다시 탐색합니다.)'
- 따라서 components/index만으로 하위 폴더의 index는 추가적으로 명시할 필요가 없게 됩니다.
- e.g) `import { App, NotFound, ErrorComponent } from  'components/index'`
- App은 components내에, NotFound, ErrorComponents는 components/common내에 위치해있습니다.
- componets내의 index.ts에 `export  *  from  'components/common'` 를 입력해줌으로 예시의 구조로 import가 가능해집니다.

## etc

- utils/hooks/recoil등 추가적인 폴더들은 사용시에 생성하겠습니다.
- Router.tsx에서 페이지 생성시 추가 및 서비스 초기 진입은 signin으로 설정했습니다. 로그인 구현시 signin 컴포넌트 내부에서 로그인 성공 유저는 signin진입불가 예외처리 해주세요.
-
