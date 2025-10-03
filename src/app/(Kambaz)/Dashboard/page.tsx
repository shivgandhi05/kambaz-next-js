import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { Card, CardBody, CardImg, CardTitle, CardText } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Dashboard () {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>Full Stack software developer</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                    </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/1500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1500 Discrete Math</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>Discrete Mathematics</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody> 
                        </Link>
                    </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/3033/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3033 OOD</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>Designing Programs</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody> 
                        </Link>
                    </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/2045/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2045 DSA</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>Algorithms & Data Structures</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                    </Card>
                    </Col>
                </Row>
                <br/>
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/4767/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">MUSC4767 Music Programming</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>Designing Music</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                    </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/1101/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ENG1101 First Year Writing</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>First Year English</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                    </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                    <Card>
                        <Link href="/Courses/2567/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS cover" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">POP2567 Memeology</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>Studying the newest memes</CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}