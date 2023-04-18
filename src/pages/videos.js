import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeaturedVideo from '@site/src/components/FeaturedVideo/index';


const featuredVideos = [
    {
        mainCategory: 'devlife',
        title: 'Autocomplete in Your Terminal like a Pro by Jacob Mziya',
        author: 'Jacob Mziya',
        embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/TlwtqcvLjTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
        mainCategory: 'devlife',
        title: 'My Top 5 Technologies to Learn for Software Developers in 2022',
        author: 'Liwu Codes',
        embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/2LKJcZ2eHmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
        mainCategory: 'tutorials',
        categories: [ 'c#', 'dotnet'], // will we use these?   
        title: 'Build a Web App  with .NET 6 Blazor Full Stack Course Start to Finish by Code Unparalled',
        author: 'Code Unparalled - Simuzeche Kaluwa',
        embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/dSyNcsehnWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
]

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    const tutorialVideos = featuredVideos.filter(v => v.mainCategory == 'tutorials')
    const devLife = featuredVideos.filter(v => v.mainCategory == 'devlife')

    return (
      <Layout
        title={`Videos ${siteConfig.title}`}
        description="Featured Videos by Community Members">
        <h1>Featured Videos by Community Members</h1>
        <section>
            <ul>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Developer Life</a></li>
            </ul>
        </section> 
        <main>
          <h2>Tutorials</h2>
          {tutorialVideos.map((props, idx) => (
            <FeaturedVideo key={idx} {...props} />
          ))}
          <h2>Developer Life</h2>
          {devLife.map((props, idx) => (
            <FeaturedVideo key={idx} {...props} />
          ))}

        </main>
      </Layout>
    );
  }
  