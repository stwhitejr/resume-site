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
    <PageSection id={PROJECTS_PAGE_ID} topBuffer className="bg-primary flex">
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
            imageUrl="https://private-user-images.githubusercontent.com/19558731/468220883-5005f994-92e5-4669-a5c9-5c01e102fcc4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY0MTk0NTYsIm5iZiI6MTc1NjQxOTE1NiwicGF0aCI6Ii8xOTU1ODczMS80NjgyMjA4ODMtNTAwNWY5OTQtOTJlNS00NjY5LWE1YzktNWMwMWUxMDJmY2M0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI4VDIyMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ1ZTg2ZWMyMGE3Yzg2MTIzYTgzM2M4MGM2NzRhODAyMTY4MTNlNWMwYWEzN2Y5ZDI3YzliYjE1YTAzYThhNzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.IxPEeKxo1-oT8rZsmpkA27GqP2WfOe72-NmYcbDOzIk"
          />
          <Project
            title="Van Dashboard"
            description="Raspberry Pi + React wall interface for inverter control, sensors,
and battery monitoring."
            cta="Github"
            href="https://github.com/stwhitejr/van-ui"
            imageUrl="https://private-user-images.githubusercontent.com/19558731/473490692-37672f85-7051-4777-aa6b-e53a8268ccfe.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY0MjA1NDcsIm5iZiI6MTc1NjQyMDI0NywicGF0aCI6Ii8xOTU1ODczMS80NzM0OTA2OTItMzc2NzJmODUtNzA1MS00Nzc3LWFhNmItZTUzYTgyNjhjY2ZlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI4VDIyMzA0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM0NDdiZDIwZDljMWFjN2NiYjg3ZjIzMjc5Mjc5MmEzNTliMzU1NzM3NjgzYmU4ZGNkYzM2NjQ3ODU3NGQ4YmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.uGVcjrKTu3K9yi-AAEYIr0uLzGioV96IWpOwDz3xnH8"
          />
          <Project
            parallaxProps={{moveFrom: 'right-bottom', translate: 'x'}}
            title="JSON Schema to UI"
            description="NPM package to generate UIs from JSON schemas."
            cta="Github"
            href="https://github.com/stwhitejr/json-schema-to-ui"
            imageUrl="https://private-user-images.githubusercontent.com/19558731/423242928-5e5532c6-09fe-4662-aee2-d50d41aa5396.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY0MjA2NDEsIm5iZiI6MTc1NjQyMDM0MSwicGF0aCI6Ii8xOTU1ODczMS80MjMyNDI5MjgtNWU1NTMyYzYtMDlmZS00NjYyLWFlZTItZDUwZDQxYWE1Mzk2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI4VDIyMzIyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYwYjQ5NTg4ODhiNTc2MDZhZWRlM2JkOWJhYTZjNGRmY2M1MGM3ZDAxNDkzZTZhZjlkMTA0ZDIxNWJlODVjYjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.r4WAhCEOOdGdlglbzrDsKgogmUrwpDsC57ZAjHmG-pg"
          />
        </div>
      </ParallaxLayer>
    </PageSection>
  );
};

export default ProjectsPage;
