import elsevier from '../assets/images/elsevier_logo.png'
import conf_3dv from '../assets/images/3dv_logo.png'
import corl from '../assets/images/corl_logo.png'
import materialfusion from '../assets/videos/materialfusion_video.mp4'
import korol from '../assets/videos/korol_video.mp4'
import lts from '../assets/images/lts_img.png'
import clearsplatting from '../assets/images/clearsplatting_img.png'
import cirp from '../assets/images/cirp_img.png'

export default [
    
    {
        id: 1,
        name: "MaterialFusion: Enhancing Inverse Rendering with Material Diffusion Priors",
        logo: conf_3dv,
        video: materialfusion,
        dated: "International Conference on 3D Vision (3DV) 2025",
        arxivlink: "https://arxiv.org/pdf/2409.15273",
        websitelink: "https://yehonathanlitman.github.io/material_fusion/",
        description: "<p> <ul><li>In this paper we tackle the intrinsic challenge of \
        disentangling albedo and material properties from input images by incorporating \
        a 2D prior on texture and material properties of 3D objects using a StableMaterial, \
        a diffusion model which is trained on albedo, material, and relit image data \
        derived from BlenderVault, a dataset of approximately ~12K artist-designed synthetic \
        Blender objects containing high quality material assets.</li></p>"
    },

    {
        id: 2,
        name: "KOROL: Learning Visualizable Object Feature with Koopman Operator Rollout for Manipulation",
        logo: corl,
        video: korol,
        dated: "Conference on Robot Learning (CoRL) 2024",
        arxivlink: "https://arxiv.org/pdf/2407.00548",
        websitelink: "https://github.com/hychen-naza/KOROL",
        description: "<p> <ul><li>The paper proposes a learning based dexterous \
        manipulation framework using Koopman operator that utilizes object features \
        predicted by a spatial and frequency domain CNN-based feature extractor to \
        auto-regressively advance system states. We evaluate our approach on \
        simulated and real-world robot tasks, with results showing that it \
        outperformed the model-based imitation learning NDP by 8% and the \
        image-to-action Diffusion Policy by 16%.</li></p>"
    },


    {
        id: 3,
        name: "Listen Then See: Video Alignment with Speaker Attention",
        logo: lts,
        dated: "Conference on Computer Vision and Pattern Recognition (CVPR) 2024",
        arxivlink: "https://openaccess.thecvf.com/content/CVPR2024W/MULA/papers/Agrawal_Listen_Then_See_Video_Alignment_with_Speaker_Attention_CVPRW_2024_paper.pdf",
        websitelink: "https://prabhdeep1999cmu.github.io/listen-then-see.github.io/",
        description: "<p> <ul><li>The paper proposes a cross-modal alignment \
        and subsequent representation fusion approach to help the Visual Question \
        Answering task’s secondary modalities to work in tandem with the primary \
        modality. We achieve state-of-the-art results (82.06% accuracy) on the \
        Social IQ2.0 dataset for the task of Socially Intelligent Question Answering.</li></p>"
    },


    {
        id: 4,
        name: "Clear-Splatting: Learning Residual Gaussian Splats for Transparent Object Manipulation",
        logo: clearsplatting,
        dated: "ICRA-2024 RoboNeRF workshop (Spotlight Presentation)",
        arxivlink: "https://openreview.net/pdf?id=HcUC6hGcwu",
        websitelink: "https://openreview.net/pdf?id=HcUC6hGcwu",
        description: "<p> <ul><li>The paper proposes a method to leverage the \
        scene-prior to first learn a Background Splat and subsequently learns \
        a Residual Splat with the transparent object and the background combined. \
        We also introduce Depth Pruning to address floaters. We achieve upto 67.09% \
        lower RMSE and upto 87.80% lower MAE for depth estimation with transparent \
        object compared to NeRF baselines.</li></p>"
    },
    
    
    {
        id: 5,
        name: "Development of a ML model for \
        Damage Detection, Localization & Quant. to \
        extend Structure Life [Link]",
        logo: cirp,
        dated: "Mar 10, 2021 Elsevier B.V.",
        companyLink: "https://www.sciencedirect.com/science/article/pii/S2212827121000536",
        description: "<p> <ul><li>This paper proposes the use of a physical structure’s \
        Transmissibility functions as input to a novel composite \
        architecture consisting of Deep CNN followed by multivariate linear \
        regressors to detect, localize, and quantify the damage extent in a system.</li></p>"
    },

];
