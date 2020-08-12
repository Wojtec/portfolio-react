const Projects = require('../models/projects');

module.exports = {

    getProject: (req, res) => {

        Projects.find({}, (err, allProjects) => {
            if(err) {
                return res.status(422).send(err);
            }
            return res.json(allProjects);
        })
    },
    
    saveProject: (req, res) => {
        const projectsData = req.body;
        const userAuthId = req.user && req.user.sub;
        const project = new Projects(projectsData);
    
        project.userId = userAuthId;
        project.save((err, createdProject) => {
            if(err) {
                return res.status(422).send(err);
            }
            return res.json(createdProject);
        })
    },
    
    updateProjtect: (req, res) => {
        const projectId = req.params.id;
        const projectData = req.body;
    
        Projects.findById(projectId, (err, projectForUpdate ) => {
            if(err) {
                return res.status(422).send(err);
            }
    
            projectForUpdate.set(projectData);
    
            projtectForUpdate.save((err, savedProject) => {
                if(err) {
                    return res.status(422).send(err);
                }
                return res.json(savedProject);
            })
        })
    },
    
    deleteProject: (req, res) => {
        const projectId = req.params.id;
    
        Projects.deleteOne({_id: projectId}, (err) => {
            if(err) {
                return res.status(422).send(err);
            }
    
            return res.json({status: `Portfolio with ID: ${projtectId} deleted.`})
        })
    }

}
