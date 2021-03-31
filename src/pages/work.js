import React from "react";
import WorkPost from "components/work-post";
import financeScraper from "assets/finance-scraper.png";
import flashcardMaker from "assets/flashcard-maker.png";

export default React.memo(function Work() {
  return (
    <>
      <section className="fold">
        <h1>
          Hey. I&apos;m Ryan, a full-stack developer passionate about technology
          and creating real-world solutions.
        </h1>
      </section>
      <section className="disclaimer">
        <div className="sub-header">
          <h2>Personal work</h2>
        </div>
        <p>
          Below you will find some projects I&apos;ve done in my free-time.
          Check out my resume to learn about my professional work!
        </p>
      </section>
      <section className="work">
        <WorkPost
          title="Reddit Finance Scraper"
          copy={
            <>
              <p>
                A serverless app that scrapes popular finance subreddits every
                few minutes for analysis. The most mentioned tickers are
                identified, as well as the sentiment users had towards them.
                Updates are made in real-time (no need to refresh).
              </p>
              <p>
                Built using React, GraphQL, and various AWS services; including
                Lambda, AppSync, and CDK. Visit the GitHub repo for more
                details.
              </p>
            </>
          }
          buttonOneLabel="Demo"
          buttonTwoLabel="GitHub"
          image={financeScraper}
          buttonOneLink="https://www.financescraper.ryanjohnsondev.com"
          buttonTwoLink="https://github.com/rjohnson91/reddit-finance-analysis-ui"
          reverse
        />
        <WorkPost
          title="Flashcard Maker"
          copy={
            <>
              <p>
                This serverless CRUD app lets users create flashcard sets for
                study. Explore public flashcard sets or make an account to
                create your own. User progress is saved during each session.
              </p>
              <p>
                Built using React and various AWS services; including DynamoDB,
                Cognito, API Gateway, Lambda, and CDK. Visit the GitHub repo for
                more details.
              </p>
            </>
          }
          buttonOneLabel="Demo"
          buttonTwoLabel="GitHub"
          image={flashcardMaker}
          buttonOneLink="https://www.flashcardmaker.ryanjohnsondev.com"
          buttonTwoLink="https://github.com/rjohnson91/flashcardmaker"
        />
      </section>
    </>
  );
});
