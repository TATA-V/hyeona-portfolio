import lumianJpg from '../../assets/jpg-file/lumian.jpg';
import todolistJpg from '../../assets/jpg-file/tata-todolist.jpg';
import portfolioJpg from '../../assets/jpg-file/portfolio.jpg';

export interface IMyRole {
  figma: string;
  main: string;
  music: string;
  feed: string;
}

export interface IViewDetail {
  title: string;
  meaningContent: string;
  deploLink: string;
  deploTxt: string;
  githubLink: string;
  githubTxt: string;
  stacks: string;
  summarygContent: string;
  featuresContent: string;
  backgroundContent: string;
  myRole?: IMyRole;
  storyLink?: string;
  storyTxt?: string;
}

export interface IProjectData {
  id: number;
  img: any;
  date: string;
  title: string;
  subTitle: string;
  contribution: string;
  stacks: string;
  content: string;
  features: string;
  githubLink: string;
  githubTxt: string;
  deploLink: string;
  deploTxt: string;
  storyLink?: string;
  storyTxt?: string;
  linecolor: string;
  viewDetail: IViewDetail;
}

const data: IProjectData[] = [
  {
    id: 1,
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
    deploLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
    deploTxt: 'LUMIAN',
    linecolor: '#343843',
    viewDetail: {
      title: '루미안(Lumian) - 좋아하는 아티스트와 소통할 수 있는 서비스',
      meaningContent: `Lumian + Via (빛 + 길)
      Lumian은 라틴어 Luminae와 via를 합쳐서 만든 이름으로, 빛이 가득한 길을 의미합니다.
      
      빛은 영감과 창의성을 상징하는 요소로, Luminae과 via는
      아티스트와팬 간의 관계를 나타내며, 빛이 가득한 길로 함께 나아가는 것을 상징합니다.`,
      deploLink: 'http://lumian.s3-website.ap-northeast-2.amazonaws.com/',
      deploTxt: 'LUMIAN',
      githubLink: 'https://github.com/TATA-V/lumian-project',
      githubTxt: 'github.com/TATA-V/lumian',
      stacks: 'React, Redux-toolKit, Styled-components, Axios, AmazonS3, ESLint, Prettier, Figma',
      summarygContent: `위버스에서 영감을 받아 만들었습니다. Lumian은 아티스트와 팬 간의 경계를 허물고, 함께 소통할 수 있는 공간입니다.`,
      myRole: {
        figma: `Figma를 사용하여 전체 페이지를 디자인하였습니다. header, nav, footer 그리고 Feed 페이지와 Artist 페이지에서 사용하는 DetailPost, Comment 등의 공통 컴포넌트들을 제작했습니다.`,
        main: `웹 사이트의 첫 페이지는 사용자가 처음 접하는 부분이기 때문에, 사용자의 흥미를 끌기 위해 그래픽 요소를 적절히 활용하였습니다.`,
        music: `아티스트가 팬들에게 플레이리스트를 공유하는 페이지입니다. Redux를 사용하여 음악 재생 상태를 관리하고, 다음 음악으로 자동 전환하는 기능을 구현했습니다.`,
        feed: `팬만 게시글을 작성할 수 있는 페이지입니다. 모달 안에 모달이 있는 형태를 구현하면서 useRef와 position 속성에 대해 더 잘 알게 되었습니다.
      `,
      },
      featuresContent: `⦁ 일반 유저, 아티스트 회원가입 및 로그인
      ⦁ 원하는 아티스트의 커뮤니티 가입
      ⦁ 아티스트가 추천해 주는 플레이리스트가 있는 music 페이지
      ⦁ 팬들만 게시글을 작성 할 수 있는 Feed 페이지
      ⦁ 아티스트만 게시글을 작성 할 수 있는 Artist 페이지
      ⦁ 아티스트 검색 기능`,
      backgroundContent: `평소에 연예인과 관련된 분야에 관심이 많았기에, 팬과 아티스트가 소통할 수 있는 서비스를 만들고 싶었습니다.
      실제로 사용해 본 적 있는 위버스 웹 사이트를 벤치마킹하여 Lumian 웹 사이트를 디자인하였습니다.

      위버스와 조금 다른 점은 아티스트가 추천해 주는 플레이리스트가 있다는 점입니다.
      현재 뮤직 페이지는 서버가 없으며, 클라이언트만 구현되어 있습니다.

      프론트 3명, 백엔드 2명으로 이루어진 팀으로, 좋은 팀원분들을 만나 Lumian 프로젝트를 완성하였습니다.`,
    },
  },
  {
    id: 2,
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
    storyLink:
      'https://tata-v.github.io/todolist-storybook-typescript/?path=/story/main-adcbutton--primary',
    storyTxt: 'TATA’s-Todo-List-Storybook',
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
      summarygContent: `메인 페이지, 알림 페이지, 설정 페이지가 있습니다.
      플러스 버튼을 눌러 todo를 생성할 수 있으며, 텍스트 클릭 시 내용 수정이 가능합니다.
      
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
      storyLink:
        'https://tata-v.github.io/todolist-storybook-typescript/?path=/story/main-adcbutton--primary',
      storyTxt: 'TATA’s-Todo-List-Storybook',
    },
  },
  {
    id: 3,
    img: portfolioJpg,
    date: '2023.06.05 ~ 2023.06.15',
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
