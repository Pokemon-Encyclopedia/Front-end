import Link from "next/link";
import Phead from "../components/Phead";
import styled from "@emotion/styled";


const Install = () => {
  return (
    <PageContainer className="PageContainer">
      <Phead seoTitle="설치페이지" />
      <div>
        <nav>
          <div className="btn-wrapper">
            <Link href="/">
              <a>{"< "}홈으로</a>
            </Link>
          </div>
            <h1>앱 설치하기</h1>
        </nav>
        <section className="contents">
          <section>
            <a
              href="https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C_%EC%9B%B9_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98"
              target="_blank"
              rel="noreferrer"
            >
              <b>프로그레시브 웹 애플리케이션</b>
            </a>
            을 목표로 개발 진행 중이며 데스크톱과 모바일 환경에서 설치하여
            사용할 수 있습니다.
            <br />
          </section>
          <section className="tutorial">
            <h3>설치 방법</h3>
            <section>
              <h4>안드로이드</h4>
              <ol>
                <li>크롬 브라우저 설치</li>
                <li>크롬으로 접속 후 홈 화면의 설치 버튼 클릭</li>
              </ol>
            </section>
            <section>
              <h4>iOS</h4>
              <ol>
                <li>safari 앱으로 실행</li>
                <li>공유 버튼 클릭</li>
                <li>홈 화면에 추가 클릭</li>
              </ol>
            </section>  
          </section>
        </section>
      </div>
    </PageContainer>
  );
};



const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10% 0 ;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 50% 40px;
    }
`;


export default Install;
