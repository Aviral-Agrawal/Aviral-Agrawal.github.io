import amazon from '../assets/images/amazon-logo.png'
import samsung from '../assets/images/samsung_logo_w_background.jpeg'
import oracle from '../assets/images/oracle-logo.png'
import mmi from '../assets/images/mmi-logo.png'

export default [
    {
        id: 1,
        name: "Samsung Research Institute Bangalore",
        designation: "Computer Vision Engineer",
        dated: "Jan 2021 - Jun 2023",
        logo: samsung,
        companyLink: "https://research.samsung.com/sri-b",
        description: "<p> <ul><li>Ownership of AI-based replacement of Video compression \
        In-Loop filter achieving 10% bd-rate gain\
        </li>\
        <li>Curated data using quantization range resultant artifacts based binning for model generalization\
        </li>\
        <li>Researched and developed a novel training strategy to train a smaller network better \
        than a more complex network trained without our unique training strategy\
        </li>\
        <li>To further reduce the model multiply-and-accumulation operations for feasibility of \
        deployment in devices, we innovated on selection from amongst a plurality of models when deployed \
        in video codec along with bitstream signaling optimization\
        </li>\
        <li>Filed five patents based on the aforementioned approach\
        </li></p>"
    },
    {
        id: 2,
        name: "Oracle",
        designation: "DevOps Engineer",
        dated: "Nov 2020 - Jan 2021",
        logo: oracle,
        companyLink: "https://www.oracle.com/in/index.html",
        description: "<p> <ul><li>Part of the OCI Exascale team and was responsible \
        for enhancing cloud-based Exascale services\
        </li>\
        <li>Created and completely owned a FLASK-based web-service and deployment on cloud server\
        </li>\
        <li> The Flask application is used for synchronous resource management on a server which \
        enabled more efficient usage of the resource being managed by our service \
        </li>\
        </p>"
    },
    {
        id: 3,
        name: "Amazon - India Machine Learning",
        designation: "Research Engineer Intern",
        dated: "Jan 2020 - July 2020",
        logo: amazon,
        companyLink: "https://www.amazon.jobs/en/teams/machine-learning",
        description: "<p> <ul><li>Worked on Reverse Geocoding which upon receiving a set \
        of coordinates predicts an address using Named Entity Recognition to create a \
        custom clustering tree to generate a set of candidate addresses\
        </li>\
        <li>Used beam search and reference data-based filtering we output a final predicted \
        address. The project is currently in production in Amazon India marketplace\
        </li>\
        <li>As the next project, created an Address Classifier involving responsible extraction \
        of customer data by protecting privacy and ensuring to remove bias, towards more rich \
        and developed areas, from the embeddings\
        </li>\
        <li>Developed a multi-branch CNN architecture with the input branches mimicking n-grams. \
        This model resulted in 6% better prediction AU-ROC than the previously used LSTM model\
        </li>\
        <li>The Model is currently in production in Amazon middle- east marketplace\
        </li></p>"
    },
    {
        id: 4,
        name: "Samsung Research Institute Bangalore",
        designation: "Research Student Trainee",
        dated: "May 2019 - July 2019",
        logo: samsung,
        companyLink: "https://research.samsung.com/sri-b",
        description: "<p> <ul><li>Researched deep learning methods to produce images with \
        enhanced legibility upon zoom leveraging a multi-focal lens array system to \
        generate images of different zoom levels\
        </li>\
        <li>Created a custom-Unet model to fuse such images and produce a single image \
        with better zoom legibility\
        </li>\
        <li>Curated the entire dataset required and performed adequate data-preprocessing \
        as the first leg of the pipeline\
        </li>\
        <li>The solution achieved 1.5 dB Peak-Signal-to-Noise-Ratio (PSNR) improvements over the baseline method\
        </li></ul></p>"
    },
    {
        id: 5,
        name: "MapmyIndia",
        designation: "Student Trainee",
        dated: "May 2018 - July 2018",
        logo: mmi,
        companyLink: "https://www.mapmyindia.com",
        description: "<p><ul><li>Developed a supervised ensemble model for missing point imputation \
        in traffic sensor data. This data is then subsequently used for traffic prediction\
        </li>\
        <li>Due to better input data to the traffic prediction model, the new solution resulted in \
        5% improvement in traffic prediction accuracy\
        </li></ul></p>"
    },

];
