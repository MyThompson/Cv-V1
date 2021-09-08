module.exports = {
  name: 'Mercedes Thompson',
  title: 'Software Developer, Animator',
  facts: {
    'Homepage': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
                  <span class="print">https://en.wikipedia.org/wiki/William_Shakespeare</span>
                  <span class="screen">wiki</span>
                </a>`,
    'Email': '<a href="mailto:Mythompson@bsu.edu">Mythompson@bsu.edu</a>'
  },
  education: [
      "Bachelors of Computer Science (anticipated)",
      "Bachelors of Fine Arts: Animation (anticipated)"
    ],
 
  experience: [
    {
      header: 'Developer Intern',
      contents: `Five week internship at Docket, a portfolio company of High Alpha`,
      date:"7/2019 - 8/2018"
    }
  ],
  skills: [
    {
            title: 'Full Stack Development and Software Engineering',
            website: '(github)',
            languages:['Javascript', "React", "Python", "Java", 'C/C++/C#', 'sql'],
            familiarsSoftware:["placeholder"]
    },
    {
            title: 'Animation and Art',
            website: '(artstation)',
            mediums:['3D animation and modeling','2D animation', 'Digital Illustration', 'Traditional Art'],
            software:["Adobe Suite", "Maya", "Blender", "ZBrush", "Toonboom Harmony"]
    }
  ],
  projects: [
    {
      project:'Port Call Simulation',
      languages: ['python', 'sql'],
      description:'Exercise consisting of using simulated data to create a fully functioning backend from the ground up. The system consists of a database comprised of several related data sets, of which were then communicated and manipulated with and upper level set of DAOS and queries that are available to be parsed through a front end.'
    },
    {
      project:'Simulated Authentication System',
      languages: ['HTML', 'Javascript'],
      description:'A frontend starting at a login landing page. The cache temporatily holds onto sign up information, and then the user can login with credentials and their emplayment role, latter of which routes to alternate pages. This can also use ouside JSON to suppliment.'
    },
    {
      project:'Chatter',
      languages: ['ReactJS'],
      description:'Dynamic messaging software connected to an API'
    }
  ],

  hobbies: [
      'Cooperative table top games',
      'Playing Violin',
      'Creative Writing, Worldbuilding, and Ecological Design'
  ],
  

  
};
