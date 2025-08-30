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
              Staff (L4) Frontend Engineer
              Boston,&nbsp;MA&nbsp;•&nbsp;2014&#8209;2025
            </ExperienceHeader>
          </div>

          <ParallaxLayer
            translate="x"
            moveFrom="left-top"
            className="gap-5 md:gap-10 flex flex-col"
          >
            <ExperienceCard title="Customer-Facing Work">
              <ExperienceList>
                <li>
                  Contributed to Wayfair.com storefront before and after IPO
                  growth, improving customer shopping experiences.
                </li>
                <li>
                  Owned development of marketing and transactional emails across
                  all Wayfair brands, reaching millions of customers weekly.
                </li>
                <li>
                  Built reusable, modular email template systems (PHP/XSLT →
                  Handlebars/Node) that reduced build time and improved brand
                  consistency.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="Internal Tooling & Platforms">
              <ExperienceList>
                <li>
                  Architected and maintained 7+ frontend applications powering
                  Wayfair’s communication platform suite.
                </li>
                <li>
                  Developed a new email template CMS, enabling non-engineers to
                  build batch + triggered emails without dev support.
                </li>
                <li>
                  Delivered multiple redesigns while maintaining parallel system
                  versions for operational continuity.
                </li>
              </ExperienceList>
            </ExperienceCard>
          </ParallaxLayer>

          <ParallaxLayer
            translate="x"
            moveFrom="right-bottom"
            className="gap-5 md:gap-10 flex flex-col"
          >
            <ExperienceCard title="Campaign & Flow Management System">
              <ExperienceList>
                <li>
                  Co-architected and owned Wayfair’s visual campaign and flow
                  builder, a no-code, schema-driven application enabling both
                  engineers and non-technical users to design and automate
                  flows.
                </li>
                <li>
                  Supported use cases from marketing campaigns to post-order
                  engineering workflows, managing triggers, conditional API
                  calls, and node-based orchestration.
                </li>
                <li>
                  Delivered a highly visual, extensible platform that allowed
                  users to build and manage flows without developer involvement.
                </li>
                <li>
                  Became a core platform used across multiple orgs — marketing,
                  logistics, operations, and engineering.
                </li>
              </ExperienceList>
            </ExperienceCard>

            <ExperienceCard title="Impact">
              <ExperienceList>
                <li>email systems serve 1B+ monthly sends</li>
                <li>
                  internal tools supports 100+ orgs / 400+ flows in production
                </li>
                <li>internal apps supported 1,000+ employees</li>
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
