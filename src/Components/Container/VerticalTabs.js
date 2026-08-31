import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const VerticalTabs = () => {

  return (
    <div className="VerticalTabs">
      <Tabs className="Tabs" isLazy>
        <TabList className="TabList">
          <Tab _selected={{bg:"#ffffff16" }} className="Tab">
            <h5> Godspeed Systems </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> Notes Pitara </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> Freelance </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> BGIET, Sangrur </h5>
          </Tab>
        </TabList>
        <TabPanels className="TabPannels">
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> Technical Developer (Full-Stack) @ Godspeed Systems</h2>{" "}
              <h5>July 2024 - Present</h5>
              <li>
                Shipped LifeMaker, a professional networking platform,
                end-to-end across a Next.js frontend and Node.js API — owning
                both layers from specification through production release.
              </li>
              <li>
                Developed a full-stack community posts and engagement module —
                categorized posts and nested, threaded comments authored in
                Tiptap rich text with mentions and media embeds, plus
                reactions, shares, and multi-author collaboration.
              </li>
              <li>
                Designed a data-driven reaction system spanning 7 post
                categories and 8 reaction types, enforcing valid
                category–reaction pairs at the PostgreSQL level via composite
                foreign keys.
              </li>
              <li>
                Managed frontend deployments on Vercel and backend
                infrastructure on OVH VPS (Nginx, PM2) across two production
                products, and diagnosed production incidents across frontend,
                backend, and third-party integrations.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> Notes Pitara @ Personal Project</h2>{" "}
              <h5>Feb 2026 - Apr 2026</h5>
              <li>
                Owned frontend development of an academic notes platform in
                Next.js, React, TypeScript, Redux Toolkit, and RTK Query —
                building the discovery, authentication, uploads, dashboard,
                and admin-console experiences.
              </li>
              <li>
                Defined frontend/backend API contracts and established a
                contract-first OpenAPI workflow, standardizing
                request/response structures, pagination, RBAC requirements,
                and typed frontend API integration.
              </li>
              <li>
                Engineered SEO-friendly hierarchical routing with dynamic
                metadata, canonical URLs, and sitemap/robots generation —
                scoring 100 SEO and 99 Performance on Lighthouse with a 0.6s
                LCP and 0 CLS.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> Sukoon Band @ Freelance</h2>
              <h5>July 2026</h5>
              <li>
                Designed and shipped the production marketing site for a
                Vancouver-based live music act, including a booking-request
                flow delivering formatted lead emails to the client via a
                Next.js API route and the Resend API.
              </li>
              <li>
                Migrated the domain off a legacy WordPress install by serving
                410 Gone through Next.js middleware on an allowlist basis,
                deindexing stale URLs from Google faster than standard 404s
                would have.
              </li>
              <li>
                Optimized for search and social with per-page metadata,
                OpenGraph/Twitter cards, generated sitemap and robots routes,
                and AVIF/WebP image delivery via the Next.js image optimizer.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> B.Tech CSE @ BGIET, Sangrur</h2>{" "}
              <h5>July 2021 - July 2025</h5>
              <li>
                Completed B.Tech in Computer Science and Engineering at Bhai
                Gurdas Institute of Engineering and Technology, Sangrur, with
                a CGPA of 7.9/10.
              </li>
              <li>
                Actively participated in tech fests, workshops, and seminars
                to enhance my knowledge and skills in the field.
              </li>
              <li>
                Studied a wide range of subjects related to computer science,
                including algorithms, data structures, and software
                development.
              </li>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
