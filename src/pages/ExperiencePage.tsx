import Skills from '@root/components/Skills';
import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';
import {HTMLAttributes, ReactNode} from 'react';

export const EXPERIENCE_PAGE_ID = 'experience';

const ExperienceCard = ({
  title,
  children,
  className,
}: {
  title: ReactNode;
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}) => {
  return (
    <div className={`bg-white w-full p-10 self-start ${className} shadow-md`}>
      <Text variation="body" className="text-secondary mb-5">
        {title}
      </Text>
      <Text variation="small">{children}</Text>
    </div>
  );
};

const ExperienceList = ({children}: {children: ReactNode}) => {
  return <ul className="list-disc pl-4 space-y-4">{children}</ul>;
};

const ExperienceHeader = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => {
  return (
    <>
      <Text variation="subtitle" className="mb-2">
        {title}
      </Text>
      <Text variation="small" className="italic">
        {children}
      </Text>
    </>
  );
};

const ExperiencePage = () => {
  return (
    <PageSection
      id={EXPERIENCE_PAGE_ID}
      topBuffer
      bottomBuffer
      className="bg-secondary--light"
    >
      <ParallaxLayer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div className="md:row-start-1 md:col-start-1">
            <Text variation="title" className="mb-3 md:mb-0">
              Experience & Skills
            </Text>
          </div>
          <div>
            <Skills />
          </div>

          <div className="md:col-start-1 md:row-start-1 md:mt-auto pt-5 md:pt-20">
            <ExperienceHeader title="Wayfair">
              Senior Frontend Engineer
              Boston,&nbsp;MA&nbsp;•&nbsp;2014&#8209;Present
              <br />
              Storefront&nbsp;•&nbsp;Communications&nbsp;Platform&nbsp;•&nbsp;Marketing&nbsp;Engineering
            </ExperienceHeader>
          </div>

          <ParallaxLayer
            translate="x"
            moveFrom="left-top"
            className="gap-5 md:gap-10 flex flex-col"
          >
            <ExperienceCard title="Storefront & Ecommerce Experiences">
              <ExperienceList>
                <li>
                  Built upper and middle-funnel shopping pages, including the
                  Wayfair.com homepage and product details page.
                </li>
                <li>
                  Built CMS-driven pages on Next.js and federated GraphQL,
                  designing schemas for CMS blocks that map directly to frontend
                  components.
                </li>
                <li>
                  Tech lead for the favorites and influencers experiences.
                </li>
                <li>
                  Shipped customer-facing features for Wayfair and its sister
                  brands from before the IPO through its growth years.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="Cross-Platform Architecture">
              <ExperienceList>
                <li>
                  Led a ground-up rebuild of Favorites, redesigning the
                  backend-for-frontend layer and the web, Android, and iOS
                  clients. New feature work went from months to about a week.
                </li>
                <li>
                  Was a key contributor to a site-wide re-architecture of
                  tracking events, uncovering hidden business logic and working
                  with data scientists and engineers across time zones.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="Email at Scale">
              <ExperienceList>
                <li>
                  Owned marketing and transactional emails across all Wayfair
                  brands, reaching millions of customers weekly.
                </li>
                <li>
                  Rebuilt the email templating system (PHP/XSLT → modular
                  Handlebars/Node), speeding up builds and improving brand
                  consistency.
                </li>
              </ExperienceList>
            </ExperienceCard>
          </ParallaxLayer>

          <ParallaxLayer
            translate="x"
            moveFrom="right-bottom"
            className="gap-5 md:gap-10 flex flex-col"
          >
            <ExperienceCard title="Communications Platform (Internal SaaS)">
              <ExperienceList>
                <li>
                  Helped build and lead a 7-person frontend team for Wayfair’s
                  in-house communications platform, used by marketing, adtech,
                  recommendations, and order teams.
                </li>
                <li>
                  Architected 7+ React/TypeScript/Redux SPAs with complex
                  client-side state, delivering several redesigns while keeping
                  previous versions running in parallel.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="No-Code Workflow & Content Tools">
              <ExperienceList>
                <li>
                  Co-architected a visual, schema-driven flow builder (similar
                  to n8n) covering triggers, conditional API calls, and
                  node-based orchestration.
                </li>
                <li>
                  Grew it to hundreds of users, from marketing analysts to
                  logistics and operations engineers, running campaigns and
                  post-order workflows without a developer.
                </li>
                <li>
                  Co-created an email template CMS that lets non-engineers build
                  batch and triggered emails; still in production.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="Leadership & Ways of Working">
              <ExperienceList>
                <li>
                  Managed frontend engineers while staying hands-on in the code,
                  then moved to the IC tech-lead track.
                </li>
                <li>
                  Size work in 6-month planning cycles, flag risks and
                  cross-team dependencies early, and partner with Product on
                  technical and customer edge cases.
                </li>
                <li>
                  Use AI coding agents daily (Cursor, Devin) and author custom
                  agent skills, while keeping code review rigorous.
                </li>
              </ExperienceList>
            </ExperienceCard>
          </ParallaxLayer>

          <div className="md:col-span-2 pt-5">
            <ExperienceHeader title="ICON Advertising & Design">
              Designer / Web Developer •
              Boston,&nbsp;MA&nbsp;•&nbsp;2011&#8209;2014
            </ExperienceHeader>
          </div>

          <ParallaxLayer translate="x" moveFrom="left-top">
            <ExperienceCard title="Web Development">
              <ExperienceList>
                <li>
                  Built customer-facing websites (static and dynamic) for small
                  and medium-sized businesses, improving their online presence.
                </li>
                <li>
                  Delivered full-stack solutions: HTML, CSS, JS, PHP backends,
                  plus email campaigns.
                </li>
              </ExperienceList>
            </ExperienceCard>
          </ParallaxLayer>

          <ParallaxLayer translate="x" moveFrom="right-bottom">
            <ExperienceCard title="Design">
              <ExperienceList>
                <li>
                  Designed visual assets (brochures, logos, event signage) —
                  blending creative direction with technical delivery.
                </li>
                <li>
                  Owned projects end-to-end in a scrappy, agency-style
                  environment.
                </li>
              </ExperienceList>
            </ExperienceCard>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>
    </PageSection>
  );
};

export default ExperiencePage;
