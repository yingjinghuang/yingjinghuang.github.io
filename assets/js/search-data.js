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
          description: "publications by categories in reversed chronological order. A full list can be found in Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A complete PDF version of my CV is available by clicking the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-am-starting-my-visit-at-the-mit-senseable-city-lab-as-a-visiting-ph-d-student",
          title: 'I am starting my visit at the MIT Senseable City Lab as a...',
          description: "",
          section: "News",},{id: "news-our-paper-on-comprehensive-urban-space-representation-with-varying-numbers-of-street-level-images-is-accepted-to-computers-environment-and-urban-systems",
          title: 'Our paper on “Comprehensive urban space representation with varying numbers of street-level images”...',
          description: "",
          section: "News",},{id: "news-presentation-on-2024-aag-annual-meeting",
          title: 'Presentation on 2024 AAG Annual Meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-our-paper-on-no-true-greenery-deciphering-the-bias-of-satellite-and-street-view-imagery-in-urban-greenery-measurement-is-accepted-to-building-and-environment",
          title: 'Our paper on “No “true” greenery: Deciphering the bias of satellite and street...',
          description: "",
          section: "News",},{id: "news-our-paper-on-intelligent-computational-representation-of-urban-imagery-in-chinese-is-accepted-to-geomatics-and-information-science-of-wuhan-university",
          title: 'Our paper on “Intelligent Computational Representation of Urban Imagery” （in Chinese）is accepted to...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis",
          title: 'I successfully defended my PhD thesis!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%6E%67%6A%69%6E%67%68%75%61%6E%67@%73%74%75.%70%6B%75.%65%64%75.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yingjinghuang", "_blank");
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
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Yingjing-Huang/", "_blank");
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
