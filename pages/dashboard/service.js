import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import dynamic from "next/dynamic";
import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../components/Layout';
import yeenderServer from '../../serverConfig';
import style from './styles/service.module.scss';

const ServiceSwitch = dynamic(import("../../components/dashboard/Modals/ServiceSwitch"));
const ServiceUpdate = dynamic(import("../../components/dashboard/Modals/ServiceUpdate"));
const ServiceView = dynamic(import("../../components/dashboard/Modals/ServiceView"));
const Sidebar = dynamic(import("../../components/dashboard/Sidebar"));
const Login = dynamic(import("../login"));

const service = ({ data }) => {

    const info = [...data.result];
    const { loggedInUser, setLoggedInUser, admin} = useContext(UserContext);

    // DELETE SERVICE DATA 
    const delateService = (id) => {
        fetch(`${yeenderServer}/service/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.text()
            .then(data => {
                if (data) {
                    // console.log(data)
                    alert('Service was deleted successfully!')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error')
                }
            })
    }

    // NEW PROJECT POST TO DATABASE 
    const [upNewService, setUpNewService] = useState({});
    const upNewServiceData = (e) => {
        const newServiceInfo = { ...upNewService };
        newServiceInfo[e.target.name] = e.target.value;
        setUpNewService(newServiceInfo);
    }

    // fetching up new data to database
    const submitNewService = () => {
        fetch(`${yeenderServer}/service`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upNewService)
        })
            .then(res => {
                if (res) {
                    console.log(res)
                    alert('new service up successfully')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error!')
                }
            })
    }


    return (
        <>
        {loggedInUser.email && admin && admin && loggedInUser.email == admin.email ?

            <section className={style.projectsArea}>
                <Sidebar />
                <Container xl="true">

                    <h1 className={style.headLine}>All Service</h1>

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell><h5 className={`${style.tableHead} text-truncate`}>Project Name:</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>View Service</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Update Service</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Delate Service</h5></TableCell>
                                    <TableCell align="center"><h5 className={`${style.tableHead} text-truncate`}>Active Service</h5></TableCell>
                                </TableRow>
                            </TableHead>

                            {/* SERVICE DATA LIST  */}
                            <TableBody>
                                {info.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {data.title}
                                        </TableCell>
                                        <TableCell className={style.tableCell} align="center"><ServiceView data={data} /></TableCell>
                                        <TableCell className={style.tableCell} align="center"><ServiceUpdate data={data} /></TableCell>
                                        <TableCell className={style.tableCell} align="center" onClick={() => delateService(data._id)}><DeleteSweepIcon className="mr-4" />  delate</TableCell>
                                        <TableCell className={style.tableCell} align="center"><ServiceSwitch data={data} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>

                    {/* NEW SERVICE UP TO DATABASE  */}
                    <div>
                        <h1 className={style.upServiceHeadLink}>hello uplode project section</h1>
                        <Row>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewServiceData} className={style.upInputs} name="title" placeholder="title" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewServiceData} className={style.upInputs} name="img" placeholder="img" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewServiceData} className={style.upInputs} name="link" placeholder="link" /></Col>
                            <Col sm={12} md={6} lg={4}><input type="text" onBlur={upNewServiceData} className={style.upInputs} name="status" placeholder="active or inactive" /></Col>
                            <Col sm={12} md={6} lg={4}><textarea type="text" onBlur={upNewServiceData} className={style.upInputs} name="description" placeholder="description" /></Col>

                            <Col sm={12} md={6} lg={4}>
                                <Button onClick={submitNewService} className={style.submitUpServiceBtn}>
                                    submit new Service
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

export default service;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/service`)
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