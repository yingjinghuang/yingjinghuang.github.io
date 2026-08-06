// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experiences",
          title: "experiences",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experiences/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have taught or assisted with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Invited talks, conference presentations, and seminars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-services",
          title: "services",
          description: "Academic services including journal reviews, conference organization, and committee memberships.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-️-i-am-starting-my-visit-at-the-mit-senseable-city-lab-as-a-visiting-ph-d-student",
          title: '✈️ I am starting my visit at the MIT Senseable City Lab as...',
          description: "",
          section: "News",},{id: "news-our-paper-on-comprehensive-urban-space-representation-with-varying-numbers-of-street-level-images-is-accepted-to-computers-environment-and-urban-systems",
          title: '📄 Our paper on “Comprehensive urban space representation with varying numbers of street-level...',
          description: "",
          section: "News",},{id: "news-presentation-on-2024-aag-annual-meeting",
          title: 'Presentation on 2024 AAG Annual Meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-our-paper-on-no-true-greenery-deciphering-the-bias-of-satellite-and-street-view-imagery-in-urban-greenery-measurement-is-accepted-to-building-and-environment",
          title: '📄 Our paper on “No “true” greenery: Deciphering the bias of satellite and...',
          description: "",
          section: "News",},{id: "news-our-paper-on-intelligent-computational-representation-of-urban-imagery-in-chinese-is-accepted-to-geomatics-and-information-science-of-wuhan-university",
          title: '📄 Our paper on “Intelligent Computational Representation of Urban Imagery” (in Chinese) is...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis",
          title: 'I successfully defended my PhD thesis!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6.html";
            },},{id: "news-our-paper-on-measuring-urban-physical-environments-using-image-deep-features-a-case-study-is-accepted-to-cities",
          title: '📄 Our paper on “Measuring Urban Physical Environments Using Image Deep Features: A...',
          description: "",
          section: "News",},{id: "news-our-paper-on-representation-learning-for-geospatial-data-is-accepted-to-annals-of-gis",
          title: '📄 Our paper on “Representation learning for geospatial data” is accepted to Annals...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-receive-the-daad-ai-net-postdoc-fellowship",
          title: '🏆 I am honored to receive the DAAD AI-Net Postdoc Fellowship! 😁😁',
          description: "",
          section: "News",},{id: "news-our-paper-on-learning-street-view-representations-based-on-a-spatiotemporal-contrastive-learning-framework-is-accepted-to-computers-environment-and-urban-systems",
          title: '📄 Our paper on “Learning street view representations based on a spatiotemporal contrastive...',
          description: "",
          section: "News",},{id: "news-️-i-started-my-position-as-a-university-assistant-postdoc-at-the-university-of-vienna",
          title: '🏛️ I started my position as a University Assistant Postdoc at the University...',
          description: "",
          section: "News",},{id: "news-call-for-papers-geography-according-to-foundation-models-agile-2026",
          title: '📢 Call for Papers: Geography According to Foundation Models @ AGILE 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12.html";
            },},{id: "news-️-i-will-present-a-poster-at-egu-general-assembly-2026-in-vienna-austria-may-4-2026-see-you-at-hall-x5-board-x5-176",
          title: '🗺️ I will present a poster at EGU General Assembly 2026 in Vienna,...',
          description: "",
          section: "News",},{id: "news-deadline-extended-geography-according-to-foundation-models-agile-2026",
          title: '⏰ Deadline Extended: Geography According to Foundation Models @ AGILE 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_14.html";
            },},{id: "news-call-for-papers-special-issue-on-geoai-for-urban-sustainability-tus",
          title: '📢 Call for Papers: Special Issue on GeoAI for Urban Sustainability (TUS)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_15.html";
            },},{id: "news-our-perspective-article-on-advancing-urban-sustainability-with-visual-intelligence-is-accepted-to-science-bulletin",
          title: '📄 Our perspective article on “Advancing urban sustainability with visual intelligence” is accepted...',
          description: "",
          section: "News",},{id: "news-two-of-our-papers-have-been-accepted-to-acm-sigspatial-2026-investigating-the-multi-scale-reproducibility-of-geoai-models-for-urban-perception-was-accepted-as-a-full-paper-in-the-experiment-track-and-characterizing-multidimensional-landscape-discontinuities-at-phantom-borders-with-satellite-foundation-model-embeddings-was-accepted-as-a-poster-paper",
          title: '🎉 Two of our papers have been accepted to ACM SIGSPATIAL 2026! Investigating...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%61%6E%67%79%69%6E%67%6A%69%6E%67@%73%74%75.%70%6B%75.%65%64%75.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yingjinghuang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yingjinghuang", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8772-1403", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Yingjing-Huang/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=csRWjXUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
