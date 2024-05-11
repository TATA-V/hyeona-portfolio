import lumianJpg from '../../assets/jpg-file/lumian.jpg';
import todolistJpg from '../../assets/jpg-file/tata-todolist.jpg';
import portfolioJpg from '../../assets/jpg-file/portfolio.jpg';
import aurawavePng from '../../assets/png-file/aurawave.png';
import briefyPng from '../../assets/png-file/briefy.png';

export interface IMyRole {
  figma: string;
  main: string;
  music: string;
  feed: string;
}

export interface IViewDetail {
  title: string;
  meaningContent: string;
  deploLink?: string;
  deploTxt?: string;
  githubLink: string;
  githubTxt: string;
  stacks: string;
  summarygContent: string;
  featuresContent: string;
  backgroundContent?: string;
  myRole?: IMyRole;
  storyLink?: string;
  storyTxt?: string;
}

export interface IProjectData {
  id: number;
  img: any | any[];
  date: string;
  title: string;
  subTitle: string;
  contribution: string;
  stacks: string;
  content: string;
  features: string;
  githubLink: string;
  githubTxt: string;
  deploLink?: string;
  deploTxt?: string;
  storyLink?: string;
  storyTxt?: string;
  linecolor: string;
  viewDetail: IViewDetail;
}

