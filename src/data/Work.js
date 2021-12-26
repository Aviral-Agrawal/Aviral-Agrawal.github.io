import amazon from '../assets/images/amazon-logo.png'
import samsung from '../assets/images/samsung-logo.png'
import oracle from '../assets/images/oracle-logo.png'
import mmi from '../assets/images/mmi-logo.png'
import cat from '../assets/images/cat-logo.svg'

export default [
    {
        id: 1,
        name: "Samsung Research Institute Bangalore",
        designation: "Computer Vision Engineer",
        dated: "Jan 2021 - Present",
        logo: samsung,
        companyLink: "https://research.samsung.com/sri-b",
        description: "<p> <ul><li>Worked on AI-based Video compression tools with \
        the goal of achieving BD-rate gain while maintain ing/reducing complexity \
        with complete ownership on the coding tool design and development.</li></p>"
    },
    {
        id: 2,
        name: "Oracle",
        designation: "DevOps Engineer",
        dated: "Nov 2020 - Jan 2021",
        logo: oracle,
        companyLink: "https://www.oracle.com/in/index.html",
        description: "<p> <ul><li>Part of the OCI Exascale team. Responsible for enhancing \
        the services available to customers in the form of cloud-based exascale services. </li> \
        <li> Creation and complete ownership of a FLASK based service and deployment on server.\ </li> \
        </p>"
    },
    {
        id: 3,
        name: "Amazon - India Machine Learning",
        designation: "Research Engineer Intern",
        dated: "Jan 2020 - July 2020",
        logo: amazon,
        companyLink: "https://www.amazon.jobs/en/teams/machine-learning",
        description: "<p> <ul><li>Designed a Language generation model for on-the-fly Text generation.\
        The flow consists of Named Entity Recognition tasks, Building Nearest Neighbour\
        constructs, followed by a custom-made language model which is used to\
        generate text using Beam Search on a greedy selection tree.\
        </li><li>Designed a Text Classification pipeline consisting of appropriate\
        data-preprocessing followed by the application of Deep Learning (LSTM and\
        CNN) to solve the NLP problem.\
        </li><li>Deliverable had huge impact on the company’s customers in Asia region.</li></p>"
    },
    {
        id: 4,
        name: "Samsung Research Institute Bangalore",
        designation: "Research Student Trainee",
        dated: "May 2019 - July 2019",
        logo: samsung,
        companyLink: "https://research.samsung.com/sri-b",
        description: "<p> <ul><li>Employed Deep Learning to solve a novel Computer Vision problem.\
        </li><li>Devised a hybrid pipeline for providing an end to end solution to AI Based Multi \
        Camera Problem which seeks to generate an enhanced resolution image as output using \
        images, captured from multiple lenses of varied focal lengths and other parameters, as input.\
        </li><li>Collected the entire dataset required and performed adequate data-preprocessing \
        as the first leg of the piepline.\
        </li><li>Researched and created the entire network for building the solution using TensorFlow.</li></p>"
    },
    {
        id: 5,
        name: "MapmyIndia",
        designation: "Student Trainee",
        dated: "May 2018 - July 2018",
        logo: mmi,
        companyLink: "https://www.mapmyindia.com",
        description: "<p><li>Devised a new Database schema for the company’s Navigation and tracking \
        data dump to significantly reduce the computation time taken in user commute time \
        prediction purposes.</li>\
        <li>Researched on new methodologies for approaching the missing \
        value problem in the above data. Devised a predictive algorithm for intelligent \
        imputation of the above mentioned missing values using a Machine Learning based approach.</li></ul></p>"
    },

];
