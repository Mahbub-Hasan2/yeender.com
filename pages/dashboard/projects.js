import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import dynamic from "next/dynamic";
import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../components/Layout';
import Loading from '../../components/ShareComponents/Loading';
import yeenderServer from '../../serverConfig';
import style from './styles/projects.module.scss';

const ProjectDelate = dynamic(import("../../components/dashboard/Modals/ProjectDelate"),{ loading: () => <Loading /> });
const ProjectSwitch = dynamic(import("../../components/dashboard/Modals/ProjectSwitch"),{ loading: () => <Loading /> });
const ProjectUpdate = dynamic(import("../../components/dashboard/Modals/ProjectUpdate"),{ loading: () => <Loading /> });
const ProjectView = dynamic(import("../../components/dashboard/Modals/ProjectView"),{ loading: () => <Loading /> });
const Sidebar = dynamic(import("../../components/dashboard/Sidebar"),{ loading: () => <Loading /> });
const Login = dynamic(import("../login"),{ loading: () => <Loading /> });


const projects = ({ data }) => {
    // console.log(data);
    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    // NEW PROJECT POST TO DATABASE 
    const [upNewProject, setUpNewProject] = useState({});
    const upNewProjectData = (e) => {
        const newProjectInfo = { ...upNewProject };
        newProjectInfo[e.target.name] = e.target.value;
        setUpNewProject(newProjectInfo);
    };

    const submitNewProject = () => {
        fetch(`${yeenderServer}/project`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upNewProject),
        })
            .then((res) => {
                if (res) {
                    console.log(res);
                    alert('new project up successfully');
                }
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    alert('There was a server side error!');
                }
            });
    };

    return (
         <>
         {loggedInUser.email && admin && loggedInUser.email == admin.email ?
        
            <section className={style.projectsArea}>
                <Sidebar />
                <Container xl="true">
                    <h1 className={style.headLine}>All Projects</h1>

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">

                            {/* TABLE HEAD LINES */}
                            <TableHead>
                                <TableRow>
                                    <TableCell><h5 className={`${style.tableHead} text-truncate`}>Project Name:</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>View Project</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Update Project</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Delate Project</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Active Project</h5></TableCell>
                                </TableRow>
                            </TableHead>

                            {/* PROJECT DATA LIST  */}
                            <TableBody>
                                {data.result.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {data.title}
                                        </TableCell>
                                        <TableCell className={style.tableCell} align="center"><ProjectView data={data} /></TableCell>
                                        <TableCell className={style.tableCell} align="center"><ProjectUpdate data={data} /></TableCell>
                                        <TableCell className={style.tableCell} align="center"><ProjectDelate data={data} /></TableCell>
                                        <TableCell className={style.tableCell} align="center"><ProjectSwitch data={data} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* NEW PROJECT UP TO DATABASE */}
                    <div>
                        <h1 className={style.upProjectHeadLink}>hello uplode project section</h1>
                        <Row>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewProjectData} className={style.upInputs} name="title" placeholder="title" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewProjectData} className={style.upInputs} name="img" placeholder="img" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewProjectData} className={style.upInputs} name="link" placeholder="link" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewProjectData} className={style.upInputs} name="status" placeholder="active or inactive" /></Col>
                            <Col sm={12} md={6} lg={4}><textarea type="text" onBlur={upNewProjectData} className={style.upInputs} name="description" placeholder="description" /></Col>

                            <Col sm={12} md={6} lg={4}>
                                <Button onClick={submitNewProject} className={style.submitUpProjectBtn}>
                                    submit new project
                                </Button>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>

             : <Login />}
        </>
    );
};

export default projects;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/project`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}