const data: IProjectData[] = [
  {
    id: 1,
    img: briefyPng,
    date: '2024.01 ~ 02',
    title: 'Briefy',
    subTitle: '팀 프로젝트 (프론트 1명, 백엔드 1명, 디자이너 1명, 기획자 1명)',
    contribution: '100%(프론트엔드)',
    stacks: 'React, Typescript, Storybook, TailwindCSS, Styled-components, Framer-motion, Vercel, Figma, Vite',
    content: `📨뉴스레터 구독 서비스\n시간이 없어도 세상은 궁금하니까!\n세상 돌아가는 소식을 쉽고 재미있게 받아보세요\n\n 관심있는 뉴스 분야를 선택하면 뉴스레터를 추천해 드리고,
    뉴스레터 구독 시 브리피 전용 메일에 뉴스를 보내드립니다.
    `,
    features: `구글 로그인, 브리피 전용 메일 생성, 뉴스레터 추천 기능, 뉴스레터 구독시 메일에 뉴스 전송`,
    githubLink: 'https://github.com/TATA-V/briefy',
    githubTxt: 'github.com/TATA-V/briefy',
    deploLink: 'https://briefy.vercel.app/',
    deploTxt: 'briefy deploy link',
    storyLink: 'https://tata-v.github.io/briefy-storybook/',
    storyTxt: 'briefy storybook deploy link',
    linecolor: '#343843',
    viewDetail: {
      title: 'Briefy - 뉴스레터 구독 서비스',
      meaningContent: `팀 프로젝트 (프론트 1명, 백엔드 1명, 디자이너 1명, 기획자 1명)
      
      📨뉴스레터 구독 서비스
      시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요
      
      관심있는 뉴스 분야를 선택하면 뉴스레터를 추천해 드리고,
      뉴스레터 구독 시 브리피 전용 메일에 뉴스를 보내드립니다.`,
      deploLink: 'https://briefy.vercel.app/',
      deploTxt: 'briefy deploy link',
      storyLink: 'https://tata-v.github.io/briefy-storybook/',
      storyTxt: 'briefy storybook deploy link',
      githubLink: 'https://github.com/TATA-V/briefy',
      githubTxt: 'github.com/TATA-V/briefy',
      stacks: 'React, Typescript, Storybook, TailwindCSS, Styled-components, Framer-motion, Vercel, Figma, Vite',
      summarygContent: `피그마 디자인을 기반으로
      공통 컴포넌트로 사용하게 될 부분들을 스토리북으로 구성했습니다.
      이 스토리북을 npm에 배포하여 편리하게 공유하고 활용할 수 있도록 만들었습니다.
      github actions를 활용해서 push가 될때마다 npm에 자동 배포가 될 수 있도록 했습니다.
      
      관심있는 뉴스 분야를 선택하면 뉴스레터를 추천해 드리고,
      뉴스레터 구독 시 브리피 전용 메일에 뉴스를 보내드립니다.
      
      tailwind css를 사용하여 반응형 디자인을 적용했고,
      PWA로 PC나 모바일의 홈 화면에 briefy를 설치해서 사용할 수 있도록 했습니다.
      아직 백엔드와 연결은 안 되어 있는 상태이며, 진행 중인 프로젝트입니다.`,
      featuresContent: `⦁ 구글 로그인
      ⦁ 브리피 전용 메일 생성
      ⦁ 뉴스레터 추천
      ⦁ 뉴스레터 구독시 메일에 뉴스 전송
      `
    },
  },
  {
    id: 2,
    img: aurawavePng,
    date: '2023.09.18 ~ 2024.03.03',
    title: 'AuraWave',
    subTitle: '커스텀 음악, 플레이리스트 공유 (개인 프로젝트)',
    contribution: '100%',
    stacks: 'Next.js14, Recoil, typescript, Styled-components, react-hook-form, Firebase, Framer-motion, Vercel, Figma',
    content: `음악에 감성 한 스푼🥄\n
    모닥불, 여름밤, 빗소리, 함박눈 소리를 얹어 음악을 들을 수 있으며,\n 유저들끼리 플레이리스트를 공유할 수 있습니다. 위치 권한을 허용하면, 현재 날씨에 어울리는 배경음을 추천해 드립니다.\n\n 커스텀 한 배경 음악에 따라 메인 페이지에 있는\n 대표 이미지의 배경 효과가 달라집니다.`,
    features: `회원가입, 로그인, 음악 추가, 플레이리스트 생성, 음악 컨트롤 바, 날씨에 맞는 배경음 추천, 음악 커스텀 기능`,
    githubLink: 'https://github.com/TATA-V/aurawave',
    githubTxt: 'github.com/TATA-V/aurawave',
    deploLink: 'https://www.aurawave.site',
    deploTxt: 'aurawave deploy link',
    linecolor: '#343843',
    viewDetail: {
      title: 'AuraWave - 음악에 감성 한 스푼🥄',
      meaningContent: `커스텀 음악, 플레이리스트 공유 (개인 프로젝트)
      
      모닥불, 여름밤, 빗소리, 함박눈 소리를 얹어 음악을 들을 수 있으며,
      유저들끼리 플레이리스트를 공유할 수 있습니다.
      위치 권한을 허용하면, 현재 날씨에 어울리는 배경음을 추천해 드립니다.
      
      커스텀 한 배경 음악에 따라 메인 페이지에 있는 대표 이미지의 배경 효과가 달라집니다.`,
      deploLink: 'https://www.aurawave.site',
      deploTxt: 'aurawave deploy link',
      githubLink: 'https://github.com/TATA-V/aurawave',
      githubTxt: 'github.com/TATA-V/aurawave',
      stacks: 'Next.js14, Recoil, typescript, Styled-components, react-hook-form, Firebase, Framer-motion, Vercel, Figma',
      summarygContent: `PWA로 PC나 모바일의 홈 화면에 설치해서 사용할 수 있습니다.
      
      백엔드로는 Firebase를 사용했습니다.
      일반 로그인, 구글 로그인은 firebase auth를 사용했으며,
      어드민 계정일 경우 음악, 앨범 이미지, 출처 등를 넣고
      음악을 등록하거나 삭제할 수 있으며 aurawave 플레이리스트를 등록할 수 있습니다.
      
      firestore database로 유저 정보, 음악 정보, aurawave 플레이리스트, user 플레이리스트
      총 4개의 데이터베이스로 나눠놨습니다. 음악과 이미지는 firebase storage를 사용했습니다.`,
      featuresContent: `⦁ 로그인, 회원가입
      ⦁ 음악 추가, 수정, 삭제
      ⦁ 플레이리스트 생성, 수정, 삭제
      ⦁ 음악 컨트롤 바
      ⦁ 음악 커스텀
      ⦁ 배경 음악에 따라 바뀌는 대표 이미지 배경 효과
      `,
    },
  },
  {
    id: 3,
    img: lumianJpg,
    date: '2023.04.28 ~ 2023.05.25',
    title: '루미안(LUMIAN)',
    subTitle: '팀 프로젝트 (프론트 3명, 백엔드 2명/4주)',
    contribution: '50%',
    stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',
    content: `위버스에서 영감을 받아 만들었습니다. Lumian은 좋아하는 아티스트와 소통할 수 있는 공간입니다. 피그마 디자인과 header, nav, footer,
    DetailPost, Comment 등의 공통 컴포넌트, 메인 페이지, 뮤직 페이지, 피드 페이지를 담당하였습니다.`,
    features: `원하는 아티스트의 커뮤니티 가입, 아티스트가 추천해 주는 플레이리스트, 팬들만 게시글을 작성 할 수 있는 Feed 페이지, 아티스트만 게시글을
    작성 할 수 있는 Artist 페이지`,
    githubLink: 'https://github.com/TATA-V/lumian-project',
    githubTxt: 'github.com/TATA-V/lumian-project',
    // deploLink: 'http://lumian-project.s3-website.ap-northeast-2.amazonaws.com',
    // deploTxt: 'LUMIAN',
    linecolor: '#343843',
    viewDetail: {
      title: '루미안(Lumian) - 좋아하는 아티스트와 소통할 수 있는 서비스',
      meaningContent: `Lumian + Via (빛 + 길)
      Lumian은 라틴어 Luminae와 via를 합쳐서 만든 이름으로, 빛이 가득한 길을 의미합니다.
      
      빛은 영감과 창의성을 상징하는 요소로, Luminae과 via는
      아티스트와팬 간의 관계를 나타내며, 빛이 가득한 길로 함께 나아가는 것을 상징합니다.`,
      // deploLink: 'http://lumian-project.s3-website.ap-northeast-2.amazonaws.com',
      // deploTxt: 'LUMIAN',
      githubLink: 'https://github.com/TATA-V/lumian-project',
      githubTxt: 'github.com/TATA-V/lumian',
      stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',
      summarygContent: `위버스에서 영감을 받아 만들어진 Lumian은 아티스트와 팬 간의 경계를 허물고, 함께 소통할 수 있는 공간입니다.

        header, nav, footer 그리고 Feed 페이지와 Artist 페이지에서 사용하는 DetailPost, Comment 등의 공통 컴포넌트들을 제작했습니다.
        처음 웹 사이트에 들어오면 보이는 부분인 main 페이지와 팬만 게시글을 작성할 수 있는 feead 페이지와
        아티스트가 팬들에게 플레이리스트를 공유할 수 있는 music 페이지도 제작하였으며,
        redux-toolkit을 사용하여 음악 재생 상태를 관리하고 다음 음악으로 자동 전환하는 기능을 구현했습니다.
      `,
      featuresContent: `⦁ 일반 유저, 아티스트 회원가입 및 로그인
      ⦁ 원하는 아티스트의 커뮤니티 가입
      ⦁ 아티스트가 추천해 주는 플레이리스트가 있는 music 페이지
      ⦁ 팬들만 게시글을 작성 할 수 있는 Feed 페이지
      ⦁ 아티스트만 게시글을 작성 할 수 있는 Artist 페이지
      ⦁ 아티스트 검색 기능`,
      backgroundContent: `평소에 연예인과 관련된 분야에 관심이 많았기에, 팬과 아티스트가 소통할 수 있는 서비스를 만들고 싶었습니다.
      프론트 3명, 백엔드 2명으로 이루어진 팀으로, 좋은 팀원분들을 만나 Lumian 프로젝트를 완성하였습니다.`,
    },
  },
  {
    id: 4,
    img: todolistJpg,
    date: '2023.05.14',
    title: 'TATA’s Todo-List',
    subTitle: '일정 관리를 위한 Todo-List (개인 프로젝트)',
    contribution: '100%',
    stacks: 'React, Redux, Styled-components, Typescript, Storybook, Figma',
    content: `BT21 캐릭터 컨셉으로 디자인하였으며, 타입스크립트와 스토리북을 사용했습니다. Todo를 쉽게 생성하고 수정, 삭제할 수 있으며 Fold, Unfold를 눌러 리스트들을 접거나 필 수 있습니다.`,
    features: `Todo 생성, 수정, 삭제, Todo list를 접거나 필 수 있는 기능`,
    githubLink: 'https://github.com/TATA-V/todolist-storybook-typescript',
    githubTxt: 'github.com/TATA-V/todolist',
    deploLink: 'https://tata-v.github.io/react-todolist-redux/',
    deploTxt: 'TATA’s-Todo-List',
    linecolor: '#4C434D',
    viewDetail: {
      title: "TATA's Todo-List",
      meaningContent: `TATA의 todo-list📝
      일정 관리를 위한 투두리스트입니다.

      BT21의 TATA 캐릭터 컨셉으로,
      귀엽고 친근한 분위기를 느낄 수 있습니다.`,
      deploLink: 'https://tata-v.github.io/react-todolist-redux/',
      deploTxt: 'TATA’s-Todo-List',
      githubLink: 'https://github.com/TATA-V/todolist-storybook-typescript',
      githubTxt: 'github.com/TATA-V/todolist',
      stacks: 'React, Redux, Styled-components, Typescript, Storybook, Figma',
      summarygContent: `일정 관리를 위한 투두리스트입니다.
      Figma로 디자인한 후 만든 첫 프로젝트이며, 
      Pure Redux로 전역 상태 관리 연습을 위해 제작되었습니다.
      
      이 프로젝트는 초기에 javascript로 개발되었습니다. 
      이후 타입 안정성을 위해 typescript로 리팩토링하였고,
      storybook을 도입하여 컴포넌트를 문서화했습니다.
      
      이러한 경험을 통해 storybook과 typescript의 사용법에 익숙해졌으며,
      체계적인 코드 관리와 유지보수성을 높이는 방법에 대해 고민하는 계기가 되었습니다.`,
      featuresContent: `⦁ todo 생성, 수정, 삭제
      ⦁ todo list를 접거나 필 수 있는 기능
      `,
      backgroundContent: `Figma로 디자인한 후 만든 첫 프로젝트이며, 전역 상태 관리 연습을 위해 제작되었습니다.
      `,
    },
  },
  {
    id: 5,
    img: portfolioJpg,
    date: ' ',
    title: "HYEONA'S PORTFOLIO",
    subTitle: '포트폴리오 웹사이트 (개인 프로젝트)',
    contribution: '100%',
    stacks: 'React, Typescript, Styled-components, Figma',
    content: `포트폴리오 용으로 제작한 웹사이트입니다.`,
    features: `인적사항, 기술 스택, 프로젝트 경험`,
    githubLink: 'https://github.com/TATA-V/hyeona-portfolio',
    githubTxt: 'github.com/TATA-V/portfolio',
    deploLink: 'https://tata-v.github.io/hyeona-portfolio/',
    deploTxt: 'HYEONA-PORTFOLIO',
    linecolor: '#4C434D',
    viewDetail: {
      title: "HYEONA'S PORTFOLIO",
      meaningContent: `hyeona의 포트폴리오 웹 사이트`,
      deploLink: 'https://tata-v.github.io/hyeona-portfolio/',
      deploTxt: 'HYEONA-PORTFOLIO',
      githubLink: 'https://github.com/TATA-V/hyeona-portfolio',
      githubTxt: 'github.com/TATA-V/portfolio',
      stacks: 'React, Typescript, Styled-components, Figma',
      summarygContent: `Figma로 디자인한 후 typescript로 만들었으며,
      포트폴리오 용으로 제작한 웹사이트입니다.`,
      featuresContent: `⦁ 인적 사항
      ⦁ 기술 스택
      ⦁ Github 및 블로그 링크
      ⦁ 프로젝트 경험`,
      backgroundContent: `프로젝트 경험과 역량을 시각적으로 보여주기 위해 제작하였습니다.`,
    },
  },
];

export default data;
