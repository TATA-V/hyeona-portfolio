import styled from "styled-components";
import starBar from "../../assets/png-file/star-bar3.png";

import data from "./data";
import ProjectArticle from "./ProjectsMaterial/ProjectArticle";

const ProjectsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(320deg, #513d50, #292e39 60%);
`;

const RealProjectsBlock = styled.div`
  width: 974px;
  height: auto;
  padding: 84px 0 225px 0;

  .projects {
    padding: 0 0 43px 0;

    .projects-txt {
      width: 255px;
      height: 61px;
      color: #f9f9f9;
      font-size: 50px;
      font-weight: 700;
    }

    .star-bar {
      width: 25px;
      padding: 0 0 20px 4px;
      filter: drop-shadow(0 0 0.1px #e7c5d4);
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 355px;

    .projects {
      .projects-txt {
        font-size: 40px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    font-size: 35px;

    .projects {
      .projects-txt {
        font-size: 35px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }
`;

const ProjectSection = styled.section`
  .project-article:first-of-type {
    padding: 0 0 84px 0;
  }

  .project-article:last-of-type {
    padding: 84px 0 0 0;
    border-bottom: none;
  }
`;

const Projects = () => {
  return (
    <ProjectsBlock>
      <RealProjectsBlock>
        <div className="projects">
          <span className="projects-txt">PROJECTS</span>
          <img className="star-bar" src={starBar} alt="star" />
        </div>

        <ProjectSection>
          {data.map((el) => (
            <ProjectArticle
              key={el.id}
              id={el.id}
              img={el.img}
              date={el.date}
              title={el.title}
              subTitle={el.subTitle}
              contribution={el.contribution}
              stacks={el.stacks}
              content={el.content}
              features={el.features}
              githubLink={el.githubLink}
              githubTxt={el.githubTxt}
              deploLink={el.deploLink}
              deploTxt={el.deploTxt}
              storyLink={el.storyLink}
              storyTxt={el.storyTxt}
              linecolor={el.linecolor}
              viewDetail={el.viewDetail}
            />
          ))}
        </ProjectSection>
      </RealProjectsBlock>
    </ProjectsBlock>
  );
};

export default Projects;
