import { Row } from 'reactstrap';


const SocialMedia = () => {
    return(
        <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
            <li className="list-inline-item">
                <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                <a target="_blank" href="mailto:poninski.w@gmail.com">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-google fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                <a  target="_blank" href="https://github.com/Wojtec">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                <a target="_blank" href="https://web.whatsapp.com/send?phone=34602410491">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            </ul>
        </div>
        </Row>
    )
}


export default SocialMedia;