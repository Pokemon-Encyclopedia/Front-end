import Link from "next/link";
import Phead from "../components/Phead";

const Install = () => {
  return (
    <section className="page-container" style={{position:"fixed" , left:"30%" , top:"20%"}}>
      <Phead seoTitle="설치페이지" />
      <div>
        <nav>
          <div className="btn-wrapper">
            <Link href="/">
              <a>{"< "}홈으로</a>
            </Link>
          </div>
          <hgroup>
            <h1>앱 설치하기</h1>
          </hgroup>
        </nav>
        <section className="contents">
          <section>
            Palette Vault는{" "}
            <a
              href="https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C_%EC%9B%B9_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98"
              target="_blank"
              rel="noreferrer"
            >
              프로그레시브 웹 애플리케이션
            </a>
            을 목표로 개발 진행 중이며 데스크톱과 모바일 환경에서 설치하여
            사용할 수 있습니다.
            <br />
            <br />
            아래 튜토리얼을 따라 설치를 진행하거나{" "}
            <Link href="/">
              <a>웹으로 계속하기</a>
            </Link>
            를 클릭하여 건너뛸 수 있습니다.
          </section>
          <section className="tutorial">
            <h3>설치 방법</h3>
            <section>
              <h4>안드로이드</h4>
              <ol>
                <li>1. 크롬 브라우저 설치</li>
                <li>2. 크롬으로 접속 후 홈 화면의 설치 버튼 클릭</li>
              </ol>
            </section>
            <section>
              <h4>iOS safari</h4>
              <ol>
                <li>1. 공유 버튼 클릭</li>
                <li>2. 홈 화면에 추가 클릭</li>
              </ol>
            </section>
            <section>
              <h4>설치에 실패할 경우</h4>
              <a
                href="https://support.google.com/chrome/answer/9658361?hl=ko&co=GENIE.Platform%3DAndroid&oco=0"
                target="_blank"
                rel="noreferrer"
              >
                설치 튜토리얼
              </a>{" "}
              참고
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Install;
