import { Card, CardContent, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../Layout';

const Project = () => {
    const activeRouter = useRouter();
    const { projects, setProjects } = useContext(UserContext);

    return (
        <div>
            <Row className="justify-content-center">
                {activeRouter.pathname == '/'
                    ? projects.slice(0, 3).map((data, index) => (
                          <Col
                              key={index}
                              md={6}
                              sm={12}
                              lg={3}
                              data-aos={data.aos ? data.aos : ''}
                          >
                              <Card className="mb-3">
                                  {/* <Image
                                      src={data.img}
                                      alt={data.title}
                                      className="img-fluid"
                                      width={451}
                                      height={240}
                                      loading="eager"
                                      priority
                                  /> */}
                                  <CardContent className="pb-2">
                                      <h5>{data.title}</h5>
                                      <Typography
                                          variant="body2"
                                          color="textSecondary"
                                          component="p"
                                      >
                                          This impressive paella is a perfect party dish and a fun
                                          meal to cook together with your guests. Add 1 cup of
                                          frozen peas along with the mussels, if you like.
                                      </Typography>
                                      <Link href={data.link ? `${data.link}` : '/'}>
                                          <a
                                              target="_blank"
                                              rel="noopener"
                                              style={{ textDecoration: 'none' }}
                                          >
                                              <h6 className="project-visit">Visit site &#x2192;</h6>
                                          </a>
                                      </Link>
                                  </CardContent>
                              </Card>
                          </Col>
                      ))
                    : projects.map((data, index) => (
                          <Col
                              key={index}
                              md={6}
                              sm={12}
                              lg={3}
                              data-aos={data.aos ? data.aos : ''}
                          >
                              <Card className="mb-3">
                                  <Image
                                      src={data.img}
                                      alt={data.title}
                                      className="img-fluid"
                                      width={451}
                                      height={240}
                                      loading="eager"
                                      priority
                                  />
                                  <CardContent className="pb-2">
                                      <h5>{data.title}</h5>
                                      <Typography
                                          variant="body2"
                                          color="textSecondary"
                                          component="p"
                                      >
                                          This impressive paella is a perfect party dish and a fun
                                          meal to cook together with your guests. Add 1 cup of
                                          frozen peas along with the mussels, if you like.
                                      </Typography>
                                      <Link href={data.link ? `${data.link}` : '/'}>
                                          <a
                                              target="_blank"
                                              rel="noopener"
                                              style={{ textDecoration: 'none' }}
                                          >
                                              <h6 className="project-visit">Visit site &#x2192;</h6>
                                          </a>
                                      </Link>
                                  </CardContent>
                              </Card>
                          </Col>
                      ))}
            </Row>

            {activeRouter.pathname == '/' ? (
                <Link href="/projects">
                    <h5 className="serviceSeeMore text-center">&#8592; see More &#8594;</h5>
                </Link>
            ) : (
                ''
            )}
        </div>
    );
};

export default Project;
