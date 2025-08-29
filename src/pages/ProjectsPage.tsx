import {ReactNode} from 'react';
import PageSection from '../components/PageSection';
import Text from '../components/Text';
import ParallaxLayer, {ParallaxProps} from '@root/components/ParallaxLayer';

export const PROJECTS_PAGE_ID = 'projects';

const Project = ({
  imageUrl,
  title,
  description,
  href,
  cta,
  parallaxProps,
}: {
  imageUrl: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
  cta: string;
  parallaxProps?: ParallaxProps;
}) => {
  return (
    <ParallaxLayer
      {...parallaxProps}
      className="bg-white p-10 flex-1 flex flex-col"
    >
      <div
        className="w-full h-[200px] bg-center bg-cover bg-no-repeat rounded-xl "
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Text variation="large" className="py-4">
        {title}
      </Text>
      <Text variation="body" className="pb-15 flex-2">
        {description}
      </Text>
      <div className="text-center">
        <a
          href={href}
          className="p-4 px-10 rounded-lg bg-primary/80 text-white hover:bg-primary/100"
          target="_blank"
        >
          {cta}
        </a>
      </div>
    </ParallaxLayer>
  );
};

const ProjectsPage = () => {
  return (
    <PageSection
      id={PROJECTS_PAGE_ID}
      topBuffer
      className="bg-primary flex md:h-full"
    >
      <ParallaxLayer>
        <Text variation="title" className="text-white pt-2">
          Projects
        </Text>
        <div className="py-10 flex flex-col lg:flex-row gap-10">
          <Project
            parallaxProps={{moveFrom: 'left-top', translate: 'x'}}
            title="Travel Site"
            description="A travel/photo gallery site built off my iPhone's metadata. Next.js + Supabase photo gallery with Mapbox integration."
            cta="View Site"
            href="https://www.freewheeling.dev/"
            imageUrl="/images/travel_site.png"
          />
          <Project
            title="Van Dashboard"
            description="Raspberry Pi + React wall interface for inverter control, sensors,
and battery monitoring."
            cta="Github"
            href="https://github.com/stwhitejr/van-ui"
            imageUrl="/images/van_dashboard.jpg"
          />
          <Project
            parallaxProps={{moveFrom: 'right-bottom', translate: 'x'}}
            title="JSON Schema to UI"
            description="NPM package to generate UIs from JSON schemas."
            cta="Github"
            href="https://github.com/stwhitejr/json-schema-to-ui"
            imageUrl="/images/json_schema.png"
          />
        </div>
      </ParallaxLayer>
    </PageSection>
  );
};

export default ProjectsPage;
