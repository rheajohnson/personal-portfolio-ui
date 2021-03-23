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
      <section className="sub-header">
        <h3>Featured work</h3>
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
                Built using AWS Lambdas, AppSync, a GraphQL API, and React. The
                infrastructure is managed with AWS CDK. Visit the GitHub repo
                for more details.
              </p>
            </>
          }
          buttonOneLabel="Demo"
          buttonTwoLabel="GitHub"
          image={financeScraper}
          buttonOneLink="https://www.financescraper.ryanjohnsondev.com"
          buttonTwoLink="https://github.com/rjohnson91/reddit-finance-analysis-ui"
        />
        <WorkPost
          title="Flashcard Maker"
          copy={
            <>
              <p>
                This serverless CRUD app lets users create flashcard sets for
                study. Explore public flashcard sets, or make an account to
                create your own. User progress is saved during each session.
              </p>
              <p>
                Built using React and various AWS services; including DynamoDB,
                Cognito, API Gateway, Lambdas, and CDK. Visit the GitHub repo
                for more details.
              </p>
            </>
          }
          buttonOneLabel="Demo"
          buttonTwoLabel="GitHub"
          image={flashcardMaker}
          buttonOneLink="https://www.flashcardmaker.ryanjohnsondev.com"
          buttonTwoLink="https://github.com/rjohnson91/flashcardmaker"
          reverse
        />
      </section>
    </>
  );
});
