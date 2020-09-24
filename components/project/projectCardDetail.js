import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ProjectCardDetail extends Component{

    formatDate = (time) => {
        if(time === undefined) {
            return "Currently work";
        }
        
        const date = new Date(time);
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }

    render(){
        const { isOpen, toggle, project } = this.props;
        console.log(project);
        return(
            <div>
                <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{project.title}</ModalHeader>
                <ModalBody>
                <img className="modal-body-image" src={project.img}></img>
                <p><b>Description: </b>{project.description}</p>
                <p><b>Stack: </b>{project.stack}</p>
                <p><b>Start Date: </b>{this.formatDate(project.startDate)}</p>
                <p><b>End Date: </b>{this.formatDate(project.endDate)}</p>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ProjectCardDetail;