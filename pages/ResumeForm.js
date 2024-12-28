import { Button, Form, Input, Layout, Menu, message } from "antd";
import { useState } from "react";

const { Sider, Content } = Layout;

export default function VerticalBreadcrumbForm() {
  const [currentStep, setCurrentStep] = useState("1"); // Track current step
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    pinCode: "",
    dateOfBirth: "",
    occupation: "",
    // Professional Summary
    employer: "",
    description: "",
    // Employee
    jobTitle: "",
    employeeEmployer: "",
    begin: "",
    end: "",
    employeeDescription: "",
    // Education
    college: "",
    degree: "",
    educationBegin: "",
    educationEnd: "",
    educationDescription: "",
    // Languages
    language1: "",
    language2: "",
    language3: "",
    // Skills
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    message.success("Form submitted successfully!");
  };

  return (
    <Layout className="h-screen">
      {/* Sidebar with Vertical Breadcrumb */}
      <Sider width={200} className="bg-white">
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          selectedKeys={[currentStep]}
          onClick={(e) => setCurrentStep(e.key)}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1"> Personal Details</Menu.Item>
          <Menu.Item key="2">Professional Summary</Menu.Item>
          <Menu.Item key="3">Employee</Menu.Item>
          <Menu.Item key="4">Education</Menu.Item>
          <Menu.Item key="5">Language</Menu.Item>
          <Menu.Item key="6">Skills</Menu.Item>
        </Menu>
      </Sider>

      {/* Form and Preview Section */}
      <Layout>
        <Content className="p-6 bg-gray-100 flex">
          {/* Form Section */}
          <div className="w-2/3 p-4 bg-white shadow rounded-md">
            {currentStep === "1" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
                <Form layout="vertical">
                  <Form.Item label="First Name">
                    <Input
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Last Name">
                    <Input
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="City">
                    <Input
                      placeholder="Enter your city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Country">
                    <Input
                      placeholder="Enter your country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Pincode">
                    <Input
                      placeholder="Enter your pincode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Date of Birth">
                    <Input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Occupation">
                    <Input
                      placeholder="Enter your occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "2" && (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Professional Summary
                </h2>
                <Form layout="vertical">
                  <Form.Item label="Employer">
                    <Input
                      placeholder="Enter your employer's name"
                      name="employer"
                      value={formData.employer}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a brief description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "3" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Employee</h2>
                <Form layout="vertical">
                  <Form.Item label="Job Title">
                    <Input
                      placeholder="Enter your job title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Employer">
                    <Input
                      placeholder="Enter your employer"
                      name="employeeEmployer"
                      value={formData.employeeEmployer}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Begin">
                    <Input
                      type="date"
                      name="begin"
                      value={formData.begin}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="End">
                    <Input
                      type="date"
                      name="end"
                      value={formData.end}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a description"
                      name="employeeDescription"
                      value={formData.employeeDescription}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "4" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <Form layout="vertical">
                  <Form.Item label="College">
                    <Input
                      placeholder="Enter your college name"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Degree">
                    <Input
                      placeholder="Enter your degree"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Begin">
                    <Input
                      type="date"
                      name="educationBegin"
                      value={formData.educationBegin}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="End">
                    <Input
                      type="date"
                      name="educationEnd"
                      value={formData.educationEnd}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a description"
                      name="educationDescription"
                      value={formData.educationDescription}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "5" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Languages</h2>
                <Form layout="vertical">
                  <Form.Item label="Language 1">
                    <Input
                      placeholder="Enter first language"
                      name="language1"
                      value={formData.language1}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Language 2">
                    <Input
                      placeholder="Enter second language"
                      name="language2"
                      value={formData.language2}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Language 3">
                    <Input
                      placeholder="Enter third language"
                      name="language3"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "6" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <Form layout="vertical">
                  <Form.Item label="Skill 1">
                    <Input
                      placeholder="Enter first skill"
                      name="skill1"
                      value={formData.skill1}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Skill 2">
                    <Input
                      placeholder="Enter second skill"
                      name="skill2"
                      value={formData.skill2}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Skill 3">
                    <Input
                      placeholder="Enter third skill"
                      name="skill3"
                      value={formData.skill3}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  {/* Submit Button */}
                </Form>
              </>
            )}

            <div className="flex justify-end mt-4">
              <Button
                type="primary"
                className="mr-2"
                onClick={() =>
                  setCurrentStep((prev) =>
                    parseInt(prev) > 1 ? `${parseInt(prev) - 1}` : prev
                  )
                }
              >
                Previous
              </Button>

              {currentStep === "6" ? (
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() =>
                    setCurrentStep((prev) =>
                      parseInt(prev) < 6 ? `${parseInt(prev) + 1}` : prev
                    )
                  }
                >
                  Next
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-1/3 p-4 ml-4 bg-gray-50 shadow rounded-md">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="space-y-4">
              <p>
                <strong>First Name:</strong> {formData.firstName || "N/A"}
              </p>
              {/* Display all formData in Preview */}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
