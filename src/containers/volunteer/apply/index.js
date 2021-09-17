import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VolunteerForm from "@components/volunteer-form";
import {
    SectionArea,
    VolunteerFormArea,
    SectionTitle,
    Title,
    SubTitle,
    Text,
} from "./style";

const JoinApplyArea = () => {
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <VolunteerFormArea>
                            <SectionTitle>
                                <SubTitle>Join With Us</SubTitle>
                                <Title>
                                    If You Interest! You Can Join With Us{" "}
                                    <span>As A Volunteer.</span>
                                </Title>
                                <Text>
                                    לורם איפסום דולור סיט אמט, קונסקטורר
                                    אדיפיסינג אלית לורם איפסום דולור סיט אמט,
                                    נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
                                    קוואזי במר מודוף. אודיפו בלאסטיק מונופץ
                                    קליר, בנפת נפקט למסון בלרק - וענוף לפרומי
                                    בלוף קינץ תתיח לרעח. לת צשחמי נולום ארווס
                                    סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר
                                    מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
                                    למסון בלרק.
                                </Text>
                            </SectionTitle>

                            <VolunteerForm />
                        </VolunteerFormArea>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default JoinApplyArea;
