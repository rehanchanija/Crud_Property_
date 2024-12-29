import { Button, Col, DatePicker, Form, Input, Row, Steps } from "antd";
import { useState } from "react";

const { Step } = Steps;
const { TextArea } = Input;

const Resume = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    pinCode: "",
    dateOfBirth: "",
    occupation: "",
    employer: "",
    description: "",
    jobTitle: "",
    employeeEmployer: "",
    begin: "",
    end: "",
    employeeDescription: "",
    college: "",
    degree: "",
    educationBegin: "",
    educationEnd: "",
    educationDescription: "",
    language1: "",
    language2: "",
    language3: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Steps current={step}>
            <Step title="Personal Details" />
            <Step title="Occupation Details" />
            <Step title="Education Details" />
            <Step title="Skills and Languages" />
          </Steps>
          <Form layout="vertical" style={{ marginTop: "20px" }}>
            {step === 0 && (
              <div>
                <Form.Item label="First Name">
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Phone">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="City">
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Country">
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Pin Code">
                  <Input
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Date of Birth">
                  <DatePicker
                    name="dateOfBirth"
                    onChange={(date, dateString) =>
                      setFormData({ ...formData, dateOfBirth: dateString })
                    }
                  />
                </Form.Item>
                <Button type="primary" onClick={nextStep}>
                  Next
                </Button>
              </div>
            )}
            {step === 1 && (
              <div>
                <Form.Item label="Occupation">
                  <Input
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Employer">
                  <Input
                    name="employer"
                    value={formData.employer}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Description">
                  <TextArea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Job Title">
                  <Input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Employee Employer">
                  <Input
                    name="employeeEmployer"
                    value={formData.employeeEmployer}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Begin">
                  <DatePicker
                    name="begin"
                    onChange={(date, dateString) =>
                      setFormData({ ...formData, begin: dateString })
                    }
                  />
                </Form.Item>
                <Form.Item label="End">
                  <DatePicker
                    name="end"
                    onChange={(date, dateString) =>
                      setFormData({ ...formData, end: dateString })
                    }
                  />
                </Form.Item>
                <Form.Item label="Employee Description">
                  <TextArea
                    name="employeeDescription"
                    value={formData.employeeDescription}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button onClick={prevStep}>Back</Button>
                <Button type="primary" onClick={nextStep}>
                  Next
                </Button>
              </div>
            )}
            {step === 2 && (
              <div>
                <Form.Item label="College">
                  <Input
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Degree">
                  <Input
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Education Begin">
                  <DatePicker
                    name="educationBegin"
                    onChange={(date, dateString) =>
                      setFormData({ ...formData, educationBegin: dateString })
                    }
                  />
                </Form.Item>
                <Form.Item label="Education End">
                  <DatePicker
                    name="educationEnd"
                    onChange={(date, dateString) =>
                      setFormData({ ...formData, educationEnd: dateString })
                    }
                  />
                </Form.Item>
                <Form.Item label="Education Description">
                  <TextArea
                    name="educationDescription"
                    value={formData.educationDescription}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button onClick={prevStep}>Back</Button>
                <Button type="primary" onClick={nextStep}>
                  Next
                </Button>
              </div>
            )}
            {step === 3 && (
              <div>
                <Form.Item label="Language 1">
                  <Input
                    name="language1"
                    value={formData.language1}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Language 2">
                  <Input
                    name="language2"
                    value={formData.language2}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Language 3">
                  <Input
                    name="language3"
                    value={formData.language3}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Skill 1">
                  <Input
                    name="skill1"
                    value={formData.skill1}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Skill 2">
                  <Input
                    name="skill2"
                    value={formData.skill2}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Skill 3">
                  <Input
                    name="skill3"
                    value={formData.skill3}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Button onClick={prevStep}>Back</Button>
                <Button type="primary" onClick={() => alert("Form Submitted")}>
                  Submit
                </Button>
              </div>
            )}
          </Form>
        </Col>
        <Col span={12}>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#1890ff", fontWeight: "bold" }}>
              {formData.firstName} {formData.lastName}
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "50%",
                }}
              >
                <p>
                  <strong style={{ color: "#1890ff" }}>Email:</strong>{" "}
                  {formData.email}
                </p>
                <p>
                  <strong style={{ color: "#1890ff" }}>Phone:</strong>{" "}
                  {formData.phone}
                </p>
                <p>
                  <strong style={{ color: "#1890ff" }}>City:</strong>{" "}
                  {formData.city}
                </p>
                <p>
                  <strong style={{ color: "#1890ff" }}>Country:</strong>{" "}
                  {formData.country}
                </p>
                <p>
                  <strong style={{ color: "#1890ff" }}>Pin Code:</strong>{" "}
                  {formData.pinCode}
                </p>
                <p>
                  <strong style={{ color: "#1890ff" }}>Date of Birth:</strong>{" "}
                  {formData.dateOfBirth}
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ color: "#52c41a", fontWeight: "bold" }}>
                  Occupation
                </h3>
                <p>
                  <strong style={{ color: "#52c41a" }}>Occupation:</strong>{" "}
                  {formData.occupation}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>Employer:</strong>{" "}
                  {formData.employer}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>Description:</strong>{" "}
                  {formData.description}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>Job Title:</strong>{" "}
                  {formData.jobTitle}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>
                    Employee Employer:
                  </strong>{" "}
                  {formData.employeeEmployer}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>Begin:</strong>{" "}
                  {formData.begin}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>End:</strong>{" "}
                  {formData.end}
                </p>
                <p>
                  <strong style={{ color: "#52c41a" }}>
                    Employee Description:
                  </strong>{" "}
                  {formData.employeeDescription}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ color: "#faad14", fontWeight: "bold" }}>
                  Education
                </h3>
                <p>
                  <strong style={{ color: "#faad14" }}>College:</strong>{" "}
                  {formData.college}
                </p>
                <p>
                  <strong style={{ color: "#faad14" }}>Degree:</strong>{" "}
                  {formData.degree}
                </p>
                <p>
                  <strong style={{ color: "#faad14" }}>Education Begin:</strong>{" "}
                  {formData.educationBegin}
                </p>
                <p>
                  <strong style={{ color: "#faad14" }}>Education End:</strong>{" "}
                  {formData.educationEnd}
                </p>
                <p>
                  <strong style={{ color: "#faad14" }}>
                    Education Description:
                  </strong>{" "}
                  {formData.educationDescription}
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ color: "#eb2f96", fontWeight: "bold" }}>
                  Skills and Languages
                </h3>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Language 1:</strong>{" "}
                  {formData.language1}
                </p>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Language 2:</strong>{" "}
                  {formData.language2}
                </p>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Language 3:</strong>{" "}
                  {formData.language3}
                </p>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Skill 1:</strong>{" "}
                  {formData.skill1}
                </p>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Skill 2:</strong>{" "}
                  {formData.skill2}
                </p>
                <p>
                  <strong style={{ color: "#eb2f96" }}>Skill 3:</strong>{" "}
                  {formData.skill3}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
