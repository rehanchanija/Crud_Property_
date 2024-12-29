import { Button, Col, DatePicker, Form, Input, Row, Steps } from "antd";
import { useState } from "react";

const { Step } = Steps;
const { TextArea } = Input;

const Resume = () => {
  const [zoomed, setZoomed] = useState(false);
  const [isAlternateTemplate, setIsAlternateTemplate] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  const [textColor, setTextColor] = useState("#000000");
  const [step, setStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(1); // Track which template is selected
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
  const handleChangeTemplate = () => {
    setIsAlternateTemplate(!isAlternateTemplate);
    // Add functionality for changing the template
  };

  const handlePreview = () => {
    setZoomed(!zoomed); // Toggle zoom state
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

                <Button type="primary" onClick={nextStep}>
                  Next
                </Button>
              </div>
            )}
            {step === 1 && (
              <div>
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
        <Col span={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0073e6",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={() =>
                handleChangeTemplate(selectedTemplate === 1 ? 2 : 1)
              }
            >
              Change Template
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#52c41a",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={handlePreview}
            >
              {zoomed ? "Exit Preview" : "Preview"}
            </button>
          </div>

          {/* Color Pickers (Visible when changing template) */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "10px", fontWeight: "bold" }}>
              Background Color:
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                marginRight: "20px",
              }}
            />
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: backgroundColor,
              color: textColor,
              borderRadius: "8px",
              transform: zoomed ? "scale(1.2)" : "scale(1)",
              transformOrigin: "top center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isAlternateTemplate ? (
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Arial, sans-serif",
                  color: textColor,
                }}
              >
                {/* Name and Contact Info */}
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {formData.firstName} {formData.lastName}
                </h1>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {formData.email} | {formData.phone} | {formData.city},{" "}
                  {formData.country} | {formData.pinCode}
                </p>

                {/* Summary Section */}
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                    marginTop: "20px",
                  }}
                >
                  Summary
                </h2>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {formData.description}
                </p>

                {/* Experience Section */}
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                    marginTop: "20px",
                  }}
                >
                  Experience
                </h2>
                <div style={{ marginBottom: "10px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {formData.jobTitle} - {formData.employer}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.begin} - {formData.end}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.employeeDescription}
                  </p>
                </div>

                {/* Education Section */}
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                    marginTop: "20px",
                  }}
                >
                  Education
                </h2>
                <div style={{ marginBottom: "10px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {formData.degree}, {formData.college}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.educationBegin} - {formData.educationEnd}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.educationDescription}
                  </p>
                </div>

                {/* Skills and Languages Section */}
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                    marginTop: "20px",
                  }}
                >
                  Skills & Languages
                </h2>
                <div>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    <strong>Languages:</strong> {formData.language1},{" "}
                    {formData.language2}, {formData.language3}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    <strong>Skills:</strong> {formData.skill1},{" "}
                    {formData.skill2}, {formData.skill3}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <h1
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {formData.firstName} {formData.lastName}
                </h1>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  {formData.email} | {formData.phone} | {formData.city},{" "}
                  {formData.country} | {formData.pinCode}
                </p>
                <hr style={{ margin: "10px 0", border: "1px solid #ccc" }} />
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                  }}
                >
                  Professional Summary
                </h2>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {formData.description}
                </p>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#faad14",
                  }}
                >
                  Skills
                </h2>
                <ul style={{ fontSize: "14px", color: "#555" }}>
                  <li>{formData.language1}</li>
                  <li>{formData.language2}</li>
                  <li>{formData.skill1}</li>
                  <li>{formData.skill2}</li>
                  <li>{formData.skill3}</li>
                </ul>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0073e6",
                    marginTop: "20px",
                  }}
                >
                  Education
                </h2>
                <div style={{ marginBottom: "10px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {formData.degree}, {formData.college}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.educationBegin} - {formData.educationEnd}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.educationDescription}
                  </p>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#0073e6",
                      marginTop: "20px",
                    }}
                  >
                    Experience
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {formData.jobTitle} - {formData.employer}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.begin} - {formData.end}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    {formData.employeeDescription}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
